import React, { useState } from 'react';
import {
  Shield,
  Layers,
  Sparkles,
  Key,
  Globe,
  Database,
  Flame,
  Bot,
  FileCheck2,
  Lock,
  Eye,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  Building2,
  DoorOpen,
  CreditCard,
  ChefHat,
  UtensilsCrossed,
  ArrowDownUp,
  Cpu,
  Zap,
  Server
} from 'lucide-react';

interface LayeredCakeVisualizerProps {
  onFilterDomain: (domain: string) => void;
  lang: 'ja' | 'en';
}

type TabType = 'cake' | 'hotel' | 'license' | 'ai';

export const LayeredCakeVisualizer: React.FC<LayeredCakeVisualizerProps> = ({
  onFilterDomain,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('cake');
  const [selectedLayer, setSelectedLayer] = useState<string>('icing');
  const [isExploded, setIsExploded] = useState<boolean>(false);

  // License Trap Simulator state
  const [currentLicense, setCurrentLicense] = useState<'Free' | 'P1' | 'P2' | 'E3' | 'E5'>('E3');
  const [targetFeature, setTargetFeature] = useState<string>('risk_ca');

  // Control Plane vs Data plane interactive selection
  const [hotelPlane, setHotelPlane] = useState<'control' | 'data'>('control');

  // Cake layers specification
  const layers = [
    {
      id: 'purview_skewer',
      nameJa: '縦方向の串: Microsoft Purview',
      nameEn: 'Vertical Skewer: Microsoft Purview',
      metaphorJa: '「図書館員 (The Librarian)」',
      metaphorEn: 'The Librarian',
      roleJa: '全レイヤーを縦断してデータを把握・分類・監査',
      roleEn: 'Crosses all layers vertically to classify, protect, and audit data',
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-400',
      bgLight: 'bg-emerald-50',
      textLight: 'text-emerald-700',
      icon: <FileCheck2 className="w-5 h-5 text-emerald-600" />,
      domain: 'Purview & コンプライアンス監査',
      components: [
        '情報保護 (秘密度ラベル・暗号化・透かし)',
        'データ損失防止 (DLP: メール/チャット/アップロード流出防止)',
        'インサイダーリスク管理 (退職直前の大量ダウンロード検知)',
        'AI 向け DSPM (機密データのAI読み取りを可視化)',
        '統合監査 (Audit: M365 & Azure 全域ログ)',
      ],
      examTrapJa:
        'Defender for Storage が「金属探知機」なら、Purview はどの棚に何の本があるか知っている「図書館員」。全レイヤーを貫く縦方向のバーとして機能する。',
    },
    {
      id: 'copilot',
      nameJa: '頂点の声: Microsoft Security Copilot',
      nameEn: 'The Broadcaster: Security Copilot',
      metaphorJa: '「決して眠らない新人アナリスト」',
      metaphorEn: 'The Sleepless Junior Analyst',
      roleJa: 'Defender と Sentinel のアラートをアナリストがトリアージするのを助ける',
      roleEn: 'Assists analysts in triaging alerts and incidents across Defender & Sentinel',
      color: 'from-purple-500 to-indigo-600',
      border: 'border-purple-400',
      bgLight: 'bg-purple-50',
      textLight: 'text-purple-700',
      icon: <Bot className="w-5 h-5 text-purple-600" />,
      domain: 'AI セキュリティ & Copilot',
      components: [
        'SCU (Security Compute Units) 課金モデル',
        'ファーストパーティ プラグイン (Defender, Sentinel, Entra, Intune)',
        'サードパーティ プラグイン (ServiceNow, カスタム KQL)',
        '自然言語プロンプトによるインシデント要約とスクリプト解析',
      ],
      examTrapJa:
        '本体はスマートフォン、プラグインはアプリ。ServiceNow 連携プラグインの設定は Security Copilot Contributor ロールでも実行可能（Owner は SCU 管理等に必須）。',
    },
    {
      id: 'sentinel',
      nameJa: 'キャンドル: Microsoft Sentinel',
      nameEn: 'The Candle: Microsoft Sentinel',
      metaphorJa: '「すべてを見渡す SIEM & SOAR」',
      metaphorEn: 'The All-Seeing SIEM & SOAR',
      roleJa: 'あらゆるソースからログを収集・分析し、インシデントを作成・自動対応',
      roleEn: 'Collects logs from all sources, detects multi-stage fusion attacks, triggers playbooks',
      color: 'from-amber-500 to-orange-600',
      border: 'border-amber-400',
      bgLight: 'bg-amber-50',
      textLight: 'text-amber-700',
      icon: <Flame className="w-5 h-5 text-amber-600" />,
      domain: 'Sentinel & セキュリティ運用',
      components: [
        'Log Analytics 基盤 (データレジデンシーは作成リージョンに固定)',
        'スケジュール済み / NRT (ニアリアルタイム) 分析ルール',
        'マルチステージ・フュージョン検知 & UEBA 行動分析',
        'オートメーション ルール & プレイブック (Logic Apps)',
        'Defender XDR 統合ポータル (共通エンティティとバイリンガル相関)',
      ],
      examTrapJa:
        'Sentinel を一度誤ったリージョンのワークスペースにデプロイすると後から移動できない。長期保管はテーブルレベルのアーカイブ (SecurityEvent 7年等) で最小コスト化。',
    },
    {
      id: 'icing',
      nameJa: 'アイシング (上かけ): Microsoft Defender',
      nameEn: 'The Icing: Microsoft Defender Family',
      metaphorJa: '「悪意ある動きを検知する防御シールド」',
      metaphorEn: 'Malicious Activity Detection Shields',
      roleJa: 'リソースごとの脅威保護 ＆ 全体のポスチャ管理 (CSPM)',
      roleEn: 'Workload threat protection & Cloud Security Posture Management',
      color: 'from-blue-600 to-cyan-600',
      border: 'border-blue-400',
      bgLight: 'bg-blue-50',
      textLight: 'text-blue-700',
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      domain: 'Defender for Cloud & クラウド態勢',
      components: [
        'Defender for Cloud (統括 & CSPM 態勢管理 & CIEM 最小権限)',
        'Defender for Servers / Storage / SQL / Containers / App Service / Key Vault',
        'Defender for AI Services (ジェイルブレイク・トークン乱用検知)',
        'Defender XDR (MDE エンドポイント, MDO メール/Teams, MDI オンプレAD, MDCA CASB)',
      ],
      examTrapJa:
        'ポスチャ管理 (弱点調査) は Defender for Cloud、脅威保護 (攻撃検知) は各 Defender プラン、検知の統合相関は Sentinel。製品の「名前」ではなく「役割」で覚える！',
    },
    {
      id: 'sponge',
      nameJa: 'スポンジ (本体): ネットワーキング',
      nameEn: 'The Sponge: Azure Networking',
      metaphorJa: '「見えないが倒れるとケーキ全体が崩れる土台」',
      metaphorEn: 'Invisible Backbone - Keeps the Cake Upright',
      roleJa: 'リソース同士が適切な場所でのみ通信し、不正な通信を遮断',
      roleEn: 'Controls resource-to-resource traffic, private endpoints, and perimeter security',
      color: 'from-slate-600 to-slate-800',
      border: 'border-slate-400',
      bgLight: 'bg-slate-100',
      textLight: 'text-slate-800',
      icon: <Globe className="w-5 h-5 text-slate-700" />,
      domain: 'Defender for Cloud & クラウド態勢',
      components: [
        '仮想ネットワーク (VNet) & サブネット設計',
        'ネットワーク セキュリティ グループ (NSG)',
        'プライベート エンドポイント (Private Endpoint + Private DNS)',
        'Azure Firewall (送信/受信のレイヤー7 FQDN フィルタリング)',
        'プライベート AKS クラスター (API サーバーのインターネット完全非公開化)',
      ],
      examTrapJa:
        'AKS APIサーバーをインターネットから完全排除したい場合は「プライベートクラスター（Private Endpoint）」。「承認済みIP範囲」はパブリック公開を維持するためNG！',
    },
    {
      id: 'plate',
      nameJa: '皿 (大前提): Microsoft Entra ID',
      nameEn: 'The Plate: Microsoft Entra ID',
      metaphorJa: '「皿がなければケーキを置く場所がない」',
      metaphorEn: 'Without the Plate, Nothing Can Stand',
      roleJa: 'すべてのユーザー、グループ、デバイス、サービスプリンシパル、AIエージェントのID基底',
      roleEn: 'Foundational directory for all users, groups, devices, apps, and AI agents',
      color: 'from-sky-700 to-blue-900',
      border: 'border-sky-400',
      bgLight: 'bg-sky-50',
      textLight: 'text-sky-800',
      icon: <Key className="w-5 h-5 text-sky-700" />,
      domain: 'Entra ID & CIEM',
      components: [
        'Microsoft Entra ID (ID ディレクトリ基盤)',
        'Entra ID Protection (ML リスク検知 & リスクスコア)',
        '条件付きアクセス (ポリシーエンジン: 許可/ブロック/MFA/準拠デバイス)',
        'Entra ID Governance & PIM (常時特権をJIT承認制に変換)',
        'Entra Agent ID (AI エージェントをワークロードIDとして管理統制)',
      ],
      examTrapJa:
        'リスクベース条件付きアクセスには「Entra ID P2」が必須。M365 E3環境なら「ライセンスのアップグレード」が正解。無人デーモンには「アプリケーションの許可＋管理者同意」。',
    },
  ];

  // Active layer details
  const activeLayerData = layers.find((l) => l.id === selectedLayer) || layers[3];

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Top Banner Navigation */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 md:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                SC-500 メンタルマップ：層状のケーキ (Layered Cake)
              </h2>
              <p className="text-xs md:text-sm text-slate-500">
                下から積み重なるMicrosoftセキュリティ全体像と試験の落とし穴を視覚的にマスター
              </p>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('cake')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'cake'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🍰 レイヤード・ケーキ</span>
            </button>
            <button
              onClick={() => setActiveTab('hotel')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'hotel'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🏨 フロント vs 客室 (プレーン)</span>
            </button>
            <button
              onClick={() => setActiveTab('license')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'license'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>💳 ライセンスの罠判定機</span>
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'ai'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🤖 AI 配膳台 (ゲートウェイ)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: 🍰 LAYERED CAKE VISUALIZER */}
        {activeTab === 'cake' && (
          <div className="space-y-6 pt-2">
            {/* View Mode Switcher */}
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
              <span className="text-xs text-slate-600 font-medium">
                ケーキの層をクリックすると、役割と試験での引っかけポイントが表示されます。
              </span>
              <button
                onClick={() => setIsExploded(!isExploded)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors shadow-2xs"
              >
                <ArrowDownUp className="w-3.5 h-3.5 text-indigo-600" />
                <span>{isExploded ? 'ケーキを重ねる' : '層を展開する (Explode)'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Interactive Visual Cake Stack */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[440px]">
                {/* Background ambient effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-slate-900/0 to-slate-950 pointer-events-none" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
                    アーキテクチャ階層構造
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    上から下へのデータフロー
                  </span>
                </div>

                {/* The Layer Cake Stack Render */}
                <div className="relative z-10 py-6 space-y-3">
                  {/* Purview Vertical Skewer indicator */}
                  <div
                    onClick={() => setSelectedLayer('purview_skewer')}
                    className={`absolute right-4 top-2 bottom-2 w-3 rounded-full cursor-pointer transition-all duration-300 z-20 ${
                      selectedLayer === 'purview_skewer'
                        ? 'bg-emerald-400 ring-4 ring-emerald-500/30 shadow-lg shadow-emerald-500/50 scale-110'
                        : 'bg-emerald-500/50 hover:bg-emerald-400/80'
                    }`}
                    title="Purview: 全層を貫く縦のバー (串)"
                  >
                    <div className="h-full flex items-center justify-center">
                      <span className="text-[9px] font-black tracking-widest text-emerald-950 rotate-90 select-none">
                        PURVIEW
                      </span>
                    </div>
                  </div>

                  {/* Layers Stack in descending order: Copilot -> Sentinel -> Defender -> Network -> Entra */}
                  {layers.slice(1).map((layer, idx) => {
                    const isSelected = selectedLayer === layer.id;
                    const explodeTranslate = isExploded ? `translate-y-0 my-3` : 'translate-y-0 my-1';

                    return (
                      <div
                        key={layer.id}
                        onClick={() => setSelectedLayer(layer.id)}
                        className={`transition-all duration-300 cursor-pointer rounded-2xl p-3.5 border text-left relative overflow-hidden group mr-6 ${explodeTranslate} ${
                          isSelected
                            ? `bg-gradient-to-r ${layer.color} border-white text-white shadow-lg ring-2 ring-white/50 scale-[1.02]`
                            : 'bg-slate-800/80 border-slate-700/80 hover:border-slate-500 text-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2.5">
                            <span
                              className={`p-1.5 rounded-xl ${
                                isSelected ? 'bg-white/20' : 'bg-slate-700/60'
                              }`}
                            >
                              {layer.icon}
                            </span>
                            <div>
                              <div className="font-extrabold text-sm">{layer.nameJa}</div>
                              <div
                                className={`text-[11px] ${
                                  isSelected ? 'text-white/80' : 'text-slate-400'
                                }`}
                              >
                                {layer.metaphorJa}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                            {isSelected ? '● 選択中' : '詳細'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom status note */}
                <div className="relative z-10 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>💡 皿(Entra)が土台となり、串(Purview)が全体を貫く</span>
                  <button
                    onClick={() => setSelectedLayer('purview_skewer')}
                    className="text-emerald-400 hover:text-emerald-300 font-bold underline cursor-pointer"
                  >
                    縦串 Purview を表示
                  </button>
                </div>
              </div>

              {/* Right Column: Layer Deep-dive Card */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-7 shadow-xs space-y-6">
                  {/* Layer Header */}
                  <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-extrabold ${activeLayerData.bgLight} ${activeLayerData.textLight} border`}
                        >
                          {activeLayerData.metaphorJa}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {activeLayerData.domain}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                        {activeLayerData.nameJa}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{activeLayerData.roleJa}</p>
                    </div>

                    <button
                      onClick={() => onFilterDomain(activeLayerData.domain)}
                      className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center space-x-1"
                    >
                      <span>この分野の試験問題を解く</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Components List */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      中核コンポーネント & 主な機能 (Core Services)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeLayerData.components.map((comp, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800 flex items-start space-x-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Exam Pitfall Box */}
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300 text-slate-800 space-y-1.5">
                    <div className="flex items-center space-x-2 text-xs font-bold text-amber-900">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>SC-500 試験攻略の最重要ポイント (Exam Trap)</span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-700 font-medium">
                      {activeLayerData.examTrapJa}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 🏨 HOTEL ANALOGY (CONTROL PLANE VS DATA PLANE) */}
        {activeTab === 'hotel' && (
          <div className="space-y-6 pt-2">
            {/* Analogy Explainer Banner */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 text-white space-y-3">
              <div className="flex items-center space-x-2 text-blue-300 text-xs font-bold">
                <Building2 className="w-4 h-4" />
                <span>コントロールプレーン vs データプレーンのホテルの例え</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black">
                「リソースは見えているのに、データが使えない？」はプレーンの違いを疑え！
              </h3>
              <p className="text-xs md:text-sm text-slate-300 max-w-3xl leading-relaxed">
                コントロールプレーンは「ホテルのフロントデスク」。誰にどんなカギを渡すかを決めますが、客室の中で寝ることはできません。
                データプレーンは「客室そのもの」。実際にファイルを読み書きしたり、シークレットを取得する実務面です。
              </p>
            </div>

            {/* Interactive Toggle Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Control Plane Card */}
              <div
                onClick={() => setHotelPlane('control')}
                className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                  hotelPlane === 'control'
                    ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-500/30 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base">
                        コントロールプレーン (管理面)
                      </h4>
                      <span className="text-xs text-blue-600 font-semibold">
                        ＝ ホテルのフロントデスク
                      </span>
                    </div>
                  </div>
                  {hotelPlane === 'control' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-bold">
                      選択中
                    </span>
                  )}
                </div>

                <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                  <p>
                    <strong>できること:</strong> リソースの作成、削除、設定の変更、Azure RBAC
                    ロールの割り当て。
                  </p>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 font-mono text-[11px] space-y-1">
                    <div className="text-slate-500">代表的なロール例:</div>
                    <div className="text-blue-700 font-bold">• Contributor (共同作成者)</div>
                    <div className="text-blue-700 font-bold">• Owner (所有者)</div>
                    <div className="text-blue-700 font-bold">• Reader (閲覧者)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-[11px] font-semibold">
                    ⚠️ 罠: Contributor を持っていても、Key Vault のシークレット値や Storage
                    のBlobファイルを読み取ることはできない！
                  </div>
                </div>
              </div>

              {/* Data Plane Card */}
              <div
                onClick={() => setHotelPlane('data')}
                className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                  hotelPlane === 'data'
                    ? 'border-indigo-600 bg-indigo-50/40 ring-2 ring-indigo-500/30 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                      <DoorOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base">
                        データプレーン (実務面)
                      </h4>
                      <span className="text-xs text-indigo-600 font-semibold">＝ 客室そのもの</span>
                    </div>
                  </div>
                  {hotelPlane === 'data' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[11px] font-bold">
                      選択中
                    </span>
                  )}
                </div>

                <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                  <p>
                    <strong>できること:</strong> ストレージ内の実際のファイル読み取り、SQL
                    テーブルの行クエリ、Key Vault 内のシークレット値の取得。
                  </p>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 font-mono text-[11px] space-y-1">
                    <div className="text-slate-500">データプレーン専用ロール例:</div>
                    <div className="text-indigo-700 font-bold">
                      • Key Vault Secrets User (シークレット値の取得)
                    </div>
                    <div className="text-indigo-700 font-bold">
                      • Storage Blob Data Reader (Blobファイルの読み取り)
                    </div>
                    <div className="text-indigo-700 font-bold">
                      • Storage Blob Data Contributor
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
                    ✓ 試験の解法: 「アプリがKey
                    Vaultから接続文字列を読み取る最小権限は？」→『Key Vault Secrets User』が正解！
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 💳 LICENSE TRAP CHECKER */}
        {activeTab === 'license' && (
          <div className="space-y-6 pt-2">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900">
                  SC-500 最頻出！ライセンス要件シミュレーター
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  「設定手順が正解ではなく、ライセンスのアップグレードが正解になる」試験特有のトラップを検証します。
                </p>
              </div>

              {/* Select Current License */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  1. 現在の顧客ライセンスを選択
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {(['Free', 'P1', 'P2', 'E3', 'E5'] as const).map((lic) => (
                    <button
                      key={lic}
                      onClick={() => setCurrentLicense(lic)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-extrabold transition-all ${
                        currentLicense === lic
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {lic === 'E3' ? 'M365 E3' : lic === 'E5' ? 'M365 E5' : `Entra ID ${lic}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Desired Feature */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  2. 実現したいセキュリティ要件を選択
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    {
                      id: 'risk_ca',
                      label: 'リスクベースの条件付きアクセス (User/Sign-in Risk)',
                      minLicense: 'P2',
                    },
                    {
                      id: 'pim',
                      label: '特権ID管理 (Privileged Identity Management - PIM)',
                      minLicense: 'P2',
                    },
                    {
                      id: 'access_review',
                      label: 'アクセス レビュー (Access Reviews) による棚卸し',
                      minLicense: 'P2',
                    },
                    {
                      id: 'basic_ca',
                      label: '標準の条件付きアクセス (MFA要求・ハイブリッド参加)',
                      minLicense: 'P1',
                    },
                    {
                      id: 'defender_cloud_apps',
                      label: 'Defender for Cloud Apps (CASBセッション制御)',
                      minLicense: 'E5',
                    },
                    {
                      id: 'purview_full',
                      label: 'Microsoft Purview 全機能 (自動ラベリング・高度な監査)',
                      minLicense: 'E5',
                    },
                  ].map((feat) => (
                    <button
                      key={feat.id}
                      onClick={() => setTargetFeature(feat.id)}
                      className={`p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                        targetFeature === feat.id
                          ? 'border-indigo-600 bg-indigo-50/50 text-indigo-950 ring-1 ring-indigo-600'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{feat.label}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold border">
                        必要: {feat.minLicense}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Result evaluation card */}
              {(() => {
                const getLicenseLevel = (lic: string) => {
                  if (lic === 'Free') return 0;
                  if (lic === 'P1') return 1;
                  if (lic === 'E3') return 1.5; // E3 has P1, but lacks P2/E5 features
                  if (lic === 'P2') return 2;
                  if (lic === 'E5') return 3; // E5 has P2 + all Defender/Purview
                  return 0;
                };

                const currentLevel = getLicenseLevel(currentLicense);
                const reqMap: Record<string, { level: number; needed: string; reason: string }> = {
                  risk_ca: {
                    level: 2,
                    needed: 'Microsoft Entra ID P2 (または M365 E5)',
                    reason: 'Identity Protection のリスクポリシーは P2 専用機能です。',
                  },
                  pim: {
                    level: 2,
                    needed: 'Microsoft Entra ID P2 (または M365 E5)',
                    reason: 'PIM (特権ID管理) は P2 でのみ利用可能です。',
                  },
                  access_review: {
                    level: 2,
                    needed: 'Microsoft Entra ID P2 (または M365 E5)',
                    reason: 'アクセス レビューは Entra ID Governance (P2) の機能です。',
                  },
                  basic_ca: {
                    level: 1,
                    needed: 'Microsoft Entra ID P1 (または M365 E3/E5)',
                    reason: '標準の条件付きアクセス全機能は P1 以上でサポートされます。',
                  },
                  defender_cloud_apps: {
                    level: 3,
                    needed: 'Microsoft 365 E5 (または Defender for Cloud Apps 単体)',
                    reason: 'CASB セッション制御は E5 または個別プランが必要です。',
                  },
                  purview_full: {
                    level: 3,
                    needed: 'Microsoft 365 E5 (または Purview E5 Compliance アドオン)',
                    reason: '自動分類・機械学習ベースのラベリングは E5 が必須です。',
                  },
                };

                const requirement = reqMap[targetFeature];
                const isSufficient = currentLevel >= requirement.level;

                return (
                  <div
                    className={`p-5 rounded-2xl border transition-all ${
                      isSufficient
                        ? 'bg-emerald-500/10 border-emerald-300 text-emerald-950'
                        : 'bg-rose-500/10 border-rose-300 text-rose-950'
                    }`}
                  >
                    <div className="flex items-center space-x-2 font-bold text-sm mb-1.5">
                      {isSufficient ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-rose-600" />
                      )}
                      <span>
                        {isSufficient
                          ? '【利用可能】現在のライセンスで直接ポリシーを構成できます'
                          : '【試験の罠！】ポリシー設定ではなく「ライセンスのアップグレード」が正解になります！'}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed opacity-90">
                      {requirement.reason} 最低必要要件: <strong>{requirement.needed}</strong>
                    </p>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* TAB 4: 🤖 AI GATEWAY & FOUNDRY */}
        {activeTab === 'ai' && (
          <div className="space-y-6 pt-2">
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 md:p-8 space-y-4">
              <div className="flex items-center space-x-2 text-indigo-300 text-xs font-bold">
                <ChefHat className="w-4 h-4" />
                <span>AI セキュリティ三層防護：配膳台 (AI Gateway) vs シェフ (LLM)</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black">
                Foundry ガードレール と AI ゲートウェイのどちらを選ぶべきか？
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-3xl">
                レストランの「配膳台」を通ることで、すべての注文がチェックされ、適切な分量に調整され、記録が残ります。
                手前に配置されるのが「AI ゲートウェイ」、モデル内部のガードレールが「Foundry」、悪用検知が「Defender for AI」です。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  1. AI ゲートウェイ (Azure API Management)
                </h4>
                <span className="text-[11px] font-bold text-indigo-600 block">
                  ＝ レストランの「配膳台」
                </span>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>モデルの手前でプロンプトのレート制限 (流量制御)</li>
                  <li>トークンのキャッシュ & レシート (監査ログ)</li>
                  <li>複数モデル・デプロイ間での負荷分散</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  2. Azure AI Foundry ガードレール
                </h4>
                <span className="text-[11px] font-bold text-purple-600 block">
                  ＝ シェフに組み込まれた衛生基準
                </span>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>プロンプト シールド (Prompt Shields: インジェクション遮断)</li>
                  <li>グラウンデッドネス検出 (根拠文書に基づく回答の検証)</li>
                  <li>コンテンツ セーフティ (有害・不適切コンテンツの除去)</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  3. Defender for AI Services & Purview DSPM
                </h4>
                <span className="text-[11px] font-bold text-cyan-700 block">
                  ＝ ホール全体の監視カメラ & 図書館員
                </span>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                  <li>ジェイルブレイク (脱獄) & ウォレット乱用検知</li>
                  <li>プロンプト内での機密データ漏洩のアラート</li>
                  <li>Entra Agent ID で AI エージェントをワークロード統制</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 text-xs">
              <strong>💡 試験での判断基準:</strong>
              「Foundry ガードレール」と「AI ゲートウェイ」のどちらかを選ぶ問題が出た場合、Foundry
              はモデル内部、ゲートウェイは手前の配膳台であるため、<strong>『両方を組み合わせて多層防御する』</strong>のが標準の正解構成です！
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
