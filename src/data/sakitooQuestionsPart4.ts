import { PdfQuestionSeed } from './pdfCaseStudies';

export const SAKITOO_QUESTIONS_PART4: PdfQuestionSeed[] = [
  {
    id: 'sakitoo-q61',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Purview DSPM による Copilot 関連の過剰共有・機密データ露出リスク特定',
    titleEn: 'Identifying Copilot Oversharing and Sensitive Data Risks in Microsoft Purview DSPM',
    scenarioJa:
      '組織全体で Microsoft 365 Copilot の展開を進めていますが、導入前に SharePoint や OneDrive に過剰共有されている機密ファイルがないか、また実際に Copilot との対話でどのような機密コンテンツが参照されているかを把握したいと考えています。',
    scenarioEn:
      'Before and during Microsoft 365 Copilot rollout, you need visibility into overshared SharePoint/OneDrive files and sensitive data referenced in Copilot interactions.',
    questionJa:
      'Microsoft Purview Data Security Posture Management（DSPM）で Microsoft Copilot に関連するリスクを識別する際に確認できる情報はどれですか？',
    questionEn:
      'What risk insights can you inspect for Microsoft Copilot inside Microsoft Purview Data Security Posture Management (DSPM)?',
    options: [
      {
        id: 'A',
        textJa: 'SharePoint 内の過剰共有や Copilot が参照した機密データ露出',
        textEn: 'Overshared SharePoint files and sensitive data surfaced to Copilot',
        isCorrect: true,
        explanationJa:
          'Microsoft Purview DSPM（DSPM for AI）では、Microsoft 365 Copilot や生成 AI アプリがアクセスする可能性のある SharePoint/OneDrive 内の過剰共有ファイル、機密情報の種類（SIT）・秘密度ラベルの付与状況、DLP 違反や非倫理的プロンプト・応答リスクを一元的に可視化できます。',
        explanationEn:
          'Purview DSPM (DSPM for AI) surfaces overshared SharePoint/OneDrive sites, sensitive info types and sensitivity labels accessed by Copilot, and data exposure risks.',
      },
      {
        id: 'B',
        textJa: 'Copilot API エンドポイントごとの応答レイテンシ計測値',
        textEn: 'Real-time Copilot API response latency and network metrics',
        isCorrect: false,
        explanationJa:
          '応答レイテンシ監視はネットワークやサービス正常性ダッシュボードの領域であり、Purview DSPM のデータリスク評価ではありません。',
        explanationEn:
          'Latency metrics are operational telemetry, not Purview DSPM data security posture insights.',
      },
      {
        id: 'C',
        textJa: 'Copilot 拡張機能やモデル推論に伴う部門別利用コスト内訳',
        textEn: 'Departmental Copilot billing charges and token cost allocation',
        isCorrect: false,
        explanationJa:
          '課金やコスト管理は Microsoft Cost Management や管理センターの領域です。',
        explanationEn:
          'Billing and cost breakdowns are managed in Microsoft Cost Management / Admin centers.',
      },
      {
        id: 'D',
        textJa: 'Microsoft 365 テナント内の Copilot ライセンス割り当て数',
        textEn: 'Assigned Copilot user license inventory across M365 tenants',
        isCorrect: false,
        explanationJa:
          'ライセンス割り当て数の確認は Microsoft 365 管理センターの課金・ライセンス画面で行います。',
        explanationEn:
          'License counts are viewed in the Microsoft 365 admin center billing pages.',
      },
    ],
    overallExplanationJa:
      'Microsoft Purview DSPM for AI は、Copilot の「情報アクセスの前提となる過剰共有」を事前に洗い出す（データリスク評価）とともに、実際にユーザーが Copilot やサードパーティ AI でどのような機密データを扱っているかを継続監視し、秘密度ラベル適用やアクセス制限（SAM 連携等）へつなげる中心機能です。',
    overallExplanationEn:
      'Purview DSPM for AI provides pre-deployment oversharing assessments and ongoing AI activity visibility across Copilot and AI apps so admins can apply labels, DLP, and SharePoint access controls.',
    keyPointsJa: [
      'Purview DSPM for AI は SharePoint/OneDrive の過剰共有評価と Copilot がアクセスした機密データの可視化を提供',
      'データリスク評価からそのままワンクリックで保護ポリシー（ラベル/DLP）作成へ進める',
    ],
    keyPointsEn: [
      'Purview DSPM for AI highlights SharePoint oversharing and sensitive data surfaced by Copilot',
      'Provides actionable data risk assessments and policy recommendations',
    ],
    referenceTopic: 'Microsoft Purview DSPM for AI - Copilot リスク評価',
  },
  {
    id: 'sakitoo-q62',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Copilot Studio エージェントのリアルタイム保護によるプロンプトインジェクション対策',
    titleEn: 'Blocking Prompt Injection with Real-Time Protection for Copilot Studio Agents',
    scenarioJa:
      'Microsoft Copilot Studio を使用して、社内ナレッジや業務ツールを自律的・対話的に呼び出すカスタム AI エージェントを構築・公開しています。ユーザー入力や外部文書を介したプロンプトインジェクション攻撃を実行時に即座に検知・遮断する必要があります。',
    scenarioEn:
      'You built custom AI agents in Microsoft Copilot Studio that query corporate knowledge and invoke tools, and must detect and block prompt injection or data exfiltration attacks at runtime.',
    questionJa:
      'Microsoft Copilot Studio で作成したエージェントに対してリアルタイム保護を有効化する目的はどれですか？',
    questionEn:
      'What is the purpose of enabling real-time runtime protection for agents built in Microsoft Copilot Studio?',
    options: [
      {
        id: 'A',
        textJa: '利用部門ごとの Copilot Studio エージェント容量ライセンスを管理する',
        textEn: 'Manage agent capacity licenses and departmental message quotas',
        isCorrect: false,
        explanationJa:
          'ライセンスやメッセージ容量管理は Power Platform 管理センターの課金機能です。',
        explanationEn:
          'Licensing and capacity are managed in Power Platform billing settings.',
      },
      {
        id: 'B',
        textJa: 'キャッシュ最適化によりエージェントの応答推論速度を大幅に向上させる',
        textEn: 'Accelerate agent inference latency through prompt caching rules',
        isCorrect: false,
        explanationJa:
          '推論速度向上ではなく、セキュリティ脅威のリアルタイム検証・ブロックが目的です。',
        explanationEn:
          'Runtime protection inspects and blocks threats rather than optimizing speed.',
      },
      {
        id: 'C',
        textJa: 'プロンプトインジェクションや機密流出・不審ツール呼出を検知し遮断する',
        textEn: 'Detect and block prompt injection, rogue tools, and exfiltration',
        isCorrect: true,
        explanationJa:
          'Copilot Studio のランタイム（リアルタイム）保護および Microsoft Defender 統合により、エージェントがプロンプトを処理してツール／プラグインを実行する直前に、直接・間接プロンプトインジェクションや不正データ持ち出しの試みをリアルタイムで評価・ブロックし、Defender XDR へアラート連携できます。',
        explanationEn:
          'Real-time protection for Copilot Studio agents evaluates prompts and tool invocations inline to detect and block prompt injection, malicious URLs, and data exfiltration attempts while surfacing alerts in Defender.',
      },
      {
        id: 'D',
        textJa: 'チャットウィジェットの配色やユーザーインターフェース構成を最適化する',
        textEn: 'Optimize the embedded agent chat UI layout and visual theme',
        isCorrect: false,
        explanationJa:
          'チャットウィジェットの見た目や UI カスタマイズとは無関係です。',
        explanationEn:
          'Runtime security protection does not alter chat UI design.',
      },
    ],
    overallExplanationJa:
      'AI エージェントは単なるチャット応答だけでなく、接続されたコネクタやプラグインを通じて社内 API 呼び出しやメール送信を実行できるため、間接プロンプトインジェクション（XPIA）の被害が深刻化します。Copilot Studio のリアルタイム保護（Defender 統合）を有効にすることで、インジェクションや悪意あるツール実行をランタイムで防御できます。',
    overallExplanationEn:
      'Because Copilot Studio agents can invoke external tools and connectors, runtime threat protection (integrated with Microsoft Defender) inspects inputs, grounded data, and tool actions inline to stop prompt injection and exfiltration.',
    keyPointsJa: [
      'リアルタイム保護 ＝ エージェント実行時のプロンプトインジェクション・不正データ漏洩の検知とブロック',
      'Microsoft Defender XDR / Power Platform 管理センターと連携してインシデント可視化も可能',
    ],
    keyPointsEn: [
      'Protects Copilot Studio agents inline against direct/indirect prompt injection and data exfiltration',
      'Integrates alerts into Microsoft Defender for SOC investigation',
    ],
    referenceTopic: 'Copilot Studio エージェントのリアルタイム保護（Defender 統合）',
  },
  {
    id: 'sakitoo-q63',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Microsoft Entra Agent ID を用いた AI エージェントのブラストラジウス（影響範囲）分析',
    titleEn: 'Analyzing AI Agent Blast Radius Using Microsoft Entra Agent ID',
    scenarioJa:
      '組織内で多数の自律型 AI エージェントが Microsoft Entra Agent ID として登録され、Graph API や Azure リソースへのアクセス権を付与されて稼働しています。万が一いずれかのエージェントがプロンプトインジェクション等で乗っ取られた場合の被害拡大範囲（横展開可能性）を事前に把握したいと考えています。',
    scenarioEn:
      'Autonomous AI agents registered with Microsoft Entra Agent ID hold permissions to Graph APIs and Azure resources. You need to assess how far an attacker could pivot if an agent is compromised.',
    questionJa:
      'Microsoft Entra Agent ID を使用してエージェントの「ブラストラジウス」（侵害時の影響範囲）を分析する目的はどれですか？',
    questionEn:
      'What is the purpose of analyzing the "blast radius" of an AI agent using Microsoft Entra Agent ID?',
    options: [
      {
        id: 'A',
        textJa: 'エージェントの月間トークン消費量に基づく課金コスト分析を行う',
        textEn: 'Calculate AI agent compute billing and monthly token usage',
        isCorrect: false,
        explanationJa:
          'ブラストラジウス分析は課金コスト計算ではなく、侵害時のセキュリティ影響範囲評価です。',
        explanationEn:
          'Blast radius analysis measures security compromise impact, not financial billing.',
      },
      {
        id: 'B',
        textJa: 'エージェントが呼び出す外部 API のレート制限しきい値を確認する',
        textEn: 'Inspect API throttling quotas and request rate thresholds',
        isCorrect: false,
        explanationJa:
          'API レート制限の確認ではなく、アクセス権限や攻撃経路の可視化が目的です。',
        explanationEn:
          'It evaluates lateral movement and resource access scope rather than API rate limits.',
      },
      {
        id: 'C',
        textJa: 'エージェントの平均推論レスポンス時間と応答スループットを測定する',
        textEn: 'Measure agent inference latency and query throughput speed',
        isCorrect: false,
        explanationJa:
          '応答速度などのパフォーマンス測定機能ではありません。',
        explanationEn:
          'Blast radius does not measure inference latency.',
      },
      {
        id: 'D',
        textJa: 'エージェント ID 侵害時に悪用され得るリソースや横展開経路を評価する',
        textEn: 'Evaluate reachable resources and attack paths if compromised',
        isCorrect: true,
        explanationJa:
          'AI エージェントに専用の Entra Agent ID を付与してセキュリティグラフ／攻撃パス分析と連携することで、「このエージェントが乗っ取られたら、どの Azure リソース・シークレット・M365 データへ到達できるか（ブラストラジウス）」を侵害発生前に可視化し、最小権限化できます。',
        explanationEn:
          'Tracking agents via Entra Agent ID enables Defender security graph and attack path analysis to map every resource, secret, and lateral-movement path reachable if that agent identity is compromised.',
      },
    ],
    overallExplanationJa:
      '自律型 AI エージェントを人間のアカウント共有や汎用サービスプリンシパルで動かすと、権限の把握や影響範囲特定が困難になります。**Microsoft Entra Agent ID** として独立管理し、Defender for Cloud の攻撃パス／ブラストラジウス分析を行うことで、過剰権限の削減と侵害時の被害局限化が可能になります。',
    overallExplanationEn:
      'Assigning distinct **Microsoft Entra Agent IDs** lets security teams inspect each agent’s permissions and model its exact **blast radius** in Defender attack paths before a compromise occurs.',
    keyPointsJa: [
      'ブラストラジウス分析 ＝ エージェント ID 侵害時に到達・悪用可能な全リソース範囲の事前評価',
      '過剰な権限が発見された場合は Entra Agent ID 側のアクセス権を最小権限へ見直す',
    ],
    keyPointsEn: [
      'Blast radius analysis maps all downstream assets reachable from a compromised agent identity',
      'Enables proactive least-privilege tightening on Entra Agent IDs',
    ],
    referenceTopic: 'Microsoft Entra Agent ID とブラストラジウス分析',
  },
  {
    id: 'sakitoo-q64',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure API Management AI Gateway による LLM API 保護と制御',
    titleEn: 'Protecting LLM Backends with Azure API Management AI Gateway',
    scenarioJa:
      '社内の複数アプリケーションが Microsoft Foundry（旧 Azure OpenAI Service）のモデルエンドポイントを共有利用しています。各アプリごとのトークン消費量制御、Entra ID 認証強制、キャッシュによる負荷軽減、一元的なプロンプト監査ログ記録をモデルの前段で実現したいと考えています。',
    scenarioEn:
      'Multiple internal apps call Microsoft Foundry (Azure OpenAI) endpoints. You need centralized token rate limiting, Entra ID auth enforcement, semantic caching, and auditing in front of the models.',
    questionJa:
      'Azure API Management の AI Gateway を使用して Microsoft Foundry（Azure OpenAI）への接続を保護する主な機能はどれですか？',
    questionEn:
      'Which core capabilities does the Azure API Management AI Gateway provide to protect Microsoft Foundry (Azure OpenAI) backends?',
    options: [
      {
        id: 'A',
        textJa: '多言語ユーザー向けにモデルからの生成応答をリアルタイム翻訳する',
        textEn: 'Automatically translate AI responses across multiple user languages',
        isCorrect: false,
        explanationJa:
          '翻訳サービス（Azure AI Translator）の機能であり、AI Gateway の主要セキュリティ機能ではありません。',
        explanationEn:
          'Language translation is handled by Azure AI Translator rather than APIM AI Gateway.',
      },
      {
        id: 'B',
        textJa: '大規模言語モデルの事前学習に必要な GPU コンピュート費用を削減する',
        textEn: 'Directly reduce base LLM model pre-training GPU compute expenses',
        isCorrect: false,
        explanationJa:
          '推論 API のトラフィックガバナンス機能であり、事前学習コストを下げる機能ではありません。',
        explanationEn:
          'APIM governs inference API traffic rather than model training jobs.',
      },
      {
        id: 'C',
        textJa: 'トークン制限・認証・コンテンツ安全性連携・セマンティックキャッシュ',
        textEn: 'Token rate limiting, auth mediation, content safety, and caching',
        isCorrect: true,
        explanationJa:
          'Azure API Management の AI Gateway ポリシー群（`llm-token-limit`、`llm-emit-token-metric`、`llm-semantic-cache-lookup/store`、`llm-content-safety`、および Entra JWT 検証＋バックエンドへのマネージド ID 認証）により、バックエンドの LLM キーをクライアントから隠蔽しつつエンタープライズ規模の AI トラフィック保護・統制を実現します。',
        explanationEn:
          'APIM AI Gateway provides `llm-token-limit`, `llm-content-safety`, `llm-semantic-cache`, token metrics, and Entra JWT + Managed Identity mediation to secure and govern Foundry/OpenAI APIs.',
      },
      {
        id: 'D',
        textJa: 'ファインチューニング時の学習バッチ処理と重み更新を高速化する',
        textEn: 'Accelerate GPU model fine-tuning epochs and weight optimization',
        isCorrect: false,
        explanationJa:
          'GPU トレーニングの高速化機能ではありません。',
        explanationEn:
          'APIM is an API proxy/gateway layer, not a GPU training accelerator.',
      },
    ],
    overallExplanationJa:
      'Azure API Management（APIM）を AI Gateway として配置することで、LLM バックエンドに対する「モデル前段（Front-of-model）の防御層」を構築できます。特にクライアントに Azure OpenAI の API キーを持たせず、APIM 側が **マネージド ID** でバックエンド認証を行い、トークン制限（`llm-token-limit`）やコンテンツセーフティ検査を適用するのが定石です。',
    overallExplanationEn:
      'Deploying Azure API Management as an AI Gateway adds an enterprise front-of-model control plane: enforcing Entra JWT auth, hiding backend keys behind Managed Identity, throttling tokens, caching semantically, and enforcing content safety.',
    keyPointsJa: [
      'AI Gateway（APIM）の主要機能：llm-token-limit、llm-content-safety、セマンティックキャッシュ、認証仲介（マネージド ID）',
      'Foundry 内蔵ガードレール（モデル内防御）と併用して多層防御を構成する',
    ],
    keyPointsEn: [
      'Key APIM AI Gateway policies: `llm-token-limit`, `llm-content-safety`, semantic caching, and Managed Identity auth',
      'Pairs with Foundry model guardrails for defense-in-depth',
    ],
    referenceTopic: 'Azure API Management AI Gateway の機能とポリシー',
  },
  {
    id: 'sakitoo-q65',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for AI Services（CWP）による AI エンドポイントの脅威監視',
    titleEn: 'AI Threat Detection via Microsoft Defender for AI Services',
    scenarioJa:
      'Azure サブスクリプション上にデプロイされた Azure OpenAI や Microsoft Foundry エンドポイントに対する実際の API 呼び出しから、攻撃者による脱獄試行やデータ流出の試みを検知し SOC へアラート連携するため、Defender for Cloud のワークロード保護を有効化しました。',
    scenarioEn:
      'You enabled Cloud Workload Protection (CWP) for AI services in Microsoft Defender for Cloud to monitor live API calls to your Azure OpenAI and Microsoft Foundry endpoints and send alerts to the SOC.',
    questionJa:
      'Defender for Cloud の「Cloud Workload Protection（CWP）」で AI サービス向けの Defender for AI Services を有効化した場合に監視されるのはどれですか？',
    questionEn:
      'What does Microsoft Defender for AI Services monitor when enabled under Cloud Workload Protection (CWP)?',
    options: [
      {
        id: 'A',
        textJa: 'AI API 通信におけるプロンプトインジェクション・脱獄・不正利用',
        textEn: 'Prompt injection, jailbreaks, and anomalous AI API usage patterns',
        isCorrect: true,
        explanationJa:
          'Microsoft Defender for AI Services は、Azure OpenAI / Microsoft Foundry への API リクエストと応答を継続的に分析し、直接・間接プロンプトインジェクション、脱獄（Jailbreak）、システムプロンプト漏洩、不審なユーザーアカウントによる異常利用、機密データ流出リスクを検知してセキュリティアラートを生成します。',
        explanationEn:
          'Defender for AI Services analyzes API traffic to Azure OpenAI and Foundry endpoints to alert on jailbreaks, prompt injections, wallet/credential abuse, and potential sensitive data leakage.',
      },
      {
        id: 'B',
        textJa: 'エンドポイントの死活状態とネットワーク到達性の稼働率アラートのみ',
        textEn: 'HTTP availability uptime pings and service health status alerts only',
        isCorrect: false,
        explanationJa:
          '死活監視は Azure Service Health / Monitor の役割であり、CWP の脅威検知ではありません。',
        explanationEn:
          'Availability health is monitored by Azure Monitor/Service Health rather than Defender CWP.',
      },
      {
        id: 'C',
        textJa: 'AI モデルのファインチューニングや GPU 利用にかかる課金予算超過',
        textEn: 'AI model fine-tuning expenditures and monthly GPU billing budgets',
        isCorrect: false,
        explanationJa:
          'トレーニング課金の監視機能ではありません。',
        explanationEn:
          'Defender for AI Services tracks security threats, not financial billing.',
      },
      {
        id: 'D',
        textJa: 'ベンチマークデータセットに基づくモデルの推論精度（BLEU スコア等）',
        textEn: 'Model benchmark accuracy scores and automated evaluation metrics',
        isCorrect: false,
        explanationJa:
          '精度評価は Foundry の評価（Evaluation）機能であり、セキュリティ脅威監視とは異なります。',
        explanationEn:
          'Model quality evaluation is handled in Foundry Evaluations rather than Defender for AI Services.',
      },
    ],
    overallExplanationJa:
      'Defender for Cloud のワークロード保護プランの 1 つである **Microsoft Defender for AI Services** は、Azure OpenAI や Foundry モデルへの悪意あるプロンプト攻撃・異常な API 利用・認証資格情報悪用などを検出し、Microsoft Defender XDR や Sentinel へ統合インシデントとして連携できます（Defender CSPM の AI ポスチャ管理と対になります）。',
    overallExplanationEn:
      '**Defender for AI Services** provides runtime threat detection for AI workloads (alerting on jailbreaks, prompt injection, and anomalous API abuse), complementing Defender CSPM’s AI posture management.',
    keyPointsJa: [
      'Defender for AI Services（CWP）＝ ランタイムの AI API コール監視と脅威アラート（脱獄・インジェクション・不正利用等）',
      'プラン設定で「Suspicious prompt evidence」を有効にするとアラート詳細で攻撃プロンプトも確認できる',
    ],
    keyPointsEn: [
      'Monitors live AI API calls for jailbreaks, prompt injection, and suspicious usage',
      'Integrates alerts directly with Defender XDR and Microsoft Sentinel',
    ],
    referenceTopic: 'Microsoft Defender for AI Services（CWP）の脅威検出',
  },
  {
    id: 'sakitoo-q66',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft 365 管理センターの統合アプリでの AI エージェント一覧と権限・配布制御',
    titleEn: 'Controlling AI Agents in Microsoft 365 Admin Center Integrated Apps',
    scenarioJa:
      '社内で複数の部署が Copilot エージェントを作成・導入し始めています。管理者が組織全体でデプロイされているエージェントを棚卸しし、申請中のエージェントの承認・ブロック、および利用できるユーザー・グループの割り当てを一元管理したいと考えています。',
    scenarioEn:
      'Departments across your organization are creating and deploying Copilot agents. Administrators need a central console to inventory deployed agents, review permissions, and control which users/groups can access them.',
    questionJa:
      'Microsoft 365 管理センターで AI エージェントを管理する際に確認・制御できる項目はどれですか？',
    questionEn:
      'What can administrators inspect and control for AI agents in the Microsoft 365 admin center?',
    options: [
      {
        id: 'A',
        textJa: 'エージェントのバックエンドプログラムソースコードの直接閲覧と編集',
        textEn: 'Direct editing of the agent application source code and plugins',
        isCorrect: false,
        explanationJa:
          'ソースコードやオーケストレーションロジックの開発・編集は Copilot Studio や開発環境側で行います。',
        explanationEn:
          'Agent development and logic editing happen in Copilot Studio or code IDEs, not the M365 admin center.',
      },
      {
        id: 'B',
        textJa: 'エージェントが内部参照する基盤大規模言語モデルの学習データ修正',
        textEn: 'Modifying foundation LLM training datasets and model parameters',
        isCorrect: false,
        explanationJa:
          '基盤 LLM の学習データ編集はできません。',
        explanationEn:
          'Foundation model training datasets cannot be modified from the M365 admin center.',
      },
      {
        id: 'C',
        textJa: 'エージェント稼働環境のリソース別 Azure サブスクリプション課金明細',
        textEn: 'Detailed Azure infrastructure billing per backend compute node',
        isCorrect: false,
        explanationJa:
          'Azure リソースの詳細課金管理は Azure Portal の Cost Management で行います。',
        explanationEn:
          'Azure infrastructure billing is managed in the Azure Portal.',
      },
      {
        id: 'D',
        textJa: 'デプロイ済みエージェント一覧や権限確認・ブロック・ユーザー配布制御',
        textEn: 'Deployed agent inventory, permissions, block state, and user scope',
        isCorrect: true,
        explanationJa:
          'Microsoft 365 管理センターの「設定 > 統合アプリ（または Copilot > エージェント）」セクションでは、組織で公開・承認待ち・利用中のすべてのエージェント一覧、データソースやアクセス許可の確認、許可/ブロックの切り替え、対象ユーザー・グループへの配布制御を行えます。',
        explanationEn:
          'The Microsoft 365 admin center (Integrated Apps / Agents) lets admins inventory deployed and pending agents, review requested permissions, allow or block agents, and restrict deployment to specific users or groups.',
      },
    ],
    overallExplanationJa:
      'Microsoft 365 管理センターは、Copilot および組織内エージェントのガバナンスハブとして機能します。管理者はエージェントレジストリ／統合アプリ画面から申請中のエージェントのレビュー・公開（Publish to store）やブロック、および特定セキュリティグループへの配布スコープ制御を実施できます。',
    overallExplanationEn:
      'In the Microsoft 365 admin center, admins govern organizational agents by reviewing pending submissions, inspecting permissions, publishing to scoped groups, or blocking unauthorized agents.',
    keyPointsJa: [
      'M365 管理センターの統合アプリ／エージェント画面でエージェントの一覧・権限確認・許可/ブロック・ユーザー配布制御が可能',
      'シャドー AI エージェントの野放図な拡散を防ぐ中心的な管理ポータル',
    ],
    keyPointsEn: [
      'Use M365 admin center Integrated Apps / Agents to inventory, approve, scope, or block agents',
      'Prevents uncontrolled sprawl of unauthorized AI agents',
    ],
    referenceTopic: 'Microsoft 365 管理センターによる Copilot エージェント管理',
  },
  {
    id: 'sakitoo-q67',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Disk Encryption（ADE）と Storage Service Encryption（SSE）の暗号化レイヤーの違い',
    titleEn: 'Encryption Layer Differences: Azure Disk Encryption (ADE) vs. Server-Side Encryption (SSE)',
    scenarioJa:
      'Azure VM のディスク暗号化ポリシーを策定するにあたり、ストレージ基盤側で自動適用されるサーバー側暗号化（SSE）と、ゲスト OS 内のボリュームを暗号化する Azure Disk Encryption（ADE）の技術的な違いを整理しています。',
    scenarioEn:
      'You are defining VM disk encryption standards and comparing Server-Side Encryption (SSE) at the storage infrastructure layer against Azure Disk Encryption (ADE) inside the guest OS.',
    questionJa:
      'Azure VM のディスク暗号化で Azure Disk Encryption（ADE）と Azure Storage Service Encryption（SSE）の違いはどれですか？',
    questionEn:
      'What is the key difference between Azure Disk Encryption (ADE) and Storage Service Encryption (SSE)?',
    options: [
      {
        id: 'A',
        textJa: 'ADE は Linux OS ボリューム専用であり Windows VM は対象外である',
        textEn: 'ADE supports only Linux VMs and excludes Windows BitLocker disks',
        isCorrect: false,
        explanationJa:
          'ADE は Windows（BitLocker 使用）と Linux（dm-crypt 使用）の両方をサポートします。',
        explanationEn:
          'ADE supports both Windows (via BitLocker) and Linux (via dm-crypt).',
      },
      {
        id: 'B',
        textJa: '暗号化レイヤーや鍵管理を含め両者は完全に同一の保護機能である',
        textEn: 'Both encrypt at the exact same storage layer and are identical',
        isCorrect: false,
        explanationJa:
          '暗号化が実行される場所（ゲスト OS 内 vs ストレージ基盤/ホスト）、CPU 負荷、サポートする機能（バックアップ/OS 互換性等）が異なります。',
        explanationEn:
          'They operate at different architectural layers (guest OS vs. Azure storage platform) with different operational trade-offs.',
      },
      {
        id: 'C',
        textJa: 'ADE はゲスト OS 内で暗号化し、SSE はストレージ基盤レベルで暗号化する',
        textEn: 'ADE encrypts inside the guest OS, while SSE encrypts at Azure Storage',
        isCorrect: true,
        explanationJa:
          'SSE（およびホストでの暗号化）は Azure のストレージ基盤／VM ホスト側で透過的に暗号化するためゲスト CPU を消費しません。一方、ADE はゲスト OS 内の BitLocker（Windows）または dm-crypt（Linux）を使ってボリューム暗号化を行い、VHD イメージが持ち出されてもゲスト OS 層で復号鍵なしには読めないように保護します。',
        explanationEn:
          'ADE encrypts volumes inside the guest OS using BitLocker or dm-crypt (with keys in Key Vault), while SSE transparently encrypts managed disks at rest at the Azure Storage infrastructure layer.',
      },
      {
        id: 'D',
        textJa: 'SSE の方がゲスト OS カーネル内部で処理されるため常に高強度である',
        textEn: 'SSE encrypts volumes inside the guest OS kernel instead of storage',
        isCorrect: false,
        explanationJa:
          'SSE は基盤レベルの暗号化であり、ゲスト OS 内部で BitLocker/dm-crypt 暗号化を実行するのは ADE の方です。',
        explanationEn:
          'SSE operates at the storage service layer, not inside the guest OS kernel.',
      },
    ],
    overallExplanationJa:
      'Azure マネージドディスクの暗号化には主に 3 つのアプローチがあります。\n1. **SSE（サーバー側暗号化）**: ストレージ保存時に基盤側で暗号化（PMK/CMK、既定有効・CPU 負荷ゼロ）。\n2. **ホストでの暗号化（Encryption at host）**: 一時ディスク・キャッシュも含め VM ホスト側で暗号化（Microsoft 推奨・CPU 負荷ゼロ）。\n3. **ADE（Azure Disk Encryption）**: ゲスト OS 内の BitLocker / dm-crypt で暗号化（ゲスト CPU 消費・一部 VM サイズ非対応だが OS レベルの暗号化要件に対応）。',
    overallExplanationEn:
      'Compare the three VM disk encryption options:\n- **SSE**: Storage infrastructure at-rest encryption (default, zero guest CPU overhead).\n- **Encryption at host**: Encrypts OS/data disks, host caches, and temp disks on the VM host (recommended, zero guest CPU overhead).\n- **ADE**: Guest-OS BitLocker/dm-crypt encryption (consumes guest CPU).',
    keyPointsJa: [
      'ADE ＝ ゲスト OS 内（BitLocker / dm-crypt）で暗号化、キーは Key Vault に格納',
      'SSE ＝ Azure Storage 基盤側での透過的暗号化（CPU 負荷なし）。キャッシュ・一時ディスクまで保護するには Encryption at host を使用',
    ],
    keyPointsEn: [
      'ADE encrypts inside the guest OS (BitLocker/dm-crypt)',
      'SSE encrypts at the Azure Storage infrastructure layer without guest CPU overhead',
    ],
    referenceTopic: 'Azure VM ディスク暗号化オプション（SSE / Encryption at host / ADE）',
  },
  {
    id: 'sakitoo-q68',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Bastion によるパブリック IP レスの安全な RDP/SSH 管理接続',
    titleEn: 'Securing RDP/SSH Management Access Without Public IPs Using Azure Bastion',
    scenarioJa:
      '管理者が Azure 仮想マシン（VM）へ RDP（3389）や SSH（22）で保守ログインする必要があります。インターネットからの総当たり攻撃やゼロデイ脆弱性の標的となるため、VM にパブリック IP を付与したり NSG で管理ポートをインターネットへ開放したりしたくありません。',
    scenarioEn:
      'Administrators need RDP (3389) and SSH (22) access to Azure VMs, but security policy prohibits assigning public IP addresses to VMs or opening management ports to the internet.',
    questionJa: 'Azure Bastion を使用する主なセキュリティ上の利点はどれですか？',
    questionEn: 'What is the primary security benefit of using Azure Bastion?',
    options: [
      {
        id: 'A',
        textJa: 'アプリケーション間の通信経路とネットワーク帯域幅を最適化する',
        textEn: 'Optimizes application network routing and VNet throughput',
        isCorrect: false,
        explanationJa:
          'アプリケーション通信の帯域最適化サービスではありません。',
        explanationEn:
          'Azure Bastion is a secure management jump host service, not a bandwidth optimizer.',
      },
      {
        id: 'B',
        textJa: '稼働中仮想マシンの OS セキュリティパッチ適用を自動実行する',
        textEn: 'Automatically installs critical OS security updates on VMs',
        isCorrect: false,
        explanationJa:
          'OS パッチ適用は Azure Update Manager の機能です。',
        explanationEn:
          'OS patching is handled by Azure Update Manager.',
      },
      {
        id: 'C',
        textJa: 'パブリック IP なしで TLS 経由の RDP/SSH 接続を提供し露出を減らす',
        textEn: 'Provides TLS-proxied RDP/SSH without exposing VM public IPs',
        isCorrect: true,
        explanationJa:
          'Azure Bastion は VNet 内の専用サブネット（`AzureBastionSubnet`）にデプロイされるフルマネージド踏み台（PaaS）であり、Azure Portal から TLS（ポート 443）経由で安全に VNet 内の各 VM へプライベート IP で RDP/SSH 接続できます。VM にパブリック IP も 3389/22 ポート開放も不要になります。',
        explanationEn:
          'Azure Bastion is a fully managed PaaS jump host in `AzureBastionSubnet` that proxies RDP/SSH over TLS (port 443) to VM private IPs, eliminating public IPs and open 3389/22 NSG rules.',
      },
      {
        id: 'D',
        textJa: 'ホスト側の処理最適化により仮想マシンの CPU とメモリ性能を高める',
        textEn: 'Increases VM CPU compute speed and memory I/O performance',
        isCorrect: false,
        explanationJa:
          '管理接続のセキュリティ向上であり、VM 自体の計算性能は変わりません。',
        explanationEn:
          'It hardens administrative access rather than boosting compute performance.',
      },
    ],
    overallExplanationJa:
      'インターネットに管理ポート（TCP 3389 / 22）を公開することはクラウド侵害の最大要因の 1 つです。**Azure Bastion** を導入すると、VM のパブリック IP を完全に削除し、NSG で Bastion サブネットからのプライベート通信のみを許可するゼロトラスト管理アクセスが実現できます（さらにピアリング越し接続や Entra ID 認証・記録機能も利用可能）。',
    overallExplanationEn:
      '**Azure Bastion** eliminates public IP exposure and open internet RDP/SSH ports on VMs by brokering management sessions over TLS 443 from the Azure Portal or native clients to VM private IPs.',
    keyPointsJa: [
      'Azure Bastion ＝ VM にパブリック IP なしで TLS/443 経由の安全な RDP/SSH 接続を提供（要 `AzureBastionSubnet`）',
      'パブリック IP 削減によりポートスキャンやブルートフォース攻撃対象面を大幅に縮小',
    ],
    keyPointsEn: [
      'Requires a dedicated subnet named `AzureBastionSubnet`',
      'Removes public IPs and internet-facing RDP/SSH rules from target VMs',
    ],
    referenceTopic: 'Azure Bastion による安全な RDP/SSH 接続',
  },
  {
    id: 'sakitoo-q69',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Just-In-Time（JIT）VM アクセスの動作メカニズム',
    titleEn: 'How Just-In-Time (JIT) VM Access Works in Defender for Cloud',
    scenarioJa:
      'Microsoft Defender for Servers Plan 2 を有効化した Azure VM 群に対して、RDP/SSH 管理ポートへの常時攻撃を防ぐため Just-In-Time（JIT）VM アクセスを構成しました。',
    scenarioEn:
      'You enabled Just-In-Time (JIT) VM access in Defender for Servers Plan 2 to protect RDP and SSH management ports on Azure VMs from continuous port scanning and brute-force attacks.',
    questionJa: 'Just-In-Time（JIT）VM アクセスを有効化した場合の動作はどれですか？',
    questionEn: 'What happens when Just-In-Time (JIT) VM access is enabled for an Azure VM?',
    options: [
      {
        id: 'A',
        textJa: '対象 VM の RDP および SSH 管理ポートが常時インターネットへ開放される',
        textEn: 'RDP and SSH ports remain permanently open on the VM NSG',
        isCorrect: false,
        explanationJa:
          '逆であり、通常時は管理ポートを既定でブロックするのが JIT アクセスの基本動作です。',
        explanationEn:
          'JIT blocks management ports by default rather than leaving them open.',
      },
      {
        id: 'B',
        textJa: '一定時間管理操作がない場合に対象 VM の電源が自動シャットダウンする',
        textEn: 'The VM automatically powers down when admin sessions end',
        isCorrect: false,
        explanationJa:
          'VM の電源制御ではなく、NSG/Azure Firewall の受信トラフィックルールを動的に開閉する機能です。',
        explanationEn:
          'JIT dynamically manages NSG/Firewall rules rather than VM power states.',
      },
      {
        id: 'C',
        textJa: 'ゲスト OS のログオン画面で自動的に第 2 要素認証（MFA）が強制される',
        textEn: 'Guest OS login prompts automatically enforce hardware MFA',
        isCorrect: false,
        explanationJa:
          'JIT 自体は NSG ルールの時限開放であり、Azure Portal 操作時の認証は Entra ID 条件付きアクセスが担います。',
        explanationEn:
          'JIT controls temporary NSG port opening rather than acting as an OS-level MFA prompt.',
      },
      {
        id: 'D',
        textJa: '平時は管理ポートを閉じ、承認時のみ指定 IP と期間だけ一時開放される',
        textEn: 'Ports stay blocked by default and open briefly per IP on request',
        isCorrect: true,
        explanationJa:
          'JIT VM アクセスを有効化すると、Defender for Cloud が対象 VM の NSG（または Azure Firewall）に受信拒否ルールを自動適用します。権限を持つユーザーがアクセスを要求すると、指定した送信元 IP アドレス（または範囲）に対して最大構成時間（例: 3 時間など）のみ一時的な許可ルールが追加され、期限後に自動削除されます。',
        explanationEn:
          'JIT configures default-deny NSG rules on management ports. When an authorized user requests access, Defender for Cloud creates a temporary allow rule limited to the specified source IP and approved duration, then automatically removes it.',
      },
    ],
    overallExplanationJa:
      'Microsoft Defender for Servers Plan 2（または Defender CSPM 一部含む旧環境等）に含まれる **Just-In-Time（JIT）VM アクセス** は、Azure RBAC でアクセス要求権限を審査し、必要なときだけ特定送信元 IP からの管理ポート（22/3389/5985/5986 等）を時限開放して、タイムアウト後に自動で閉じることで攻撃露出時間を最小限にします。',
    overallExplanationEn:
      '**Just-In-Time (JIT) VM access** minimizes exposure of management ports by enforcing default-deny NSG rules and granting temporary, source-IP-restricted access windows that auto-expire.',
    keyPointsJa: [
      'JIT 有効化 ＝ 平時は NSG で管理ポート（3389/22）をブロック、要求時のみ指定 IP・時間だけ一時許可',
      'Defender for Servers Plan 2 の機能（RBAC 権限チェックや Azure Activity Log 監査と連携）',
    ],
    keyPointsEn: [
      'Default-deny NSG rules on management ports; temporary IP-scoped allow rules upon approved request',
      'Part of Microsoft Defender for Servers Plan 2',
    ],
    referenceTopic: 'Defender for Cloud - Just-In-Time（JIT）VM アクセス',
  },
  {
    id: 'sakitoo-q70',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Arc によるオンプレミスおよび他社クラウドサーバーへの統合セキュリティ適用',
    titleEn: 'Extending Azure Security Controls to Hybrid Servers Using Azure Arc',
    scenarioJa:
      '自社のオンプレミスデータセンターおよび AWS・GCP 上で稼働している Windows/Linux サーバーに対しても、Azure 上の VM と同様に Microsoft Defender for Cloud の脅威保護や Azure Policy ゲスト構成評価を一元適用したいと考えています。',
    scenarioEn:
      'You want to extend Microsoft Defender for Cloud threat protection and Azure Policy guest configuration auditing to Windows/Linux servers running on-premises and in AWS/GCP.',
    questionJa:
      'Azure Arc を使用してオンプレミスサーバーを Azure に接続することで実現できるセキュリティ機能はどれですか？',
    questionEn:
      'Which security capability is enabled by onboarding on-premises servers to Azure Arc?',
    options: [
      {
        id: 'A',
        textJa: 'Defender for Servers や Policy・AMA ログ収集を統一適用できる',
        textEn: 'Extend Defender for Servers, Azure Policy, and AMA logging uniformly',
        isCorrect: true,
        explanationJa:
          'オンプレミスや他社クラウドのマシンに Azure Connected Machine エージェントを導入して Azure Arc 対応サーバーとして登録すると、Azure リソース ID が付与され、Defender for Servers（EDR/脆弱性/FIM）、Azure Policy、Azure Update Manager、AMA 経由の Sentinel ログ収集を一貫して適用できます。',
        explanationEn:
          'Onboarding hybrid servers via the Azure Connected Machine agent projects them into Azure Resource Manager, enabling Defender for Servers, Azure Policy, Update Manager, and AMA/Sentinel log collection from one control plane.',
      },
      {
        id: 'B',
        textJa: 'オンプレミスと Azure VNet 間のサイト間 VPN 接続を自動構築する',
        textEn: 'Automatically provision L3 Site-to-Site VPN tunnels to Azure VNets',
        isCorrect: false,
        explanationJa:
          'Azure Arc は管理コントロールプレーンのエージェント接続（HTTPS アウトバウンド）であり、L3 の VPN や ExpressRoute を構築する機能ではありません。',
        explanationEn:
          'Azure Arc provides outbound HTTPS control-plane management rather than provisioning L3 VPN or ExpressRoute connectivity.',
      },
      {
        id: 'C',
        textJa: '物理サーバーのワークロードを自動的にクラウド VM へ完全移行する',
        textEn: 'Automatically lift-and-shift physical servers into Azure cloud VMs',
        isCorrect: false,
        explanationJa:
          'サーバーを Azure へ移行（Azure Migrate）するのではなく、オンプレミス等に置いたまま Azure から統合管理する仕組みです。',
        explanationEn:
          'Azure Arc manages servers in place across hybrid environments rather than migrating them.',
      },
      {
        id: 'D',
        textJa: '登録したすべてのサーバーのセキュリティ保護ライセンスが完全無償になる',
        textEn: 'Eliminate all Defender and security add-on licensing fees permanently',
        isCorrect: false,
        explanationJa:
          'Arc の基本コントロールプレーン接続自体は追加費用なしですが、Defender for Servers や Policy ゲスト構成等の有償アドオンにはそれぞれのライセンス課金が発生します。',
        explanationEn:
          'While Arc onboarding itself has no base fee, enabled services like Defender for Servers carry per-machine charges.',
      },
    ],
    overallExplanationJa:
      'ハイブリッド・マルチクラウド環境のセキュリティ統一管理の要が **Azure Arc** です。オンプレミスや AWS EC2 等に Azure Connected Machine エージェントをインストールすると、Azure リソースと同様に RBAC・タグ・Azure Policy・Defender for Servers・Sentinel（AMA）を一元管理できます。',
    overallExplanationEn:
      '**Azure Arc** projects non-Azure servers into Azure Resource Manager so you can govern them with the same Azure RBAC, Azure Policy, Defender for Servers, and Sentinel/AMA pipelines as native Azure VMs.',
    keyPointsJa: [
      'Azure Arc によりオンプレミスや他クラウドサーバーに Defender for Servers、Azure Policy、AMA/Sentinel を一元適用可能',
      'オンボーディングには「Azure Connected Machine agent」を使用する',
    ],
    keyPointsEn: [
      'Extends Defender for Servers, Azure Policy, and Sentinel (AMA) to on-premises and multi-cloud servers',
      'Onboard machines using the Azure Connected Machine agent',
    ],
    referenceTopic: 'Azure Arc 対応サーバーによるハイブリッドセキュリティ統合',
  },
  {
    id: 'sakitoo-q71',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Servers Plan 1 と Plan 2 の機能差',
    titleEn: 'Key Feature Differences Between Defender for Servers Plan 1 and Plan 2',
    scenarioJa:
      'コストと必要な保護機能（EDR、JIT VM アクセス、ファイル整合性監視、無料のデータ取り込み特典など）のバランスを考慮し、サブスクリプションに対して Defender for Servers Plan 1 と Plan 2 のどちらを有効化するか比較しています。',
    scenarioEn:
      'You are comparing Microsoft Defender for Servers Plan 1 versus Plan 2 to decide which tier satisfies requirements for EDR, JIT VM access, File Integrity Monitoring, and log ingestion benefits.',
    questionJa: 'Defender for Servers のプラン P1 と P2 の主な違いはどれですか？',
    questionEn:
      'What is the main difference between Microsoft Defender for Servers Plan 1 and Plan 2?',
    options: [
      {
        id: 'A',
        textJa: 'P2 は MDE に加え JIT・FIM・適応型制御・500MB 無料ログ枠等を含む',
        textEn: 'Plan 2 adds JIT, FIM, adaptive controls, and 500 MB/day free ingestion',
        isCorrect: true,
        explanationJa:
          'Plan 1 は Microsoft Defender for Endpoint（MDE）Plan 2 相当の EDR と基本 OS 脅威アラートを提供します。Plan 2 ではそれに加え、Just-In-Time（JIT）VM アクセス、Defender 脆弱性管理（および既存の Qualys 統合）、ファイル整合性監視（FIM）、適応型アプリケーション制御、エージェントレススキャン、500MB/日・ノードのセキュリティログ無料取り込み特典等が含まれます。',
        explanationEn:
          'Plan 1 provides MDE EDR integration and OS threat detection. Plan 2 adds JIT VM access, vulnerability assessment, File Integrity Monitoring (FIM), Adaptive Application Controls, agentless scanning, and 500 MB/day security data ingestion benefit.',
      },
      {
        id: 'B',
        textJa: 'P1 は Linux にも対応するが P2 は Windows サーバー専用となる',
        textEn: 'Plan 1 covers Linux machines whereas Plan 2 supports only Windows VMs',
        isCorrect: false,
        explanationJa:
          'Plan 1・Plan 2 ともに Windows および Linux サーバーの両方をサポートしています。',
        explanationEn:
          'Both Plan 1 and Plan 2 support both Windows and Linux machines.',
      },
      {
        id: 'C',
        textJa: 'P1 は仮想マシン単体向けで P2 は AKS コンテナ保護も包括的に含む',
        textEn: 'Plan 1 covers VMs while Plan 2 includes full AKS container protection',
        isCorrect: false,
        explanationJa:
          'AKS やレジストリを含む本格的なコンテナ保護は独立したプラン「Defender for Containers」が担当します。',
        explanationEn:
          'Full Kubernetes/registry protection is provided by the separate Defender for Containers plan.',
      },
      {
        id: 'D',
        textJa: 'P1 は既定の無料基本プランであり P2 のみが課金対象の有償プランとなる',
        textEn: 'Plan 1 is the free baseline tier while only Plan 2 carries a fee',
        isCorrect: false,
        explanationJa:
          'Plan 1・Plan 2 はどちらも有償の Cloud Workload Protection（CWP）プランです（無料枠は Foundational CSPM です）。',
        explanationEn:
          'Both Plan 1 and Plan 2 are paid workload protection plans (Foundational CSPM is the free tier).',
      },
    ],
    overallExplanationJa:
      'Defender for Servers の **Plan 1** は低コストで MDE（EDR）統合と基本的な保護を導入したい場合に適しています。一方、コンプライアンス要件や高度なサーバー強化（**JIT アクセス、FIM、適応型アプリ制御、エージェントレススキャン、脆弱性管理拡張、500MB/日ログ無料枠**）が必要な本番環境には **Plan 2** を選択します。',
    overallExplanationEn:
      'Choose **Defender for Servers Plan 1** for core MDE EDR integration, and **Plan 2** when you need JIT VM access, File Integrity Monitoring (FIM), Adaptive Application Controls, agentless vulnerability/secret scanning, and the 500 MB/day Log Analytics ingestion allowance.',
    keyPointsJa: [
      'P1・P2 共通：Microsoft Defender for Endpoint（MDE）統合（EDR）',
      'P2 限定機能：JIT VM アクセス、FIM、適応型アプリ制御、適応型ネットワーク強化、エージェントレス VM スキャン、500MB/日ログ無料枠',
    ],
    keyPointsEn: [
      'Both Plan 1 and Plan 2 include Microsoft Defender for Endpoint (MDE) EDR integration',
      'Plan 2 adds JIT, FIM, Adaptive Application Controls, agentless scanning, and 500 MB/day log ingestion benefit',
    ],
    referenceTopic: 'Microsoft Defender for Servers Plan 1 vs Plan 2',
  },
  {
    id: 'sakitoo-q72',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure VM トラステッド起動におけるセキュアブート（Secure Boot）の目的',
    titleEn: 'Purpose of Secure Boot in Azure Trusted Launch VMs',
    scenarioJa:
      '第 2 世代（Gen2）Azure VM を作成する際、トラステッド起動（Trusted Launch）を有効化してブートプロセス初期段階への高度な攻撃を阻止したいと考えています。',
    scenarioEn:
      'When deploying Generation 2 (Gen2) Azure VMs, you enable Trusted Launch with Secure Boot to defend against low-level attacks targeting the early startup sequence.',
    questionJa: 'Azure VM の Secure Boot（セキュアブート）を有効にする主な目的はどれですか？',
    questionEn: 'What is the primary security purpose of enabling Secure Boot on an Azure VM?',
    options: [
      {
        id: 'A',
        textJa: '検証ステップを省き仮想マシンの OS 起動速度を大幅に向上させるため',
        textEn: 'Skip firmware checks to accelerate VM OS boot times significantly',
        isCorrect: false,
        explanationJa:
          '起動時間の高速化ではなく、ブートコンポーネントの署名検証による改ざん防止機能です。',
        explanationEn:
          'Secure Boot enforces cryptographic signature verification rather than speeding up boot times.',
      },
      {
        id: 'B',
        textJa: 'マネージド OS ディスク上の全保存データを自動暗号化するため',
        textEn: 'Automatically encrypt OS and data managed disks at storage layer',
        isCorrect: false,
        explanationJa:
          'ディスク暗号化は SSE / Encryption at host / ADE が担当します（なお vTPM が BitLocker 鍵保護に使われる点は別機能です）。',
        explanationEn:
          'Disk encryption is handled by SSE, Encryption at host, or ADE rather than Secure Boot itself.',
      },
      {
        id: 'C',
        textJa: 'ブート時のルートキットや未署名の悪意あるコード実行を阻止するため',
        textEn: 'Block unsigned bootloaders and rootkits/bootkits during startup',
        isCorrect: true,
        explanationJa:
          'UEFI の一部であるセキュアブート（Secure Boot）は、信頼された発行元のデジタル署名を持つブートローダー・OS カーネル・カーネルレベルドライバのみ実行を許可することで、OS 起動前に潜り込むブートキットやルートキットによる永続化攻撃を防ぎます。',
        explanationEn:
          'Secure Boot ensures only binaries signed by trusted authorities (Microsoft/publishers) can run during the UEFI boot chain, blocking bootkits and kernel-mode rootkits.',
      },
      {
        id: 'D',
        textJa: 'VM が外部ネットワークと送受信する通信パケットを暗号化するため',
        textEn: 'Encrypt all inbound and outbound VM network packet payloads',
        isCorrect: false,
        explanationJa:
          'ネットワークトラフィック保護は NSG や TLS の役割であり、セキュアブートとは無関係です。',
        explanationEn:
          'Network filtering/encryption is unrelated to Secure Boot.',
      },
    ],
    overallExplanationJa:
      'Azure の第 2 世代（Gen2）VM で利用できる **トラステッド起動（Trusted Launch）** の中核コンポーネントの 1 つが **セキュアブート（Secure Boot）** です。ファームウェア起動から OS カーネル読み込みまでの信頼の連鎖（Chain of Trust）をデジタル署名検証で保護し、OS 内部セキュリティソフトが起動する前に動作するブートキット／ルートキットを遮断します。',
    overallExplanationEn:
      '**Secure Boot** (part of Trusted Launch for Gen2 VMs) establishes a cryptographic root of trust from UEFI firmware through the bootloader and OS kernel to block bootkits and rootkits.',
    keyPointsJa: [
      'Secure Boot ＝ 信頼された署名のないブートローダー・ドライバの起動時実行を阻止しブートキット/ルートキット対策を行う',
      'Gen2 VM のトラステッド起動（Trusted Launch）で vTPM とともに提供される',
    ],
    keyPointsEn: [
      'Verifies digital signatures of bootloaders, kernels, and drivers at startup',
      'Requires Generation 2 VMs with Trusted Launch enabled',
    ],
    referenceTopic: 'Azure VM トラステッド起動 - Secure Boot',
  },
  {
    id: 'sakitoo-q73',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Cloud エージェントレス VM スキャンの収集情報と仕組み',
    titleEn: 'How Agentless VM Scanning Works and What It Collects',
    scenarioJa:
      'VM 内に余分なセキュリティエージェントやスキャナーを導入・維持できないサーバー環境でも脆弱性管理を行いたいため、Defender CSPM または Defender for Servers Plan 2 のエージェントレス VM スキャン（Agentless scanning）を有効化しました。',
    scenarioEn:
      'For VMs where installing extra scanning agents is restricted, you enabled Agentless VM Scanning via Defender CSPM or Defender for Servers Plan 2.',
    questionJa:
      'Defender for Cloud の Azure VM に対するエージェントレス VM スキャン（Agentless Scanning）が収集する情報はどれですか？',
    questionEn:
      'What information does Agentless VM Scanning collect for Azure VMs in Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: 'ゲスト OS のリアルタイム CPU 使用率とメモリ消費メトリクス',
        textEn: 'Real-time guest OS CPU load and memory utilization metrics',
        isCorrect: false,
        explanationJa:
          'リソース稼働メトリクスは Azure Monitor が収集するものであり、エージェントレスセキュリティスキャンの対象ではありません。',
        explanationEn:
          'CPU/memory metrics are collected by Azure Monitor, not agentless security scanning.',
      },
      {
        id: 'B',
        textJa: 'ディスクスナップショット由来のソフトウェア・脆弱性・平文シークレット',
        textEn: 'Software inventory, CVEs, and secrets from disk snapshots',
        isCorrect: true,
        explanationJa:
          'エージェントレススキャンは稼働中 VM の OS に負荷やネットワーク要件をかけることなく、バックグラウンドで一時的なディスクスナップショットを作成してオフライン解析し、インストール済みソフトウェア一覧・既知脆弱性（CVE）・ハードコードされたシークレットを検出してスナップショットを即破棄します。',
        explanationEn:
          'Agentless scanning takes out-of-band disk snapshots, analyzes installed software, vulnerabilities, and exposed secrets in an isolated environment without touching the VM CPU/network, and discards the snapshot.',
      },
      {
        id: 'C',
        textJa: '仮想ネットワークインターフェースを通過するリアルタイムパケットデータ',
        textEn: 'Live network packet captures passing through the VM NIC',
        isCorrect: false,
        explanationJa:
          'ディスクスナップショットの静的解析であり、リアルタイムパケットキャプチャは行いません。',
        explanationEn:
          'Disk snapshot scanning does not capture live network packets.',
      },
      {
        id: 'D',
        textJa: 'OS 上で常時発生する Windows セキュリティ監査イベントログ履歴',
        textEn: 'Continuous Windows Security Event logs streamed from OS',
        isCorrect: false,
        explanationJa:
          'イベントログの継続収集には Azure Monitor エージェント（AMA）等が必要です。',
        explanationEn:
          'Continuous Windows event log collection requires an agent like Azure Monitor Agent (AMA).',
      },
    ],
    overallExplanationJa:
      'エージェントレススキャンは Azure（および AWS/GCP）の API を通じてディスクのスナップショットを一時的に取得し、分離環境で検査することで「インストール済みソフトウェアインベントリ」「CVE 脆弱性（MDVM ベース）」「露出シークレット」をゼロインパクトで可視化できます（特定タグ名・値ペアによる除外も可能）。',
    overallExplanationEn:
      'Agentless scanning delivers zero-performance-impact visibility into installed packages, CVEs, and plaintext secrets by analyzing out-of-band disk snapshots across Azure, AWS, and GCP.',
    keyPointsJa: [
      'ディスクスナップショットのアウトオブバンド解析により VM 性能影響ゼロ・ネットワーク接続不要で検査可能',
      'ソフトウェアインベントリ・脆弱性・シークレット（CSPM 等）を検出でき、リソースタグでの除外にも対応',
    ],
    keyPointsEn: [
      'Inspects temporary disk snapshots out-of-band with zero impact on running VM CPU or network',
      'Discovers software inventory, vulnerabilities, and hardcoded secrets',
    ],
    referenceTopic: 'Defender for Cloud - エージェントレス VM スキャン',
  },
  {
    id: 'sakitoo-q74',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure VM トラステッド起動における仮想 TPM（vTPM）の目的',
    titleEn: 'Purpose of Virtual TPM (vTPM) in Azure Trusted Launch VMs',
    scenarioJa:
      'トラステッド起動（Trusted Launch）有効化時にセキュアブートとあわせて有効になる仮想 Trusted Platform Module（vTPM）について、暗号鍵の保管やブート整合性検証において果たす役割を確認しています。',
    scenarioEn:
      'You are reviewing the role of the virtual Trusted Platform Module (vTPM) enabled alongside Secure Boot in Azure Trusted Launch VMs.',
    questionJa: 'Azure VM で vTPM（仮想 Trusted Platform Module）を有効にする主な目的はどれですか？',
    questionEn: 'What is the primary purpose of enabling vTPM on an Azure VM?',
    options: [
      {
        id: 'A',
        textJa: '仮想ネットワークを通過するすべての通信パケットを自動暗号化する',
        textEn: 'Automatically encrypt all VNet packet traffic flows in transit',
        isCorrect: false,
        explanationJa:
          'ネットワーク層の暗号化デバイスではありません。',
        explanationEn:
          'vTPM does not perform network packet encryption.',
      },
      {
        id: 'B',
        textJa: 'マネージドディスクのバックアップスナップショット削除を禁止する',
        textEn: 'Lock managed disk snapshots from accidental admin deletion',
        isCorrect: false,
        explanationJa:
          'スナップショット削除防止は RBAC やリソースロック・不変設定の機能です。',
        explanationEn:
          'Snapshot deletion protection is handled by RBAC, locks, or immutability.',
      },
      {
        id: 'C',
        textJa: '仮想マシンの CPU 演算性能やクロック周波数を動的に向上させる',
        textEn: 'Boost guest VM CPU clock speeds and workload compute throughput',
        isCorrect: false,
        explanationJa:
          'TPM はセキュリティ暗号チップの仮想化であり、CPU 性能向上機能ではありません。',
        explanationEn:
          'vTPM is a cryptographic security module, not a CPU performance booster.',
      },
      {
        id: 'D',
        textJa: 'BitLocker 等の暗号鍵とブート整合性の測定値（PCR）を安全保管する',
        textEn: 'Safeguard BitLocker encryption keys and store boot PCR hashes',
        isCorrect: true,
        explanationJa:
          'vTPM はハードウェア TPM 2.0 準拠の仮想セキュリティモジュールであり、VM のブート各段階のハッシュ測定値（PCR: Platform Configuration Registers）の安全保管とリモート構成証明（Attestation）、さらにゲスト内の BitLocker や機密キーのセキュアな格納場所を提供します。',
        explanationEn:
          'vTPM is a virtualized TPM 2.0 security device that serves as a dedicated secure vault for keys/certificates (such as BitLocker protectors) and stores cryptographic boot integrity measurements (PCRs) for attestation.',
      },
    ],
    overallExplanationJa:
      'Azure の vTPM は「VM 専用の仮想 TPM 2.0 チップ」として動作し、プラットフォームや OS の改ざんがないことを証明する構成証明（Boot Integrity Monitoring / Guest Attestation）の基盤になるとともに、BitLocker 暗号化キー等の秘密情報の安全な格納庫として機能します。',
    overallExplanationEn:
      'vTPM provides a virtualized TPM 2.0 hardware root of trust per VM, storing cryptographic boot measurements for Defender integrity monitoring and safeguarding BitLocker keys and certificates.',
    keyPointsJa: [
      'vTPM ＝ TPM 2.0 準拠の仮想モジュール。キー/証明書保護＋ブート測定値（PCR）格納＋構成証明（Attestation）に利用',
      'Trusted Launch の Secure Boot＋vTPM によりブート構成証明（Integrity Monitoring）が可能になる',
    ],
    keyPointsEn: [
      'Virtualized TPM 2.0 vault for BitLocker keys/certs and boot PCR measurements',
      'Enables Guest Attestation and Defender for Cloud Boot Integrity Monitoring',
    ],
    referenceTopic: 'Azure VM トラステッド起動 - 仮想 TPM（vTPM）',
  },
  {
    id: 'sakitoo-q75',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Servers のファイル整合性監視（FIM）による改ざん検知',
    titleEn: 'Tampering Detection with File Integrity Monitoring (FIM) in Defender for Servers',
    scenarioJa:
      '本番サーバー上で動作しているアプリケーションバイナリ、Windows レジストリ、`/etc/passwd` や SSH 設定ファイルなどが、マルウェアや不正侵入者によって密かに書き換えられた場合に即座にアラートを受け取りたいと考えています。',
    scenarioEn:
      'You need immediate visibility if critical binaries, Windows registry keys, or Linux system files (`/etc/passwd`, SSH configs) on production servers are modified unexpectedly by malware or intruders.',
    questionJa:
      'Defender for Servers の「ファイル整合性監視（FIM：File Integrity Monitoring）」が監視する対象はどれですか？',
    questionEn:
      'What does File Integrity Monitoring (FIM) in Defender for Servers Plan 2 monitor?',
    options: [
      {
        id: 'A',
        textJa: 'OS セキュリティパッチや Windows Update の適用状況のみ',
        textEn: 'OS patch compliance and pending Windows Update installation status',
        isCorrect: false,
        explanationJa:
          'OS パッチ適用状況の監視は Azure Update Manager の担当領域です。',
        explanationEn:
          'Patch compliance status is tracked by Azure Update Manager.',
      },
      {
        id: 'B',
        textJa: '重要 OS ファイル・レジストリキー・設定ファイルへの変更や改ざん',
        textEn: 'Changes and tampering across critical OS files and registry keys',
        isCorrect: true,
        explanationJa:
          'FIM（File Integrity Monitoring、現在は MDE ベースまたは DCR/AMA 経由で提供）は、Windows の重要システムファイル・レジストリキーおよび Linux のシステムディレクトリ・SSH/認証設定ファイルへの変更（作成・変更・削除）を既知ベースラインと比較監視し、改ざんを検出します。',
        explanationEn:
          'FIM compares critical Windows files, registry keys, and Linux configuration/system paths against known baselines and tracks unauthorized creations, modifications, and deletions.',
      },
      {
        id: 'C',
        textJa: '稼働中仮想マシンの CPU 使用率やメモリ消費量のスパイク',
        textEn: 'Real-time VM CPU utilization spikes and memory pressure levels',
        isCorrect: false,
        explanationJa:
          'CPU 使用率などの性能監視ではありません。',
        explanationEn:
          'FIM monitors filesystem and registry integrity, not CPU performance metrics.',
      },
      {
        id: 'D',
        textJa: 'NSG における受信・送信ネットワークポート許可ルールの変更',
        textEn: 'Network Security Group (NSG) inbound or outbound port rule edits',
        isCorrect: false,
        explanationJa:
          'NSG ポート変更の監視は Azure Activity Log や Defender for Resource Manager 等で行います。',
        explanationEn:
          'NSG rule changes are tracked in Azure Activity Logs rather than FIM.',
      },
    ],
    overallExplanationJa:
      'ファイル整合性監視（FIM）は、Defender for Servers Plan 2 に含まれる変更追跡機能です。攻撃者が侵入後にバックドアやスタートアップ設定、レジストリ、`/etc/sudoers` 等を改ざんして永続化を図る動きを早期検知できます。',
    overallExplanationEn:
      'Included in Defender for Servers Plan 2, **File Integrity Monitoring (FIM)** tracks changes to OS files, application binaries, Windows registry keys, and Linux configs to spot persistence and tampering.',
    keyPointsJa: [
      'FIM（ファイル整合性監視）は Defender for Servers Plan 2 の機能',
      'OS システムファイル、設定ファイル、Windows レジストリへの予期しない変更・改ざんを検出する',
    ],
    keyPointsEn: [
      'FIM is included with Defender for Servers Plan 2',
      'Detects tampering across critical files, folders, and Windows registry keys',
    ],
    referenceTopic: 'Defender for Servers - ファイル整合性監視（FIM）',
  },
  {
    id: 'sakitoo-q76',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure App Service で TLS 最小バージョン 1.2 以上を強制するセキュリティ理由',
    titleEn: 'Enforcing Minimum TLS 1.2 in Azure App Service',
    scenarioJa:
      '外部公開されている Azure App Service Web アプリの TLS/SSL 設定をハードニングし、Defender for Cloud の推奨事項にも準拠させるため、受信接続で受け入れる TLS 最小バージョンを 1.2（または 1.3）へ引き上げています。',
    scenarioEn:
      'You are hardening an internet-facing Azure App Service and resolving Defender for Cloud recommendations by raising the Minimum TLS Version setting to 1.2 or higher.',
    questionJa:
      'Azure App Service のセキュリティ設定で「TLS 最小バージョン」を 1.2 以上に設定する理由はどれですか？',
    questionEn:
      'Why should you set Minimum TLS Version to 1.2 or higher on Azure App Service?',
    options: [
      {
        id: 'A',
        textJa: 'サーバー側アプリケーションのコード実行パフォーマンスが大幅に向上するため',
        textEn: 'To significantly accelerate server-side application code execution speed',
        isCorrect: false,
        explanationJa:
          '主目的は速度向上ではなく、既知の暗号プロトコル脆弱性の排除です。',
        explanationEn:
          'The objective is cryptographic protocol security rather than application code speed.',
      },
      {
        id: 'B',
        textJa: 'TLS 1.0/1.1 の既知脆弱性を突く安全でない通信やダウングレードを防ぐため',
        textEn: 'To block insecure TLS 1.0/1.1 flaws and protocol downgrade attacks',
        isCorrect: true,
        explanationJa:
          'TLS 1.0 や 1.1（および SSL 3.0）には BEAST、POODLE、弱い暗号スイート等の既知脆弱性が存在し PCI DSS 等の業界標準でも廃止されています。最小バージョンを TLS 1.2 以上に強制することで、古い危険なプロトコルによる接続やダウングレード攻撃を防ぎます。',
        explanationEn:
          'Deprecated protocols like TLS 1.0 and 1.1 contain known flaws (BEAST, POODLE, weak ciphers). Requiring TLS 1.2+ blocks vulnerable handshakes and protocol downgrade attacks.',
      },
      {
        id: 'C',
        textJa: 'App Service Plan の月額ホスティング利用料金を削減できるため',
        textEn: 'To lower monthly Azure App Service Plan compute billing rates',
        isCorrect: false,
        explanationJa:
          'TLS バージョンの設定によって App Service Plan の料金が変わることはありません。',
        explanationEn:
          'TLS version settings do not change App Service Plan pricing.',
      },
      {
        id: 'D',
        textJa: '検索エンジンでの SEO 表示順位を引き上げることだけが目的であるため',
        textEn: 'Solely to improve public search engine ranking results without encryption',
        isCorrect: false,
        explanationJa:
          'HTTPS 対応自体は一般論としてありますが、TLS 1.2 強制は主に暗号プロトコル脆弱性対策およびコンプライアンス準拠のためです。',
        explanationEn:
          'Minimum TLS 1.2 enforcement is a cryptographic security and compliance requirement.',
      },
    ],
    overallExplanationJa:
      'Azure App Service や Azure Storage、Azure SQL、API Management などのほぼすべての Azure PaaS では、コンプライアンスと暗号安全性のため「HTTPS のみ（HTTPS Only）」とあわせて「最小 TLS バージョン 1.2 以上（または 1.3）」を強制設定することが必須のセキュリティベースラインです。',
    overallExplanationEn:
      'Setting Minimum TLS Version to 1.2+ alongside HTTPS Only is a universal Azure PaaS security baseline to eliminate deprecated TLS 1.0/1.1 protocol risks.',
    keyPointsJa: [
      'TLS 1.0 / 1.1 には既知の脆弱性があり廃止されているため、App Service では TLS 1.2 以上を強制する',
      'あわせて「HTTPS のみ（HTTPS Only）」も有効化して平文 HTTP アクセスをリダイレクト/遮断する',
    ],
    keyPointsEn: [
      'Block deprecated TLS 1.0/1.1 protocols with known flaws by enforcing TLS 1.2+',
      'Combine with HTTPS Only to eliminate unencrypted HTTP traffic',
    ],
    referenceTopic: 'Azure App Service の TLS/SSL セキュリティ強化',
  },
  {
    id: 'sakitoo-q77',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Trusted Launch VM の整合性監視（Integrity Monitoring）によるブート改ざん検出',
    titleEn: 'Detecting Boot Tampering with Integrity Monitoring on Trusted Launch VMs',
    scenarioJa:
      'トラステッド起動（Secure Boot + vTPM）が有効な Azure VM に対し、ブートコンポーネントの改ざんが発生していないかを継続的に検証し、改ざん兆候があれば Defender for Cloud でアラートを受け取るため Guest Attestation 拡張機能を導入しました。',
    scenarioEn:
      'You deployed the Guest Attestation extension on Trusted Launch VMs (with Secure Boot and vTPM) to continuously verify boot integrity and alert in Defender for Cloud if tampering occurs.',
    questionJa:
      'Trusted Launch を有効にした Azure VM の「整合性監視（Integrity Monitoring）」機能の目的はどれですか？',
    questionEn:
      'What is the purpose of Integrity Monitoring on Azure Trusted Launch VMs?',
    options: [
      {
        id: 'A',
        textJa: 'vTPM のブート測定値ハッシュを検証し改ざん検知時にアラートを出す',
        textEn: 'Verify vTPM boot hashes against baselines and alert on tampering',
        isCorrect: true,
        explanationJa:
          'ブート整合性監視（Boot Integrity Monitoring）は、Trusted Launch VM の vTPM に記録されたブートシーケンス（ブートローダー・カーネル・署名状態・ポリシー等）の暗号学的測定値を Microsoft Azure Attestation 経由で検証し、改ざんやルートキット/ブートキット感染の兆候を検知すると Defender for Cloud の推奨事項・アラートを出力します。',
        explanationEn:
          'Integrity Monitoring collects vTPM boot measurements via the Guest Attestation extension and evaluates them through Azure Attestation, raising Defender for Cloud findings and alerts if boot integrity fails.',
      },
      {
        id: 'B',
        textJa: 'マネージド OS ディスクのセクタ断片化を検知して自動最適化する',
        textEn: 'Detect and automatically defragment managed OS disk sectors',
        isCorrect: false,
        explanationJa:
          'ディスク最適化ツールではありません。',
        explanationEn:
          'Integrity Monitoring verifies cryptographic boot attestation rather than defragmenting disks.',
      },
      {
        id: 'C',
        textJa: '稼働率を監視して仮想マシンサイズの課金コスト最適化を提案する',
        textEn: 'Monitor utilization to rightsize VM compute billing SKUs',
        isCorrect: false,
        explanationJa:
          'コスト適正化機能（Azure Advisor）とは異なります。',
        explanationEn:
          'Compute cost optimization is handled by Azure Advisor, not Integrity Monitoring.',
      },
      {
        id: 'D',
        textJa: 'サポート終了が近い VM オペレーティングシステムを自動アップグレードする',
        textEn: 'Automatically upgrade major guest VM operating system versions',
        isCorrect: false,
        explanationJa:
          'OS バージョンアップグレード機能ではありません。',
        explanationEn:
          'Integrity Monitoring checks boot integrity and does not upgrade OS versions.',
      },
    ],
    overallExplanationJa:
      'トラステッド起動の「セキュアブート＋vTPM」を有効化するだけでも防御になりますが、**Guest Attestation 拡張機能** をインストールして **ブート整合性監視（Integrity Monitoring）** を組み合わせることで、Defender for Cloud が継続的にリモート構成証明（Remote Attestation）を実施し、起動プロセス異常を即座に可視化・アラートできます。',
    overallExplanationEn:
      'Pairing Trusted Launch (Secure Boot + vTPM) with the **Guest Attestation** extension enables continuous **Integrity Monitoring**, proving boot chain integrity via Azure Attestation and surfacing failures in Defender for Cloud.',
    keyPointsJa: [
      '整合性監視（Integrity Monitoring）＝ vTPM のブート測定値を検証し改ざんや異常を Defender for Cloud で検知',
      '利用には Trusted Launch（vTPM 有効）と Guest Attestation VM 拡張機能が必要',
    ],
    keyPointsEn: [
      'Validates vTPM boot measurements against known-good attestation baselines',
      'Requires Trusted Launch (vTPM) and the Guest Attestation extension',
    ],
    referenceTopic: 'Trusted Launch VM の整合性監視（Guest Attestation）',
  },
  {
    id: 'sakitoo-q78',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Containers による AKS およびコンテナイメージの多層保護',
    titleEn: 'Multi-Layer Protection for AKS and Containers with Defender for Containers',
    scenarioJa:
      'Azure Kubernetes Service（AKS）上で本番マイクロサービスを稼働させており、コンテナレジストリ上の脆弱なイメージの検出、クラスター構成の診断、および実行中ポッドでの不審プロセス検知を包括的に導入したいと考えています。',
    scenarioEn:
      'You run production microservices on Azure Kubernetes Service (AKS) and want comprehensive security spanning registry image vulnerability scanning, cluster posture hardening, and runtime threat detection.',
    questionJa:
      'Azure Kubernetes Service（AKS）のコンテナイメージおよび実行環境のセキュリティを向上させるために Defender for Containers が提供する機能はどれですか？',
    questionEn:
      'Which security capabilities does Defender for Containers provide for AKS clusters and container images?',
    options: [
      {
        id: 'A',
        textJa: '実行中ポッドの CPU やメモリ要求上限のみを自動チューニングする',
        textEn: 'Automatic pod CPU and memory resource right-sizing only',
        isCorrect: false,
        explanationJa:
          'ポッドの自動スケーリング（HPA/VPA）は Kubernetes 基盤機能であり、Defender for Containers の目的ではありません。',
        explanationEn:
          'Pod resource scaling is handled by Kubernetes HPA/VPA rather than Defender for Containers.',
      },
      {
        id: 'B',
        textJa: 'ポッド間通信のネットワーク帯域幅と QoS スループットのみを制限する',
        textEn: 'Pod-to-pod network bandwidth throttling and QoS shaping only',
        isCorrect: false,
        explanationJa:
          '帯域 QoS 制御機能ではありません。',
        explanationEn:
          'Defender for Containers does not manage bandwidth shaping.',
      },
      {
        id: 'C',
        textJa: 'イメージ脆弱性スキャン・実行時脅威検知・Kubernetes 構成保護',
        textEn: 'Image CVE scanning, runtime threat alerts, and K8s hardening',
        isCorrect: true,
        explanationJa:
          'Microsoft Defender for Containers は、① ACR（およびマルチクラウドレジストリ）や実行中コンテナに対する MDVM エージェントレス脆弱性評価、② Defender センサーによる実行時異常検知（クリプトマイニング、コンテナエスケープ等）、③ Kubernetes 監査ログ解析と Azure Policy/CSPM によるクラスター構成強化の 3 軸を提供します。',
        explanationEn:
          'Defender for Containers delivers (1) agentless image vulnerability scanning in registries and runtime, (2) runtime threat detection via Defender sensors, and (3) Kubernetes API audit-log analysis and security posture hardening.',
      },
      {
        id: 'D',
        textJa: 'コードリポジトリからのコンテナイメージ自動ビルドと本番デプロイ',
        textEn: 'Automated CI/CD container builds and rolling deployments',
        isCorrect: false,
        explanationJa:
          'デプロイパイプライン実行機能は GitHub Actions や Azure Pipelines 等の役割です。',
        explanationEn:
          'CI/CD container deployment is handled by GitHub Actions or Azure DevOps.',
      },
    ],
    overallExplanationJa:
      'Microsoft Defender for Containers はクラウドネイティブな Kubernetes 環境（AKS、AWS EKS、GCP GKE、Azure Arc 対応 K8s）向けに「環境強化（ハードニング）」「イメージ脆弱性評価（シフトレフト＋ランタイム）」「リアルタイム脅威防御（コントロールプレーン＋ノード上コンテナ実行時）」を一括提供します。',
    overallExplanationEn:
      'Microsoft Defender for Containers protects AKS, EKS, GKE, and Arc-enabled Kubernetes across posture hardening, registry/runtime vulnerability assessment, and runtime/control-plane threat detection.',
    keyPointsJa: [
      'Defender for Containers ＝ イメージ脆弱性スキャン + 実行時（ランタイム）保護 + K8s コントロールプレーン監視 + 構成強化',
      'Defender センサーと Azure Policy for Kubernetes を自動プロビジョニング可能',
    ],
    keyPointsEn: [
      'Covers image CVE scanning, runtime pod threat detection, control-plane audit analysis, and posture checks',
      'Supports AKS as well as AWS EKS, GCP GKE, and Arc-enabled Kubernetes',
    ],
    referenceTopic: 'Microsoft Defender for Containers の保護機能',
  },
  {
    id: 'sakitoo-q79',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'App Service マネージド ID による Key Vault シークレット取得の認証フロー',
    titleEn: 'Authentication Flow for App Service Managed Identity Accessing Key Vault',
    scenarioJa:
      'Azure App Service でホストされている Web アプリケーションにシステム割り当てマネージド ID を有効化し、Azure Key Vault から API キー等のシークレットを安全に読み取るアーキテクチャの動作原理を確認しています。',
    scenarioEn:
      'You enabled a system-assigned managed identity on an Azure App Service web app to securely retrieve secrets from Azure Key Vault without storing credentials in app settings.',
    questionJa:
      'App Service の Managed Identity（マネージド ID）で Key Vault からシークレットを取得する際の認証フローはどれですか？',
    questionEn:
      'How does an App Service with a Managed Identity authenticate to Azure Key Vault to retrieve a secret?',
    options: [
      {
        id: 'A',
        textJa: 'アプリのソースコードに接続文字列を記述し Key Vault へ認証する',
        textEn: 'Embed connection strings or client secrets directly inside app code',
        isCorrect: false,
        explanationJa:
          'マネージド ID の目的はコードや設定ファイルから接続シークレットを完全に排除することです。',
        explanationEn:
          'Managed Identities exist specifically to eliminate secrets and connection strings from code.',
      },
      {
        id: 'B',
        textJa: 'ローカル ID エンドポイントから Entra トークンを取得して認証する',
        textEn: 'Fetch Entra ID tokens via local identity endpoint to call Key Vault',
        isCorrect: true,
        explanationJa:
          'App Service（や Functions）のマネージド ID を有効にすると、アプリ環境変数（`IDENTITY_ENDPOINT` 等）を通じてプラットフォームが Entra ID からアクセストークンをシークレットレスで自動取得します。そのトークンを Key Vault REST API（または Key Vault 参照）へ提示して RBAC 認可のもとシークレットを取得します。',
        explanationEn:
          'App Service uses its local managed identity endpoint to obtain an Entra ID access token automatically (with no credentials in code) and presents that Bearer token to Key Vault for RBAC-authorized secret retrieval.',
      },
      {
        id: 'C',
        textJa: '事前発行した Azure Storage SAS トークンを用いて認証を通過する',
        textEn: 'Present a pre-shared Azure Storage SAS token for authentication',
        isCorrect: false,
        explanationJa:
          'Key Vault は SAS トークンではなく Microsoft Entra ID の OAuth 2.0 Bearer トークンで認証します。',
        explanationEn:
          'Key Vault uses Entra ID OAuth 2.0 Bearer tokens rather than Storage SAS tokens.',
      },
      {
        id: 'D',
        textJa: '静的なサービスユーザー名とパスワードを設定して Key Vault に接続する',
        textEn: 'Pass static username and password credentials to the vault API',
        isCorrect: false,
        explanationJa:
          '静的ユーザー名とパスワードは使用しません。',
        explanationEn:
          'Static usernames and passwords are not used.',
      },
    ],
    overallExplanationJa:
      'App Service 上では、アプリコード内から `DefaultAzureCredential`（Azure Identity SDK）を使う方法に加え、App Service プラットフォーム自体が起動時に自動解決する **Key Vault 参照（`@Microsoft.KeyVault(SecretUri=...)`）** も利用でき、どちらも裏側ではマネージド ID による Entra ID トークン取得フローでシークレットを取得します。',
    overallExplanationEn:
      'Both `DefaultAzureCredential` in code and platform-level `@Microsoft.KeyVault(...)` application setting references leverage the App Service Managed Identity token flow transparently.',
    keyPointsJa: [
      'App Service はローカルのマネージド ID エンドポイント経由で Entra ID トークンを自動取得し Key Vault へ提示する',
      'コードや設定にクライアントシークレットを一切保存する必要がない',
    ],
    keyPointsEn: [
      'App Service automatically fetches Entra tokens for Key Vault via its managed identity endpoint',
      'Works seamlessly with both `DefaultAzureCredential` and Key Vault references',
    ],
    referenceTopic: 'App Service マネージド ID と Key Vault 認証フロー',
  },
  {
    id: 'sakitoo-q80',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Foundry ガードレール（Guardrails）による LLM 入出力防御',
    titleEn: 'Protecting LLM Inputs and Outputs with Microsoft Foundry Guardrails',
    scenarioJa:
      'Microsoft Foundry（旧 Azure AI Foundry）上で社内業務向け生成 AI チャットボットやエージェントを構築・運用しています。モデルが不適切なコンテンツを生成したり、ユーザーの脱獄攻撃や根拠のない幻覚（ハルシネーション）に反応したりするのを防ぐ必要があります。',
    scenarioEn:
      'You are deploying generative AI models and agents in Microsoft Foundry (Azure AI Foundry) and must prevent harmful responses, prompt injection, and ungrounded hallucinations.',
    questionJa:
      'Foundry（Azure AI Foundry）でエージェントセキュリティの「ガードレール（Guardrails）」を設定する目的はどれですか？',
    questionEn:
      'What is the purpose of configuring Guardrails (content filters) in Microsoft Foundry?',
    options: [
      {
        id: 'A',
        textJa: '大規模言語モデルの推論速度と応答スループットを向上させるため',
        textEn: 'To accelerate foundation model inference latency and response throughput',
        isCorrect: false,
        explanationJa:
          'ガードレールは安全性検査レイヤーであり、推論の高速化機能ではありません。',
        explanationEn:
          'Guardrails enforce safety and security checks rather than accelerating inference.',
      },
      {
        id: 'B',
        textJa: 'エージェントごとの月額課金上限とトークン予算を設定するため',
        textEn: 'To configure monthly Azure billing caps and token usage budgets',
        isCorrect: false,
        explanationJa:
          '予算やクォータ上限とは異なるセキュリティ機能です。',
        explanationEn:
          'Guardrails enforce content and attack controls rather than billing caps.',
      },
      {
        id: 'C',
        textJa: '有害コンテンツ・インジェクション・根拠逸脱を防ぐフィルタを設定するため',
        textEn: 'To filter harmful content, prompt injection, and ungrounded outputs',
        isCorrect: true,
        explanationJa:
          'Microsoft Foundry のガードレール（コンテンツフィルター／コントロール）では、入出力の 4 つの有害カテゴリ（暴力・自傷・性的・憎悪/不公平）のしきい値制御に加え、ユーザープロンプト/ドキュメントに対する Prompt Shields（インジェクション防止）、Groundedness（グラウンディング逸脱）検出、保護対象コンテンツ遮断を設定できます。',
        explanationEn:
          'Foundry Guardrails enforce input/output severity thresholds for Hate, Sexual, Violence, and Self-Harm, alongside Prompt Shields against jailbreaks/injections, Protected Material checks, and Groundedness detection.',
      },
      {
        id: 'D',
        textJa: 'エンドユーザー向けチャット画面のフロントエンド UI を設計するため',
        textEn: 'To design and customize the frontend chat web user interface layout',
        isCorrect: false,
        explanationJa:
          'UI レイアウト設計機能ではありません。',
        explanationEn:
          'Guardrails govern model safety, not frontend UI design.',
      },
    ],
    overallExplanationJa:
      'Microsoft Foundry のガードレールは、AI モデル／エージェントの「モデル内・入出力境界」を守る中核防御機構です。APIM AI Gateway による「モデル前段の通信・認証・レート制御」と組み合わせることで、包括的なエンタープライズ AI セキュリティを実現できます。',
    overallExplanationEn:
      'Foundry Guardrails protect the model input/output boundary against jailbreaks, harmful content, and ungrounded answers, complementing front-of-model API Gateway controls in APIM.',
    keyPointsJa: [
      'Foundry ガードレール ＝ 有害表現フィルター + Prompt Shields（直接/間接攻撃防止）+ Groundedness 検出 + 保護対象マテリアル検査',
      '入力（Input）側と出力（Output）側の双方で個別にしきい値やブロック動作を構成可能',
    ],
    keyPointsEn: [
      'Combines Harm category thresholds, Prompt Shields, Protected Material, and Groundedness checks',
      'Configurable separately for Input prompts and Output completions',
    ],
    referenceTopic: 'Microsoft Foundry ガードレールとコンテンツフィルター',
  },
];
