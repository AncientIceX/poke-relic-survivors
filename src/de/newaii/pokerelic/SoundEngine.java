package de.newaii.pokerelic;

import android.media.AudioAttributes;
import android.media.AudioFormat;
import android.media.AudioTrack;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Pure offline procedural 8-bit / 16-bit Chiptune SFX & BGM synthesizer.
 * Zero external audio files needed — generates authentic GameBoy / NDS style square & triangle waves in real time.
 */
public class SoundEngine {
    private static final int SAMPLE_RATE = 22050;
    private static final ExecutorService sfxPool = Executors.newFixedThreadPool(4);
    private static volatile boolean bgmRunning = false;
    private static volatile boolean muted = false;
    private static Thread bgmThread;

    public static void setMuted(boolean m) {
        muted = m;
    }

    public static boolean isMuted() {
        return muted;
    }

    public static void playPickupGem() {
        if (muted) return;
        playToneSequence(new int[]{880, 1320}, new int[]{35, 55}, 0.16f);
    }

    public static void playHit() {
        if (muted) return;
        playToneSequence(new int[]{240, 150}, new int[]{28, 35}, 0.18f);
    }

    public static void playDash() {
        if (muted) return;
        playToneSequence(new int[]{520, 780, 1040}, new int[]{30, 30, 45}, 0.20f);
    }

    public static void playLevelUp() {
        if (muted) return;
        playToneSequence(new int[]{523, 659, 784, 1046}, new int[]{75, 75, 75, 180}, 0.25f);
    }

    public static void playEvolution() {
        if (muted) return;
        playToneSequence(new int[]{440, 554, 659, 880, 1108, 1318}, new int[]{90, 90, 90, 90, 110, 260}, 0.28f);
    }

    public static void playShinyAlert() {
        if (muted) return;
        playToneSequence(new int[]{1046, 1318, 1568, 2093}, new int[]{60, 60, 60, 220}, 0.26f);
    }

    private static void playToneSequence(final int[] freqs, final int[] durationsMs, final float volume) {
        sfxPool.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    int totalSamples = 0;
                    for (int d : durationsMs) {
                        totalSamples += (SAMPLE_RATE * d) / 1000;
                    }
                    short[] buffer = new short[totalSamples];
                    int offset = 0;
                    double phase = 0;
                    for (int i = 0; i < freqs.length; i++) {
                        int count = (SAMPLE_RATE * durationsMs[i]) / 1000;
                        double inc = 2.0 * Math.PI * freqs[i] / SAMPLE_RATE;
                        for (int s = 0; s < count && offset < totalSamples; s++) {
                            float env = 1.0f - (s / (float) count) * 0.45f;
                            // 50% duty square wave + soft fundamental
                            double val = (Math.sin(phase) >= 0 ? 0.7 : -0.7) + 0.3 * Math.sin(phase);
                            buffer[offset++] = (short) (val * 32767 * volume * env);
                            phase += inc;
                        }
                    }

                    AudioTrack track = new AudioTrack.Builder()
                            .setAudioAttributes(new AudioAttributes.Builder()
                                    .setUsage(AudioAttributes.USAGE_GAME)
                                    .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                                    .build())
                            .setAudioFormat(new AudioFormat.Builder()
                                    .setEncoding(AudioFormat.ENCODING_PCM_16BIT)
                                    .setSampleRate(SAMPLE_RATE)
                                    .setChannelMask(AudioFormat.CHANNEL_OUT_MONO)
                                    .build())
                            .setBufferSizeInBytes(buffer.length * 2)
                            .setTransferMode(AudioTrack.MODE_STATIC)
                            .build();
                    track.write(buffer, 0, buffer.length);
                    track.play();
                    Thread.sleep(totalSamples * 1000L / SAMPLE_RATE + 40);
                    track.release();
                } catch (Exception ignored) {
                }
            }
        });
    }

    public static synchronized void startBgm() {
        if (bgmRunning) return;
        bgmRunning = true;
        bgmThread = new Thread(new Runnable() {
            @Override
            public void run() {
                // Upbeat Pokemon battle-inspired chiptune arpeggio loop
                int[] melody = {
                        330, 392, 494, 659, 587, 494, 392, 440,
                        349, 440, 523, 698, 659, 523, 440, 494,
                        392, 494, 587, 784, 698, 587, 494, 523,
                        440, 523, 659, 880, 784, 659, 587, 494
                };
                int noteMs = 155;
                int samplesPerNote = (SAMPLE_RATE * noteMs) / 1000;
                int minBuf = AudioTrack.getMinBufferSize(
                        SAMPLE_RATE, AudioFormat.CHANNEL_OUT_MONO, AudioFormat.ENCODING_PCM_16BIT);
                AudioTrack track = null;
                try {
                    track = new AudioTrack.Builder()
                            .setAudioAttributes(new AudioAttributes.Builder()
                                    .setUsage(AudioAttributes.USAGE_GAME)
                                    .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                                    .build())
                            .setAudioFormat(new AudioFormat.Builder()
                                    .setEncoding(AudioFormat.ENCODING_PCM_16BIT)
                                    .setSampleRate(SAMPLE_RATE)
                                    .setChannelMask(AudioFormat.CHANNEL_OUT_MONO)
                                    .build())
                            .setBufferSizeInBytes(Math.max(minBuf, samplesPerNote * 4))
                            .setTransferMode(AudioTrack.MODE_STREAM)
                            .build();
                    track.play();
                    short[] buf = new short[samplesPerNote];
                    int idx = 0;
                    double phase = 0;
                    while (bgmRunning) {
                        int freq = melody[idx % melody.length];
                        idx++;
                        double inc = 2.0 * Math.PI * freq / SAMPLE_RATE;
                        for (int i = 0; i < samplesPerNote; i++) {
                            if (muted) {
                                buf[i] = 0;
                            } else {
                                float env = (i < samplesPerNote * 0.78f) ? (1.0f - i / (float) samplesPerNote * 0.5f) : 0f;
                                double tri = (2.0 / Math.PI) * Math.asin(Math.sin(phase));
                                buf[i] = (short) (tri * 32767 * 0.065f * env);
                            }
                            phase += inc;
                        }
                        track.write(buf, 0, buf.length);
                    }
                } catch (Exception ignored) {
                } finally {
                    if (track != null) {
                        try {
                            track.stop();
                            track.release();
                        } catch (Exception ignored) {
                        }
                    }
                }
            }
        });
        bgmThread.setDaemon(true);
        bgmThread.start();
    }

    public static synchronized void stopBgm() {
        bgmRunning = false;
    }
}
