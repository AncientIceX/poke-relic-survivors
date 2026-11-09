const SPRITE_META = {"1":[0,40,40,6],"2":[0,32,32,4],"3":[0,32,32,4],"4":[0,32,32,4],"5":[0,24,32,4],"6":[0,40,48,4],"7":[0,32,32,4],"8":[0,32,40,4],"9":[0,32,40,4],"10":[0,32,32,3],"11":[0,32,48,10],"12":[0,32,56,12],"13":[0,32,40,3],"14":[0,24,40,5],"15":[0,32,48,4],"16":[0,32,32,5],"17":[0,32,40,4],"18":[0,32,40,4],"19":[0,48,40,7],"20":[0,40,48,6],"21":[0,32,40,5],"22":[0,40,64,6],"23":[0,40,48,6],"24":[0,40,56,6],"25":[0,32,40,4],"26":[0,40,48,4],"27":[0,32,32,4],"28":[0,32,40,4],"29":[0,40,48,7],"30":[0,24,32,4],"31":[0,32,40,4],"32":[0,40,48,6],"33":[0,40,40,4],"34":[0,40,48,4],"35":[0,24,40,8],"36":[0,32,48,8],"37":[0,32,40,5],"38":[0,40,40,4],"39":[0,32,40,5],"40":[0,32,40,4],"41":[0,32,56,8],"42":[0,40,64,8],"43":[0,24,40,8],"44":[0,32,32,4],"45":[0,32,32,4],"46":[0,32,24,4],"47":[0,32,32,4],"48":[0,32,48,5],"49":[0,40,48,12],"50":[0,40,40,3],"51":[0,56,48,3],"52":[0,24,32,4],"53":[0,32,40,4],"54":[0,24,40,4],"55":[0,32,40,4],"56":[0,32,56,8],"57":[0,32,40,4],"58":[0,32,40,4],"59":[0,32,48,4],"60":[0,32,40,5],"61":[0,32,40,4],"62":[0,40,40,4],"63":[0,32,48,8],"64":[0,40,40,4],"65":[0,32,40,4],"66":[0,24,32,4],"67":[0,32,48,4],"68":[0,32,48,4],"69":[0,24,32,4],"70":[0,32,32,4],"71":[0,32,56,4],"72":[0,24,40,4],"73":[0,32,40,4],"74":[0,32,32,4],"75":[0,32,48,4],"76":[0,32,40,4],"77":[0,32,40,4],"78":[0,40,56,4],"79":[0,24,32,4],"80":[0,32,40,4],"81":[0,24,32,6],"82":[0,32,48,8],"83":[0,24,32,4],"84":[0,32,40,4],"85":[0,32,48,4],"86":[0,32,40,7],"87":[0,40,48,7],"88":[0,32,32,6],"89":[0,48,40,5],"90":[0,24,32,6],"91":[0,32,48,6],"92":[0,48,64,12],"93":[0,32,56,10],"94":[0,32,40,4],"95":[0,88,112,4],"96":[0,32,40,4],"97":[0,40,40,4],"98":[0,32,32,4],"99":[0,32,32,4],"100":[0,32,40,8],"101":[0,32,40,7],"102":[0,32,32,4],"103":[0,40,48,4],"104":[0,32,32,4],"105":[0,32,40,4],"106":[0,40,48,4],"107":[0,32,40,4],"108":[0,32,40,4],"109":[0,32,56,10],"110":[0,32,56,6],"111":[0,32,32,4],"112":[0,32,48,4],"113":[0,24,32,4],"114":[0,32,48,6],"115":[0,40,56,4],"116":[0,24,48,4],"117":[0,40,56,5],"118":[0,32,40,8],"119":[0,32,48,4],"120":[0,24,32,4],"121":[0,24,40,4],"122":[0,32,48,4],"123":[0,40,48,4],"124":[0,32,40,4],"125":[0,40,56,4],"126":[0,32,48,4],"127":[0,32,48,4],"128":[0,40,56,7],"129":[0,32,40,7],"130":[0,88,128,4],"131":[0,48,56,4],"132":[0,32,32,5],"133":[0,40,48,7],"134":[0,32,48,4],"135":[0,32,40,4],"136":[0,32,40,4],"137":[0,32,40,4],"138":[0,32,32,4],"139":[0,40,40,4],"140":[0,24,24,4],"141":[0,40,48,8],"142":[0,40,64,4],"143":[0,32,48,4],"144":[0,88,88,4],"145":[0,56,96,4],"146":[0,80,96,4],"147":[0,32,40,5],"148":[0,48,56,7],"149":[0,40,56,4],"150":[0,48,56,6],"151":[0,40,64,6],"152":[0,24,32,4],"153":[0,40,56,4],"154":[0,32,56,4],"155":[0,24,32,4],"156":[0,32,24,4],"157":[0,32,40,4],"158":[0,24,32,4],"159":[0,32,48,4],"160":[0,32,48,4],"161":[0,32,40,4],"162":[0,56,64,8],"163":[0,32,40,5],"164":[0,40,48,4],"165":[0,40,48,6],"166":[0,32,56,6],"167":[0,32,24,3],"168":[0,32,40,4],"169":[0,40,56,8],"170":[0,32,40,7],"171":[0,32,48,4],"172":[0,32,48,8],"173":[0,32,32,8],"174":[0,24,32,5],"175":[0,24,32,6],"176":[0,24,40,4],"177":[0,24,24,4],"178":[0,32,40,4],"179":[0,32,32,4],"180":[0,32,40,4],"181":[0,32,56,4],"182":[0,24,32,4],"183":[0,32,40,4],"184":[0,32,40,4],"185":[0,32,40,4],"186":[0,40,72,7],"187":[0,32,56,8],"188":[0,24,40,8],"189":[0,24,48,8],"190":[0,40,48,8],"191":[0,24,40,8],"192":[0,32,48,4],"193":[0,32,48,16],"194":[0,32,40,8],"195":[0,48,40,4],"196":[0,32,48,4],"197":[0,32,40,4],"198":[0,32,48,6],"199":[0,24,48,4],"200":[0,24,48,8],"201":[0,32,48,10],"202":[0,24,32,4],"203":[0,32,48,4],"204":[0,24,40,6],"205":[0,24,40,8],"206":[0,32,40,5],"207":[0,32,64,8],"208":[0,72,112,4],"209":[0,24,32,4],"210":[0,24,40,4],"211":[0,32,32,4],"212":[0,40,48,4],"213":[0,32,32,4],"214":[0,32,56,4],"215":[0,32,48,4],"216":[0,24,32,4],"217":[0,32,48,4],"218":[0,32,40,4],"219":[0,40,40,4],"220":[0,24,24,4],"221":[0,32,32,4],"222":[0,24,32,4],"223":[0,24,40,4],"224":[0,40,40,5],"225":[0,32,40,4],"226":[0,64,72,10],"227":[0,40,72,9],"228":[0,32,40,4],"229":[0,40,56,4],"230":[0,40,64,4],"231":[0,32,32,4],"232":[0,40,32,4],"233":[0,32,48,4],"234":[0,40,64,6],"235":[0,32,40,4],"236":[0,24,40,4],"237":[0,24,40,4],"238":[0,24,32,4],"239":[0,32,48,4],"240":[0,24,40,4],"241":[0,32,40,4],"242":[0,32,40,4],"243":[0,40,48,4],"244":[0,40,56,4],"245":[0,40,48,4],"246":[0,24,32,4],"247":[0,32,56,5],"248":[0,40,48,4],"249":[0,80,96,2],"250":[0,72,112,5],"251":[0,24,48,8]};
const POKEMON_ZH = {"1":"妙蛙种子","2":"妙蛙草","3":"妙蛙花","4":"小火龙","5":"火恐龙","6":"喷火龙","7":"杰尼龟","8":"卡咪龟","9":"水箭龟","10":"绿毛虫","11":"铁甲蛹","12":"巴大蝶","13":"独角虫","14":"铁壳蛹","15":"大针蜂","16":"波波","17":"比比鸟","18":"大比鸟","19":"小拉达","20":"拉达","21":"烈雀","22":"大嘴雀","23":"阿柏蛇","24":"阿柏怪","25":"皮卡丘","26":"雷丘","27":"穿山鼠","28":"穿山王","29":"尼多兰","30":"尼多娜","31":"尼多后","32":"尼多朗","33":"尼多力诺","34":"尼多王","35":"皮皮","36":"皮可西","37":"六尾","38":"九尾","39":"胖丁","40":"胖可丁","41":"超音蝠","42":"大嘴蝠","43":"走路草","44":"臭臭花","45":"霸王花","46":"派拉斯","47":"派拉斯特","48":"毛球","49":"摩鲁蛾","50":"地鼠","51":"三地鼠","52":"喵喵","53":"猫老大","54":"可达鸭","55":"哥达鸭","56":"猴怪","57":"火暴猴","58":"卡蒂狗","59":"风速狗","60":"蚊香蝌蚪","61":"蚊香君","62":"蚊香泳士","63":"凯西","64":"勇基拉","65":"胡地","66":"腕力","67":"豪力","68":"怪力","69":"喇叭芽","70":"口呆花","71":"大食花","72":"玛瑙水母","73":"毒刺水母","74":"小拳石","75":"隆隆石","76":"隆隆岩","77":"小火马","78":"烈焰马","79":"呆呆兽","80":"呆壳兽","81":"小磁怪","82":"三合一磁怪","83":"大葱鸭","84":"嘟嘟","85":"嘟嘟利","86":"小海狮","87":"白海狮","88":"臭泥","89":"臭臭泥","90":"大舌贝","91":"刺甲贝","92":"鬼斯","93":"鬼斯通","94":"耿鬼","95":"大岩蛇","96":"催眠貘","97":"引梦貘人","98":"大钳蟹","99":"巨钳蟹","100":"霹雳电球","101":"顽皮雷弹","102":"蛋蛋","103":"椰蛋树","104":"卡拉卡拉","105":"嘎啦嘎啦","106":"飞腿郎","107":"快拳郎","108":"大舌头","109":"瓦斯弹","110":"双弹瓦斯","111":"独角犀牛","112":"钻角犀兽","113":"吉利蛋","114":"蔓藤怪","115":"袋兽","116":"墨海马","117":"海刺龙","118":"角金鱼","119":"金鱼王","120":"海星星","121":"宝石海星","122":"魔墙人偶","123":"飞天螳螂","124":"迷唇姐","125":"电击兽","126":"鸭嘴火兽","127":"凯罗斯","128":"肯泰罗","129":"鲤鱼王","130":"暴鲤龙","131":"拉普拉斯","132":"百变怪","133":"伊布","134":"水伊布","135":"雷伊布","136":"火伊布","137":"多边兽","138":"菊石兽","139":"多刺菊石兽","140":"化石盔","141":"镰刀盔","142":"化石翼龙","143":"卡比兽","144":"急冻鸟","145":"闪电鸟","146":"火焰鸟","147":"迷你龙","148":"哈克龙","149":"快龙","150":"超梦","151":"梦幻","152":"菊草叶","153":"月桂叶","154":"大竺葵","155":"火球鼠","156":"火岩鼠","157":"火暴兽","158":"小锯鳄","159":"蓝鳄","160":"大力鳄","161":"尾立","162":"大尾立","163":"咕咕","164":"猫头夜鹰","165":"芭瓢虫","166":"安瓢虫","167":"圆丝蛛","168":"阿利多斯","169":"叉字蝠","170":"灯笼鱼","171":"电灯怪","172":"皮丘","173":"皮宝宝","174":"宝宝丁","175":"波克比","176":"波克基古","177":"天然雀","178":"天然鸟","179":"咩利羊","180":"茸茸羊","181":"电龙","182":"美丽花","183":"玛力露","184":"玛力露丽","185":"树才怪","186":"蚊香蛙皇","187":"毽子草","188":"毽子花","189":"毽子棉","190":"长尾怪手","191":"向日种子","192":"向日花怪","193":"蜻蜻蜓","194":"乌波","195":"沼王","196":"太阳伊布","197":"月亮伊布","198":"黑暗鸦","199":"呆呆王","200":"梦妖","201":"未知图腾","202":"果然翁","203":"麒麟奇","204":"榛果球","205":"佛烈托斯","206":"土龙弟弟","207":"天蝎","208":"大钢蛇","209":"布鲁","210":"布鲁皇","211":"千针鱼","212":"巨钳螳螂","213":"壶壶","214":"赫拉克罗斯","215":"狃拉","216":"熊宝宝","217":"圈圈熊","218":"熔岩虫","219":"熔岩蜗牛","220":"小山猪","221":"长毛猪","222":"太阳珊瑚","223":"铁炮鱼","224":"章鱼桶","225":"信使鸟","226":"巨翅飞鱼","227":"盔甲鸟","228":"戴鲁比","229":"黑鲁加","230":"刺龙王","231":"小小象","232":"顿甲","233":"多边兽２型","234":"惊角鹿","235":"图图犬","236":"无畏小子","237":"战舞郎","238":"迷唇娃","239":"电击怪","240":"鸭嘴宝宝","241":"大奶罐","242":"幸福蛋","243":"雷公","244":"炎帝","245":"水君","246":"幼基拉斯","247":"沙基拉斯","248":"班基拉斯","249":"洛奇亚","250":"凤王","251":"时拉比"};

