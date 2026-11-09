package de.newaii.pokerelic;

import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.ColorMatrixColorFilter;
import android.graphics.LinearGradient;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;
import android.graphics.Typeface;
import android.view.MotionEvent;
import android.view.SurfaceHolder;
import android.view.SurfaceView;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Random;

public class GameView extends SurfaceView implements Runnable, SurfaceHolder.Callback {

    // Game States
    private static final int STATE_TITLE_SELECT = 0;
    private static final int STATE_PLAYING = 1;
    private static final int STATE_LEVEL_UP = 2;
    private static final int STATE_EVOLUTION_CUTIN = 3;
    private static final int STATE_LAB_UPGRADE = 4;
    private static final int STATE_GAME_OVER = 5;

    private int state = STATE_TITLE_SELECT;
    private volatile boolean running = false;
    private Thread gameThread;
    private final SurfaceHolder holder;
    private final SharedPreferences prefs;
    private final Random rng = new Random();

    // Screen Metrics
    private int screenW = 1080, screenH = 1920;
    private float dp = 2.75f;

    // Sprite Atlas Cache (Each bitmap is 256x64 containing 4 frames of 64x64)
    private final Map<String, Bitmap> spriteStrips = new HashMap<>();
    private final Paint pixelPaint = new Paint();
    private final Paint shinyPaint = new Paint();
    private final Paint hitFlashPaint = new Paint();
    private final Paint uiPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint textPaint = new Paint(Paint.ANTI_ALIAS_FLAG);

    // Starter / Partner Definitions (8 Iconic Families with 3-Stage + Mega Evolutions)
    public static class classUnitDef {
        String id;
        String[] stageNamesCn;
        String[] stageSprites;
        String[] moveNamesCn;
        String element; // ELEC, FIRE, WATER, GRASS, PSYCHIC, GHOST, FIGHT, DRAGON
        int themeColor;
        String desc;

        classUnitDef(String id, String[] names, String[] sprites, String[] moves, String elem, int col, String desc) {
            this.id = id;
            this.stageNamesCn = names;
            this.stageSprites = sprites;
            this.moveNamesCn = moves;
            this.element = elem;
            this.themeColor = col;
            this.desc = desc;
        }
    }

    private final classUnitDef[] UNIT_CATALOG = new classUnitDef[]{
            new classUnitDef("charmander",
                    new String[]{"小火龙", "火恐龙", "喷火龙", "Mega喷火龙X"},
                    new String[]{"charmander", "charmeleon", "charizard", "mega_charizard_x"},
                    new String[]{"火花", "喷射火焰", "闪焰冲锋", "青焰逆鳞·龙之俯冲"},
                    "FIRE", Color.parseColor("#FF6B35"), "扇形烈焰灼烧 + 满级进化黑蓝苍炎巨龙"),
            new classUnitDef("pikachu",
                    new String[]{"皮卡丘", "雷丘", "搭档皮卡丘", "超极巨皮卡丘"},
                    new String[]{"pikachu", "raichu", "pikachu", "pikachu"},
                    new String[]{"电击", "十万伏特", "伏特攻击", "千万伏特·雷神审判"},
                    "ELEC", Color.parseColor("#FFD13B"), "高频落雷 + 潮湿水洼触发全屏连锁感电"),
            new classUnitDef("froakie",
                    new String[]{"呱呱泡蛙", "呱头蛙", "甲贺忍蛙", "小智版羁绊忍蛙"},
                    new String[]{"froakie", "frogadier", "greninja", "greninja"},
                    new String[]{"泡沫", "水之波动", "飞水手里剑", "黄金巨型水手里剑"},
                    "WATER", Color.parseColor("#2EC4B6"), "高速穿透手里剑 + 地面铺设潮湿感电水洼"),
            new classUnitDef("bulbasaur",
                    new String[]{"妙蛙种子", "妙蛙草", "妙蛙花", "Mega妙蛙花"},
                    new String[]{"bulbasaur", "ivysaur", "venusaur", "venusaur"},
                    new String[]{"飞叶快刀", "寄生种子", "落英缤纷", "疯狂植物·荆棘领域"},
                    "GRASS", Color.parseColor("#52B788"), "环绕周身旋转飞叶刀阵 + 剧毒孢子回血"),
            new classUnitDef("ralts",
                    new String[]{"拉鲁拉丝", "奇鲁莉安", "沙奈朵", "Mega沙奈朵"},
                    new String[]{"ralts", "kirlia", "gardevoir", "gardevoir"},
                    new String[]{"念力", "魔法闪耀", "精神强念", "月亮之力·次元黑洞"},
                    "PSYCHIC", Color.parseColor("#E07A9A"), "重力黑洞聚拢怪群 + 周期性抵挡伤害护盾"),
            new classUnitDef("gastly",
                    new String[]{"鬼斯", "鬼斯通", "耿鬼", "Mega耿鬼"},
                    new String[]{"gastly", "haunter", "gengar", "gengar"},
                    new String[]{"暗影球", "祸不单行", "暗影潜袭", "无尽暗夜·噬梦爆破"},
                    "GHOST", Color.parseColor("#9D4EDD"), "追踪暗影法球 + 引爆异常状态连环紫雾"),
            new classUnitDef("riolu",
                    new String[]{"利欧路", "路卡利欧", "波导路卡利欧", "Mega路卡利欧"},
                    new String[]{"riolu", "lucario", "lucario", "lucario"},
                    new String[]{"发劲", "骨棒乱打", "波导弹", "苍蓝神速·波导激光"},
                    "FIGHT", Color.parseColor("#3A86FF"), "高穿透波导激光束 + 近身粉碎斩杀"),
            new classUnitDef("dratini",
                    new String[]{"迷你龙", "哈克龙", "快龙", "神速快龙王"},
                    new String[]{"dratini", "dragonair", "dragonite", "dragonite"},
                    new String[]{"龙卷风", "龙之怒", "逆鳞", "流星群·天降正义"},
                    "DRAGON", Color.parseColor("#F4A261"), "卷起烈风火海 + 周期性全屏流星群轰炸")
    };

    // Held Passive Items (6 Slots)
    public static class PassiveDef {
        String id, nameCn, desc;
        int color;
        PassiveDef(String id, String nameCn, String desc, int color) {
            this.id = id;
            this.nameCn = nameCn;
            this.desc = desc;
            this.color = color;
        }
    }

    private final PassiveDef[] PASSIVE_CATALOG = new PassiveDef[]{
            new PassiveDef("mega_stone", "进化奇石 / Mega钥石", "全队全伤害 +25%，且解锁 Lv.8 超武 Mega 形态突破", Color.parseColor("#FF4D6D")),
            new PassiveDef("quick_claw", "先制之爪", "所有招式冷却时间缩减 -18%", Color.parseColor("#FFB703")),
            new PassiveDef("wide_lens", "广角镜", "所有招式范围与弹体大小 +25%", Color.parseColor("#00BBF9")),
            new PassiveDef("leftovers", "吃剩的东西", "每秒自动恢复生命值 +3 HP，最大生命 +25%", Color.parseColor("#80ED99")),
            new PassiveDef("exp_share", "学习装置", "经验糖果拾取范围 +45%，获取经验值 +30%", Color.parseColor("#9B5DE5")),
            new PassiveDef("amulet_coin", "护符金币", "移速 +15%，击败敌人掉落宝可梦金币翻倍", Color.parseColor("#F15BB5"))
    };

    // Active Unit Instance (Leader + up to 5 Partners)
    public static class ActiveUnit {
        classUnitDef def;
        int level = 1; // 1..8 (Lv1-2 Stage0, Lv3-4 Stage1, Lv5-7 Stage2, Lv8 Stage3 Mega!)
        float cooldownTimer = 0f;
        float orbitAngle = 0f;

        int stageIndex() {
            if (level >= 8) return 3;
            if (level >= 5) return 2;
            if (level >= 3) return 1;
            return 0;
        }
        String currentName() { return def.stageNamesCn[stageIndex()]; }
        String currentSprite() { return def.stageSprites[stageIndex()]; }
        String currentMove() { return def.moveNamesCn[stageIndex()]; }
    }

    // Helper extension on classUnitDef
    // Wait: let's add method inside classUnitDef or access stageSprites/moveNamesCn directly

    // Enemy Instance
    public static class Enemy {
        float x, y, vx, vy;
        float hp, maxHp, speed, radius;
        String spriteKey;
        String nameCn;
        boolean isBoss;
        boolean isShiny;
        float hitFlash = 0f;
        float burnTimer = 0f;
        float wetTimer = 0f;
        float poisonTimer = 0f;
    }

    // Projectile / Skill Entity
    public static class Projectile {
        float x, y, vx, vy;
        float radius, damage, life, maxLife;
        int color;
        String element;
        boolean piercing;
        boolean isOrbitLeaf;
        float orbitAngle, orbitDist;
        boolean isBlackHole;
    }

    // Elemental Ground Hazard (Water puddle / Fire patch / Poison spore)
    public static class GroundZone {
        float x, y, radius, life, maxLife;
        String type; // WATER, FIRE, POISON, SHOCK_POOL
        int color;
    }

    // Exp Candy / Berry / Coin Drop
    public static class DropGem {
        float x, y;
        int type; // 0=ExpS, 1=ExpM, 2=ExpXL, 3=SitrusBerry(Heal), 4=PokeCoin, 5=MasterChest
        int value;
        boolean magnetized = false;
    }

    // Floating Damage Text & Particle
    public static class FloatingText {
        float x, y, vy, life;
        String text;
        int color;
        boolean large;
    }

    public static class Particle {
        float x, y, vx, vy, size, life, maxLife;
        int color;
    }

    // Player & Run State
    private int selectedStarterIdx = 0;
    private float playerX = 0f, playerY = 0f;
    private float playerFacingX = 1f, playerFacingY = 0f;
    private boolean playerFlipX = false;
    private float playerHp = 120f, playerMaxHp = 120f;
    private float dashCooldown = 0f, dashActiveTimer = 0f;
    private float regenTimer = 0f;

    private int runLevel = 1;
    private int runExp = 0, runExpNext = 20;
    private int runKills = 0;
    private int runCoins = 0;
    private float runTimeSec = 0f;
    private float spawnTimer = 0f;
    private int bossWaveStage = 0;