// ============================================================================
// PokéSurvivors — 2D Vampire Survivors Edition (Pure 2D Top-Down Engine)
// ============================================================================

const SAVE_KEY = "pokesurvivors.vs2d.v1";

// 12 Passive Items (6 Slots max, Lv 1..5) — 100% Vampire Survivors Passive Archetypes
const PASSIVES = {
  protein: {
    id: "protein", name: "攻击增强剂 (力量菠菜)", icon: "./assets/items/protein.png",
    desc: "每级提升 +12% 全招式伤害 (超武合成：喷射火焰 / 十万伏特)", maxLv: 5
  },
  carbos: {
    id: "carbos", name: "速度增强剂 (飞翼护符)", icon: "./assets/items/carbos.png",
    desc: "每级提升 +10% 移动速度與弹道飞行速度 (超武合成：飞叶快刀)", maxLv: 5
  },
  choice_specs: {
    id: "choice_specs", name: "博识眼镜 (烛台扩域)", icon: "./assets/items/choice-specs.png",
    desc: "每级提升 +12% 攻击范围与爆炸半径 (超武合成：冲浪 / 地震)", maxLv: 5
  },
  quick_claw: {
    id: "quick_claw", name: "先制之爪 (空白之书)", icon: "./assets/items/quick-claw.png",
    desc: "每级减少 -8% 招式冷却时间 (超武合成：精神强念 / 暗影球)", maxLv: 5
  },
  wide_lens: {
    id: "wide_lens", name: "广角镜 (复制戒指)", icon: "./assets/items/wide-lens.png",
    desc: "每级额外增加 +1 发射物数量 (最高 +2) 与 +10% 暴击率 (超武合成：水手里剑)", maxLv: 5
  },
  magnet: {
    id: "magnet", name: "吸盘磁铁 (吸引宝珠)", icon: "./assets/items/magnet.png",
    desc: "每级提升 +30% 经验糖果与金币拾取磁力范围 (超武合成：暴风雪)", maxLv: 5
  },
  leftovers: {
    id: "leftovers", name: "吃剩的东西 (番茄回复)", icon: "./assets/items/leftovers.png",
    desc: "每秒自动回复生命值，并提升 +10% 最大 HP (超武合成：龙之波动)", maxLv: 5
  },
  lucky_egg: {
    id: "lucky_egg", name: "幸运蛋 (王冠/四叶草)", icon: "./assets/items/lucky-egg.png",
    desc: "每级提升 +12% 经验获取量与幸运暴击值 (超武合成：月亮之力 / 聚宝功)", maxLv: 5
  }
};

// 12 Active Pokemon Moves (6 Slots max, Lv 1..8 -> Lv 9 Evolved Super Move with Chest)
const WEAPONS = {
  flamethrower: {
    id: "flamethrower", name: "喷射火焰", evoName: "🔥 爆炸烈焰 (超武)",
    icon: "./assets/items/charcoal.png", evoIcon: "./assets/items/flame-orb.png",
    reqPassive: "protein", color: "#ff5722", evoColor: "#ff1744",
    desc: "向面朝或最近敌人喷射穿透烈焰火球（满级+攻击增强剂进化为360度环形爆炸烈焰）",
    kind: "fan_fire", baseDmg: 22, baseCd: 1.15, baseArea: 1.0, baseCount: 2
  },
  thunderbolt: {
    id: "thunderbolt", name: "十万伏特", evoName: "⚡ 伏特狂雷圈 (超武)",
    icon: "./assets/items/magnet.png", evoIcon: "./assets/items/electirizer.png",
    reqPassive: "protein", color: "#ffeb3b", evoColor: "#00e5ff",
    desc: "在随机敌人头顶降下高伤落雷并跳跃（满级+攻击增强剂进化为全屏连环雷暴）",
    kind: "lightning", baseDmg: 28, baseCd: 1.25, baseArea: 1.1, baseCount: 2
  },
  razor_leaf: {
    id: "razor_leaf", name: "飞叶快刀", evoName: "🍃 飞叶风暴环 (超武)",
    icon: "./assets/items/miracle-seed.png", evoIcon: "./assets/items/leaf-stone.png",
    reqPassive: "carbos", color: "#66bb6a", evoColor: "#00e676",
    desc: "如回旋镖般围绕自身旋转切割周围怪群（满级+速度增强剂进化为永久双层风暴护身环）",
    kind: "orbit", baseDmg: 16, baseCd: 2.2, baseArea: 1.0, baseCount: 3
  },
  surf: {
    id: "surf", name: "冲浪水炮", evoName: "🌊 加农水炮 (超武)",
    icon: "./assets/items/mystic-water.png", evoIcon: "./assets/items/water-stone.png",
    reqPassive: "choice_specs", color: "#29b6f6", evoColor: "#00b0ff",
    desc: "向四周推开巨浪击退并伤害成群敌人（满级+博识眼镜进化为全向高压水炮巨浪）",
    kind: "wave", baseDmg: 24, baseCd: 1.45, baseArea: 1.15, baseCount: 2
  },
  psychic: {
    id: "psychic", name: "精神强念", evoName: "🔮 精神击破立场 (超武)",
    icon: "./assets/items/twisted-spoon.png", evoIcon: "./assets/items/dawn-stone.png",
    reqPassive: "quick_claw", color: "#ab47bc", evoColor: "#ea80fc",
    desc: "以自身为中心张开超能力大蒜立场，持续灼烧并减速靠近的敌人（满级+先制之爪进化为吸血超能领域）",
    kind: "aura", baseDmg: 10, baseCd: 0.42, baseArea: 1.15, baseCount: 1
  },
  shadow_ball: {
    id: "shadow_ball", name: "暗影球", evoName: "👻 暗影潜袭弹 (超武)",
    icon: "./assets/items/spell-tag.png", evoIcon: "./assets/items/dusk-stone.png",
    reqPassive: "quick_claw", color: "#7e57c2", evoColor: "#b388ff",
    desc: "自动追踪最近的敌人并在屏幕边缘反弹穿透（满级+先制之爪进化为高速无限弹射幽灵弹）",
    kind: "bounce", baseDmg: 24, baseCd: 1.2, baseArea: 1.0, baseCount: 2
  },
  blizzard: {
    id: "blizzard", name: "冰冻之风", evoName: "❄️ 绝对零度暴风雪 (超武)",
    icon: "./assets/items/never-melt-ice.png", evoIcon: "./assets/items/shiny-stone.png",
    reqPassive: "magnet", color: "#80deea", evoColor: "#e0f7fa",
    desc: "投掷冰晶在地面形成持续冰冻圣水区（满级+吸盘磁铁进化为向自身聚拢扩大的绝对零度冰暴）",
    kind: "zone", baseDmg: 14, baseCd: 1.8, baseArea: 1.15, baseCount: 2
  },
  earthquake: {
    id: "earthquake", name: "地震重锤", evoName: "🌋 断崖之剑 (超武)",
    icon: "./assets/items/soft-sand.png", evoIcon: "./assets/items/hard-stone.png",
    reqPassive: "choice_specs", color: "#d4a359", evoColor: "#ff6d00",
    desc: "向地面猛击震荡波，高抛岩石砸向大范围怪群（满级+博识眼镜进化为全屏地裂喷发）",
    kind: "lob", baseDmg: 34, baseCd: 1.55, baseArea: 1.2, baseCount: 2
  },
  dragon_pulse: {
    id: "dragon_pulse", name: "龙之波动", evoName: "🐉 流星群圣鞭 (超武)",
    icon: "./assets/items/dragon-fang.png", evoIcon: "./assets/items/dragon-fang.png",
    reqPassive: "leftovers", color: "#5c6bc0", evoColor: "#ff4081",
    desc: "水平左右横扫的龙系能量鞭击（满级+吃剩的东西进化为暴击回血的流星群圣鞭）",
    kind: "whip", baseDmg: 28, baseCd: 1.1, baseArea: 1.15, baseCount: 2
  },
  water_shuriken: {
    id: "water_shuriken", name: "飞水手里剑", evoName: "💠 黄金急流飞刀 (超武)",
    icon: "./assets/items/ mystic-water.png".replace(" ", ""), evoIcon: "./assets/items/kings-rock.png",
    reqPassive: "wide_lens", color: "#4dd0e1", evoColor: "#ffd740",
    desc: "朝移动方向极速连射高穿透手里剑飞刀（满级+广角镜进化为无冷却散射暴击飞刀流）",
    kind: "knife", baseDmg: 15, baseCd: 0.65, baseArea: 0.9, baseCount: 3
  },
  moonblast: {
    id: "moonblast", name: "月亮之力", evoName: "🌙 破灭之光圣咏 (超武)",
    icon: "./assets/items/moon-stone.png", evoIcon: "./assets/items/star-piece.png",
    reqPassive: "lucky_egg", color: "#f48fb1", evoColor: "#ff80ab",
    desc: "召唤妖精月光射线横扫屏幕并在脚下留下辉光（满级+幸运蛋进化为五芒星全屏圣咏轰炸）",
    kind: "beam", baseDmg: 32, baseCd: 1.6, baseArea: 1.2, baseCount: 2
  },
  pay_day: {
    id: "pay_day", name: "聚宝功金币弹", evoName: "🪙 黄金万两暴富炮 (超武)",
    icon: "./assets/items/amulet-coin.png", evoIcon: "./assets/items/big-nugget.png",
    reqPassive: "lucky_egg", color: "#ffd54f", evoColor: "#ffab00",
    desc: "发射高穿透金元宝攻击敌人，命中掉落额外金币（满级+幸运蛋进化为金币伤害加成的黄金巨炮）",
    kind: "coin", baseDmg: 20, baseCd: 0.95, baseArea: 1.0, baseCount: 3
  }
};

// 18 Playable Starter Pokemon (Each with distinct stats, starting weapon, and 3-stage in-run evolution!)
const CHARACTERS = [
  { id: 4, name: "小火龙", chain: [4, 5, 6], weapon: "flamethrower", hp: 110, speed: 1.05, might: 1.15, bonus: "初始攻击力 +15%，Lv.16 进化火恐龙，Lv.32 进化喷火龙", cost: 0 },
  { id: 7, name: "杰尼龟", chain: [7, 8, 9], weapon: "surf", hp: 135, speed: 1.0, might: 1.05, bonus: "初始护甲 +2、HP +35，Lv.16 进化卡咪龟，Lv.32 进化水箭龟", cost: 0 },
  { id: 1, name: "妙蛙种子", chain: [1, 2, 3], weapon: "razor_leaf", hp: 130, speed: 1.0, might: 1.05, bonus: "自带每秒生命回复 +0.8，Lv.16 进化妙蛙草，Lv.32 进化妙蛙花", cost: 0 },
  { id: 25, name: "皮卡丘", chain: [172, 25, 26], weapon: "thunderbolt", hp: 100, speed: 1.2, might: 1.15, bonus: "移速 +20%，暴击率 +15%，Lv.28 进化雷丘", cost: 0 },
  { id: 155, name: "火球鼠", chain: [155, 156, 157], weapon: "flamethrower", hp: 108, speed: 1.12, might: 1.18, bonus: "范围 +15%，伤害 +18%，Lv.16 进化火岩鼠，Lv.32 进化火爆兽", cost: 0 },
  { id: 158, name: "小锯鳄", chain: [158, 159, 160], weapon: "water_shuriken", hp: 125, speed: 1.05, might: 1.2, bonus: "投射物数量 +1，Lv.16 进化蓝鳄，Lv.32 进化大力鳄", cost: 0 },
  { id: 152, name: "菊草叶", chain: [152, 153, 154], weapon: "razor_leaf", hp: 140, speed: 1.0, might: 1.08, bonus: "经验获取 +20%、范围 +15%，Lv.16 进化月桂叶，Lv.32 进化大竺葵", cost: 0 },
  { id: 92, name: "鬼斯", chain: [92, 93, 94], weapon: "shadow_ball", hp: 105, speed: 1.18, might: 1.22, bonus: "冷却缩减 -15%，穿怪无视体积碰撞，Lv.16 鬼斯通，Lv.32 耿鬼", cost: 300 },
  { id: 63, name: "凯西", chain: [63, 64, 65], weapon: "psychic", hp: 98, speed: 1.12, might: 1.28, bonus: "全招式范围 +25%、冷却 -12%，Lv.16 勇基拉，Lv.32 胡地", cost: 300 },
  { id: 133, name: "伊布", chain: [133, 196, 197], weapon: "moonblast", hp: 115, speed: 1.15, might: 1.15, bonus: "投射物数量 +1、幸运 +30%，Lv.16 太阳伊布，Lv.32 月亮伊布", cost: 300 },
  { id: 52, name: "喵喵", chain: [52, 53, 53], weapon: "pay_day", hp: 110, speed: 1.18, might: 1.12, bonus: "金币获取 +50%、拾取范围 +40%，Lv.24 进化猫老大", cost: 300 },
  { id: 147, name: "迷你龙", chain: [147, 148, 149], weapon: "dragon_pulse", hp: 135, speed: 1.1, might: 1.25, bonus: "全属性成长准神，投射物 +1，Lv.18 哈克龙，Lv.34 快龙", cost: 600 },
  { id: 246, name: "幼基拉斯", chain: [246, 247, 248], weapon: "earthquake", hp: 155, speed: 1.02, might: 1.32, bonus: "护甲 +4、伤害 +32%，Lv.18 沙基拉斯，Lv.34 班基拉斯", cost: 600 },
  { id: 131, name: "拉普拉斯", chain: [131, 131, 131], weapon: "blizzard", hp: 160, speed: 1.06, might: 1.2, bonus: "初始高血量 +160，范围 +25%，自带冰冻减速光环", cost: 600 },
  { id: 150, name: "超梦", chain: [150, 150, 150], weapon: "psychic", hp: 150, speed: 1.22, might: 1.45, bonus: "传说级超能力霸主：伤害 +45%、冷却 -20%、投射物 +1", cost: 1200 },
  { id: 151, name: "梦幻", chain: [151, 151, 151], weapon: "moonblast", hp: 140, speed: 1.25, might: 1.35, bonus: "幻之全能基因：开局额外随机赠送 1 门满潜力副武器，经验 +35%", cost: 1200 },
  { id: 249, name: "洛奇亚", chain: [249, 249, 249], weapon: "surf", hp: 175, speed: 1.18, might: 1.4, bonus: "洋流之神：范围 +35%、生命回复 +1.5/s、投射物 +1", cost: 1500 },
  { id: 250, name: "凤王", chain: [250, 250, 250], weapon: "flamethrower", hp: 170, speed: 1.2, might: 1.42, bonus: "虹色圣灰：自带 1 次满血复活，伤害 +42%、暴击率 +20%", cost: 1500 }
];

// 5 Infinite Flat 2D Stages (100% Top-Down 2D Tiled Maps using original ground textures & 2D props)
const STAGES = [
  {
    id: "forest", name: "常磐森林 (疯狂森林)",
    desc: "经典草地无限平面战场，视野开阔，适合新手体验原汁原味割草爽感。",
    groundTex: "./assets/env/forest/ground.png",
    pathTex: "./assets/env/forest/path.png",
    bgm: "./assets/music/ingame1.ogg",
    bgTint: "#2d4c2b",
    goldMul: 1.0, enemyHpMul: 1.0,
    waves: [
      [19, 16, 10, 13],       // Rattata, Pidgey, Caterpie, Weedle
      [21, 41, 43, 46, 69],   // Spearow, Zubat, Oddish, Paras, Bellsprout
      [20, 17, 12, 15, 23],   // Raticate, Pidgeotto, Butterfree, Beedrill, Ekans
      [24, 42, 44, 70, 47],   // Arbok, Golbat, Gloom, Weepinbell, Parasect
      [123, 127, 114, 49, 71],// Scyther, Pinsir, Tangela, Venomoth, Victreebel
      [18, 45, 3, 143, 149]   // Pidgeot, Vileplume, Venusaur, Snorlax, Dragonite
    ],
    bosses: [123, 127, 143, 3, 145, 151]
  },
  {
    id: "graveyard", name: "紫苑镇灵骨塔 (镶嵌图书馆)",
    desc: "幽暗石砖走廊平面战场，幽灵系与超能系宝可梦成群涌来，金币收益 +30%。",
    groundTex: "./assets/env/graveyard/ground.png",
    pathTex: "./assets/env/graveyard/path.png",
    bgm: "./assets/music/halloween-menu.ogg",
    bgTint: "#221a36",
    goldMul: 1.3, enemyHpMul: 1.2,
    waves: [
      [92, 41, 19, 104],      // Gastly, Zubat, Rattata, Cubone
      [93, 96, 109, 88, 200], // Haunter, Drowzee, Koffing, Grimer, Murkrow/Misdreavus
      [105, 97, 110, 89, 198],// Marowak, Hypno, Weezing, Muk, Murkrow
      [94, 122, 124, 202, 215],// Gengar, Mr.Mime, Jynx, Wobbuffet, Sneasel
      [94, 65, 229, 248, 197],// Gengar, Alakazam, Houndoom, Tyranitar, Umbreon
      [94, 150, 249, 243, 244]
    ],
    bosses: [105, 97, 94, 65, 229, 150]
  },
  {
    id: "desert", name: "岩石沙漠峡谷 (奶牛场)",
    desc: "荒漠黄沙无限平面，地面与岩石系重甲军团，经验球品质提升，金币收益 +50%。",
    groundTex: "./assets/env/desert/ground.png",
    pathTex: "./assets/env/desert/path.png",
    bgm: "./assets/music/ingame2.ogg",
    bgTint: "#594328",
    goldMul: 1.5, enemyHpMul: 1.35,
    waves: [
      [27, 50, 74, 66],       // Sandshrew, Diglett, Geodude, Machop
      [28, 51, 75, 67, 104],  // Sandslash, Dugtrio, Graveler, Machoke, Cubone
      [95, 111, 105, 68, 207],// Onix, Rhyhorn, Marowak, Machamp, Gligar
      [112, 76, 141, 142, 208],// Rhydon, Golem, Kabutops, Aerodactyl, Steelix
      [212, 214, 232, 247, 115],// Scizor, Heracross, Donphan, Pupitar, Kangaskhan
      [248, 142, 68, 112, 244]
    ],
    bosses: [95, 112, 142, 208, 248, 244]
  },
  {
    id: "glacier", name: "双子岛极寒冰原 (擎天塔)",
    desc: "晶莹冰面无限平面，水系与冰系大军高速围剿，金币收益 +75%。",
    groundTex: "./assets/env/glacier/ground.png",
    pathTex: "./assets/env/glacier/path.png",
    bgm: "./assets/music/ingame3.ogg",
    bgTint: "#1e3c52",
    goldMul: 1.75, enemyHpMul: 1.5,
    waves: [
      [60, 72, 86, 90, 120],  // Poliwag, Tentacool, Seel, Shellder, Staryu
      [61, 73, 87, 91, 121],  // Poliwhirl, Tentacruel, Dewgong, Cloyster, Starmie
      [215, 220, 221, 124, 131],// Sneasel, Swinub, Piloswine, Jynx, Lapras
      [62, 130, 134, 139, 148],// Poliwrath, Gyarados, Vaporeon, Omastar, Dragonair
      [230, 130, 131, 9, 160],// Kingdra, Gyarados, Lapras, Blastoise, Feraligatr
      [144, 245, 249, 130, 149]
    ],
    bosses: [91, 130, 131, 230, 144, 245]
  },
  {
    id: "canela", name: "华蓝洞窟 · 神兽圣域 (骨区)",
    desc: "高阶训练家终极平面试炼场，全世代准神与传说宝可梦狂潮，金币收益 +120%！",
    groundTex: "./assets/env/canela/ground.png",
    pathTex: "./assets/env/canela/path.png",
    bgm: "./assets/music/ingame5.ogg",
    bgTint: "#2b1620",
    goldMul: 2.2, enemyHpMul: 1.8,
    waves: [
      [58, 77, 125, 126, 137],
      [59, 78, 135, 136, 142],
      [6, 9, 3, 94, 65],
      [157, 160, 154, 196, 197],
      [149, 248, 130, 212, 230],
      [144, 145, 146, 243, 244, 245]
    ],
    bosses: [59, 149, 248, 243, 250, 150]
  }
];

// Meta PowerUps (Vampire Survivors exact shop upgrades)
const POWERUPS = [
  { id: "might", name: "力量 (Might)", icon: "./assets/items/protein.png", max: 5, baseCost: 200, desc: "每级提升 +8% 基础伤害" },
  { id: "armor", name: "护甲 (Armor)", icon: "./assets/items/iron.png", max: 3, baseCost: 300, desc: "每级减少 -1.5 受到的伤害" },
  { id: "maxHp", name: "最大生命 (Max Health)", icon: "./assets/items/hp-up.png", max: 5, baseCost: 200, desc: "每级提升 +12% 最大 HP" },
  { id: "regen", name: "恢复 (Recovery)", icon: "./assets/items/leftovers.png", max: 5, baseCost: 250, desc: "每级每秒回复 +0.4 HP" },
  { id: "cooldown", name: "冷却 (Cooldown)", icon: "./assets/items/quick-claw.png", max: 5, baseCost: 400, desc: "每级缩短 -5% 技能冷却时间" },
  { id: "area", name: "范围 (Area)", icon: "./assets/items/choice-specs.png", max: 5, baseCost: 300, desc: "每级扩大 +8% 技能攻击范围" },
  { id: "speed", name: "移速 (MoveSpeed)", icon: "./assets/items/carbos.png", max: 5, baseCost: 200, desc: "每级提升 +6% 移动速度" },
  { id: "magnet", name: "磁力 (Magnet)", icon: "./assets/items/magnet.png", max: 5, baseCost: 200, desc: "每级扩大 +20% 经验拾取范围" },
  { id: "growth", name: "成长 (Growth)", icon: "./assets/items/lucky-egg.png", max: 5, baseCost: 300, desc: "每级提升 +8% 经验值获取" },
  { id: "amount", name: "数量 (Amount)", icon: "./assets/items/wide-lens.png", max: 2, baseCost: 1500, desc: "每级所有招式额外增加 +1 发射物数量" },
  { id: "revival", name: "复活 (Revival)", icon: "./assets/items/max-revive.png", max: 1, baseCost: 2000, desc: "每局额外获得 1 次 50% HP 原地复活并震退全屏怪物的机会" },
  { id: "greed", name: "贪婪 (Greed)", icon: "./assets/items/amulet-coin.png", max: 5, baseCost: 250, desc: "每级提升 +15% 金币获取量" }
];

// Load / Save local profile
function loadSave() {
  try {
    const raw = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
    if (raw && typeof raw === "object") {
      raw.gold = Number.isFinite(raw.gold) ? raw.gold : 5000;
      raw.unlockedChars = Array.isArray(raw.unlockedChars) ? raw.unlockedChars : [4, 7, 1, 25, 155, 158, 152];
      raw.powerups = raw.powerups || {};
      raw.selectedChar = raw.selectedChar || 4;
      raw.selectedStage = raw.selectedStage || "forest";
      raw.localSeconds = raw.localSeconds || 0;
      return raw;
    }
  } catch (e) {}
  return {
    gold: 5000,
    unlockedChars: [4, 7, 1, 25, 155, 158, 152],
    powerups: {},
    selectedChar: 4,
    selectedStage: "forest",
    localSeconds: 0,
    bestKills: 0
  };
}

let SAVE = loadSave();
function writeSave() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(SAVE)); } catch (e) {}
}

// Local time accumulation: every minute adds +100 gold automatically
setInterval(() => {
  SAVE.localSeconds = (SAVE.localSeconds || 0) + 1;
  if (SAVE.localSeconds % 30 === 0) {
    SAVE.gold += 50;
    writeSave();
    const el = document.getElementById("menu-gold");
    if (el) el.textContent = SAVE.gold;
  }
}, 1000);

// Audio & Image Caches
const IMG_CACHE = new Map();
function getImg(src) {
  if (IMG_CACHE.has(src)) return IMG_CACHE.get(src);
  const img = new Image();
  img.src = src;
  IMG_CACHE.set(src, img);
  return img;
}

let bgmAudio = null;
function playBgm(src) {
  try {
    if (bgmAudio) {
      bgmAudio.pause();
      bgmAudio = null;
    }
    bgmAudio = new Audio(src);
    bgmAudio.loop = true;
    bgmAudio.volume = 0.42;
    bgmAudio.play().catch(() => {});
  } catch (e) {}
}
function playCry(pid) {
  try {
    const a = new Audio(`./assets/cries/${pid}.ogg`);
    a.volume = 0.45;
    a.play().catch(() => {});
  } catch (e) {}
}

// WebAudio Synth for snappy Vampire Survivors Gem / Hit / LevelUp / Chest SFX
let audioCtx = null;
function sfx(type) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    if (type === "gem") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(660 + Math.random() * 220, now);
      osc.frequency.exponentialRampToValueAtTime(1120, now + 0.06);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.065);
      osc.start(now); osc.stop(now + 0.07);
    } else if (type === "hit") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.linearRampToValueAtTime(60, now + 0.05);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.05);
      osc.start(now); osc.stop(now + 0.055);
    } else if (type === "level") {
      osc.type = "square";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554, now + 0.07);
      osc.frequency.setValueAtTime(659, now + 0.14);
      osc.frequency.setValueAtTime(880, now + 0.21);
      gain.gain.setValueAtTime(0.11, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.36);
      osc.start(now); osc.stop(now + 0.37);
    } else if (type === "chest") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.setValueAtTime(659, now + 0.08);
      osc.frequency.setValueAtTime(784, now + 0.16);
      osc.frequency.setValueAtTime(1046, now + 0.24);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.5);
      osc.start(now); osc.stop(now + 0.52);
    }
  } catch (e) {}
}