    private final List<ActiveUnit> squad = new ArrayList<>();
    private final Map<String, Integer> passiveLevels = new HashMap<>();
    private final List<Enemy> enemies = new ArrayList<>();
    private final List<Projectile> projectiles = new ArrayList<>();
    private final List<GroundZone> groundZones = new ArrayList<>();
    private final List<DropGem> drops = new ArrayList<>();
    private final List<FloatingText> floatTexts = new ArrayList<>();
    private final List<Particle> particles = new ArrayList<>();

    // Level-Up 3 Choices
    public static class UpgradeOption {
        boolean isUnit;
        classUnitDef unitDef;
        PassiveDef passiveDef;
        int nextLevel;
        String title, subtitle, badge;
        int accentColor;
    }
    private final List<UpgradeOption> currentChoices = new ArrayList<>();

    // Evolution Cut-in State
    private String evoOldName = "", evoNewName = "", evoMoveName = "", evoSpriteKey = "";
    private int evoAccentColor = Color.YELLOW;
    private float evoAnimTimer = 0f;

    // Virtual Joystick Touch State
    private boolean joyActive = false;
    private float joyOriginX = 0f, joyOriginY = 0f;
    private float joyCurrX = 0f, joyCurrY = 0f;
    private float joyDx = 0f, joyDy = 0f;

    // Meta-Progression (Professor Oak's Lab)
    private int totalSavedCoins = 0;
    private int metaAtkLv = 0, metaHpLv = 0, metaSpdLv = 0, metaExpLv = 0;
    private int shinyCapturedCount = 0;

    public GameView(Context context) {
        super(context);
        holder = getHolder();
        holder.addCallback(this);
        setFocusable(true);

        prefs = context.getSharedPreferences("poke_relic_save", Context.MODE_PRIVATE);
        loadMetaSave();

        pixelPaint.setAntiAlias(false);
        pixelPaint.setFilterBitmap(false);

        // Golden Shiny tint filter
        float[] shinyMatrix = new float[]{
                1.25f, 0.15f, 0f, 0f, 35f,
                0.10f, 1.15f, 0f, 0f, 25f,
                0f,    0f,    0.6f, 0f, 0f,
                0f,    0f,    0f, 1f, 0f
        };
        shinyPaint.setAntiAlias(false);
        shinyPaint.setFilterBitmap(false);
        shinyPaint.setColorFilter(new ColorMatrixColorFilter(shinyMatrix));

        float[] whiteFlash = new float[]{
                1f, 0f, 0f, 0f, 220f,
                0f, 1f, 0f, 0f, 220f,
                0f, 0f, 1f, 0f, 220f,
                0f, 0f, 0f, 1f, 0f
        };
        hitFlashPaint.setAntiAlias(false);
        hitFlashPaint.setFilterBitmap(false);
        hitFlashPaint.setColorFilter(new ColorMatrixColorFilter(whiteFlash));

        textPaint.setTypeface(Typeface.DEFAULT_BOLD);
        loadAllSprites(context);
    }

    private void loadMetaSave() {
        totalSavedCoins = prefs.getInt("coins", 300); // Start with 300 bonus coins!
        metaAtkLv = prefs.getInt("meta_atk", 0);
        metaHpLv = prefs.getInt("meta_hp", 0);
        metaSpdLv = prefs.getInt("meta_spd", 0);
        metaExpLv = prefs.getInt("meta_exp", 0);
        shinyCapturedCount = prefs.getInt("shiny_count", 0);
    }

    private void saveMeta() {
        prefs.edit()
                .putInt("coins", totalSavedCoins)
                .putInt("meta_atk", metaAtkLv)
                .putInt("meta_hp", metaHpLv)
                .putInt("meta_spd", metaSpdLv)
                .putInt("meta_exp", metaExpLv)
                .putInt("shiny_count", shinyCapturedCount)
                .apply();
    }

    private void loadAllSprites(Context ctx) {
        String[] keys = {
                "pikachu", "raichu", "charmander", "charmeleon", "charizard", "mega_charizard_x",
                "squirtle", "wartortle", "blastoise", "bulbasaur", "ivysaur", "venusaur",
                "froakie", "frogadier", "greninja", "ralts", "kirlia", "gardevoir",
                "gastly", "haunter", "gengar", "riolu", "lucario", "dratini", "dragonair", "dragonite",
                "rattata", "zubat", "beedrill", "onix", "tauros", "gyarados", "snorlax",
                "articuno", "zapdos", "moltres", "mewtwo", "rayquaza"
        };
        BitmapFactory.Options opts = new BitmapFactory.Options();
        opts.inScaled = false;
        for (String k : keys) {
            try {
                InputStream is = ctx.getAssets().open("sprites/pk_" + k + ".png");
                Bitmap bmp = BitmapFactory.decodeStream(is, null, opts);
                is.close();
                if (bmp != null) {
                    spriteStrips.put(k, bmp);
                }
            } catch (Exception ignored) {
            }
        }
    }

    public boolean handleBackButton() {
        if (state == STATE_LAB_UPGRADE) {
            state = STATE_TITLE_SELECT;
            return true;
        }
        if (state == STATE_PLAYING || state == STATE_LEVEL_UP || state == STATE_GAME_OVER) {
            totalSavedCoins += runCoins;
            saveMeta();
            state = STATE_TITLE_SELECT;
            return true;
        }
        return false;
    }

    private void startNewRun(int starterIdx) {
        selectedStarterIdx = starterIdx;
        squad.clear();
        passiveLevels.clear();
        enemies.clear();
        projectiles.clear();
        groundZones.clear();
        drops.clear();
        floatTexts.clear();
        particles.clear();

        ActiveUnit leader = new ActiveUnit();
        leader.def = UNIT_CATALOG[starterIdx];
        leader.level = 1;
        squad.add(leader);

        playerX = 0f;
        playerY = 0f;
        playerFacingX = 1f;
        playerFacingY = 0f;
        playerMaxHp = 120f + metaHpLv * 25f;
        playerHp = playerMaxHp;
        dashCooldown = 0f;
        dashActiveTimer = 0f;

        runLevel = 1;
        runExp = 0;
        runExpNext = 16;
        runKills = 0;
        runCoins = 0;
        runTimeSec = 0f;
        spawnTimer = 0f;
        bossWaveStage = 0;
        joyActive = false;
        joyDx = 0f;
        joyDy = 0f;

        state = STATE_PLAYING;
        SoundEngine.playLevelUp();
        SoundEngine.startBgm();
    }

    // Stat Multipliers
    private float getDamageMultiplier() {
        int megaLv = passiveLevels.containsKey("mega_stone") ? passiveLevels.get("mega_stone") : 0;
        float synBonus = (squad.size() >= 3) ? 0.20f : 0f;
        return 1.0f + metaAtkLv * 0.12f + megaLv * 0.22f + synBonus;
    }

    private float getCooldownMultiplier() {
        int clawLv = passiveLevels.containsKey("quick_claw") ? passiveLevels.get("quick_claw") : 0;
        return Math.max(0.42f, 1.0f - clawLv * 0.14f);
    }

    private float getAreaMultiplier() {
        int lensLv = passiveLevels.containsKey("wide_lens") ? passiveLevels.get("wide_lens") : 0;
        return 1.0f + lensLv * 0.22f;
    }

    private float getMoveSpeedMultiplier() {
        int coinLv = passiveLevels.containsKey("amulet_coin") ? passiveLevels.get("amulet_coin") : 0;
        return 1.0f + metaSpdLv * 0.08f + coinLv * 0.12f + (dashActiveTimer > 0 ? 1.65f : 0f);
    }

    private float getPickupRadius() {
        int expLv = passiveLevels.containsKey("exp_share") ? passiveLevels.get("exp_share") : 0;
        return (115f + metaExpLv * 22f) * (1.0f + expLv * 0.35f) * (dp / 2.75f);
    }