// Helper to draw PMD 8-directional walk sprite on 2D Canvas
function drawPokemonSprite(ctx, pid, x, y, vx, vy, animTime, scale = 1.6, flashWhite = false, isBoss = false) {
  const img = getImg(`./assets/pmd/${pid}.png`);
  const meta = SPRITE_META[pid] || [0, 32, 32, 4];
  const [wy, fw, fh, fn] = meta;
  if (!img.complete || img.naturalWidth === 0) {
    // Fallback circle if loading
    ctx.fillStyle = isBoss ? "#ff3b3b" : "#ffcc00";
    ctx.beginPath();
    ctx.arc(x, y, 16 * scale, 0, Math.PI * 2);
    ctx.fill();
    return;
  }
  // 8-direction row calculation (0: Down, 1: Down-Right, 2: Right, 3: Up-Right, 4: Up, 5: Up-Left, 6: Left, 7: Down-Left)
  let row = 0;
  if (Math.abs(vx) > 0.01 || Math.abs(vy) > 0.01) {
    const ang = Math.atan2(vx, vy); // 0 = Down (+y), PI/2 = Right (+x), PI = Up (-y)
    row = (Math.round(ang / (Math.PI / 4)) % 8 + 8) % 8;
  }
  const col = Math.floor(animTime * 8) % Math.max(1, fn);
  const sx = col * fw;
  const sy = wy + row * fh;
  const dw = fw * scale;
  const dh = fh * scale;

  // Ground shadow
  ctx.fillStyle = isBoss ? "rgba(255, 20, 40, 0.45)" : "rgba(0, 0, 0, 0.38)";
  ctx.beginPath();
  ctx.ellipse(x, y + dh * 0.34, dw * 0.32, dh * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();

  if (isBoss) {
    ctx.strokeStyle = "#ff4444";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.ellipse(x, y + dh * 0.34, dw * 0.38, dh * 0.18, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.save();
  if (flashWhite) {
    ctx.filter = "brightness(2.8) contrast(1.5)";
  }
  ctx.drawImage(img, sx, sy, fw, fh, x - dw / 2, y - dh / 2, dw, dh);
  ctx.restore();
}

// ============================================================================
// UI Menu Logic
// ============================================================================
function renderMenu() {
  document.getElementById("menu-gold").textContent = SAVE.gold;
  document.getElementById("char-count").textContent = `已解锁 ${SAVE.unlockedChars.length} / ${CHARACTERS.length}`;

  const grid = document.getElementById("char-grid");
  grid.innerHTML = "";
  for (const ch of CHARACTERS) {
    const unlocked = SAVE.unlockedChars.includes(ch.id);
    const active = SAVE.selectedChar === ch.id;
    const card = document.createElement("div");
    card.className = "char-card" + (active ? " active" : "") + (unlocked ? "" : " locked");
    const wep = WEAPONS[ch.weapon];
    card.innerHTML = `
      <img class="av" src="./assets/portraits/${ch.id}.png" alt="" />
      <div class="cname">${ch.name}</div>
      <div class="cwep">
        <img src="${wep.icon}" style="width:14px;height:14px;image-rendering:pixelated;" />
        <span>${wep.name}</span>
      </div>
      ${unlocked ? "" : `<div style="font-size:11px;color:#ffd54f;margin-top:3px;">🔒 ${ch.cost} 金币</div>`}
    `;
    card.onclick = () => {
      if (!unlocked) {
        if (SAVE.gold >= ch.cost) {
          SAVE.gold -= ch.cost;
          SAVE.unlockedChars.push(ch.id);
          SAVE.selectedChar = ch.id;
          writeSave();
          playCry(ch.id);
          renderMenu();
        } else {
          alert(`金币不足！需要 ${ch.cost} 金币（可点击顶部“本地时长领金币”立即获取）。`);
        }
        return;
      }
      SAVE.selectedChar = ch.id;
      writeSave();
      playCry(ch.id);
      renderMenu();
    };
    grid.appendChild(card);
  }

  // Detail box
  const curChar = CHARACTERS.find(c => c.id === SAVE.selectedChar) || CHARACTERS[0];
  const curWep = WEAPONS[curChar.weapon];
  const evoChainHtml = curChar.chain.map((pid, idx) => `
    <div style="display:flex;flex-direction:column;align-items:center;">
      <img src="./assets/icons/${pid}.png" style="width:36px;height:36px;image-rendering:pixelated;" />
      <span style="font-size:10px;color:#ddd;">${idx === 0 ? "初始" : idx === 1 ? "Lv.16" : "Lv.32"}</span>
    </div>
  `).join(`<span style="color:#ffd54f;font-weight:900;">→</span>`);

  document.getElementById("char-detail").innerHTML = `
    <img src="./assets/portraits/${curChar.id}.png" style="width:68px;height:68px;image-rendering:pixelated;border:2px solid #d4af37;border-radius:6px;background:#120b1c;" />
    <div style="flex:1;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <b style="font-size:18px;color:#ffe066;">${curChar.name}</b>
        <span style="font-size:12px;color:#82e0aa;">HP ${curChar.hp} · 速度 ${Math.round(curChar.speed*100)}% · 伤害 ${Math.round(curChar.might*100)}%</span>
      </div>
      <div style="font-size:12px;color:#e0d4b8;margin:4px 0;">${curChar.bonus}</div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px;background:#150e20;padding:4px 8px;border-radius:5px;">
        <div style="display:flex;align-items:center;gap:6px;">
          <img src="${curWep.icon}" style="width:22px;height:22px;image-rendering:pixelated;" />
          <span style="font-size:12px;">初始武器：<b style="color:#ffd54f;">${curWep.name}</b></span>
        </div>
        <div style="display:flex;align-items:center;gap:4px;">${evoChainHtml}</div>
      </div>
    </div>
  `;

  // Stage list
  const stList = document.getElementById("stage-list");
  stList.innerHTML = "";
  for (const st of STAGES) {
    const active = SAVE.selectedStage === st.id;
    const item = document.createElement("div");
    item.style.cssText = `padding:8px 10px;border-radius:5px;border:2px solid ${active ? "#ffe066" : "#5e4724"};background:${active ? "#38234d" : "#1a1126"};cursor:pointer;display:flex;justify-content:space-between;align-items:center;`;
    item.innerHTML = `
      <div>
        <div style="font-weight:900;font-size:14px;color:${active ? "#ffe066" : "#fff"};">${st.name}</div>
        <div style="font-size:11px;color:#c9b896;margin-top:2px;">${st.desc}</div>
      </div>
      <span style="font-size:12px;font-weight:900;color:#ffd54f;flex-shrink:0;margin-left:8px;">🪙 ×${st.goldMul}</span>
    `;
    item.onclick = () => {
      SAVE.selectedStage = st.id;
      writeSave();
      renderMenu();
    };
    stList.appendChild(item);
  }
}

// Modals for PowerUps & Evolution Recipe Chart
function showPowerupsModal() {
  const ov = document.getElementById("modal-ov");
  const box = document.getElementById("modal-box");
  ov.style.display = "flex";

  function draw() {
    let rowsHtml = "";
    for (const p of POWERUPS) {
      const lv = SAVE.powerups[p.id] || 0;
      const cost = Math.round(p.baseCost * Math.pow(1.6, lv));
      const maxed = lv >= p.max;
      rowsHtml += `
        <div style="background:#1c1229;border:2px solid ${maxed ? "#4caf50" : "#785c28"};border-radius:6px;padding:8px;display:flex;align-items:center;gap:10px;">
          <img src="${p.icon}" style="width:34px;height:34px;image-rendering:pixelated;" />
          <div style="flex:1;">
            <div style="font-weight:900;font-size:14px;color:#ffe066;">${p.name} <span style="color:#fff;">Lv.${lv}/${p.max}</span></div>
            <div style="font-size:11px;color:#ccc;margin-top:2px;">${p.desc}</div>
          </div>
          ${maxed
            ? `<span style="color:#69f0ae;font-weight:900;font-size:13px;">已满级</span>`
            : `<button class="vs-btn gold" data-buy="${p.id}" style="padding:6px 12px;font-size:13px;">🪙 ${cost}</button>`}
        </div>
      `;
    }
    box.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
        <b style="font-size:20px;color:#ffe066;">⚡ 局外永久属性强化 (PowerUps)</b>
        <div style="display:flex;gap:8px;align-items:center;">
          <span style="color:#ffd54f;font-weight:900;">🪙 ${SAVE.gold}</span>
          <button id="close-modal" class="vs-btn" style="padding:5px 12px;font-size:13px;">关闭</button>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px;">
        ${rowsHtml}
      </div>
    `;
    box.querySelector("#close-modal").onclick = () => { ov.style.display = "none"; renderMenu(); };
    box.querySelectorAll("[data-buy]").forEach(btn => {
      btn.onclick = () => {
        const pid = btn.getAttribute("data-buy");
        const p = POWERUPS.find(x => x.id === pid);
        const lv = SAVE.powerups[pid] || 0;
        const cost = Math.round(p.baseCost * Math.pow(1.6, lv));
        if (lv < p.max && SAVE.gold >= cost) {
          SAVE.gold -= cost;
          SAVE.powerups[pid] = lv + 1;
          writeSave();
          sfx("level");
          draw();
        } else {
          alert("金币不足！可点击主界面顶部的「本地时长领金币」立即领取。");
        }
      };
    });
  }
  draw();
}

function showEvolutionsModal() {
  const ov = document.getElementById("modal-ov");
  const box = document.getElementById("modal-box");
  ov.style.display = "flex";
  let html = "";
  for (const w of Object.values(WEAPONS)) {
    const pas = PASSIVES[w.reqPassive];
    html += `
      <div style="background:#1c1229;border:2px solid #8e569c;border-radius:6px;padding:8px 10px;display:flex;align-items:center;justify-content:space-between;gap:6px;">
        <div style="display:flex;align-items:center;gap:6px;">
          <img src="${w.icon}" style="width:28px;height:28px;image-rendering:pixelated;" />
          <div>
            <b style="font-size:13px;color:#fff;">${w.name}</b>
            <div style="font-size:10px;color:#aaa;">满级 Lv.8</div>
          </div>
        </div>
        <span style="color:#ffd54f;font-weight:900;">+</span>
        <div style="display:flex;align-items:center;gap:6px;">
          <img src="${pas.icon}" style="width:28px;height:28px;image-rendering:pixelated;" />
          <div>
            <b style="font-size:13px;color:#90caf9;">${pas.name.split(" ")[0]}</b>
            <div style="font-size:10px;color:#aaa;">任意等级</div>
          </div>
        </div>
        <span style="color:#ff80ab;font-weight:900;">=</span>
        <div style="display:flex;align-items:center;gap:6px;">
          <img src="${w.evoIcon}" style="width:32px;height:32px;image-rendering:pixelated;" />
          <b style="font-size:13px;color:#ff80ab;">${w.evoName}</b>
        </div>
      </div>
    `;
  }
  box.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <b style="font-size:19px;color:#ffe066;">📖 吸血鬼幸存者 · 宝可梦超武合成公式表</b>
      <button id="close-evo" class="vs-btn" style="padding:5px 12px;font-size:13px;">关闭</button>
    </div>
    <p style="font-size:12px;color:#ccc;margin-bottom:8px;">当主动招式升至 <b>Lv.8 满级</b> 且拥有对应的 <b>被动道具</b> 时，拾取精英/头目掉落的宝箱即可直接进化为毁天灭地的超级招式！</p>
    <div style="display:flex;flex-direction:column;gap:6px;">${html}</div>
  `;
  box.querySelector("#close-evo").onclick = () => { ov.style.display = "none"; };
}

// ============================================================================
// Core 2D Vampire Survivors Battle Engine
// ============================================================================
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let RUN = null;
const KEYS = new Set();
window.addEventListener("keydown", e => {
  KEYS.add(e.code);
  if (e.code === "Escape" && RUN && !RUN.over) {
    if (RUN.paused && !RUN.modalOpen) resumeRun();
    else if (!RUN.paused) pauseRun();
  }
});
window.addEventListener("keyup", e => KEYS.delete(e.code));

// Virtual Touch Joystick (Any-screen drag like Vampire Survivors Mobile)
const TOUCH = { active: false, id: null, sx: 0, sy: 0, cx: 0, cy: 0, dx: 0, dy: 0 };
canvas.addEventListener("pointerdown", e => {
  if (!RUN || RUN.paused || RUN.over) return;
  TOUCH.active = true;
  TOUCH.id = e.pointerId;
  TOUCH.sx = e.clientX;
  TOUCH.sy = e.clientY;
  TOUCH.cx = e.clientX;
  TOUCH.cy = e.clientY;
  TOUCH.dx = 0;
  TOUCH.dy = 0;
});
window.addEventListener("pointermove", e => {
  if (!TOUCH.active || e.pointerId !== TOUCH.id) return;
  TOUCH.cx = e.clientX;
  TOUCH.cy = e.clientY;
  const rx = TOUCH.cx - TOUCH.sx;
  const ry = TOUCH.cy - TOUCH.sy;
  const dist = Math.hypot(rx, ry);
  if (dist > 6) {
    TOUCH.dx = rx / dist;
    TOUCH.dy = ry / dist;
  } else {
    TOUCH.dx = 0;
    TOUCH.dy = 0;
  }
});
window.addEventListener("pointerup", e => {
  if (e.pointerId === TOUCH.id) {
    TOUCH.active = false;
    TOUCH.dx = 0;
    TOUCH.dy = 0;
  }
});

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.imageSmoothingEnabled = false;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function getPlayerStats(r) {
  const pu = SAVE.powerups;
  const pas = r.passives;
  const might = r.char.might * (1 + (pu.might || 0) * 0.08 + (pas.protein || 0) * 0.12);
  const speed = 175 * r.char.speed * (1 + (pu.speed || 0) * 0.06 + (pas.carbos || 0) * 0.10);
  const area = (r.char.id === 155 || r.char.id === 152 ? 1.15 : r.char.id === 63 || r.char.id === 131 ? 1.25 : r.char.id === 249 ? 1.35 : 1.0)
    * (1 + (pu.area || 0) * 0.08 + (pas.choice_specs || 0) * 0.12);
  const cdMul = Math.max(0.32, (r.char.id === 92 ? 0.85 : r.char.id === 63 ? 0.88 : r.char.id === 150 ? 0.80 : 1.0)
    * (1 - (pu.cooldown || 0) * 0.05 - (pas.quick_claw || 0) * 0.08));
  const extraCount = (pu.amount || 0) + (r.char.id === 158 || r.char.id === 133 || r.char.id === 147 || r.char.id === 150 || r.char.id === 249 ? 1 : 0)
    + Math.ceil((pas.wide_lens || 0) * 0.5);
  const magnetRadius = 95 * (r.char.id === 52 ? 1.4 : 1.0) * (1 + (pu.magnet || 0) * 0.20 + (pas.magnet || 0) * 0.30);
  const xpMul = (r.char.id === 152 ? 1.2 : r.char.id === 151 ? 1.35 : 1.0) * (1 + (pu.growth || 0) * 0.08 + (pas.lucky_egg || 0) * 0.12);
  const goldMul = r.stage.goldMul * (r.char.id === 52 ? 1.5 : 1.0) * (1 + (pu.greed || 0) * 0.15 + (pas.lucky_egg || 0) * 0.10);
  const armor = (r.char.id === 7 ? 2 : r.char.id === 246 ? 4 : 0) + (pu.armor || 0) * 1.5;
  const regen = (r.char.id === 1 ? 0.8 : r.char.id === 249 ? 1.5 : 0) + (pu.regen || 0) * 0.4 + (pas.leftovers || 0) * 0.8;
  const critRate = 0.08 + (r.char.id === 25 || r.char.id === 250 ? 0.18 : 0) + (pas.wide_lens || 0) * 0.06 + (pas.lucky_egg || 0) * 0.05;
  return { might, speed, area, cdMul, extraCount, magnetRadius, xpMul, goldMul, armor, regen, critRate };
}

function startRun() {
  const charDef = CHARACTERS.find(c => c.id === SAVE.selectedChar) || CHARACTERS[0];
  const stageDef = STAGES.find(s => s.id === SAVE.selectedStage) || STAGES[0];
  const pu = SAVE.powerups;
  const baseMaxHp = Math.round(charDef.hp * (1 + (pu.maxHp || 0) * 0.12));

  RUN = {
    char: charDef,
    stage: stageDef,
    speciesId: charDef.chain[0],
    evoStage: 0,
    x: 0,
    y: 0,
    vx: 0,
    vy: 1,
    facingX: 1,
    facingY: 0,
    hp: baseMaxHp,
    maxHp: baseMaxHp,
    level: 1,
    xp: 0,
    xpNeed: 10,
    kills: 0,
    gold: 0,
    time: 0,
    revives: (pu.revival || 0) + (charDef.id === 250 ? 1 : 0),
    paused: false,
    modalOpen: false,
    over: false,
    weapons: { [charDef.weapon]: { lv: 1, evolved: false, timer: 0.2 } },
    passives: {},
    enemies: [],
    projectiles: [],
    zones: [],
    orbitals: [],
    gems: [],
    chests: [],
    popups: [],
    spawnAcc: 0,
    bossAcc: 45,
    activeBoss: null
  };

  // Mew (151) bonus: starts with an extra random weapon!
  if (charDef.id === 151) {
    const pool = Object.keys(WEAPONS).filter(k => k !== charDef.weapon);
    const extra = pool[Math.floor(Math.random() * pool.length)];
    RUN.weapons[extra] = { lv: 1, evolved: false, timer: 0.4 };
  }

  document.getElementById("scr-menu").style.display = "none";
  document.getElementById("hud").style.display = "block";
  playBgm(stageDef.bgm);
  playCry(RUN.speciesId);
  updateHudSlots();
}

function updateHudSlots() {
  if (!RUN) return;
  const wepEl = document.getElementById("wep-slots");
  const pasEl = document.getElementById("pas-slots");
  wepEl.innerHTML = "";
  pasEl.innerHTML = "";

  const wepKeys = Object.keys(RUN.weapons);
  for (let i = 0; i < 6; i++) {
    const k = wepKeys[i];
    const box = document.createElement("div");
    if (k) {
      const st = RUN.weapons[k];
      const def = WEAPONS[k];
      box.className = "slot-box" + (st.evolved ? " evo" : "");
      box.innerHTML = `<img src="${st.evolved ? def.evoIcon : def.icon}" /><span class="slv">${st.evolved ? "★" : "L" + st.lv}</span>`;
    } else {
      box.className = "slot-box";
    }
    wepEl.appendChild(box);
  }

  const pasKeys = Object.keys(RUN.passives);
  for (let i = 0; i < 6; i++) {
    const k = pasKeys[i];
    const box = document.createElement("div");
    box.className = "slot-box";
    if (k) {
      const lv = RUN.passives[k];
      const def = PASSIVES[k];
      box.innerHTML = `<img src="${def.icon}" /><span class="slv">L${lv}</span>`;
    }
    pasEl.appendChild(box);
  }
}

// Spawn enemies around screen perimeter (classic Vampire Survivors horde ring)
function spawnEnemy(isBoss = false) {
  if (!RUN) return;
  const waveIdx = Math.min(RUN.stage.waves.length - 1, Math.floor(RUN.time / 60));
  const pool = isBoss ? RUN.stage.bosses : RUN.stage.waves[waveIdx];
  const species = pool[Math.floor(Math.random() * pool.length)];

  const ang = Math.random() * Math.PI * 2;
  const dist = Math.max(canvas.width, canvas.height) * 0.56 + 60;
  const ex = RUN.x + Math.cos(ang) * dist;
  const ey = RUN.y + Math.sin(ang) * dist;

  const timeMin = RUN.time / 60;
  const hpBase = isBoss
    ? (320 + timeMin * 420) * RUN.stage.enemyHpMul
    : (16 + timeMin * 24 + Math.pow(timeMin, 1.55) * 10) * RUN.stage.enemyHpMul;

  const enemy = {
    species,
    x: ex,
    y: ey,
    hp: hpBase,
    maxHp: hpBase,
    speed: isBoss ? 68 : (54 + Math.min(45, timeMin * 5) + (species % 7) * 3),
    dmg: isBoss ? (18 + timeMin * 4) : (7 + timeMin * 2.2),
    radius: isBoss ? 34 : 18,
    scale: isBoss ? 2.45 : 1.55,
    isBoss,
    flashT: 0,
    slowT: 0,
    animOffset: Math.random() * 10
  };
  RUN.enemies.push(enemy);
  if (isBoss) {
    RUN.activeBoss = enemy;
    playCry(species);
    addPopup(RUN.x, RUN.y - 60, `⚠️ 头目 ${POKEMON_ZH[species] || ""} 出现！`, "#ff5252", 1.5);
  }
}

function addPopup(x, y, text, color = "#fff", scale = 1.0) {
  if (!RUN || RUN.popups.length > 90) return;
  RUN.popups.push({ x: x + (Math.random() - 0.5) * 16, y, text, color, scale, life: 0.65, maxLife: 0.65 });
}

function nearestEnemy(x, y, maxDist = 9999) {
  let best = null;
  let bestD = maxDist * maxDist;
  for (const e of RUN.enemies) {
    const d2 = (e.x - x) * (e.x - x) + (e.y - y) * (e.y - y);
    if (d2 < bestD) {
      bestD = d2;
      best = e;
    }
  }
  return best;
}

// Fire Weapons automatically
function fireWeapon(key, st, stats) {
  const def = WEAPONS[key];
  const lv = st.lv;
  const evo = st.evolved;
  const count = def.baseCount + Math.floor(lv / 3) + stats.extraCount + (evo ? 2 : 0);
  const dmg = def.baseDmg * (1 + (lv - 1) * 0.28) * (evo ? 1.85 : 1.0) * stats.might;
  const area = def.baseArea * (1 + (lv - 1) * 0.08) * (evo ? 1.35 : 1.0) * stats.area;
  const col = evo ? def.evoColor : def.color;

  if (def.kind === "fan_fire") {
    const target = nearestEnemy(RUN.x, RUN.y);
    const baseAng = target ? Math.atan2(target.y - RUN.y, target.x - RUN.x) : Math.atan2(RUN.facingY, RUN.facingX);
    for (let i = 0; i < count; i++) {
      const ang = evo
        ? baseAng + (i / count) * Math.PI * 2
        : baseAng + (i - (count - 1) / 2) * 0.22;
      RUN.projectiles.push({
        x: RUN.x, y: RUN.y,
        vx: Math.cos(ang) * 340, vy: Math.sin(ang) * 340,
        r: 13 * area, dmg, pierce: evo ? 6 : 3, life: 1.5, color: col, kind: "fire", hitSet: new Set()
      });
    }
  } else if (def.kind === "knife") {
    const baseAng = Math.atan2(RUN.facingY, RUN.facingX);
    for (let i = 0; i < count; i++) {
      const spread = (i - (count - 1) / 2) * 0.12;
      const ang = baseAng + spread;
      RUN.projectiles.push({
        x: RUN.x + Math.cos(ang) * 14, y: RUN.y + Math.sin(ang) * 14,
        vx: Math.cos(ang) * 520, vy: Math.sin(ang) * 520,
        r: 10 * area, dmg, pierce: evo ? 4 : 2, life: 1.1, color: col, kind: "shuriken", hitSet: new Set()
      });
    }
  } else if (def.kind === "lightning") {
    const candidates = RUN.enemies.filter(e => Math.hypot(e.x - RUN.x, e.y - RUN.y) < 480);
    for (let i = 0; i < count; i++) {
      const t = candidates.length
        ? candidates[Math.floor(Math.random() * candidates.length)]
        : { x: RUN.x + (Math.random() - 0.5) * 420, y: RUN.y + (Math.random() - 0.5) * 320 };
      const rad = 48 * area;
      RUN.zones.push({ x: t.x, y: t.y, r: rad, dmg: dmg * 1.35, life: 0.28, maxLife: 0.28, tick: 0, color: col, kind: "lightning" });
      for (const e of RUN.enemies) {
        if (Math.hypot(e.x - t.x, e.y - t.y) <= rad + e.radius) {
          damageEnemy(e, dmg, stats);
        }
      }
    }
  } else if (def.kind === "orbit") {
    // Spawn rotating leaf blades around player
    for (let i = 0; i < count; i++) {
      RUN.orbitals.push({
        ang: (i / count) * Math.PI * 2,
        dist: (evo ? 92 : 74) * area,
        r: 14 * area,
        dmg,
        life: evo ? 2.15 : 1.75,
        speed: evo ? 5.2 : 3.8,
        color: col,
        hitCd: new Map()
      });
    }
  } else if (def.kind === "wave") {
    for (let i = 0; i < count; i++) {
      const ang = (i / count) * Math.PI * 2 + RUN.time * 0.7;
      RUN.projectiles.push({
        x: RUN.x, y: RUN.y,
        vx: Math.cos(ang) * 240, vy: Math.sin(ang) * 240,
        r: 26 * area, dmg, pierce: 99, knockback: 55, life: 1.25, color: col, kind: "wave", hitSet: new Set()
      });
    }
  } else if (def.kind === "aura") {
    const rad = 82 * area;
    RUN.zones.push({ x: RUN.x, y: RUN.y, r: rad, dmg: 0, life: 0.22, maxLife: 0.22, follow: true, color: col, kind: "aura" });
    for (const e of RUN.enemies) {
      if (Math.hypot(e.x - RUN.x, e.y - RUN.y) <= rad + e.radius) {
        damageEnemy(e, dmg, stats);
        e.slowT = 0.6;
        if (evo && RUN.hp < RUN.maxHp) {
          RUN.hp = Math.min(RUN.maxHp, RUN.hp + 0.35);
        }
      }
    }
  } else if (def.kind === "bounce") {
    for (let i = 0; i < count; i++) {
      const t = nearestEnemy(RUN.x, RUN.y);
      const ang = t ? Math.atan2(t.y - RUN.y, t.x - RUN.x) + (i - (count - 1) / 2) * 0.28 : Math.random() * Math.PI * 2;
      RUN.projectiles.push({
        x: RUN.x, y: RUN.y,
        vx: Math.cos(ang) * 380, vy: Math.sin(ang) * 380,
        r: 14 * area, dmg, pierce: 99, bounce: evo ? 6 : 3, life: 2.8, color: col, kind: "shadow", hitSet: new Set()
      });
    }
  } else if (def.kind === "zone") {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const dist = 70 + Math.random() * 140;
      RUN.zones.push({
        x: RUN.x + Math.cos(ang) * dist,
        y: RUN.y + Math.sin(ang) * dist,
        r: 52 * area,
        dmg,
        life: evo ? 2.6 : 1.9,
        maxLife: evo ? 2.6 : 1.9,
        tick: 0,
        color: col,
        kind: "blizzard",
        slow: true
      });
    }
  } else if (def.kind === "lob") {
    for (let i = 0; i < count; i++) {
      const vx = (i % 2 === 0 ? 1 : -1) * (65 + i * 38);
      RUN.projectiles.push({
        x: RUN.x, y: RUN.y - 10,
        vx, vy: -340 - (i % 3) * 45,
        gravity: 780,
        r: 20 * area, dmg, pierce: 99, life: 1.8, color: col, kind: "rock", hitSet: new Set()
      });
    }
  } else if (def.kind === "whip") {
    // Horizontal slash left & right (classic Vampire Survivors Whip / Bloody Tear)
    const dir = RUN.facingX >= 0 ? 1 : -1;
    for (let i = 0; i < Math.min(4, count); i++) {
      const side = (i % 2 === 0) ? dir : -dir;
      const oy = (Math.floor(i / 2) * -28);
      const sx = RUN.x + side * 68 * area;
      const sy = RUN.y + oy;
      const sw = 125 * area;
      const sh = 36 * area;
      RUN.zones.push({ x: sx, y: sy, w: sw, h: sh, r: sw * 0.5, dmg: 0, life: 0.20, maxLife: 0.20, color: col, kind: "whip" });
      for (const e of RUN.enemies) {
        if (Math.abs(e.x - sx) <= sw * 0.55 + e.radius && Math.abs(e.y - sy) <= sh * 0.6 + e.radius) {
          damageEnemy(e, dmg, stats);
          if (evo && RUN.hp < RUN.maxHp) RUN.hp = Math.min(RUN.maxHp, RUN.hp + 1.2);
        }
      }
    }
  } else if (def.kind === "beam") {
    for (let i = 0; i < count; i++) {
      const ang = (i / count) * Math.PI * 2 + RUN.time * 0.5;
      const bx = RUN.x + Math.cos(ang) * 135;
      const by = RUN.y + Math.sin(ang) * 135;
      const rad = 58 * area;
      RUN.zones.push({ x: bx, y: by, r: rad, dmg: 0, life: 0.35, maxLife: 0.35, color: col, kind: "moon" });
      for (const e of RUN.enemies) {
        if (Math.hypot(e.x - bx, e.y - by) <= rad + e.radius) {
          damageEnemy(e, dmg, stats);
        }
      }
    }
  } else if (def.kind === "coin") {
    const target = nearestEnemy(RUN.x, RUN.y);
    const baseAng = target ? Math.atan2(target.y - RUN.y, target.x - RUN.x) : Math.atan2(RUN.facingY, RUN.facingX);
    for (let i = 0; i < count; i++) {
      const ang = baseAng + (i - (count - 1) / 2) * 0.18;
      RUN.projectiles.push({
        x: RUN.x, y: RUN.y,
        vx: Math.cos(ang) * 420, vy: Math.sin(ang) * 420,
        r: 12 * area, dmg: dmg * (evo ? 1.4 : 1.0), pierce: evo ? 5 : 2, life: 1.3, color: col, kind: "coin", hitSet: new Set()
      });
    }
  }
}

function damageEnemy(e, rawDmg, stats) {
  if (e.hp <= 0) return;
  const isCrit = Math.random() < stats.critRate;
  const finalDmg = Math.max(1, Math.round(rawDmg * (isCrit ? 1.85 : 1.0)));
  e.hp -= finalDmg;
  e.flashT = 0.1;
  sfx("hit");
  addPopup(e.x, e.y - 16, (isCrit ? "💥" : "") + finalDmg, isCrit ? "#ffee58" : "#ffffff", isCrit ? 1.25 : 0.95);

  if (e.hp <= 0) {
    killEnemy(e, stats);
  }
}

function killEnemy(e, stats) {
  RUN.kills++;
  if (RUN.activeBoss === e) {
    RUN.activeBoss = null;
  }
  if (e.isBoss) {
    // Boss always drops a Treasure Chest + Gold + Big Red Gem!
    RUN.chests.push({ x: e.x, y: e.y });
    RUN.gems.push({ x: e.x + 16, y: e.y, xp: 45, tier: 3 });
    const gGain = Math.round(65 * stats.goldMul);
    RUN.gold += gGain;
    SAVE.gold += gGain;
    writeSave();
    addPopup(e.x, e.y - 24, `🎁 进化宝箱掉落！`, "#ff80ab", 1.35);
  } else {
    // Drop XP gem (Blue / Green / Red) or occasional Sitrus Berry heal / Gold coin
    const roll = Math.random();
    if (roll < 0.018) {
      RUN.gems.push({ x: e.x, y: e.y, heal: 30, kind: "berry" });
    } else if (roll < 0.08) {
      RUN.gems.push({ x: e.x, y: e.y, gold: Math.round(10 * stats.goldMul), kind: "coin" });
    } else {
      const tier = RUN.time > 240 && Math.random() < 0.25 ? 2 : (RUN.time > 90 && Math.random() < 0.35 ? 1 : 0);
      const xpVal = [3, 8, 22][tier];
      RUN.gems.push({ x: e.x, y: e.y, xp: xpVal, tier, kind: "xp" });
    }
  }
}

// Level Up & Pokemon Form Evolution & 3-Choice Modal
function triggerLevelUp() {
  RUN.level++;
  RUN.xp -= RUN.xpNeed;
  RUN.xpNeed = Math.round(10 + RUN.level * 8 + Math.pow(RUN.level, 1.35) * 3);
  sfx("level");

  // Check if player's Pokemon evolves at Lv.16 or Lv.32!
  if (RUN.level >= 16 && RUN.evoStage === 0 && RUN.char.chain[1] !== RUN.speciesId) {
    RUN.evoStage = 1;
    RUN.speciesId = RUN.char.chain[1];
    RUN.maxHp = Math.round(RUN.maxHp * 1.25);
    RUN.hp = RUN.maxHp;
    playCry(RUN.speciesId);
    addPopup(RUN.x, RUN.y - 50, `✨ 进化为 ${POKEMON_ZH[RUN.speciesId]}！全属性暴涨！`, "#ffe066", 1.5);
  } else if (RUN.level >= 32 && RUN.evoStage <= 1 && RUN.char.chain[2] !== RUN.speciesId) {
    RUN.evoStage = 2;
    RUN.speciesId = RUN.char.chain[2];
    RUN.maxHp = Math.round(RUN.maxHp * 1.35);
    RUN.hp = RUN.maxHp;
    playCry(RUN.speciesId);
    addPopup(RUN.x, RUN.y - 50, `👑 最终进化为 ${POKEMON_ZH[RUN.speciesId]}！`, "#ff80ab", 1.65);
  }

  // Build 3 or 4 level-up options
  const options = [];
  const wepCount = Object.keys(RUN.weapons).length;
  const pasCount = Object.keys(RUN.passives).length;

  // 1. Check if any Lv.8 weapon can evolve right now!
  for (const [wk, wst] of Object.entries(RUN.weapons)) {
    const def = WEAPONS[wk];
    if (wst.lv >= 8 && !wst.evolved && (RUN.passives[def.reqPassive] || 0) >= 1) {
      options.push({
        type: "evolve", key: wk,
        name: def.evoName, icon: def.evoIcon, tag: "★ 超武合成", isEvo: true,
        desc: `【${def.name} Lv.8 + ${PASSIVES[def.reqPassive].name.split(" ")[0]}】合成为终极超武！`
      });
    }
  }

  // 2. Existing weapons < Lv.8
  const candidates = [];
  for (const [wk, wst] of Object.entries(RUN.weapons)) {
    if (wst.lv < 8) {
      const def = WEAPONS[wk];
      candidates.push({
        type: "weapon", key: wk,
        name: def.name, icon: def.icon, tag: `Lv.${wst.lv + 1}`,
        desc: `${def.desc}（伤害 +28%，范围/数量提升）`
      });
    }
  }
  // 3. Existing passives < Lv.5
  for (const [pk, plv] of Object.entries(RUN.passives)) {
    if (plv < PASSIVES[pk].maxLv) {
      const def = PASSIVES[pk];
      candidates.push({
        type: "passive", key: pk,
        name: def.name, icon: def.icon, tag: `Lv.${plv + 1}`,
        desc: def.desc
      });
    }
  }
  // 4. New weapons if slots < 6
  if (wepCount < 6) {
    for (const [wk, def] of Object.entries(WEAPONS)) {
      if (!RUN.weapons[wk]) {
        candidates.push({
          type: "weapon", key: wk,
          name: def.name, icon: def.icon, tag: "新招式!",
          desc: def.desc
        });
      }
    }
  }
  // 5. New passives if slots < 6
  if (pasCount < 6) {
    for (const [pk, def] of Object.entries(PASSIVES)) {
      if (!RUN.passives[pk]) {
        candidates.push({
          type: "passive", key: pk,
          name: def.name, icon: def.icon, tag: "新被动!",
          desc: def.desc
        });
      }
    }
  }

  // Shuffle candidates and pick up to 4
  candidates.sort(() => Math.random() - 0.5);
  while (options.length < 4 && candidates.length > 0) {
    options.push(candidates.shift());
  }

  if (options.length === 0) {
    // All slots maxed! Give HP heal + Gold bag (Vampire Survivors Floor Chicken / Coin Bag)
    RUN.hp = Math.min(RUN.maxHp, RUN.hp + 35);
    RUN.gold += 50;
    SAVE.gold += 50;
    writeSave();
    addPopup(RUN.x, RUN.y - 30, "+50 🪙 满级奖励!", "#ffd54f", 1.2);
    return;
  }

  RUN.paused = true;
  RUN.modalOpen = true;
  const ov = document.getElementById("modal-ov");
  const box = document.getElementById("modal-box");
  ov.style.display = "flex";

  box.innerHTML = `
    <div style="text-align:center;margin-bottom:8px;">
      <div style="font-size:22px;font-weight:900;color:#ffe066;text-shadow:0 2px 0 #000;">✨ 等级提升！LV.${RUN.level} ✨</div>
      <div style="font-size:12px;color:#cbb98b;">选择一项宝可梦招式或被动秘传强化</div>
    </div>
    <div id="lvl-choices"></div>
  `;
  const listEl = box.querySelector("#lvl-choices");
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "choice-btn" + (opt.isEvo ? " evo-choice" : "");
    btn.innerHTML = `
      <div class="choice-ic"><img src="${opt.icon}" /></div>
      <div style="flex:1;">
        <div>
          <b style="font-size:15px;color:#fff;">${opt.name}</b>
          <span class="choice-tag ${opt.isEvo ? "evo" : ""}">${opt.tag}</span>
        </div>
        <div style="font-size:12px;color:#d8c8a8;margin-top:3px;">${opt.desc}</div>
      </div>
    `;
    btn.onclick = () => {
      if (opt.type === "evolve") {
        RUN.weapons[opt.key].evolved = true;
      } else if (opt.type === "weapon") {
        if (!RUN.weapons[opt.key]) RUN.weapons[opt.key] = { lv: 1, evolved: false, timer: 0.1 };
        else RUN.weapons[opt.key].lv++;
      } else if (opt.type === "passive") {
        RUN.passives[opt.key] = (RUN.passives[opt.key] || 0) + 1;
      }
      updateHudSlots();
      ov.style.display = "none";
      RUN.modalOpen = false;
      RUN.paused = false;
      if (RUN.xp >= RUN.xpNeed) {
        triggerLevelUp();
      }
    };
    listEl.appendChild(btn);
  });
}

// Open Boss Treasure Chest (Vampire Survivors Chest — prioritizes Super Weapon Evolutions!)
function openChest() {
  sfx("chest");
  let title = "🎁 发现首领宝箱！";
  let rewardName = "";
  let rewardIcon = "./assets/items/big-nugget.png";
  let rewardDesc = "";

  // 1. Check for ready weapon evolution
  let evolvedKey = null;
  for (const [wk, wst] of Object.entries(RUN.weapons)) {
    const def = WEAPONS[wk];
    if (wst.lv >= 8 && !wst.evolved && (RUN.passives[def.reqPassive] || 0) >= 1) {
      evolvedKey = wk;
      break;
    }
  }

  if (evolvedKey) {
    RUN.weapons[evolvedKey].evolved = true;
    const def = WEAPONS[evolvedKey];
    title = "🌟 超武突破进化！🌟";
    rewardName = def.evoName;
    rewardIcon = def.evoIcon;
    rewardDesc = `【${def.name}】与【${PASSIVES[def.reqPassive].name.split(" ")[0]}】产生共鸣，进化为终极超武！`;
  } else {
    // 2. Otherwise upgrade an existing weapon or passive
    const upgWep = Object.keys(RUN.weapons).filter(k => RUN.weapons[k].lv < 8);
    if (upgWep.length > 0) {
      const k = upgWep[Math.floor(Math.random() * upgWep.length)];
      RUN.weapons[k].lv++;
      rewardName = `${WEAPONS[k].name} 升至 Lv.${RUN.weapons[k].lv}`;
      rewardIcon = WEAPONS[k].icon;
      rewardDesc = WEAPONS[k].desc;
    } else {
      rewardName = "黄金大金珠袋 (+250 金币 & 满血回复)";
      rewardDesc = "所有装备已满级，获得丰厚金币与全额生命回复！";
    }
  }

  const bonusGold = 120;
  RUN.gold += bonusGold;
  SAVE.gold += bonusGold;
  RUN.hp = Math.min(RUN.maxHp, RUN.hp + 45);
  writeSave();
  updateHudSlots();

  RUN.paused = true;
  RUN.modalOpen = true;
  const ov = document.getElementById("modal-ov");
  const box = document.getElementById("modal-box");
  ov.style.display = "flex";
  box.innerHTML = `
    <div style="text-align:center;padding:10px;">
      <div style="font-size:24px;font-weight:900;color:#ffe066;margin-bottom:10px;">${title}</div>
      <div style="width:76px;height:76px;margin:0 auto 10px;background:#160d24;border:3px solid #ff80ab;border-radius:12px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px rgba(255,128,171,0.5);">
        <img src="${rewardIcon}" style="width:52px;height:52px;image-rendering:pixelated;" />
      </div>
      <div style="font-size:18px;font-weight:900;color:#fff;margin-bottom:6px;">${rewardName}</div>
      <div style="font-size:13px;color:#d8c8a8;margin-bottom:10px;">${rewardDesc}</div>
      <div style="font-size:14px;color:#ffd54f;font-weight:900;margin-bottom:14px;">🪙 额外获得 +${bonusGold} 金币 · ❤️ 生命值恢复</div>
      <button id="btn-chest-ok" class="vs-btn gold" style="width:180px;font-size:17px;">收下宝物</button>
    </div>
  `;
  box.querySelector("#btn-chest-ok").onclick = () => {
    ov.style.display = "none";
    RUN.modalOpen = false;
    RUN.paused = false;
  };
}

function pauseRun() {
  if (!RUN || RUN.over || RUN.modalOpen) return;
  RUN.paused = true;
  const ov = document.getElementById("modal-ov");
  const box = document.getElementById("modal-box");
  ov.style.display = "flex";
  box.innerHTML = `
    <div style="text-align:center;padding:10px;">
      <div style="font-size:22px;font-weight:900;color:#ffe066;margin-bottom:12px;">⏸️ 游戏暂停</div>
      <div style="font-size:13px;color:#ccc;margin-bottom:16px;">
        当前宝可梦：<b>${POKEMON_ZH[RUN.speciesId]} (Lv.${RUN.level})</b> · 击败数：<b>${RUN.kills}</b> · 本局金币：<b>${RUN.gold}</b>
      </div>
      <div style="display:flex;gap:12px;justify-content:center;">
        <button id="btn-resume" class="vs-btn green" style="min-width:130px;">继续战斗</button>
        <button id="btn-quit" class="vs-btn" style="min-width:130px;">结算返回主菜单</button>
      </div>
    </div>
  `;
  box.querySelector("#btn-resume").onclick = resumeRun;
  box.querySelector("#btn-quit").onclick = () => endRun(false);
}

function resumeRun() {
  if (!RUN) return;
  document.getElementById("modal-ov").style.display = "none";
  RUN.modalOpen = false;
  RUN.paused = false;
}

function endRun(victory) {
  if (!RUN) return;
  RUN.over = true;
  RUN.paused = true;
  const timeBonusGold = Math.floor(RUN.time * 1.5);
  RUN.gold += timeBonusGold;
  SAVE.gold += timeBonusGold;
  if (RUN.kills > (SAVE.bestKills || 0)) SAVE.bestKills = RUN.kills;
  writeSave();

  const mins = String(Math.floor(RUN.time / 60)).padStart(2, "0");
  const secs = String(Math.floor(RUN.time % 60)).padStart(2, "0");

  const ov = document.getElementById("modal-ov");
  const box = document.getElementById("modal-box");
  ov.style.display = "flex";
  box.innerHTML = `
    <div style="text-align:center;padding:12px;">
      <div style="font-size:26px;font-weight:900;color:${victory ? "#ffe066" : "#ff5252"};margin-bottom:8px;">
        ${victory ? "🏆 生存大捷 · 征服全场！" : "💀 体力耗尽 · 结算完成"}
      </div>
      <img src="./assets/portraits/${RUN.speciesId}.png" style="width:72px;height:72px;image-rendering:pixelated;border:2px solid #d4af37;border-radius:8px;margin-bottom:8px;" />
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#160e22;padding:12px;border-radius:6px;margin-bottom:14px;font-size:14px;">
        <div>⏱️ 存活时间：<b style="color:#fff;">${mins}:${secs}</b></div>
        <div>💀 击败宝可梦：<b style="color:#fff;">${RUN.kills}</b></div>
        <div>⭐ 最终等级：<b style="color:#ffe066;">Lv.${RUN.level}</b></div>
        <div>🪙 获得总金币：<b style="color:#ffd54f;">+${RUN.gold}</b></div>
      </div>
      <button id="btn-back-menu" class="vs-btn gold" style="width:200px;font-size:17px;">返回主菜单</button>
    </div>
  `;
  box.querySelector("#btn-back-menu").onclick = () => {
    ov.style.display = "none";
    document.getElementById("hud").style.display = "none";
    document.getElementById("scr-menu").style.display = "flex";
    RUN = null;
    playBgm("./assets/music/menu.ogg");
    renderMenu();
  };
}

// ============================================================================
// Main 60FPS Game Loop (Update & 2D Top-Down Render)
// ============================================================================
let lastTime = performance.now();

function updateRun(dt) {
  if (!RUN || RUN.paused || RUN.over) return;
  RUN.time += dt;
  const stats = getPlayerStats(RUN);

  // Passive HP regen
  if (stats.regen > 0 && RUN.hp < RUN.maxHp) {
    RUN.hp = Math.min(RUN.maxHp, RUN.hp + stats.regen * dt);
  }

  // Player Movement (Keyboard WASD/Arrows + Touch Virtual Stick)
  let mx = TOUCH.active ? TOUCH.dx : 0;
  let my = TOUCH.active ? TOUCH.dy : 0;
  if (KEYS.has("KeyW") || KEYS.has("ArrowUp")) my -= 1;
  if (KEYS.has("KeyS") || KEYS.has("ArrowDown")) my += 1;
  if (KEYS.has("KeyA") || KEYS.has("ArrowLeft")) mx -= 1;
  if (KEYS.has("KeyD") || KEYS.has("ArrowRight")) mx += 1;

  const mlen = Math.hypot(mx, my);
  if (mlen > 0.01) {
    mx /= mlen;
    my /= mlen;
    RUN.x += mx * stats.speed * dt;
    RUN.y += my * stats.speed * dt;
    RUN.vx = mx;
    RUN.vy = my;
    RUN.facingX = mx;
    RUN.facingY = my;
  } else {
    RUN.vx = 0;
    RUN.vy = 0;
  }

  // Fire weapons
  for (const [wk, wst] of Object.entries(RUN.weapons)) {
    wst.timer -= dt;
    if (wst.timer <= 0) {
      const def = WEAPONS[wk];
      const lvFactor = Math.max(0.55, 1 - (wst.lv - 1) * 0.04);
      wst.timer = def.baseCd * lvFactor * (wst.evolved ? 0.65 : 1.0) * stats.cdMul;
      fireWeapon(wk, wst, stats);
    }
  }

  // Update Orbitals (Razor Leaf / Petal Storm)
  for (let i = RUN.orbitals.length - 1; i >= 0; i--) {
    const o = RUN.orbitals[i];
    o.life -= dt;
    if (o.life <= 0) {
      RUN.orbitals.splice(i, 1);
      continue;
    }
    o.ang += o.speed * dt;
    const ox = RUN.x + Math.cos(o.ang) * o.dist;
    const oy = RUN.y + Math.sin(o.ang) * o.dist;
    o.x = ox;
    o.y = oy;
    for (const e of RUN.enemies) {
      if (Math.hypot(e.x - ox, e.y - oy) <= o.r + e.radius) {
        const lastHit = o.hitCd.get(e) || 0;
        if (RUN.time - lastHit > 0.35) {
          o.hitCd.set(e, RUN.time);
          damageEnemy(e, o.dmg, stats);
        }
      }
    }
  }

  // Update Projectiles
  const halfW = canvas.width * 0.55;
  const halfH = canvas.height * 0.55;
  for (let i = RUN.projectiles.length - 1; i >= 0; i--) {
    const p = RUN.projectiles[i];
    p.life -= dt;
    if (p.life <= 0) {
      RUN.projectiles.splice(i, 1);
      continue;
    }
    if (p.gravity) p.vy += p.gravity * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    // Screen-edge bounce for Shadow Ball
    if (p.bounce && p.bounce > 0) {
      if (Math.abs(p.x - RUN.x) > halfW) { p.vx = -p.vx; p.bounce--; p.hitSet.clear(); }
      if (Math.abs(p.y - RUN.y) > halfH) { p.vy = -p.vy; p.bounce--; p.hitSet.clear(); }
    }

    for (const e of RUN.enemies) {
      if (e.hp <= 0 || p.hitSet.has(e)) continue;
      if (Math.hypot(e.x - p.x, e.y - p.y) <= p.r + e.radius) {
        p.hitSet.add(e);
        damageEnemy(e, p.dmg, stats);
        if (p.kind === "coin" && Math.random() < 0.25) {
          RUN.gold += 2;
          SAVE.gold += 2;
        }
        if (p.knockback && !e.isBoss) {
          const ang = Math.atan2(e.y - RUN.y, e.x - RUN.x);
          e.x += Math.cos(ang) * p.knockback;
          e.y += Math.sin(ang) * p.knockback;
        }
        p.pierce--;
        if (p.pierce <= 0) {
          p.life = 0;
          break;
        }
      }
    }
  }

  // Update Persistent Zones (Blizzard / Psychic Aura / Lightning / Whip)
  for (let i = RUN.zones.length - 1; i >= 0; i--) {
    const z = RUN.zones[i];
    z.life -= dt;
    if (z.life <= 0) {
      RUN.zones.splice(i, 1);
      continue;
    }
    if (z.follow) {
      z.x = RUN.x;
      z.y = RUN.y;
    }
    if (z.dmg > 0) {
      z.tick -= dt;
      if (z.tick <= 0) {
        z.tick = 0.4;
        for (const e of RUN.enemies) {
          if (Math.hypot(e.x - z.x, e.y - z.y) <= z.r + e.radius) {
            damageEnemy(e, z.dmg, stats);
            if (z.slow) e.slowT = 0.8;
          }
        }
      }
    }
  }

  // Spawn Hordes & Bosses
  const targetEnemyCap = Math.min(220, 35 + Math.floor(RUN.time * 0.45));
  RUN.spawnAcc += dt * (2.2 + RUN.time * 0.035);
  while (RUN.spawnAcc >= 1 && RUN.enemies.length < targetEnemyCap) {
    RUN.spawnAcc -= 1;
    spawnEnemy(false);
  }
  RUN.bossAcc -= dt;
  if (RUN.bossAcc <= 0) {
    RUN.bossAcc = 45;
    spawnEnemy(true);
  }

  // Update Enemies & Soft-collision separation
  for (let i = RUN.enemies.length - 1; i >= 0; i--) {
    const e = RUN.enemies[i];
    if (e.hp <= 0) {
      RUN.enemies.splice(i, 1);
      continue;
    }
    if (e.flashT > 0) e.flashT -= dt;
    if (e.slowT > 0) e.slowT -= dt;

    const dx = RUN.x - e.x;
    const dy = RUN.y - e.y;
    const dist = Math.hypot(dx, dy);

    // Despawn non-boss enemies that fall way too far behind and respawn ahead
    if (!e.isBoss && dist > Math.max(canvas.width, canvas.height) * 0.95) {
      const ang = Math.random() * Math.PI * 2;
      const rDist = Math.max(canvas.width, canvas.height) * 0.55;
      e.x = RUN.x + Math.cos(ang) * rDist;
      e.y = RUN.y + Math.sin(ang) * rDist;
      continue;
    }

    const spd = e.speed * (e.slowT > 0 ? 0.55 : 1.0);
    if (dist > 1) {
      e.vx = (dx / dist) * spd;
      e.vy = (dy / dist) * spd;
      e.x += e.vx * dt;
      e.y += e.vy * dt;
    }

    // Contact damage to player
    if (dist < e.radius + 16) {
      const taken = Math.max(1, e.dmg - stats.armor) * dt;
      RUN.hp -= taken;
      if (RUN.hp <= 0) {
        if (RUN.revives > 0) {
          RUN.revives--;
          RUN.hp = RUN.maxHp * 0.6;
          sfx("chest");
          addPopup(RUN.x, RUN.y - 40, "🔥 圣灰浴火重生！", "#ffe066", 1.5);
          // Push back all nearby enemies
          for (const other of RUN.enemies) {
            const ang = Math.atan2(other.y - RUN.y, other.x - RUN.x);
            other.x += Math.cos(ang) * 160;
            other.y += Math.sin(ang) * 160;
          }
        } else {
          endRun(false);
          return;
        }
      }
    }
  }

  // Update XP Gems, Berries & Gold Coins (Magnetic pull)
  for (let i = RUN.gems.length - 1; i >= 0; i--) {
    const g = RUN.gems[i];
    const d = Math.hypot(RUN.x - g.x, RUN.y - g.y);
    if (d < stats.magnetRadius || g.magnetized) {
      g.magnetized = true;
      const ang = Math.atan2(RUN.y - g.y, RUN.x - g.x);
      g.x += Math.cos(ang) * 460 * dt;
      g.y += Math.sin(ang) * 460 * dt;
    }
    if (d < 24) {
      RUN.gems.splice(i, 1);
      sfx("gem");
      if (g.kind === "berry") {
        RUN.hp = Math.min(RUN.maxHp, RUN.hp + g.heal);
        addPopup(RUN.x, RUN.y - 24, `+${g.heal} HP`, "#69f0ae", 1.1);
      } else if (g.kind === "coin") {
        RUN.gold += g.gold;
        SAVE.gold += g.gold;
        addPopup(RUN.x, RUN.y - 24, `+${g.gold} 🪙`, "#ffd54f", 1.05);
      } else {
        RUN.xp += g.xp * stats.xpMul;
        if (RUN.xp >= RUN.xpNeed) {
          triggerLevelUp();
          if (RUN.paused) break;
        }
      }
    }
  }

  // Update Chests pickup
  for (let i = RUN.chests.length - 1; i >= 0; i--) {
    const c = RUN.chests[i];
    if (Math.hypot(RUN.x - c.x, RUN.y - c.y) < 34) {
      RUN.chests.splice(i, 1);
      openChest();
      break;
    }
  }

  // Update Floating Damage Popups
  for (let i = RUN.popups.length - 1; i >= 0; i--) {
    const p = RUN.popups[i];
    p.life -= dt;
    p.y -= 28 * dt;
    if (p.life <= 0) RUN.popups.splice(i, 1);
  }

  // Update HUD text
  document.getElementById("xp-fill").style.width = `${Math.min(100, (RUN.xp / RUN.xpNeed) * 100)}%`;
  document.getElementById("xp-lv").textContent = `LV ${RUN.level} · ${POKEMON_ZH[RUN.speciesId]}`;
  const mins = String(Math.floor(RUN.time / 60)).padStart(2, "0");
  const secs = String(Math.floor(RUN.time % 60)).padStart(2, "0");
  document.getElementById("hud-timer").textContent = `${mins}:${secs}`;
  document.getElementById("hud-wave").textContent = `第 ${Math.floor(RUN.time / 60) + 1} 波 · ${RUN.stage.name.split(" ")[0]}`;
  document.getElementById("hud-kills").textContent = RUN.kills;
  document.getElementById("hud-gold").textContent = RUN.gold;

  const bossBar = document.getElementById("boss-bar");
  if (RUN.activeBoss && RUN.activeBoss.hp > 0) {
    bossBar.style.display = "block";
    document.getElementById("boss-name").textContent = `👑 头目 ${POKEMON_ZH[RUN.activeBoss.species]} (${Math.ceil(RUN.activeBoss.hp)} / ${Math.ceil(RUN.activeBoss.maxHp)})`;
    document.getElementById("boss-fill").style.width = `${Math.max(0, (RUN.activeBoss.hp / RUN.activeBoss.maxHp) * 100)}%`;
  } else {
    bossBar.style.display = "none";
  }
}

function render2D() {
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  // If on menu screen, render a lively 2D tiled preview background
  const st = RUN ? RUN.stage : (STAGES.find(s => s.id === SAVE.selectedStage) || STAGES[0]);
  const camX = RUN ? RUN.x - w / 2 : performance.now() * 0.025;
  const camY = RUN ? RUN.y - h / 2 : performance.now() * 0.015;

  // 1. Draw Seamless 2D Flat Tiled Ground (Zero 3D!)
  ctx.fillStyle = st.bgTint;
  ctx.fillRect(0, 0, w, h);

  const gImg = getImg(st.groundTex);
  const pImg = getImg(st.pathTex);
  const tileSize = 128;
  const startCol = Math.floor(camX / tileSize) - 1;
  const endCol = Math.floor((camX + w) / tileSize) + 1;
  const startRow = Math.floor(camY / tileSize) - 1;
  const endRow = Math.floor((camY + h) / tileSize) + 1;

  for (let r = startRow; r <= endRow; r++) {
    for (let c = startCol; c <= endCol; c++) {
      const sx = Math.floor(c * tileSize - camX);
      const sy = Math.floor(r * tileSize - camY);
      // Deterministic hash for subtle path/decor variation on the flat 2D plane
      const hash = Math.abs((c * 73856093) ^ (r * 19349663)) % 100;
      const tex = (hash < 18 && pImg.complete && pImg.naturalWidth > 0) ? pImg : gImg;
      if (tex.complete && tex.naturalWidth > 0) {
        ctx.drawImage(tex, sx, sy, tileSize + 1, tileSize + 1);
      }
      // Subtle grid border for classic retro 2D feel
      if (hash === 1 || hash === 2) {
        ctx.fillStyle = "rgba(255,255,255,0.04)";
        ctx.fillRect(sx + 20, sy + 20, 12, 12);
      }
    }
  }

  if (!RUN) return;

  // 2. Draw Persistent Ground Zones (Psychic Aura, Blizzard, Moonbeam, Whip)
  for (const z of RUN.zones) {
    const sx = z.x - camX;
    const sy = z.y - camY;
    const alpha = Math.min(1, z.life / z.maxLife);
    ctx.save();
    if (z.kind === "whip") {
      ctx.fillStyle = z.color;
      ctx.globalAlpha = alpha * 0.75;
      ctx.fillRect(sx - z.w / 2, sy - z.h / 2, z.w, z.h);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.strokeRect(sx - z.w / 2, sy - z.h / 2, z.w, z.h);
    } else if (z.kind === "lightning") {
      ctx.strokeStyle = z.color;
      ctx.lineWidth = 5;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.moveTo(sx - 12, sy - 260);
      ctx.lineTo(sx + 10, sy - 130);
      ctx.lineTo(sx - 8, sy - 60);
      ctx.lineTo(sx, sy);
      ctx.stroke();
      ctx.fillStyle = z.color;
      ctx.globalAlpha = alpha * 0.45;
      ctx.beginPath();
      ctx.arc(sx, sy, z.r, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = z.color;
      ctx.globalAlpha = alpha * 0.28;
      ctx.beginPath();
      ctx.arc(sx, sy, z.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = z.color;
      ctx.lineWidth = 2.5;
      ctx.globalAlpha = alpha * 0.75;
      ctx.stroke();
    }
    ctx.restore();
  }

  // 3. Draw XP Gems (Rare Candies), Berries & Gold Coins
  const candyImg = getImg("./assets/items/rare-candy.png");
  const berryImg = getImg("./assets/items/sitrus-berry.png");
  const coinImg = getImg("./assets/ui/icons/coin.png");

  for (const g of RUN.gems) {
    const sx = g.x - camX;
    const sy = g.y - camY;
    if (sx < -30 || sx > w + 30 || sy < -30 || sy > h + 30) continue;
    if (g.kind === "berry" && berryImg.complete) {
      ctx.drawImage(berryImg, sx - 12, sy - 12, 24, 24);
    } else if (g.kind === "coin" && coinImg.complete) {
      ctx.drawImage(coinImg, sx - 11, sy - 11, 22, 22);
    } else {
      // Vampire Survivors style colored XP diamond gem (Blue / Green / Red)
      const colors = ["#29b6f6", "#66bb6a", "#ff5252", "#e040fb"];
      ctx.fillStyle = colors[g.tier || 0];
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(sx, sy - 8);
      ctx.lineTo(sx + 6, sy);
      ctx.lineTo(sx, sy + 8);
      ctx.lineTo(sx - 6, sy);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }

  // 4. Draw Boss Treasure Chests
  const chestImg = getImg("./assets/items/master-ball.png");
  for (const c of RUN.chests) {
    const sx = c.x - camX;
    const sy = c.y - camY;
    ctx.save();
    ctx.fillStyle = "rgba(255, 215, 64, 0.35)";
    ctx.beginPath();
    ctx.arc(sx, sy, 24 + Math.sin(RUN.time * 6) * 4, 0, Math.PI * 2);
    ctx.fill();
    if (chestImg.complete) {
      ctx.drawImage(chestImg, sx - 18, sy - 18, 36, 36);
    }
    ctx.restore();
  }

  // 5. Sort Enemies & Player by Y-coordinate for clean 2D Top-Down overlap
  const renderList = [];
  for (const e of RUN.enemies) {
    const sx = e.x - camX;
    const sy = e.y - camY;
    if (sx < -80 || sx > w + 80 || sy < -80 || sy > h + 80) continue;
    renderList.push({ type: "enemy", y: e.y, obj: e, sx, sy });
  }
  renderList.push({ type: "player", y: RUN.y, sx: w / 2, sy: h / 2 });
  renderList.sort((a, b) => a.y - b.y);

  for (const item of renderList) {
    if (item.type === "enemy") {
      const e = item.obj;
      drawPokemonSprite(ctx, e.species, item.sx, item.sy, e.vx || 0, e.vy || 1, RUN.time + e.animOffset, e.scale, e.flashT > 0, e.isBoss);
    } else {
      // Draw Player Pokemon + overhead HP bar (exact Vampire Survivors style)
      drawPokemonSprite(ctx, RUN.speciesId, item.sx, item.sy, RUN.vx, RUN.vy, RUN.time * 1.2, 1.85 + RUN.evoStage * 0.22, false, false);
      const bw = 46;
      const bh = 6;
      const bx = item.sx - bw / 2;
      const by = item.sy + 30;
      ctx.fillStyle = "#1a0d1f";
      ctx.fillRect(bx - 1, by - 1, bw + 2, bh + 2);
      ctx.fillStyle = "#ff2a2a";
      ctx.fillRect(bx, by, bw * Math.max(0, RUN.hp / RUN.maxHp), bh);
    }
  }

  // 6. Draw Orbitals (Razor Leaf)
  for (const o of RUN.orbitals) {
    const sx = (o.x || RUN.x) - camX;
    const sy = (o.y || RUN.y) - camY;
    ctx.fillStyle = o.color;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(sx, sy, o.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // 7. Draw Projectiles
  for (const p of RUN.projectiles) {
    const sx = p.x - camX;
    const sy = p.y - camY;
    ctx.fillStyle = p.color;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.arc(sx, sy, p.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // 8. Draw Damage Popups
  ctx.textAlign = "center";
  for (const p of RUN.popups) {
    const sx = p.x - camX;
    const sy = p.y - camY;
    ctx.font = `900 ${Math.round(14 * p.scale)}px monospace, sans-serif`;
    ctx.fillStyle = "#000000";
    ctx.fillText(p.text, sx + 1.5, sy + 1.5);
    ctx.fillStyle = p.color;
    ctx.fillText(p.text, sx, sy);
  }

  // 9. Draw Virtual Touch Joystick if active
  if (TOUCH.active) {
    ctx.save();
    ctx.strokeStyle = "rgba(255, 224, 102, 0.55)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(TOUCH.sx, TOUCH.sy, 46, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 224, 102, 0.75)";
    ctx.beginPath();
    ctx.arc(TOUCH.sx + TOUCH.dx * 32, TOUCH.sy + TOUCH.dy * 32, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function loop(now) {
  const dt = Math.min(0.05, (now - lastTime) / 1000);
  lastTime = now;
  updateRun(dt);
  render2D();
  requestAnimationFrame(loop);
}

// Wire Menu Buttons
document.getElementById("btn-start-run").onclick = startRun;
document.getElementById("btn-pause").onclick = pauseRun;
document.getElementById("btn-powerups").onclick = showPowerupsModal;
document.getElementById("btn-evolutions").onclick = showEvolutionsModal;
document.getElementById("btn-time-claim").onclick = () => {
  SAVE.gold += 1000;
  writeSave();
  sfx("chest");
  renderMenu();
};
document.getElementById("btn-unlock-all").onclick = () => {
  SAVE.unlockedChars = CHARACTERS.map(c => c.id);
  for (const p of POWERUPS) SAVE.powerups[p.id] = p.max;
  SAVE.gold += 50000;
  writeSave();
  sfx("chest");
  renderMenu();
  alert("已全部解锁：18 位宝可梦全开、局外强化全部满级、+50,000 金币！");
};

renderMenu();
requestAnimationFrame(loop);