    private void updateGame(float dt) {
        if (state == STATE_EVOLUTION_CUTIN) {
            evoAnimTimer -= dt;
            if (evoAnimTimer <= 0f) {
                state = STATE_PLAYING;
            }
            return;
        }
        if (state != STATE_PLAYING) return;

        runTimeSec += dt;
        if (dashCooldown > 0f) dashCooldown -= dt;
        if (dashActiveTimer > 0f) {
            dashActiveTimer -= dt;
            spawnParticle(playerX, playerY, 0, 0, Color.parseColor("#00F5D4"), 10f * dp, 0.22f);
        }

        // Passive Leftovers HP Regen
        regenTimer += dt;
        if (regenTimer >= 1.0f) {
            regenTimer = 0f;
            int leftLv = passiveLevels.containsKey("leftovers") ? passiveLevels.get("leftovers") : 0;
            if (leftLv > 0 && playerHp < playerMaxHp) {
                playerHp = Math.min(playerMaxHp, playerHp + leftLv * 3.5f);
            }
        }

        // 1. Move Player via Virtual Joystick
        float baseSpeed = 235f * (dp / 2.75f) * getMoveSpeedMultiplier();
        if (joyActive && (Math.abs(joyDx) > 0.01f || Math.abs(joyDy) > 0.01f)) {
            playerX += joyDx * baseSpeed * dt;
            playerY += joyDy * baseSpeed * dt;
            playerFacingX = joyDx;
            playerFacingY = joyDy;
            if (Math.abs(joyDx) > 0.08f) {
                playerFlipX = (joyDx < 0);
            }
        }

        // 2. Update Ground Elemental Zones
        Iterator<GroundZone> zit = groundZones.iterator();
        while (zit.hasNext()) {
            GroundZone z = zit.next();
            z.life -= dt;
            if (z.life <= 0f) {
                zit.remove();
            }
        }

        // 3. Fire Squad Pokemon Moves & Update Orbitals
        float cdMult = getCooldownMultiplier();
        float dmgMult = getDamageMultiplier();
        float areaMult = getAreaMultiplier();

        for (int i = 0; i < squad.size(); i++) {
            ActiveUnit u = squad.get(i);
            u.orbitAngle += dt * 2.1f;
            u.cooldownTimer -= dt;

            float ux = playerX;
            float uy = playerY;
            if (i > 0) {
                float a = u.orbitAngle + (i * (float) (2 * Math.PI / Math.max(1, squad.size() - 1)));
                float dist = 62f * dp;
                ux = playerX + (float) Math.cos(a) * dist;
                uy = playerY + (float) Math.sin(a) * dist;
            }

            if (u.cooldownTimer <= 0f) {
                fireUnitSkill(u, ux, uy, dmgMult, areaMult);
                float baseCd = 1.05f - u.stageIndex() * 0.14f;
                u.cooldownTimer = Math.max(0.22f, baseCd * cdMult);
            }
        }

        // 4. Spawn Wild Pokemon Swarm & Timed Boss Waves
        spawnTimer -= dt;
        if (spawnTimer <= 0f) {
            int waveCount = 2 + (int) (runTimeSec / 18f);
            waveCount = Math.min(10, waveCount);
            if (enemies.size() < 160) {
                for (int k = 0; k < waveCount; k++) {
                    spawnWildEnemy(false, null, null, 1f);
                }
            }
            spawnTimer = Math.max(0.28f, 0.95f - runTimeSec * 0.0025f);
        }

        // Timed Boss Milestones
        if (bossWaveStage == 0 && runTimeSec >= 30f) {
            bossWaveStage = 1;
            spawnWildEnemy(true, "gyarados", "暴怒红暴鲤龙", 14f);
            addFloatText(playerX, playerY - 70 * dp, "⚠ 精英头目：暴鲤龙降临！", Color.parseColor("#FF4D6D"), true);
        } else if (bossWaveStage == 1 && runTimeSec >= 75f) {
            bossWaveStage = 2;
            spawnWildEnemy(true, "zapdos", "闪电鸟·雷云领主", 22f);
            addFloatText(playerX, playerY - 70 * dp, "⚡ 传说三圣鸟：闪电鸟降临！", Color.parseColor("#FFD13B"), true);
        } else if (bossWaveStage == 2 && runTimeSec >= 130f) {
            bossWaveStage = 3;
            spawnWildEnemy(true, "mewtwo", "超梦·基因暴君", 42f);
            addFloatText(playerX, playerY - 70 * dp, "🔮 关底神兽：超梦降临！", Color.parseColor("#C77DFF"), true);
        } else if (bossWaveStage == 3 && runTimeSec >= 200f) {
            bossWaveStage = 4;
            spawnWildEnemy(true, "rayquaza", "裂空座·天空之主", 65f);
            addFloatText(playerX, playerY - 70 * dp, "🐉 天空龙神：裂空座降临！", Color.parseColor("#00F5D4"), true);
        }

        // 5. Update Projectiles & Check Elemental Field Combos
        Iterator<Projectile> pit = projectiles.iterator();
        while (pit.hasNext()) {
            Projectile p = pit.next();
            p.life -= dt;
            if (p.life <= 0f) {
                pit.remove();
                continue;
            }
            if (p.isOrbitLeaf) {
                p.orbitAngle += dt * 4.5f;
                p.x = playerX + (float) Math.cos(p.orbitAngle) * p.orbitDist;
                p.y = playerY + (float) Math.sin(p.orbitAngle) * p.orbitDist;
            } else {
                p.x += p.vx * dt;
                p.y += p.vy * dt;
            }

            // Elemental Reaction 1: Electric projectile hits Water Puddle -> Electrified Shock Pool!
            if ("ELEC".equals(p.element)) {
                for (GroundZone gz : groundZones) {
                    if ("WATER".equals(gz.type) && distSq(p.x, p.y, gz.x, gz.y) < gz.radius * gz.radius) {
                        gz.type = "SHOCK_POOL";
                        gz.color = Color.parseColor("#00F5D4");
                        gz.life = Math.max(gz.life, 3.5f);
                        addFloatText(gz.x, gz.y, "⚡感电连锁海域!", Color.parseColor("#00F5D4"), true);
                    }
                }
            }
            // Elemental Reaction 2: Dragon/Wind projectile hits Fire Zone -> Firestorm Tornado!
            if ("DRAGON".equals(p.element)) {
                for (GroundZone gz : groundZones) {
                    if ("FIRE".equals(gz.type) && distSq(p.x, p.y, gz.x, gz.y) < gz.radius * gz.radius) {
                        gz.radius = Math.min(135f * dp, gz.radius * 1.35f);
                        gz.life = Math.max(gz.life, 4.0f);
                        addFloatText(gz.x, gz.y, "🔥烈风火海扩散!", Color.parseColor("#FF6B35"), false);
                    }
                }
            }

            // Hit Enemies
            for (Enemy e : enemies) {
                if (e.hp <= 0) continue;
                float hitDist = p.radius + e.radius;
                if (distSq(p.x, p.y, e.x, e.y) <= hitDist * hitDist) {
                    float finalDmg = p.damage;
                    // Elemental Reaction 3: Ghost/Psychic hits Poisoned/Burned enemy -> Hex Explosion!
                    if (("GHOST".equals(p.element) || "PSYCHIC".equals(p.element)) && (e.poisonTimer > 0 || e.burnTimer > 0 || e.wetTimer > 0)) {
                        finalDmg *= 1.85f;
                        spawnBurstParticles(e.x, e.y, Color.parseColor("#C77DFF"), 8);
                        addFloatText(e.x, e.y - 18 * dp, "💥祸不单行 " + (int) finalDmg, Color.parseColor("#E0AAFF"), false);
                    } else {
                        addFloatText(e.x, e.y - 12 * dp, String.valueOf((int) finalDmg), p.color, false);
                    }

                    e.hp -= finalDmg;
                    e.hitFlash = 0.12f;
                    if ("FIRE".equals(p.element)) e.burnTimer = 3.0f;
                    if ("WATER".equals(p.element)) e.wetTimer = 4.0f;
                    if ("GRASS".equals(p.element)) e.poisonTimer = 4.0f;

                    if (p.isBlackHole) {
                        e.x += (p.x - e.x) * 0.35f;
                        e.y += (p.y - e.y) * 0.35f;
                    }

                    if (!p.piercing && !p.isOrbitLeaf) {
                        p.life = 0f;
                        break;
                    }
                }
            }
        }

        // 6. Update Enemies & Ground Zone DoT
        Iterator<Enemy> eit = enemies.iterator();
        while (eit.hasNext()) {
            Enemy e = eit.next();
            if (e.hitFlash > 0f) e.hitFlash -= dt;
            if (e.burnTimer > 0f) {
                e.burnTimer -= dt;
                e.hp -= (8f + runLevel * 1.5f) * dt;
            }
            if (e.wetTimer > 0f) e.wetTimer -= dt;
            if (e.poisonTimer > 0f) {
                e.poisonTimer -= dt;
                e.hp -= (7f + runLevel * 1.4f) * dt;
            }

            // Ground Zone Effects on Enemy
            for (GroundZone gz : groundZones) {
                if (distSq(e.x, e.y, gz.x, gz.y) <= gz.radius * gz.radius) {
                    if ("WATER".equals(gz.type)) {
                        e.wetTimer = 2.0f;
                    } else if ("SHOCK_POOL".equals(gz.type)) {
                        e.hp -= (28f + runLevel * 4.5f) * dt;
                        e.hitFlash = 0.05f;
                    } else if ("FIRE".equals(gz.type)) {
                        e.burnTimer = 2.5f;
                        e.hp -= (22f + runLevel * 3.5f) * dt;
                    }
                }
            }

            if (e.hp <= 0f) {
                onEnemyDefeated(e);
                eit.remove();
                continue;
            }

            // Move toward player
            float dx = playerX - e.x;
            float dy = playerY - e.y;
            float dist = (float) Math.hypot(dx, dy);
            if (dist > 1f) {
                float spd = e.speed * (e.wetTimer > 0 ? 0.68f : 1.0f);
                e.vx = (dx / dist) * spd;
                e.vy = (dy / dist) * spd;
                e.x += e.vx * dt;
                e.y += e.vy * dt;
            }

            // Player Collision Damage
            if (dist < e.radius + 22f * dp && dashActiveTimer <= 0f) {
                playerHp -= (e.isBoss ? 28f : 12f) * dt;
                if (playerHp <= 0f) {
                    playerHp = 0f;
                    totalSavedCoins += runCoins;
                    saveMeta();
                    state = STATE_GAME_OVER;
                    return;
                }
            }
        }

        // 7. Update Drops & Magnet Collection
        float pickRad = getPickupRadius();
        Iterator<DropGem> dit = drops.iterator();
        while (dit.hasNext()) {
            DropGem d = dit.next();
            float dist2 = distSq(playerX, playerY, d.x, d.y);
            if (dist2 <= pickRad * pickRad) {
                d.magnetized = true;
            }
            if (d.magnetized) {
                float dx = playerX - d.x;
                float dy = playerY - d.y;
                float dist = (float) Math.hypot(dx, dy);
                if (dist < 22f * dp) {
                    collectDrop(d);
                    dit.remove();
                    continue;
                }
                float pullSpd = 560f * (dp / 2.75f);
                d.x += (dx / dist) * pullSpd * dt;
                d.y += (dy / dist) * pullSpd * dt;
            }
        }

        // 8. Update Particles & Floating Texts
        Iterator<Particle> partIt = particles.iterator();
        while (partIt.hasNext()) {
            Particle pt = partIt.next();
            pt.life -= dt;
            if (pt.life <= 0f) {
                partIt.remove();
            } else {
                pt.x += pt.vx * dt;
                pt.y += pt.vy * dt;
            }
        }

        Iterator<FloatingText> ftIt = floatTexts.iterator();
        while (ftIt.hasNext()) {
            FloatingText ft = ftIt.next();
            ft.life -= dt;
            if (ft.life <= 0f) {
                ftIt.remove();
            } else {
                ft.y += ft.vy * dt;
            }
        }
    }

    private void fireUnitSkill(ActiveUnit u, float originX, float originY, float dmgMult, float areaMult) {
        int stg = u.stageIndex();
        float baseDmg = (16f + u.level * 7.5f + stg * 14f) * dmgMult;
        String id = u.def.id;

        Enemy nearest = findNearestEnemy(originX, originY);
        float aimX = playerFacingX;
        float aimY = playerFacingY;
        if (nearest != null) {
            float dx = nearest.x - originX;
            float dy = nearest.y - originY;
            float d = (float) Math.hypot(dx, dy);
            if (d > 1f) {
                aimX = dx / d;
                aimY = dy / d;
            }
        }

        int count = 1 + (stg >= 2 ? 1 : 0) + (stg >= 3 ? 2 : 0);

        if ("charmander".equals(id)) {
            // Fire spread + leaves burning fire zone on ground
            for (int i = 0; i < count + 1; i++) {
                float spread = (i - count / 2f) * 0.24f;
                float vx = (float) (aimX * Math.cos(spread) - aimY * Math.sin(spread)) * 390f * (dp / 2.75f);
                float vy = (float) (aimX * Math.sin(spread) + aimY * Math.cos(spread)) * 390f * (dp / 2.75f);
                spawnProjectile(originX, originY, vx, vy, 16f * dp * areaMult, baseDmg, 1.35f,
                        stg >= 3 ? Color.parseColor("#00BBF9") : Color.parseColor("#FF6B35"), "FIRE", stg >= 2);
            }
            if (groundZones.size() < 14) {
                GroundZone gz = new GroundZone();
                gz.x = originX + aimX * 85f * dp;
                gz.y = originY + aimY * 85f * dp;
                gz.radius = (42f + stg * 14f) * dp * areaMult;
                gz.life = 3.2f;
                gz.maxLife = 3.2f;
                gz.type = "FIRE";
                gz.color = stg >= 3 ? Color.parseColor("#0096C7") : Color.parseColor("#FF5400");
                groundZones.add(gz);
            }
        } else if ("pikachu".equals(id)) {
            // Lightning strikes directly on enemies + shockwaves
            int strikes = 1 + stg;
            for (int s = 0; s < strikes; s++) {
                Enemy target = (s == 0 && nearest != null) ? nearest : pickRandomEnemy();
                float tx = target != null ? target.x : (originX + (rng.nextFloat() - 0.5f) * 260f * dp);
                float ty = target != null ? target.y : (originY + (rng.nextFloat() - 0.5f) * 260f * dp);
                spawnProjectile(tx, ty, 0, 0, (34f + stg * 10f) * dp * areaMult, baseDmg * 1.25f, 0.24f,
                        Color.parseColor("#FFD13B"), "ELEC", true);
                spawnBurstParticles(tx, ty, Color.parseColor("#FFF3B0"), 10);
            }
        } else if ("froakie".equals(id)) {
            // High-speed piercing Water Shuriken + creates Water Puddle for Electric combo!
            int stars = 2 + stg;
            for (int i = 0; i < stars; i++) {
                float angle = (float) Math.atan2(aimY, aimX) + (i - (stars - 1) / 2f) * 0.20f;
                float spd = 540f * (dp / 2.75f);
                spawnProjectile(originX, originY, (float) Math.cos(angle) * spd, (float) Math.sin(angle) * spd,
                        15f * dp * areaMult, baseDmg * 0.95f, 1.4f,
                        stg >= 3 ? Color.parseColor("#FFD166") : Color.parseColor("#00F5D4"), "WATER", true);
            }
            if (groundZones.size() < 14 && rng.nextFloat() < 0.65f) {
                GroundZone gz = new GroundZone();
                gz.x = originX + aimX * 95f * dp;
                gz.y = originY + aimY * 95f * dp;
                gz.radius = (48f + stg * 12f) * dp * areaMult;
                gz.life = 4.0f;
                gz.maxLife = 4.0f;
                gz.type = "WATER";
                gz.color = Color.parseColor("#00B4D8");
                groundZones.add(gz);
            }
        } else if ("bulbasaur".equals(id)) {
            // Orbiting Razor Leaf blades around player
            int blades = 2 + stg;
            for (int b = 0; b < blades; b++) {
                Projectile p = new Projectile();
                p.isOrbitLeaf = true;
                p.orbitAngle = u.orbitAngle + b * (float) (2 * Math.PI / blades);
                p.orbitDist = (68f + stg * 14f) * dp * areaMult;
                p.x = playerX + (float) Math.cos(p.orbitAngle) * p.orbitDist;
                p.y = playerY + (float) Math.sin(p.orbitAngle) * p.orbitDist;
                p.radius = 16f * dp * areaMult;
                p.damage = baseDmg * 0.65f;
                p.life = 0.85f;
                p.maxLife = 0.85f;
                p.color = Color.parseColor("#52B788");
                p.element = "GRASS";
                p.piercing = true;
                projectiles.add(p);
            }
        } else if ("ralts".equals(id)) {
            // Psychic Gravity Black Hole that pulls enemies together
            float tx = nearest != null ? nearest.x : (originX + aimX * 110f * dp);
            float ty = nearest != null ? nearest.y : (originY + aimY * 110f * dp);
            Projectile p = spawnProjectile(tx, ty, 0, 0, (44f + stg * 14f) * dp * areaMult,
                    baseDmg * 1.15f, 0.55f, Color.parseColor("#FF70A6"), "PSYCHIC", true);
            p.isBlackHole = true;
        } else {
            // Gengar / Lucario / Dragonite piercing elemental barrages
            for (int i = 0; i < count; i++) {
                float a = (float) Math.atan2(aimY, aimX) + (i - (count - 1) / 2f) * 0.28f;
                float spd = 440f * (dp / 2.75f);
                spawnProjectile(originX, originY, (float) Math.cos(a) * spd, (float) Math.sin(a) * spd,
                        18f * dp * areaMult, baseDmg * 1.1f, 1.5f, u.def.themeColor, u.def.element, true);
            }
        }
    }

    private Projectile spawnProjectile(float x, float y, float vx, float vy, float rad, float dmg, float life, int col, String elem, boolean pierce) {
        Projectile p = new Projectile();
        p.x = x;
        p.y = y;
        p.vx = vx;
        p.vy = vy;
        p.radius = rad;
        p.damage = dmg;
        p.life = life;
        p.maxLife = life;
        p.color = col;
        p.element = elem;
        p.piercing = pierce;
        projectiles.add(p);
        return p;
    }

    private void spawnWildEnemy(boolean isBoss, String forceSprite, String forceName, float hpScale) {
        Enemy e = new Enemy();
        float angle = rng.nextFloat() * (float) (Math.PI * 2);
        float dist = Math.max(screenW, screenH) * 0.56f + rng.nextFloat() * 90f * dp;
        e.x = playerX + (float) Math.cos(angle) * dist;
        e.y = playerY + (float) Math.sin(angle) * dist;

        e.isBoss = isBoss;
        e.isShiny = !isBoss && (rng.nextInt(140) == 0); // Shiny encounter!

        if (isBoss) {
            e.spriteKey = forceSprite;
            e.nameCn = forceName;
            e.radius = 38f * dp;
            e.maxHp = (340f + runLevel * 95f) * hpScale;
            e.speed = 92f * (dp / 2.75f);
        } else {
            int tier = Math.min(4, (int) (runTimeSec / 30f));
            String[][] tiers = {
                    {"rattata", "小拉达"},
                    {"zubat", "超音蝠"},
                    {"beedrill", "大针蜂"},
                    {"tauros", "肯泰罗"},
                    {"onix", "大岩蛇"}
            };
            int pick = rng.nextInt(tier + 1);
            e.spriteKey = tiers[pick][0];
            e.nameCn = tiers[pick][1];
            e.radius = (e.isShiny ? 25f : 18f) * dp;
            e.maxHp = (24f + runTimeSec * 1.45f + pick * 18f) * (e.isShiny ? 3.5f : 1.0f);
            e.speed = (85f + pick * 14f) * (dp / 2.75f);
            if (e.isShiny) {
                SoundEngine.playShinyAlert();
                addFloatText(playerX, playerY - 50 * dp, "✨ 发现野生闪光 " + e.nameCn + "！", Color.parseColor("#FFD166"), true);
            }
        }
        e.hp = e.maxHp;
        enemies.add(e);
    }

    private void onEnemyDefeated(Enemy e) {
        runKills++;
        SoundEngine.playHit();
        spawnBurstParticles(e.x, e.y, e.isShiny ? Color.parseColor("#FFD166") : Color.parseColor("#FF6B6B"), e.isBoss ? 22 : 6);

        DropGem d = new DropGem();
        d.x = e.x;
        d.y = e.y;
        if (e.isBoss) {
            d.type = 2; // XL Candy
            d.value = 45;
            runCoins += 50;
            addFloatText(e.x, e.y, "🏆 击败头目 +50金币!", Color.parseColor("#FFD166"), true);
        } else if (e.isShiny) {
            d.type = 2;
            d.value = 35;
            shinyCapturedCount++;
            runCoins += 30;
            saveMeta();
            addFloatText(e.x, e.y, "✨ 收服闪光 " + e.nameCn + "!", Color.parseColor("#FFD166"), true);
        } else {
            int r = rng.nextInt(100);
            if (r < 5) {
                d.type = 3; // Sitrus Berry heal
                d.value = 25;
            } else if (r < 18) {
                d.type = 4; // PokeCoin
                d.value = 5;
            } else if (r < 35) {
                d.type = 1; // M Candy
                d.value = 9;
            } else {
                d.type = 0; // S Candy
                d.value = 4;
            }
        }
        drops.add(d);
    }

    private void collectDrop(DropGem d) {
        SoundEngine.playPickupGem();
        if (d.type == 3) {
            playerHp = Math.min(playerMaxHp, playerHp + d.value);
            addFloatText(playerX, playerY - 20 * dp, "🍒 文柚果 +" + d.value + " HP", Color.parseColor("#80ED99"), false);
        } else if (d.type == 4) {
            int mult = passiveLevels.containsKey("amulet_coin") ? 2 : 1;
            runCoins += d.value * mult;
        } else {
            int expLv = passiveLevels.containsKey("exp_share") ? passiveLevels.get("exp_share") : 0;
            int gain = Math.round(d.value * (1.0f + expLv * 0.30f));
            runExp += gain;
            if (runExp >= runExpNext) {
                runExp -= runExpNext;
                runLevel++;
                runExpNext = Math.round(runExpNext * 1.28f + 10);
                triggerLevelUpChoices();
            }
        }
    }

    private void triggerLevelUpChoices() {
        SoundEngine.playLevelUp();
        currentChoices.clear();

        List<UpgradeOption> pool = new ArrayList<>();
        // 1. Existing or new Pokemon units
        for (classUnitDef def : UNIT_CATALOG) {
            ActiveUnit existing = null;
            for (ActiveUnit u : squad) {
                if (u.def.id.equals(def.id)) {
                    existing = u;
                    break;
                }
            }
            if (existing != null) {
                if (existing.level < 8) {
                    UpgradeOption opt = new UpgradeOption();
                    opt.isUnit = true;
                    opt.unitDef = def;
                    opt.nextLevel = existing.level + 1;
                    int oldStg = existing.stageIndex();
                    int newStg = (opt.nextLevel >= 8) ? 3 : (opt.nextLevel >= 5 ? 2 : (opt.nextLevel >= 3 ? 1 : 0));
                    if (newStg > oldStg) {
                        opt.title = "✨ 进化：" + def.stageNamesCn[newStg];
                        opt.badge = "进化突破 Lv." + opt.nextLevel;
                    } else {
                        opt.title = def.stageNamesCn[newStg] + " · 招式强化";
                        opt.badge = "Lv." + opt.nextLevel;
                    }
                    opt.subtitle = "招式【" + def.moveNamesCn[newStg] + "】 · " + def.desc;
                    opt.accentColor = def.themeColor;
                    pool.add(opt);
                }
            } else if (squad.size() < 6) {
                UpgradeOption opt = new UpgradeOption();
                opt.isUnit = true;
                opt.unitDef = def;
                opt.nextLevel = 1;
                opt.title = "🔴 收服同伴：" + def.stageNamesCn[0];
                opt.subtitle = "招式【" + def.moveNamesCn[0] + "】 · " + def.desc;
                opt.badge = "新同伴";
                opt.accentColor = def.themeColor;
                pool.add(opt);
            }
        }

        // 2. Passive Held Items
        for (PassiveDef pdef : PASSIVE_CATALOG) {
            int lv = passiveLevels.containsKey(pdef.id) ? passiveLevels.get(pdef.id) : 0;
            if (lv < 5) {
                UpgradeOption opt = new UpgradeOption();
                opt.isUnit = false;
                opt.passiveDef = pdef;
                opt.nextLevel = lv + 1;
                opt.title = "🎒 携带物：" + pdef.nameCn;
                opt.subtitle = pdef.desc;
                opt.badge = "Lv." + opt.nextLevel;
                opt.accentColor = pdef.color;
                pool.add(opt);
            }
        }

        // Pick up to 3 distinct options
        while (currentChoices.size() < 3 && !pool.isEmpty()) {
            int pick = rng.nextInt(pool.size());
            currentChoices.add(pool.remove(pick));
        }
        if (!currentChoices.isEmpty()) {
            state = STATE_LEVEL_UP;
        }
    }

    private void applyUpgradeChoice(UpgradeOption opt) {
        if (opt.isUnit) {
            ActiveUnit target = null;
            for (ActiveUnit u : squad) {
                if (u.def.id.equals(opt.unitDef.id)) {
                    target = u;
                    break;
                }
            }
            if (target == null) {
                target = new ActiveUnit();
                target.def = opt.unitDef;
                target.level = 1;
                squad.add(target);
                state = STATE_PLAYING;
            } else {
                int oldStg = target.stageIndex();
                String oldName = target.currentName();
                target.level = opt.nextLevel;
                int newStg = target.stageIndex();
                if (newStg > oldStg) {
                    // Trigger Evolution Cut-in!
                    evoOldName = oldName;
                    evoNewName = target.currentName();
                    evoMoveName = target.def.moveNamesCn[newStg];
                    evoSpriteKey = target.currentSprite();
                    evoAccentColor = target.def.themeColor;
                    evoAnimTimer = 2.1f;
                    state = STATE_EVOLUTION_CUTIN;
                    SoundEngine.playEvolution();
                } else {
                    state = STATE_PLAYING;
                }
            }
        } else {
            passiveLevels.put(opt.passiveDef.id, opt.nextLevel);
            if ("leftovers".equals(opt.passiveDef.id)) {
                playerMaxHp += 25f;
                playerHp += 25f;
            }
            state = STATE_PLAYING;
        }
    }

    private Enemy findNearestEnemy(float x, float y) {
        Enemy best = null;
        float bestD2 = Float.MAX_VALUE;
        for (Enemy e : enemies) {
            if (e.hp <= 0) continue;
            float d2 = distSq(x, y, e.x, e.y);
            if (d2 < bestD2) {
                bestD2 = d2;
                best = e;
            }
        }
        return best;
    }

    private Enemy pickRandomEnemy() {
        if (enemies.isEmpty()) return null;
        return enemies.get(rng.nextInt(enemies.size()));
    }

    private float distSq(float x1, float y1, float x2, float y2) {
        float dx = x1 - x2;
        float dy = y1 - y2;
        return dx * dx + dy * dy;
    }

    private void addFloatText(float x, float y, String txt, int col, boolean large) {
        if (floatTexts.size() > 45) floatTexts.remove(0);
        FloatingText ft = new FloatingText();
        ft.x = x;
        ft.y = y;
        ft.vy = -48f * (dp / 2.75f);
        ft.life = large ? 1.35f : 0.65f;
        ft.text = txt;
        ft.color = col;
        ft.large = large;
        floatTexts.add(ft);
    }

    private void spawnParticle(float x, float y, float vx, float vy, int col, float size, float life) {
        if (particles.size() > 140) return;
        Particle p = new Particle();
        p.x = x;
        p.y = y;
        p.vx = vx;
        p.vy = vy;
        p.color = col;
        p.size = size;
        p.life = life;
        p.maxLife = life;
        particles.add(p);
    }

    private void spawnBurstParticles(float x, float y, int col, int count) {
        for (int i = 0; i < count; i++) {
            float a = rng.nextFloat() * (float) (Math.PI * 2);
            float spd = (40f + rng.nextFloat() * 140f) * (dp / 2.75f);
            spawnParticle(x, y, (float) Math.cos(a) * spd, (float) Math.sin(a) * spd, col, (4f + rng.nextFloat() * 5f) * dp, 0.35f + rng.nextFloat() * 0.25f);
        }
    }

    // ==================== RENDERING ====================
    private void renderGame(Canvas canvas) {
        if (canvas == null) return;

        if (state == STATE_TITLE_SELECT) {
            drawTitleSelectScreen(canvas);
            return;
        }
        if (state == STATE_LAB_UPGRADE) {
            drawLabUpgradeScreen(canvas);
            return;
        }

        // Camera offset so player is centered
        float camX = playerX - screenW / 2f;
        float camY = playerY - screenH / 2f;

        // 1. Draw Viridian Forest HD-2D Pixel Tiled Biome
        drawPixelBiomeFloor(canvas, camX, camY);

        // 2. Draw Elemental Ground Zones
        for (GroundZone gz : groundZones) {
            float sx = gz.x - camX;
            float sy = gz.y - camY;
            uiPaint.setStyle(Paint.Style.FILL);
            uiPaint.setColor(gz.color);
            uiPaint.setAlpha((int) (95 * (gz.life / gz.maxLife)));
            canvas.drawCircle(sx, sy, gz.radius, uiPaint);
            uiPaint.setStyle(Paint.Style.STROKE);
            uiPaint.setStrokeWidth(2.5f * dp);
            uiPaint.setAlpha((int) (190 * (gz.life / gz.maxLife)));
            canvas.drawCircle(sx, sy, gz.radius, uiPaint);
        }
        uiPaint.setAlpha(255);

        // 3. Draw Drops (Exp Candies, Sitrus Berries, Coins)
        for (DropGem d : drops) {
            float sx = d.x - camX;
            float sy = d.y - camY;
            if (sx < -30 || sx > screenW + 30 || sy < -30 || sy > screenH + 30) continue;
            uiPaint.setStyle(Paint.Style.FILL);
            if (d.type == 3) {
                uiPaint.setColor(Color.parseColor("#FFBE0B"));
                canvas.drawCircle(sx, sy, 8.5f * dp, uiPaint);
            } else if (d.type == 4) {
                uiPaint.setColor(Color.parseColor("#FFD166"));
                canvas.drawCircle(sx, sy, 7.5f * dp, uiPaint);
            } else {
                int col = (d.type == 2) ? Color.parseColor("#FF4D6D") : (d.type == 1 ? Color.parseColor("#00F5D4") : Color.parseColor("#4CC9F0"));
                uiPaint.setColor(col);
                float r = (d.type == 2 ? 8.5f : (d.type == 1 ? 6.8f : 5.2f)) * dp;
                canvas.drawRect(sx - r, sy - r, sx + r, sy + r, uiPaint);
            }
        }

        // 4. Draw Wild Enemies & Bosses
        int animFrame = (int) ((System.currentTimeMillis() / 135) % 4);
        for (Enemy e : enemies) {
            float sx = e.x - camX;
            float sy = e.y - camY;
            if (sx < -90 * dp || sx > screenW + 90 * dp || sy < -90 * dp || sy > screenH + 90 * dp) continue;

            // Shadow
            uiPaint.setStyle(Paint.Style.FILL);
            uiPaint.setColor(Color.argb(115, 0, 0, 0));
            canvas.drawOval(new RectF(sx - e.radius * 0.8f, sy + e.radius * 0.55f, sx + e.radius * 0.8f, sy + e.radius * 0.95f), uiPaint);

            Paint sprPaint = (e.hitFlash > 0f) ? hitFlashPaint : (e.isShiny ? shinyPaint : pixelPaint);
            float drawSize = (e.isBoss ? 92f : (e.isShiny ? 58f : 44f)) * dp;
            drawSpriteFrame(canvas, e.spriteKey, animFrame, sx, sy, drawSize, e.vx < 0, sprPaint);

            if (e.isBoss || e.isShiny) {
                // Boss / Shiny HP bar
                float bw = (e.isBoss ? 76f : 42f) * dp;
                float bh = 5.5f * dp;
                float bx = sx - bw / 2f;
                float by = sy - drawSize * 0.56f;
                uiPaint.setColor(Color.argb(180, 10, 10, 15));
                canvas.drawRoundRect(new RectF(bx, by, bx + bw, by + bh), 3 * dp, 3 * dp, uiPaint);
                uiPaint.setColor(e.isShiny ? Color.parseColor("#FFD166") : Color.parseColor("#FF4D6D"));
                canvas.drawRoundRect(new RectF(bx, by, bx + bw * Math.max(0f, e.hp / e.maxHp), by + bh), 3 * dp, 3 * dp, uiPaint);
            }
        }

        // 5. Draw Squad Partners & Leader Pokemon
        for (int i = squad.size() - 1; i >= 0; i--) {
            ActiveUnit u = squad.get(i);
            float ux = playerX;
            float uy = playerY;
            if (i > 0) {
                float a = u.orbitAngle + (i * (float) (2 * Math.PI / Math.max(1, squad.size() - 1)));
                float dist = 62f * dp;
                ux = playerX + (float) Math.cos(a) * dist;
                uy = playerY + (float) Math.sin(a) * dist;
            }
            float sx = ux - camX;
            float sy = uy - camY;

            // Aura ring under active unit
            uiPaint.setStyle(Paint.Style.STROKE);
            uiPaint.setStrokeWidth((i == 0 ? 2.5f : 1.5f) * dp);
            uiPaint.setColor(u.def.themeColor);
            uiPaint.setAlpha(i == 0 ? 185 : 120);
            float auraR = (i == 0 ? 26f : 18f) * dp;
            canvas.drawCircle(sx, sy + 14 * dp, auraR, uiPaint);
            uiPaint.setAlpha(255);

            float size = (i == 0 ? (58f + u.stageIndex() * 6f) : (44f + u.stageIndex() * 4f)) * dp;
            drawSpriteFrame(canvas, u.currentSprite(), animFrame, sx, sy, size, playerFlipX, pixelPaint);
        }

        // Player HP Bar under Leader
        float pbx = screenW / 2f - 30f * dp;
        float pby = screenH / 2f + 34f * dp;
        uiPaint.setStyle(Paint.Style.FILL);
        uiPaint.setColor(Color.argb(190, 12, 14, 20));
        canvas.drawRoundRect(new RectF(pbx, pby, pbx + 60f * dp, pby + 6.5f * dp), 3 * dp, 3 * dp, uiPaint);
        uiPaint.setColor(Color.parseColor("#38B000"));
        canvas.drawRoundRect(new RectF(pbx, pby, pbx + 60f * dp * (playerHp / playerMaxHp), pby + 6.5f * dp), 3 * dp, 3 * dp, uiPaint);

        // 6. Draw Projectiles & Pixel Particles
        for (Projectile p : projectiles) {
            float sx = p.x - camX;
            float sy = p.y - camY;
            uiPaint.setStyle(Paint.Style.FILL);
            uiPaint.setColor(p.color);
            uiPaint.setAlpha(215);
            canvas.drawCircle(sx, sy, p.radius, uiPaint);
            uiPaint.setColor(Color.WHITE);
            uiPaint.setAlpha(240);
            canvas.drawCircle(sx, sy, p.radius * 0.48f, uiPaint);
        }
        uiPaint.setAlpha(255);

        for (Particle pt : particles) {
            float sx = pt.x - camX;
            float sy = pt.y - camY;
            uiPaint.setColor(pt.color);
            uiPaint.setAlpha((int) (255 * (pt.life / pt.maxLife)));
            canvas.drawRect(sx - pt.size / 2, sy - pt.size / 2, sx + pt.size / 2, sy + pt.size / 2, uiPaint);
        }
        uiPaint.setAlpha(255);

        // 7. Draw Floating Damage Numbers
        for (FloatingText ft : floatTexts) {
            float sx = ft.x - camX;
            float sy = ft.y - camY;
            textPaint.setTextSize((ft.large ? 15.5f : 11.5f) * dp);
            textPaint.setTextAlign(Paint.Align.CENTER);
            textPaint.setColor(Color.BLACK);
            canvas.drawText(ft.text, sx + 1.5f * dp, sy + 1.5f * dp, textPaint);
            textPaint.setColor(ft.color);
            canvas.drawText(ft.text, sx, sy, textPaint);
        }

        // 8. Draw Top HUD, Virtual Joystick & Dash Button
        drawBattleHud(canvas);

        // 9. Draw Overlays (Level Up / Evolution Cut-in / Game Over)
        if (state == STATE_LEVEL_UP) {
            drawLevelUpOverlay(canvas);
        } else if (state == STATE_EVOLUTION_CUTIN) {
            drawEvolutionCutinOverlay(canvas);
        } else if (state == STATE_GAME_OVER) {
            drawGameOverOverlay(canvas);
        }
    }

    private final Rect srcRect = new Rect();
    private final RectF dstRect = new RectF();
    private final Matrix flipMatrix = new Matrix();

    private void drawSpriteFrame(Canvas canvas, String key, int frameIdx, float cx, float cy, float size, boolean flipX, Paint paint) {
        Bitmap strip = spriteStrips.get(key);
        if (strip == null) return;
        int fx = (frameIdx % 4) * 64;
        srcRect.set(fx, 0, fx + 64, 64);
        float half = size / 2f;
        if (flipX) {
            canvas.save();
            canvas.translate(cx, cy);
            canvas.scale(-1f, 1f);
            dstRect.set(-half, -half, half, half);
            canvas.drawBitmap(strip, srcRect, dstRect, paint);
            canvas.restore();
        } else {
            dstRect.set(cx - half, cy - half, cx + half, cy + half);
            canvas.drawBitmap(strip, srcRect, dstRect, paint);
        }
    }

    private void drawPixelBiomeFloor(Canvas canvas, float camX, float camY) {
        canvas.drawColor(Color.parseColor("#16261E"));
        float tile = 64f * dp;
        int startCol = (int) Math.floor(camX / tile) - 1;
        int endCol = startCol + (int) (screenW / tile) + 3;
        int startRow = (int) Math.floor(camY / tile) - 1;
        int endRow = startRow + (int) (screenH / tile) + 3;

        uiPaint.setStyle(Paint.Style.FILL);
        for (int r = startRow; r <= endRow; r++) {
            for (int c = startCol; c <= endCol; c++) {
                float tx = c * tile - camX;
                float ty = r * tile - camY;
                int hash = Math.abs(c * 73856093 ^ r * 19349663);
                if ((c + r) % 2 == 0) {
                    uiPaint.setColor(Color.parseColor("#1A2D23"));
                    canvas.drawRect(tx, ty, tx + tile, ty + tile, uiPaint);
                }
                // Pixel grass tufts & stone relics
                if (hash % 7 == 0) {
                    uiPaint.setColor(Color.parseColor("#264234"));
                    float s = 6f * dp;
                    canvas.drawRect(tx + 18 * dp, ty + 20 * dp, tx + 18 * dp + s, ty + 20 * dp + s * 2, uiPaint);
                    canvas.drawRect(tx + 26 * dp, ty + 16 * dp, tx + 26 * dp + s, ty + 16 * dp + s * 2, uiPaint);
                } else if (hash % 19 == 0) {
                    uiPaint.setColor(Color.parseColor("#2B3330"));
                    canvas.drawRoundRect(new RectF(tx + 14 * dp, ty + 14 * dp, tx + 36 * dp, ty + 30 * dp), 4 * dp, 4 * dp, uiPaint);
                }
            }
        }
    }

    private void drawBattleHud(Canvas canvas) {
        // Top EXP Bar
        float expRatio = Math.min(1f, runExp / (float) Math.max(1, runExpNext));
        uiPaint.setStyle(Paint.Style.FILL);
        uiPaint.setColor(Color.parseColor("#0D131A"));
        canvas.drawRect(0, 0, screenW, 28 * dp, uiPaint);
        uiPaint.setColor(Color.parseColor("#00F5D4"));
        canvas.drawRect(0, 0, screenW * expRatio, 8 * dp, uiPaint);

        // Timer, Level, Kills & Coins
        int mins = (int) (runTimeSec / 60);
        int secs = (int) (runTimeSec % 60);
        textPaint.setTextSize(13.5f * dp);
        textPaint.setTextAlign(Paint.Align.LEFT);
        textPaint.setColor(Color.WHITE);
        canvas.drawText(String.format(Locale.US, "⏱ %02d:%02d   Lv.%d", mins, secs, runLevel), 14 * dp, 23 * dp, textPaint);

        textPaint.setTextAlign(Paint.Align.RIGHT);
        textPaint.setColor(Color.parseColor("#FFD166"));
        canvas.drawText("击败 " + runKills + "   💰 " + runCoins, screenW - 14 * dp, 23 * dp, textPaint);

        // Squad Bar (6 Pokeball Slots)
        float slotY = 36 * dp;
        float slotSize = 40 * dp;
        for (int i = 0; i < 6; i++) {
            float sx = 14 * dp + i * (slotSize + 6 * dp);
            uiPaint.setColor(Color.argb(185, 16, 20, 28));
            canvas.drawRoundRect(new RectF(sx, slotY, sx + slotSize, slotY + slotSize), 6 * dp, 6 * dp, uiPaint);
            if (i < squad.size()) {
                ActiveUnit u = squad.get(i);
                uiPaint.setStyle(Paint.Style.STROKE);
                uiPaint.setStrokeWidth(1.5f * dp);
                uiPaint.setColor(u.def.themeColor);
                canvas.drawRoundRect(new RectF(sx, slotY, sx + slotSize, slotY + slotSize), 6 * dp, 6 * dp, uiPaint);
                uiPaint.setStyle(Paint.Style.FILL);
                drawSpriteFrame(canvas, u.currentSprite(), 0, sx + slotSize / 2, slotY + slotSize / 2, slotSize * 0.9f, false, pixelPaint);
                textPaint.setTextSize(9f * dp);
                textPaint.setTextAlign(Paint.Align.RIGHT);
                textPaint.setColor(Color.WHITE);
                canvas.drawText("L" + u.level, sx + slotSize - 3 * dp, slotY + slotSize - 3 * dp, textPaint);
            }
        }

        // Virtual Joystick Indicator
        if (joyActive) {
            uiPaint.setStyle(Paint.Style.STROKE);
            uiPaint.setStrokeWidth(2f * dp);
            uiPaint.setColor(Color.argb(120, 255, 255, 255));
            canvas.drawCircle(joyOriginX, joyOriginY, 48 * dp, uiPaint);
            uiPaint.setStyle(Paint.Style.FILL);
            uiPaint.setColor(Color.argb(180, 0, 245, 212));
            canvas.drawCircle(joyCurrX, joyCurrY, 20 * dp, uiPaint);
        }

        // Bottom-Right Dash Skill Button ("电光一闪")
        float dashCx = screenW - 64 * dp;
        float dashCy = screenH - 86 * dp;
        float dashR = 36 * dp;
        uiPaint.setStyle(Paint.Style.FILL);
        uiPaint.setColor(dashCooldown <= 0f ? Color.parseColor("#00BBF9") : Color.argb(140, 40, 50, 65));
        canvas.drawCircle(dashCx, dashCy, dashR, uiPaint);
        uiPaint.setStyle(Paint.Style.STROKE);
        uiPaint.setStrokeWidth(2.5f * dp);
        uiPaint.setColor(Color.WHITE);
        canvas.drawCircle(dashCx, dashCy, dashR, uiPaint);
        textPaint.setTextAlign(Paint.Align.CENTER);
        textPaint.setTextSize(11.5f * dp);
        textPaint.setColor(Color.WHITE);
        canvas.drawText(dashCooldown <= 0f ? "⚡冲刺" : String.format(Locale.US, "%.1fs", dashCooldown), dashCx, dashCy + 4 * dp, textPaint);
    }

    private void drawTitleSelectScreen(Canvas canvas) {
        canvas.drawColor(Color.parseColor("#0E131F"));

        // Header Title
        textPaint.setTextAlign(Paint.Align.CENTER);
        textPaint.setTextSize(25f * dp);
        textPaint.setColor(Color.parseColor("#FFD166"));
        canvas.drawText("宝可梦：遗迹幸存者", screenW / 2f, 58 * dp, textPaint);

        textPaint.setTextSize(11.5f * dp);
        textPaint.setColor(Color.parseColor("#8ECAE6"));
        canvas.drawText("HD-2D 像素小队肉鸽割草 · 三段进化 & 元素反应", screenW / 2f, 80 * dp, textPaint);

        // Stats Bar
        textPaint.setTextSize(12.5f * dp);
        textPaint.setColor(Color.WHITE);
        canvas.drawText("💰 研究所金币: " + totalSavedCoins + "     ✨ 已收服闪光: " + shinyCapturedCount, screenW / 2f, 106 * dp, textPaint);

        // 8 Starter Cards Grid (2 Columns x 4 Rows)
        float padX = 16 * dp;
        float gap = 10 * dp;
        float cardW = (screenW - padX * 2 - gap) / 2f;
        float cardH = 92 * dp;
        float startY = 124 * dp;
        int animFrame = (int) ((System.currentTimeMillis() / 150) % 4);

        for (int i = 0; i < UNIT_CATALOG.length; i++) {
            int r = i / 2;
            int c = i % 2;
            float x = padX + c * (cardW + gap);
            float y = startY + r * (cardH + gap);
            classUnitDef def = UNIT_CATALOG[i];
            boolean sel = (i == selectedStarterIdx);

            uiPaint.setStyle(Paint.Style.FILL);
            uiPaint.setColor(sel ? Color.parseColor("#1D2D44") : Color.parseColor("#151C28"));
            canvas.drawRoundRect(new RectF(x, y, x + cardW, y + cardH), 10 * dp, 10 * dp, uiPaint);

            uiPaint.setStyle(Paint.Style.STROKE);
            uiPaint.setStrokeWidth((sel ? 2.5f : 1f) * dp);
            uiPaint.setColor(sel ? def.themeColor : Color.parseColor("#2B3648"));
            canvas.drawRoundRect(new RectF(x, y, x + cardW, y + cardH), 10 * dp, 10 * dp, uiPaint);

            drawSpriteFrame(canvas, def.stageSprites[0], animFrame, x + 34 * dp, y + cardH / 2f, 54 * dp, false, pixelPaint);

            textPaint.setTextAlign(Paint.Align.LEFT);
            textPaint.setTextSize(14f * dp);
            textPaint.setColor(Color.WHITE);
            canvas.drawText(def.stageNamesCn[0], x + 64 * dp, y + 28 * dp, textPaint);

            textPaint.setTextSize(10f * dp);
            textPaint.setColor(def.themeColor);
            canvas.drawText("进化: " + def.stageNamesCn[2], x + 64 * dp, y + 48 * dp, textPaint);

            textPaint.setTextSize(9.5f * dp);
            textPaint.setColor(Color.parseColor("#A8B2C1"));
            canvas.drawText(def.moveNamesCn[0] + " ➔ " + def.moveNamesCn[2], x + 64 * dp, y + 68 * dp, textPaint);
        }

        // Bottom Buttons: [大木博士研究所 (升级)] & [出发冒险 (开始战斗)]
        float btnY = startY + 4 * (cardH + gap) + 12 * dp;
        float btnH = 48 * dp;

        // Lab Upgrade Button
        RectF labRect = new RectF(padX, btnY, padX + cardW, btnY + btnH);
        uiPaint.setStyle(Paint.Style.FILL);
        uiPaint.setColor(Color.parseColor("#243B55"));
        canvas.drawRoundRect(labRect, 10 * dp, 10 * dp, uiPaint);
        uiPaint.setStyle(Paint.Style.STROKE);
        uiPaint.setColor(Color.parseColor("#00BBF9"));
        canvas.drawRoundRect(labRect, 10 * dp, 10 * dp, uiPaint);
        textPaint.setTextAlign(Paint.Align.CENTER);
        textPaint.setTextSize(14f * dp);
        textPaint.setColor(Color.WHITE);
        canvas.drawText("🔬 研究所强化", labRect.centerX(), labRect.centerY() + 5 * dp, textPaint);

        // Start Run Button
        RectF startRect = new RectF(padX + cardW + gap, btnY, screenW - padX, btnY + btnH);
        uiPaint.setStyle(Paint.Style.FILL);
        uiPaint.setColor(Color.parseColor("#00F5D4"));
        canvas.drawRoundRect(startRect, 10 * dp, 10 * dp, uiPaint);
        textPaint.setColor(Color.parseColor("#091018"));
        canvas.drawText("⚡ 立即出击", startRect.centerX(), startRect.centerY() + 5 * dp, textPaint);
    }

    private void drawLabUpgradeScreen(Canvas canvas) {
        canvas.drawColor(Color.parseColor("#0E131F"));
        textPaint.setTextAlign(Paint.Align.CENTER);
        textPaint.setTextSize(22f * dp);
        textPaint.setColor(Color.parseColor("#00F5D4"));
        canvas.drawText("🔬 大木博士研究所 · 永久特训", screenW / 2f, 62 * dp, textPaint);

        textPaint.setTextSize(14f * dp);
        textPaint.setColor(Color.parseColor("#FFD166"));
        canvas.drawText("可用宝可梦金币: 💰 " + totalSavedCoins, screenW / 2f, 94 * dp, textPaint);

        String[] titles = {
                "⚔ 攻击努力值特训 (Lv." + metaAtkLv + ")",
                "❤ 体力努力值特训 (Lv." + metaHpLv + ")",
                "👟 敏捷努力值特训 (Lv." + metaSpdLv + ")",
                "🧲 学习装置磁场 (Lv." + metaExpLv + ")"
        };
        String[] descs = {
                "全队所有招式基础伤害永久 +12% / 级",
                "初始最大生命值永久 +25 HP / 级",
                "领队移动速度永久 +8% / 级",
                "经验糖果拾取半径永久 +22 / 级"
        };
        int[] costs = {
                100 + metaAtkLv * 80,
                100 + metaHpLv * 80,
                100 + metaSpdLv * 80,
                100 + metaExpLv * 80
        };

        float padX = 20 * dp;
        float startY = 126 * dp;
        float rowH = 78 * dp;
        for (int i = 0; i < 4; i++) {
            float y = startY + i * (rowH + 14 * dp);
            RectF card = new RectF(padX, y, screenW - padX, y + rowH);
            uiPaint.setStyle(Paint.Style.FILL);
            uiPaint.setColor(Color.parseColor("#172234"));
            canvas.drawRoundRect(card, 10 * dp, 10 * dp, uiPaint);

            textPaint.setTextAlign(Paint.Align.LEFT);
            textPaint.setTextSize(14.5f * dp);
            textPaint.setColor(Color.WHITE);
            canvas.drawText(titles[i], padX + 16 * dp, y + 30 * dp, textPaint);

            textPaint.setTextSize(11f * dp);
            textPaint.setColor(Color.parseColor("#98A6B8"));
            canvas.drawText(descs[i], padX + 16 * dp, y + 54 * dp, textPaint);

            RectF buyBtn = new RectF(screenW - padX - 96 * dp, y + 18 * dp, screenW - padX - 14 * dp, y + rowH - 18 * dp);
            uiPaint.setColor(totalSavedCoins >= costs[i] ? Color.parseColor("#FFD166") : Color.parseColor("#2E3846"));
            canvas.drawRoundRect(buyBtn, 7 * dp, 7 * dp, uiPaint);
            textPaint.setTextAlign(Paint.Align.CENTER);
            textPaint.setTextSize(12f * dp);
            textPaint.setColor(totalSavedCoins >= costs[i] ? Color.parseColor("#10141C") : Color.GRAY);
            canvas.drawText("💰" + costs[i], buyBtn.centerX(), buyBtn.centerY() + 4 * dp, textPaint);
        }

        // Back Button
        RectF backBtn = new RectF(padX, startY + 4 * (rowH + 14 * dp) + 16 * dp, screenW - padX, startY + 4 * (rowH + 14 * dp) + 64 * dp);
        uiPaint.setColor(Color.parseColor("#2B394E"));
        canvas.drawRoundRect(backBtn, 10 * dp, 10 * dp, uiPaint);
        textPaint.setTextAlign(Paint.Align.CENTER);
        textPaint.setTextSize(14f * dp);
        textPaint.setColor(Color.WHITE);
        canvas.drawText("返回出击选择", backBtn.centerX(), backBtn.centerY() + 5 * dp, textPaint);
    }

    private void drawLevelUpOverlay(Canvas canvas) {
        uiPaint.setStyle(Paint.Style.FILL);
        uiPaint.setColor(Color.argb(210, 8, 10, 16));
        canvas.drawRect(0, 0, screenW, screenH, uiPaint);

        textPaint.setTextAlign(Paint.Align.CENTER);
        textPaint.setTextSize(22f * dp);
        textPaint.setColor(Color.parseColor("#FFD166"));
        canvas.drawText("LEVEL UP! 选择强化或同伴", screenW / 2f, 110 * dp, textPaint);

        float padX = 22 * dp;
        float startY = 145 * dp;
        float cardH = 98 * dp;
        int animFrame = (int) ((System.currentTimeMillis() / 140) % 4);

        for (int i = 0; i < currentChoices.size(); i++) {
            UpgradeOption opt = currentChoices.get(i);
            float y = startY + i * (cardH + 16 * dp);
            RectF r = new RectF(padX, y, screenW - padX, y + cardH);

            uiPaint.setStyle(Paint.Style.FILL);
            uiPaint.setColor(Color.parseColor("#182232"));
            canvas.drawRoundRect(r, 12 * dp, 12 * dp, uiPaint);

            uiPaint.setStyle(Paint.Style.STROKE);
            uiPaint.setStrokeWidth(2f * dp);
            uiPaint.setColor(opt.accentColor);
            canvas.drawRoundRect(r, 12 * dp, 12 * dp, uiPaint);

            if (opt.isUnit) {
                int stg = (opt.nextLevel >= 8) ? 3 : (opt.nextLevel >= 5 ? 2 : (opt.nextLevel >= 3 ? 1 : 0));
                drawSpriteFrame(canvas, opt.unitDef.stageSprites[stg], animFrame, padX + 42 * dp, y + cardH / 2f, 62 * dp, false, pixelPaint);
            } else {
                uiPaint.setStyle(Paint.Style.FILL);
                uiPaint.setColor(opt.accentColor);
                canvas.drawCircle(padX + 42 * dp, y + cardH / 2f, 20 * dp, uiPaint);
            }

            textPaint.setTextAlign(Paint.Align.LEFT);
            textPaint.setTextSize(15f * dp);
            textPaint.setColor(Color.WHITE);
            canvas.drawText(opt.title, padX + 82 * dp, y + 36 * dp, textPaint);

            textPaint.setTextSize(11f * dp);
            textPaint.setColor(Color.parseColor("#A8B4C4"));
            canvas.drawText(opt.subtitle, padX + 82 * dp, y + 64 * dp, textPaint);

            textPaint.setTextAlign(Paint.Align.RIGHT);
            textPaint.setTextSize(11.5f * dp);
            textPaint.setColor(opt.accentColor);
            canvas.drawText(opt.badge, screenW - padX - 14 * dp, y + 34 * dp, textPaint);
        }
    }

    private void drawEvolutionCutinOverlay(Canvas canvas) {
        uiPaint.setStyle(Paint.Style.FILL);
        uiPaint.setColor(Color.argb(230, 6, 8, 14));
        canvas.drawRect(0, 0, screenW, screenH, uiPaint);

        float cx = screenW / 2f;
        float cy = screenH * 0.44f;
        uiPaint.setColor(evoAccentColor);
        uiPaint.setAlpha(75);
        canvas.drawCircle(cx, cy, 115 * dp, uiPaint);
        uiPaint.setAlpha(255);

        int animFrame = (int) ((System.currentTimeMillis() / 110) % 4);
        drawSpriteFrame(canvas, evoSpriteKey, animFrame, cx, cy, 145 * dp, false, pixelPaint);

        textPaint.setTextAlign(Paint.Align.CENTER);
        textPaint.setTextSize(23f * dp);
        textPaint.setColor(Color.parseColor("#FFD166"));
        canvas.drawText("✨ 恭喜！" + evoOldName + " 进化成了", cx, cy - 125 * dp, textPaint);

        textPaint.setTextSize(28f * dp);
        textPaint.setColor(Color.WHITE);
        canvas.drawText("【 " + evoNewName + " 】", cx, cy + 110 * dp, textPaint);

        textPaint.setTextSize(14f * dp);
        textPaint.setColor(evoAccentColor);
        canvas.drawText("领悟觉醒招式：《" + evoMoveName + "》", cx, cy + 142 * dp, textPaint);
    }

    private void drawGameOverOverlay(Canvas canvas) {
        uiPaint.setStyle(Paint.Style.FILL);
        uiPaint.setColor(Color.argb(220, 8, 10, 16));
        canvas.drawRect(0, 0, screenW, screenH, uiPaint);

        float cx = screenW / 2f;
        float cy = screenH * 0.42f;
        textPaint.setTextAlign(Paint.Align.CENTER);
        textPaint.setTextSize(26f * dp);
        textPaint.setColor(Color.parseColor("#FF4D6D"));
        canvas.drawText("本局冒险结束", cx, cy - 60 * dp, textPaint);

        textPaint.setTextSize(15f * dp);
        textPaint.setColor(Color.WHITE);
        canvas.drawText("坚持时间: " + (int) (runTimeSec / 60) + "分" + (int) (runTimeSec % 60) + "秒   ·   达到等级 Lv." + runLevel, cx, cy - 15 * dp, textPaint);
        canvas.drawText("击败野生宝可梦: " + runKills + "   ·   获得金币: 💰" + runCoins, cx, cy + 18 * dp, textPaint);

        RectF retryBtn = new RectF(cx - 110 * dp, cy + 60 * dp, cx + 110 * dp, cy + 112 * dp);
        uiPaint.setColor(Color.parseColor("#00F5D4"));
        canvas.drawRoundRect(retryBtn, 10 * dp, 10 * dp, uiPaint);
        textPaint.setColor(Color.parseColor("#0B1018"));
        textPaint.setTextSize(15f * dp);
        canvas.drawText("返回基地 & 强化", retryBtn.centerX(), retryBtn.centerY() + 5 * dp, textPaint);
    }

    // ==================== TOUCH INPUT ====================
    @Override
    public boolean onTouchEvent(MotionEvent event) {
        float tx = event.getX();
        float ty = event.getY();
        int action = event.getActionMasked();

        if (state == STATE_TITLE_SELECT) {
            if (action == MotionEvent.ACTION_DOWN) {
                float padX = 16 * dp;
                float gap = 10 * dp;
                float cardW = (screenW - padX * 2 - gap) / 2f;
                float cardH = 92 * dp;
                float startY = 124 * dp;

                for (int i = 0; i < UNIT_CATALOG.length; i++) {
                    int r = i / 2;
                    int c = i % 2;
                    float x = padX + c * (cardW + gap);
                    float y = startY + r * (cardH + gap);
                    if (tx >= x && tx <= x + cardW && ty >= y && ty <= y + cardH) {
                        selectedStarterIdx = i;
                        SoundEngine.playPickupGem();
                        return true;
                    }
                }

                float btnY = startY + 4 * (cardH + gap) + 12 * dp;
                float btnH = 48 * dp;
                if (ty >= btnY && ty <= btnY + btnH) {
                    if (tx < screenW / 2f) {
                        state = STATE_LAB_UPGRADE;
                        SoundEngine.playPickupGem();
                    } else {
                        startNewRun(selectedStarterIdx);
                    }
                }
            }
            return true;
        }

        if (state == STATE_LAB_UPGRADE) {
            if (action == MotionEvent.ACTION_DOWN) {
                float padX = 20 * dp;
                float startY = 126 * dp;
                float rowH = 78 * dp;
                int[] costs = {
                        100 + metaAtkLv * 80,
                        100 + metaHpLv * 80,
                        100 + metaSpdLv * 80,
                        100 + metaExpLv * 80
                };
                for (int i = 0; i < 4; i++) {
                    float y = startY + i * (rowH + 14 * dp);
                    if (tx >= padX && tx <= screenW - padX && ty >= y && ty <= y + rowH) {
                        if (totalSavedCoins >= costs[i]) {
                            totalSavedCoins -= costs[i];
                            if (i == 0) metaAtkLv++;
                            else if (i == 1) metaHpLv++;
                            else if (i == 2) metaSpdLv++;
                            else metaExpLv++;
                            saveMeta();
                            SoundEngine.playLevelUp();
                        }
                        return true;
                    }
                }
                float backY = startY + 4 * (rowH + 14 * dp) + 16 * dp;
                if (ty >= backY && ty <= backY + 52 * dp) {
                    state = STATE_TITLE_SELECT;
                }
            }
            return true;
        }

        if (state == STATE_LEVEL_UP) {
            if (action == MotionEvent.ACTION_DOWN) {
                float padX = 22 * dp;
                float startY = 145 * dp;
                float cardH = 98 * dp;
                for (int i = 0; i < currentChoices.size(); i++) {
                    float y = startY + i * (cardH + 16 * dp);
                    if (tx >= padX && tx <= screenW - padX && ty >= y && ty <= y + cardH) {
                        applyUpgradeChoice(currentChoices.get(i));
                        return true;
                    }
                }
            }
            return true;
        }

        if (state == STATE_EVOLUTION_CUTIN) {
            if (action == MotionEvent.ACTION_DOWN && evoAnimTimer < 1.5f) {
                state = STATE_PLAYING;
            }
            return true;
        }

        if (state == STATE_GAME_OVER) {
            if (action == MotionEvent.ACTION_DOWN) {
                state = STATE_TITLE_SELECT;
            }
            return true;
        }

        // STATE_PLAYING Touch Controls: Dash Button & Virtual Joystick
        float dashCx = screenW - 64 * dp;
        float dashCy = screenH - 86 * dp;
        if (action == MotionEvent.ACTION_DOWN && distSq(tx, ty, dashCx, dashCy) <= (44 * dp) * (44 * dp)) {
            if (dashCooldown <= 0f) {
                dashActiveTimer = 0.28f;
                dashCooldown = 3.2f;
                SoundEngine.playDash();
            }
            return true;
        }

        switch (action) {
            case MotionEvent.ACTION_DOWN:
                joyActive = true;
                joyOriginX = tx;
                joyOriginY = ty;
                joyCurrX = tx;
                joyCurrY = ty;
                joyDx = 0f;
                joyDy = 0f;
                break;
            case MotionEvent.ACTION_MOVE:
                if (joyActive) {
                    float dx = tx - joyOriginX;
                    float dy = ty - joyOriginY;
                    float dist = (float) Math.hypot(dx, dy);
                    float maxR = 48f * dp;
                    if (dist > 1f) {
                        joyDx = dx / dist;
                        joyDy = dy / dist;
                        float clamp = Math.min(dist, maxR);
                        joyCurrX = joyOriginX + joyDx * clamp;
                        joyCurrY = joyOriginY + joyDy * clamp;
                    }
                }
                break;
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_CANCEL:
                joyActive = false;
                joyDx = 0f;
                joyDy = 0f;
                break;
        }
        return true;
    }

    @Override
    public void run() {
        long lastTime = System.nanoTime();
        while (running) {
            long now = System.nanoTime();
            float dt = (now - lastTime) / 1_000_000_000f;
            lastTime = now;
            if (dt > 0.06f) dt = 0.06f;

            updateGame(dt);

            Canvas canvas = null;
            try {
                canvas = holder.lockCanvas();
                if (canvas != null) {
                    synchronized (holder) {
                        renderGame(canvas);
                    }
                }
            } catch (Exception ignored) {
            } finally {
                if (canvas != null) {
                    try {
                        holder.unlockCanvasAndPost(canvas);
                    } catch (Exception ignored) {
                    }
                }
            }

            try {
                Thread.sleep(8);
            } catch (InterruptedException ignored) {
            }
        }
    }

    public void resume() {
        running = true;
        gameThread = new Thread(this);
        gameThread.start();
    }

    public void pause() {
        running = false;
        SoundEngine.stopBgm();
        try {
            if (gameThread != null) gameThread.join(400);
        } catch (InterruptedException ignored) {
        }
    }

    @Override
    public void surfaceCreated(SurfaceHolder h) {
        Rect frame = h.getSurfaceFrame();
        screenW = frame.width();
        screenH = frame.height();
        dp = getResources().getDisplayMetrics().density;
    }

    @Override
    public void surfaceChanged(SurfaceHolder h, int format, int width, int height) {
        screenW = width;
        screenH = height;
        dp = getResources().getDisplayMetrics().density;
    }

    @Override
    public void surfaceDestroyed(SurfaceHolder h) {
    }
}
