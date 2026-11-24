import { PdfQuestionSeed } from './pdfCaseStudies';

export const SAKITOO_QUESTIONS_PART6: PdfQuestionSeed[] = [
  {
    id: 'sakitoo-q101',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Sentinel アナリスト向けの最小権限 RBAC ロール（Responder）',
    titleEn: 'Least-Privilege RBAC Role for Sentinel Incident Investigation (Responder)',
    scenarioJa:
      'SOC（Security Operations Center）に新しい Tier-1/Tier-2 セキュリティ アナリストが配属されました。アナリストにはインシデントの調査、ステータスの変更、コメント追加、割り当ての更新を許可する必要がありますが、分析ルールの作成やデータ コネクターの変更、ワークスペース設定の変更は禁止したいと考えています。',
    scenarioEn:
      'New Tier-1/Tier-2 SOC analysts need to investigate Microsoft Sentinel incidents, update statuses, assign owners, and add comments, without permission to create analytics rules or modify workspace/connector settings.',
    questionJa:
      'Microsoft Sentinel でロールを割り当てる際、アナリストがインシデントの調査・更新のみ行える最小権限のロールはどれですか？',
    questionEn:
      'Which built-in Microsoft Sentinel RBAC role provides least-privilege permissions strictly for investigating and updating incidents?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Sentinel Reader',
        textEn: 'Microsoft Sentinel Reader',
        isCorrect: false,
        explanationJa:
          'Reader ロールはインシデントやログの読み取り・閲覧のみ可能であり、インシデントのステータス変更や担当者割り当てなどの更新操作は行えません。',
        explanationEn:
          'Microsoft Sentinel Reader grants read-only visibility and does not permit updating incident status, severity, or assignment.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Sentinel Responder',
        textEn: 'Microsoft Sentinel Responder',
        isCorrect: true,
        explanationJa:
          'Microsoft Sentinel Responder は、データ・インシデント・ブックマーク・ワークブックの閲覧に加えて、インシデントの割り当て・ステータス更新・コメント追加・タスク管理を実行できますが、分析ルールやデータ コネクター、自動化ルールの作成・変更権限は持たないため最小権限に適合します。',
        explanationEn:
          'Microsoft Sentinel Responder allows analysts to read data and manage incidents (assign, update status/severity, add comments, dismiss) without permissions to create or modify analytics rules, connectors, or playbooks.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Sentinel Contributor',
        textEn: 'Microsoft Sentinel Contributor',
        isCorrect: false,
        explanationJa:
          'Contributor は分析ルール・ハンティング クエリ・自動化ルール・コネクターの作成や編集が可能になるため、トリアージ専用アナリストには過剰な権限です。',
        explanationEn:
          'Microsoft Sentinel Contributor allows creating and editing analytics rules, connectors, and automation rules, exceeding least privilege for triage analysts.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Sentinel Owner',
        textEn: 'Microsoft Sentinel Owner',
        isCorrect: false,
        explanationJa:
          'Microsoft Sentinel 固有の組み込みロールとしては Owner は存在せず、Azure の Owner や Log Analytics Contributor を指すとしても権限が過大です。',
        explanationEn:
          'There is no Sentinel-specific Owner role, and Azure Owner grants full resource and RBAC control, far exceeding least privilege.',
      },
    ],
    overallExplanationJa:
      'Microsoft Sentinel の RBAC では、職務に応じた 3 つの主要ロール（Reader / Responder / Contributor）および Playbook 実行管理用の Logic App 関連ロールを使い分けます。なお、ワークスペース上のデータ検索のために必要に応じて Log Analytics Reader との組み合わせも考慮します。',
    overallExplanationEn:
      'Microsoft Sentinel separates duties across Reader (view only), Responder (incident triage & updates), and Contributor (rule/connector authoring). Responder is the standard least-privilege role for SOC analysts.',
    keyPointsJa: [
      'Reader＝閲覧のみ／Responder＝インシデント調査と更新／Contributor＝分析ルール・ワークブック等の作成編集',
      '自動化用の Playbook（Logic Apps）手動実行には Microsoft Sentinel Playbook Operator ロールも併用する',
    ],
    keyPointsEn: [
      'Reader = view only; Responder = triage & update incidents; Contributor = author rules and configure Sentinel',
      'Pair with Microsoft Sentinel Playbook Operator if analysts must manually trigger Logic Apps playbooks',
    ],
    referenceTopic: 'Microsoft Sentinel のロールとアクセス許可',
  },
  {
    id: 'sakitoo-q102',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'GCP コネクター接続における Workload Identity Federation とサービス アカウント構成',
    titleEn: 'Configuring GCP Connector with Workload Identity Federation in Defender for Cloud',
    scenarioJa:
      'マルチクラウド戦略の一環として、Google Cloud Platform（GCP）上のプロジェクトや Compute Engine、GKE クラスタのセキュリティ態勢および脆弱性を Microsoft Defender for Cloud で一元監視することになりました。静的な長寿命認証キーを使わない安全なフェデレーション構成が求められています。',
    scenarioEn:
      'You are onboarding Google Cloud Platform (GCP) projects into Microsoft Defender for Cloud to monitor multi-cloud CSPM and container/VM security without relying on static long-lived service account keys.',
    questionJa:
      'Defender for Cloud で GCP のワークロードを監視するために GCP コネクターを設定する際に必要な GCP リソースはどれですか？',
    questionEn:
      'Which GCP resources are required when configuring the GCP connector in Microsoft Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: 'GCP コンソールで利用する管理者アカウントのユーザー名とパスワード',
        textEn: 'Personal GCP administrator account credentials and passwords',
        isCorrect: false,
        explanationJa:
          '個人の管理者パスワードをマルチクラウド コネクターに登録する設計は存在せず、極めて不適切です。',
        explanationEn:
          'Multi-cloud connectors never use personal administrator passwords.',
      },
      {
        id: 'B',
        textJa: 'GCP Workload Identity 連携とカスタム ロール付きサービス アカウント',
        textEn: 'GCP Workload Identity Federation with a scoped service account',
        isCorrect: true,
        explanationJa:
          'Defender for Cloud の GCP コネクターでは、静的キーを発行する代わりに GCP の Workload Identity Federation を設定し、Microsoft Entra 側のアプリケーション ID がなりすまし可能な専用サービス アカウント（Security Command Center / Asset Inventory 等のカスタム権限付き）を作成します。',
        explanationEn:
          'The Defender for Cloud GCP connector uses GCP Workload Identity Federation alongside a dedicated GCP service account granted custom least-privilege roles (e.g., Cloud Asset Inventory, Security Command Center API access), avoiding static JSON key files.',
      },
      {
        id: 'C',
        textJa: 'Azure と GCP プロジェクト間を結ぶ専用のサイト間 VPN ゲートウェイ',
        textEn: 'Dedicated site-to-site VPN Gateway connecting GCP and Azure',
        isCorrect: false,
        explanationJa:
          'コントロール プレーンの態勢スキャンや API 連携に VPN ゲートウェイは不要です。',
        explanationEn:
          'Control-plane posture discovery operates over cloud APIs and does not require a site-to-site VPN gateway.',
      },
      {
        id: 'D',
        textJa: 'プロジェクト内の Cloud SQL データベースへの直接読み取り権限',
        textEn: 'Direct read/write permissions to GCP Cloud SQL databases',
        isCorrect: false,
        explanationJa:
          'コネクター認証基盤の要件ではなく、対象ワークロードの一種に過ぎません。',
        explanationEn:
          'Cloud SQL access is not the authentication foundation required to onboard the GCP connector.',
      },
    ],
    overallExplanationJa:
      'AWS コネクターでは CloudFormation と IAM OIDC/AssumeRole を使うのと同様に、GCP コネクターでは Workload Identity Federation プール／プロバイダーとカスタム ロール付与済みサービス アカウントを gcloud スクリプト（または Terraform）でプロビジョニングします。',
    overallExplanationEn:
      'Just as the AWS connector uses IAM role assumption via OIDC, the GCP connector authenticates keyless via GCP Workload Identity Federation linked to a scoped GCP service account.',
    keyPointsJa: [
      'GCP コネクター認証＝静的 JSON キーではなく「Workload Identity Federation + カスタムロール付きサービスアカウント」',
      'GCP 組織（Organization）レベルまたは単一プロジェクト単位での接続が可能',
    ],
    keyPointsEn: [
      'Keyless authentication via GCP Workload Identity Federation + custom-role service account',
      'Supports onboarding either at the GCP organization level or per single project',
    ],
    referenceTopic: 'GCP プロジェクトを Microsoft Defender for Cloud に接続する',
  },
  {
    id: 'sakitoo-q103',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Sentinel コンテンツ ハブ（Content Hub）のソリューション導入',
    titleEn: 'Deploying Packaged Solutions from Microsoft Sentinel Content Hub',
    scenarioJa:
      '新たに導入したクラウド SaaS やセキュリティ製品のログを Microsoft Sentinel に取り込み、即座に監視・可視化・対応を開始する必要があります。個別にコネクター・分析ルール・ワークブックを手作りするのではなく、メーカー推奨の構成をまとめて展開したいと考えています。',
    scenarioEn:
      'You need to onboard a new cloud platform or security appliance into Microsoft Sentinel and immediately deploy curated connectors, analytics rules, workbooks, and playbooks together.',
    questionJa:
      'Microsoft Sentinel の「コンテンツ ハブ（Content Hub）」で「ソリューション（Solution）」をインストールする目的はどれですか？',
    questionEn:
      'What is the purpose of installing a Solution in Microsoft Sentinel Content Hub?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Sentinel の価格レベルやデータ保持ライセンスを管理する',
        textEn: 'Manage Microsoft Sentinel pricing tiers and workspace billing limits',
        isCorrect: false,
        explanationJa:
          'ライセンスやコミットメント層の管理は Azure ポータルの設定／コスト管理から行い、Content Hub の役割ではありません。',
        explanationEn:
          'Commitment tiers and licensing are managed in Sentinel Settings and Cost Management, not Content Hub.',
      },
      {
        id: 'B',
        textJa: 'Log Analytics ワークスペースの追加ストレージ容量を新規プロビジョニングする',
        textEn: 'Provision additional dedicated storage disks for the Sentinel workspace',
        isCorrect: false,
        explanationJa:
          'Log Analytics ワークスペースのデータ容量拡張ではありません。',
        explanationEn:
          'Solutions do not provision storage capacity for the Log Analytics workspace.',
      },
      {
        id: 'C',
        textJa: 'データ ソース別のコネクター・分析ルール・ブック等を一括インストールする',
        textEn: 'Deploy bundled connectors, analytics rules, workbooks, and playbooks',
        isCorrect: true,
        explanationJa:
          'コンテンツ ハブのソリューションをインストールすると、対象製品・サービス（例：Microsoft Entra ID、Palo Alto、AWS 等）に関連するデータ コネクター、スケジュール分析ルール テンプレート、ハンティング クエリ、ブック、プレイブックがパッケージとして一括展開されます。',
        explanationEn:
          'Content Hub solutions bundle domain-specific data connectors, analytics rule templates, hunting queries, workbooks, parsers, and playbooks into a single deployable lifecycle-managed package.',
      },
      {
        id: 'D',
        textJa: 'SOC アナリストや運用管理者向けの Entra ID アカウントを一括作成する',
        textEn: 'Create and provision Entra ID accounts for Tier-1/Tier-2 SOC analysts',
        isCorrect: false,
        explanationJa:
          'ユーザーアカウント作成は Microsoft Entra ID の役割です。',
        explanationEn:
          'User creation is handled in Microsoft Entra ID, not Sentinel Content Hub.',
      },
    ],
    overallExplanationJa:
      '現在の Microsoft Sentinel では、個別のデータ コネクター画面から直接有効化する代わりに、コンテンツ ハブ（Content Hub）から該当のソリューションをインストールしてコンテンツを管理・更新（Update）する運用が標準となっています。',
    overallExplanationEn:
      'Content Hub centralizes discovery, single-click deployment, and version updates for out-of-the-box Sentinel integrations across first-party and third-party security technologies.',
    keyPointsJa: [
      'Content Hub Solution ＝ コネクター + 分析ルールテンプレート + ワークブック + ハンティング + プレイブックの一括パッケージ',
      'インストール後、分析ルールテンプレートから実際の有効ルール（Active Rule）を作成して利用開始する',
    ],
    keyPointsEn: [
      'Bundles connectors, analytics templates, workbooks, parsers, hunting queries, and playbooks',
      'Enables centralized lifecycle updates for Sentinel content',
    ],
    referenceTopic: 'Microsoft Sentinel コンテンツ ハブの概要',
  },
  {
    id: 'sakitoo-q104',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Cloud 推奨事項の正当な除外（Exemption）理由とガバナンス',
    titleEn: 'Valid Reasons for Exempting Recommendations in Defender for Cloud',
    scenarioJa:
      'Microsoft Defender for Cloud のセキュア スコア確認会議において、特定のサブスクリプション上のリソースに関する推奨事項について、サードパーティ製品による補完的防御が既に存在するため、またはビジネス上の制約からリスク受容が決裁されたため、スコア計算とアラート対象から外す運用を検討しています。',
    scenarioEn:
      'During a Defender for Cloud security posture review, your team needs to exclude a specific recommendation for certain resources where compensating controls exist or formal business risk acceptance has been approved.',
    questionJa:
      'Defender for Cloud のセキュリティ推奨事項を「除外（Exemption）」する正当な理由はどれですか？',
    questionEn:
      'Which is a valid reason to create an Exemption for a security recommendation in Microsoft Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: '推奨事項の修復手順が複雑で運用チームの作業負担が大きいため除外する',
        textEn: 'Because remediating the security finding is inconvenient for engineers',
        isCorrect: false,
        explanationJa:
          '作業の手間を理由に除外を行うと、正当な根拠のないままセキュリティ盲点が生じるため不適切です。',
        explanationEn:
          'Convenience is never an acceptable governance rationale for creating security exemptions.',
      },
      {
        id: 'B',
        textJa: '対象クラウド リソースが数か月以内に削除予定リストに入っているため',
        textEn: 'Because the cloud resource is tentatively scheduled for future deletion',
        isCorrect: false,
        explanationJa:
          '削除予定というだけでは保護・代替制御がない限りリスクが残存するため、通常は削除を完了するか期限付きのリスク受容手続が必要です。',
        explanationEn:
          'Pending deletion alone does not mitigate active exposure unless backed by formal time-bound risk acceptance or compensating controls.',
      },
      {
        id: 'C',
        textJa: '代替コントロールを実装済みか、そのリスクが組織で正式に許容されている',
        textEn: 'When compensating controls exist or the risk is formally accepted',
        isCorrect: true,
        explanationJa:
          'Defender for Cloud の除外（Exemption）には、サードパーティ製品等で要件を満たしている「Mitigated（軽減済み）」と、事業上の判断で正式にリスク受容する「Waiver（免除／リスク許容）」の 2 カテゴリがあり、有効期限と理由を明記して統制します。',
        explanationEn:
          'Defender for Cloud Exemptions support two legitimate governance categories: Mitigated (compensating third-party/custom control in place) and Waiver (formal risk acceptance), ideally with an expiration date and justification.',
      },
      {
        id: 'D',
        textJa: '経営層向け報告のためにセキュア スコアの見かけの数値を引き上げたい',
        textEn: 'To artificially inflate the subscription Secure Score for executive reports',
        isCorrect: false,
        explanationJa:
          '根拠なき除外によるスコア水増しは実際の攻撃耐性を損なうアンチパターンです。',
        explanationEn:
          'Exempting controls purely to inflate metrics hides real security gaps and violates governance best practices.',
      },
    ],
    overallExplanationJa:
      '除外を作成すると対象リソースがセキュア スコアの分母から除かれるため、誤用を防ぐ目的で必ず「Mitigated」または「Waiver」の選択、理由コメント、および期限日（Expiration date）を設定し、ガバナンス ルールで定期レビューすることが推奨されます。',
    overallExplanationEn:
      'Exemptions remove specified scopes from Secure Score calculation under Azure Policy Exemption metadata. Always document Mitigated vs. Waiver justification and set an expiration date for periodic review.',
    keyPointsJa: [
      '除外カテゴリは「Mitigated（代替コントロール実装済み）」と「Waiver（正式なリスク許容）」の 2 つ',
      '無期限の放置を防ぐため、有効期限（Expiration date）の設定がベストプラクティス',
    ],
    keyPointsEn: [
      'Two valid exemption categories: Mitigated (compensating control) and Waiver (accepted risk)',
      'Best practice: always document justification and configure an expiration date',
    ],
    referenceTopic: 'Defender for Cloud で推奨事項からリソースとサブスクリプションを除外する',
  },
  {
    id: 'sakitoo-q105',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Monitor Agent (AMA) ログ フォワーダーを用いた Syslog / CEF 収集アーキテクチャ',
    titleEn: 'Collecting Syslog and CEF Logs via Linux AMA Log Forwarder in Sentinel',
    scenarioJa:
      'オンプレミスのファイアウォールやネットワーク スイッチ、サードパーティ製 IDS/IPS アプライアンスから出力される Syslog および CEF（Common Event Format）形式のセキュリティ ログを、Microsoft Sentinel の Log Analytics ワークスペースへ安定的に収集する構成を設計しています。',
    scenarioEn:
      'You are designing an ingestion architecture to collect Syslog and Common Event Format (CEF) logs from on-premises firewalls and network appliances into a Microsoft Sentinel Log Analytics workspace.',
    questionJa:
      'Microsoft Sentinel の Syslog と CEF（Common Event Format）を収集する場合のアーキテクチャはどれですか？',
    questionEn:
      'What is the supported architecture for collecting Syslog and CEF logs from third-party appliances into Microsoft Sentinel?',
    options: [
      {
        id: 'A',
        textJa: '各ネットワーク機器へ AMA を直接導入して中継なしで収集する',
        textEn: 'Install AMA directly on network appliances without any relay',
        isCorrect: false,
        explanationJa:
          'アプライアンス側には Azure Monitor エージェント（AMA）をインストールできないため、中継となる Linux フォワーダーが必要です。',
        explanationEn:
          'Appliances cannot run AMA directly; an intermediate Linux log forwarder running a Syslog daemon + AMA is required.',
      },
      {
        id: 'B',
        textJa: 'Linux フォワーダー（AMA + rsyslog 等）経由で Sentinel に転送する',
        textEn: 'Route through a Linux AMA forwarder into Sentinel workspace',
        isCorrect: true,
        explanationJa:
          '外部アプライアンスやファイアウォールの Syslog / CEF メッセージは、rsyslog または syslog-ng を稼働させた専用 Linux ログ フォワーダーに送信し、同マシン上の Azure Monitor Agent（AMA）と DCR（データ収集ルール）を介して Syslog / CommonSecurityLog テーブルへ取り込みます。',
        explanationEn:
          'Third-party devices send Syslog/CEF traffic to a dedicated Linux forwarder running rsyslog or syslog-ng alongside the Azure Monitor Agent (AMA) and Data Collection Rules (DCR), which routes CEF events to CommonSecurityLog and Syslog to the Syslog table.',
      },
      {
        id: 'C',
        textJa: '外部機器からの Syslog / CEF 形式のログ取り込みには対応していない',
        textEn: 'Third-party Syslog and CEF logs are unsupported in Sentinel',
        isCorrect: false,
        explanationJa:
          'Sentinel は Syslog および CEF の双方を標準のデータ コネクターとしてサポートしています。',
        explanationEn:
          'Sentinel natively supports both Syslog and CEF connectors via AMA.',
      },
      {
        id: 'D',
        textJa: 'アプライアンスからクラウド側の公開 514 番ポートへ直接 UDP 送信する',
        textEn: 'Send raw UDP 514 Syslog traffic directly to Sentinel cloud IP',
        isCorrect: false,
        explanationJa:
          'Sentinel 側が生の UDP/TCP 514 番ポートの Syslog リスナーをクラウド上に直接公開しているわけではありません。',
        explanationEn:
          'Microsoft Sentinel does not expose a direct public UDP/TCP 514 Syslog listener.',
      },
    ],
    overallExplanationJa:
      'オンプレミスまたは他クラウドに Linux ログ フォワーダー（物理/VM + Azure Arc 対応、または Azure VM）を配置してログを受け取り、AMA 経由で暗号化（HTTPS/TLS 443）して Log Analytics ワークスペースへ送信するのが標準設計です。旧 MMA（OMS エージェント）は廃止されたため AMA + DCR を使用します。',
    overallExplanationEn:
      'Appliances forward Syslog/CEF over TCP/UDP to a Linux collector running rsyslog/syslog-ng, where AMA uses Data Collection Rules (DCR) to filter and upload securely over TLS 443 to Sentinel.',
    keyPointsJa: [
      '非 Azure アプライアンス ＝ 専用 Linux ログ フォワーダー（rsyslog/syslog-ng + AMA）で中継',
      'CEF は CommonSecurityLog テーブル、標準 Syslog は Syslog テーブルへ DCR により振り分けられる',
    ],
    keyPointsEn: [
      'Linux collector runs rsyslog/syslog-ng + Azure Monitor Agent (AMA) + DCR',
      'CEF logs ingest into CommonSecurityLog; standard Syslog ingests into Syslog table',
    ],
    referenceTopic: 'AMA による Microsoft Sentinel での Syslog と CEF の収集',
  },
  {
    id: 'sakitoo-q106',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'スケジュール分析ルールにおけるエンティティ マッピング（Entity Mapping）の役割',
    titleEn: 'Purpose of Entity Mapping in Sentinel Scheduled Analytics Rules',
    scenarioJa:
      'Microsoft Sentinel で KQL ベースのスケジュール実行分析ルールを新規作成しています。生成されるアラートとインシデントにおいて、IP アドレス、ユーザーアカウント、ホスト名などの重要属性が自動的に関連付けられ、SOC アナリストが調査グラフやインシデント相関を活用できるように設定したいと考えています。',
    scenarioEn:
      'You are authoring a custom scheduled analytics rule in Microsoft Sentinel and want alert fields like user accounts, IP addresses, and hostnames to link cleanly in the Investigation Graph and incident correlation.',
    questionJa:
      'Microsoft Sentinel の分析ルールで「スケジュール実行クエリ」ルールを作成する際に設定できる「エンティティ マッピング」の目的はどれですか？',
    questionEn:
      'What is the purpose of configuring Entity Mapping in a Microsoft Sentinel scheduled analytics rule?',
    options: [
      {
        id: 'A',
        textJa: 'スケジュール分析ルールの実行頻度と参照期間（ルックバック）を設定する',
        textEn: 'Configure rule query schedule frequency and lookback period',
        isCorrect: false,
        explanationJa:
          'クエリの実行頻度とルックバック期間は分析ルール設定の「Set rule logic」内にあるスケジュール項目で設定します。',
        explanationEn:
          'Query frequency and lookup period are configured in the Query scheduling section, not Entity Mapping.',
      },
      {
        id: 'B',
        textJa: 'インシデント発生時に起動する Logic Apps プレイブックを指定する',
        textEn: 'Attach Logic Apps playbooks for automated incident responses',
        isCorrect: false,
        explanationJa:
          '自動応答のトリガーは「Automated response」タブや自動化ルールで設定します。',
        explanationEn:
          'Automated responses and playbook triggers are configured via Automated response / Automation rules.',
      },
      {
        id: 'C',
        textJa: 'アラートの IP やユーザー等を Sentinel エンティティへ紐付け調査を強化する',
        textEn: 'Bind KQL columns to Sentinel entities for Investigation Graph',
        isCorrect: true,
        explanationJa:
          'エンティティ マッピングを設定すると、KQL クエリ結果の特定列（例：CallerIpAddress → IP エンティティ、UserPrincipalName → Account エンティティ）が Sentinel の共通エンティティ スキーマに紐付けられ、インシデントの相関グループ化・調査グラフ描画・UEBA/TI 照合・Playbook パラメーター引き渡しが可能になります。',
        explanationEn:
          'Entity Mapping binds columns from your KQL query results to Sentinel entity types (Account, Host, IP, URL, FileHash), powering the Investigation Graph, alert grouping, timeline, and automated playbook inputs.',
      },
      {
        id: 'D',
        textJa: '作成されるアラートやインシデントの基本的な重要度レベルを固定指定する',
        textEn: 'Assign fixed default severity levels for generated incidents',
        isCorrect: false,
        explanationJa:
          '重要度（High / Medium / Low / Informational）はルールの基本設定（General）や動的アラート詳細で設定します。',
        explanationEn:
          'Rule severity is set in the General settings or Alert details customization.',
      },
    ],
    overallExplanationJa:
      'エンティティ マッピング（1 ルールあたり最大 10 エンティティまでマッピング可能）を正しく定義しておかないと、異なる分析ルールが同一ユーザーや同一 IP に対して発報しても関連エンティティとして束ねられず、調査グラフも空白になってしまいます。',
    overallExplanationEn:
      'Without Entity Mapping (supporting up to 10 entity mappings per rule), Sentinel cannot correlate alerts sharing the same account, host, or IP across rules or visualize attack paths in the Investigation Graph.',
    keyPointsJa: [
      'KQL の出力列を Sentinel の Account / IP / Host / FileHash 等のエンティティ識別子にマッピングする',
      '調査グラフ描画、アラートのグループ化、Playbook への値引き渡しに不可欠',
    ],
    keyPointsEn: [
      'Maps KQL output columns to standardized Sentinel entities (Account, IP, Host, FileHash)',
      'Essential for Investigation Graph visualization, incident correlation, and SOAR automation',
    ],
    referenceTopic: 'Microsoft Sentinel でデータ フィールドをエンティティにマップする',
  },
  {
    id: 'sakitoo-q107',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for DevOps と GitHub 接続によるシフトレフト セキュリティ検査',
    titleEn: 'Integrating GitHub Repositories with Microsoft Defender for DevOps',
    scenarioJa:
      '開発チームは GitHub リポジトリでアプリケーション コードや Terraform / Bicep の IaC テンプレートを管理しています。クラウド環境へ本番デプロイされた後に問題を見つけるのではなく、プル リクエスト（PR）やプッシュの段階でシークレット漏洩や脆弱性を自動検出したいと考えています。',
    scenarioEn:
      'Your engineering teams host application code and Terraform/Bicep IaC templates in GitHub. You want to detect exposed secrets, IaC misconfigurations, and container/code vulnerabilities during pull requests before deployment.',
    questionJa:
      'Defender for Cloud の DevOps セキュリティ（Defender for DevOps）で GitHub リポジトリを接続する目的はどれですか？',
    questionEn:
      'What is the purpose of connecting GitHub repositories to Microsoft Defender for DevOps in Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: '本番環境で動作するアプリケーションの実行速度と CPU 性能を計測する',
        textEn: 'Profile application runtime latency and CPU throughput metrics',
        isCorrect: false,
        explanationJa:
          'パフォーマンス プロファイリングは APM（Application Insights 等）の領域です。',
        explanationEn:
          'Performance profiling is an Application Performance Monitoring (APM) task, not Defender for DevOps.',
      },
      {
        id: 'B',
        textJa: 'GitHub Enterprise のシート数やライセンス課金・請求を一元管理する',
        textEn: 'Manage GitHub Enterprise seat billing and subscription spend',
        isCorrect: false,
        explanationJa:
          'ライセンスや請求管理の機能ではありません。',
        explanationEn:
          'GitHub billing administration is unrelated to Defender for DevOps.',
      },
      {
        id: 'C',
        textJa: 'GitHub 組織のユーザー ID 作成と SAML SSO ログインを一元管理する',
        textEn: 'Centralize GitHub user provisioning and SAML SSO authentication',
        isCorrect: false,
        explanationJa:
          'GitHub ユーザーの認証・プロビジョニング一元化は Microsoft Entra ID の SAML SSO / SCIM の役割です。',
        explanationEn:
          'Centralized GitHub identity provisioning and SSO are handled by Microsoft Entra ID, not Defender for DevOps.',
      },
      {
        id: 'D',
        textJa: 'PR 時に IaC・コンテナ・シークレットの脆弱性を検査し早期検出する',
        textEn: 'Scan IaC, containers, code, and secrets in PRs to catch risks',
        isCorrect: true,
        explanationJa:
          'Defender for Cloud に GitHub コネクターを接続し（GitHub Advanced Security 連携や Microsoft Security DevOps Action を組み合わせて）運用することで、IaC の設定誤り・シークレット露出・依存関係やコンテナの脆弱性を PR 段階で検出し、DevOps セキュリティ画面に集約可視化できます。',
        explanationEn:
          'Connecting GitHub to Defender for DevOps aggregates posture results from GitHub Advanced Security and MSDO scans, scanning IaC templates, secrets, dependencies, and containers directly on pull requests and commits.',
      },
    ],
    overallExplanationJa:
      'Defender for DevOps はマルチパイプライン対応（GitHub / Azure DevOps / GitLab）の可視化基盤であり、開発段階のセキュリティ所見をクラウド セキュリティ運用チーム（SecOps）と開発者（PR 注釈）の双方へ共有する「シフトレフト」の中核を担います。',
    overallExplanationEn:
      'Defender for DevOps bridges AppSec and Cloud SecOps by surfacing pull-request annotations to developers while consolidating multi-platform DevOps posture findings (GitHub, Azure DevOps, GitLab) inside Defender for Cloud.',
    keyPointsJa: [
      'GitHub / Azure DevOps / GitLab を Defender for Cloud に接続してコード・IaC・シークレット検査結果を一元化',
      'Pull Request 注釈（PR Annotations）によりデプロイ前に修正フィードバックを返せる',
    ],
    keyPointsEn: [
      'Unifies security findings from GitHub, Azure DevOps, and GitLab inside Defender for Cloud',
      'Delivers actionable Pull Request annotations before infrastructure is provisioned',
    ],
    referenceTopic: 'Defender for Cloud の DevOps セキュリティ（GitHub 接続）',
  },
  {
    id: 'sakitoo-q108',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '応用 (Hard)',
    titleJa: 'Windows Event Forwarding (WEF) を用いたエージェント非対応環境からのログ収集',
    titleEn: 'Using Windows Event Forwarding (WEF) with AMA for Legacy Windows Environments',
    scenarioJa:
      '社内ネットワークの一部に、コンプライアンスや互換性の制約から直接 Azure Monitor Agent（AMA）や Azure Arc エージェントをインストールできないレガシー Windows サーバー群が存在します。これらのサーバーの Windows セキュリティ イベントログも Microsoft Sentinel に取り込む必要があります。',
    scenarioEn:
      'Part of your estate consists of legacy or restricted Windows servers where installing the Azure Monitor Agent (AMA) directly on each host is not permitted, yet their Windows Security Event logs must be ingested into Microsoft Sentinel.',
    questionJa:
      'Microsoft Sentinel で「Windows Event Forwarding（WEF）」を使用する適切なシナリオはどれですか？',
    questionEn:
      'In which scenario is using Windows Event Forwarding (WEF) appropriate for Microsoft Sentinel ingestion?',
    options: [
      {
        id: 'A',
        textJa: 'Linux サーバーから出力される各種 Syslog メッセージを収集する場合',
        textEn: 'Collecting standard Syslog messages from Linux hosts and appliances',
        isCorrect: false,
        explanationJa:
          'WEF は Windows OS 標準のイベント転送プロトコル（WS-Management ベース）であり、Linux の Syslog 収集には使用しません。',
        explanationEn:
          'WEF is a Windows-native event forwarding mechanism and is not used for Linux Syslog.',
      },
      {
        id: 'B',
        textJa: 'Azure 管理プレーンの Activity Log をワークスペースに収集する場合',
        textEn: 'Collecting Azure subscription Activity Logs from control plane',
        isCorrect: false,
        explanationJa:
          'Azure Activity Log はコントロール プレーン イベントであり、Azure Activity コネクター経由で直接取り込みます。',
        explanationEn:
          'Azure Activity Logs are ingested natively through the Azure Activity Sentinel data connector.',
      },
      {
        id: 'C',
        textJa: 'Azure PaaS リソースのプラットフォーム診断ログを収集する場合',
        textEn: 'Monitoring cloud-native Azure PaaS diagnostic telemetry logs',
        isCorrect: false,
        explanationJa:
          'Azure PaaS リソースは診断設定（Diagnostic Settings）を用いて Log Analytics に直接送信します。',
        explanationEn:
          'Azure-native PaaS resources send telemetry via Azure Monitor Diagnostic Settings.',
      },
      {
        id: 'D',
        textJa: 'AMA を直接導入できない Windows サーバーのログを中継収集する場合',
        textEn: 'Collecting logs via a collector from legacy Windows hosts without AMA',
        isCorrect: true,
        explanationJa:
          'Windows Event Forwarding（WEF）を利用すると、個々のホストにサードパーティ製や追加エージェントを入れることなく、OS 標準機能だけで Windows イベントを「WEF コレクター サーバー（Forwarded Events チャネル）」へ集約でき、そのコレクター サーバーにインストールした AMA + DCR によって Sentinel（WindowsForwardedEvents テーブル）へ一括転送できます。',
        explanationEn:
          'WEF leverages native Windows functionality to forward events from restricted/legacy servers to a central Windows Event Collector (WEC). Installing AMA + Azure Arc + DCR on that collector forwards all aggregated logs into Sentinel (WindowsForwardedEvents table).',
      },
    ],
    overallExplanationJa:
      'WEF + WEF コレクター（Windows Event Collector）構成は、多数のエンドポイント／レガシーサーバーへのエージェント展開が困難な場合に有効です。AMA の「Windows Forwarded Events」データ コネクターを使用すると、収集ログは SecurityEvent ではなく専用の `WindowsForwardedEvents` テーブル等に格納されます。',
    overallExplanationEn:
      'Pairing Windows Event Forwarding with an AMA-enabled Windows Event Collector avoids deploying agents on every restricted host while streaming logs into Sentinel via the Windows Forwarded Events connector.',
    keyPointsJa: [
      'WEF は各サーバーに追加エージェント不要（OS 標準の WinRM / WS-Man でコレクターへ転送）',
      'コレクター サーバーに AMA（およびオンプレミスなら Azure Arc）を入れ、Windows Forwarded Events コネクターで収集',
    ],
    keyPointsEn: [
      'WEF uses built-in Windows event subscription without host agents',
      'Only the central Windows Event Collector host requires AMA (and Azure Arc if on-prem)',
    ],
    referenceTopic: 'Microsoft Sentinel 用に Windows 転送イベントを設定する',
  },
  {
    id: 'sakitoo-q109',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Cloud 規制コンプライアンス（Regulatory Compliance）ダッシュボードの活用',
    titleEn: 'Inspecting Standards Posture in Defender for Cloud Regulatory Compliance Dashboard',
    scenarioJa:
      '監査部門から、現在の Azure・AWS・GCP 環境が NIST SP 800-53、ISO 27001、PCI DSS などの国際的なセキュリティ規格・業界標準に対してどの程度準拠しているか、また不適合となっている具体的な技術コントロールを特定して報告書を提出するよう求められています。',
    scenarioEn:
      'Internal audit requests a compliance report showing how your Azure, AWS, and GCP environments align with NIST SP 800-53, ISO 27001, and PCI DSS, including specific non-compliant controls.',
    questionJa:
      'Defender for Cloud の「規制コンプライアンス（Regulatory Compliance）」ダッシュボードで確認できるのはどれですか？',
    questionEn:
      'What information can be inspected on the Regulatory Compliance dashboard in Microsoft Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: '各ユーザーのサインイン履歴やファイルの詳細な閲覧アクセス ログ',
        textEn: 'Detailed per-user sign-in activity and file access audit trails',
        isCorrect: false,
        explanationJa:
          'ユーザーのサインインや監査ログ確認は Microsoft Entra ID や Microsoft Purview Audit / Sentinel の役割です。',
        explanationEn:
          'Sign-in and user access logs are inspected in Entra ID, Purview Audit, or Sentinel.',
      },
      {
        id: 'B',
        textJa: 'Azure リージョンおよびクラウド サービスの稼働率と障害ステータス',
        textEn: 'Azure regional uptime metrics and service health advisories',
        isCorrect: false,
        explanationJa:
          '稼働状況確認は Azure Service Health の役割です。',
        explanationEn:
          'Service availability is tracked in Azure Service Health.',
      },
      {
        id: 'C',
        textJa: 'サブスクリプションごとの月次 Azure 利用料金とコスト予測レポート',
        textEn: 'Monthly Azure billing invoices and resource cost forecasts',
        isCorrect: false,
        explanationJa:
          '課金管理は Azure Cost Management + Billing で確認します。',
        explanationEn:
          'Billing information is managed in Azure Cost Management.',
      },
      {
        id: 'D',
        textJa: 'NIST・ISO 27001・PCI DSS 等の規制フレームワークに対する準拠状況',
        textEn: 'Compliance posture against NIST, ISO 27001, and PCI DSS standards',
        isCorrect: true,
        explanationJa:
          '規制コンプライアンス ダッシュボード（Defender CSPM / 有料プラン）では、MCSB（Microsoft Cloud Security Benchmark）に加えて PCI DSS、ISO 27001、NIST SP 800-53、SOC 2、CIS などの各規制標準に対する合格率と未準拠項目（該当推奨事項・影響リソース）を一覧表示し、PDF/CSV レポート出力も行えます。',
        explanationEn:
          'The Regulatory Compliance dashboard maps Azure Policy and Defender CSPM assessments directly to frameworks (NIST SP 800-53, ISO 27001, PCI DSS, SOC 2, CIS), displaying pass percentages, failing controls, affected resources, and exportable audit reports.',
      },
    ],
    overallExplanationJa:
      '規制コンプライアンス ダッシュボードを活用すると、技術的なセキュリティ推奨事項が法令・業界標準のどの条項に対応しているかを即座に把握でき、カスタム イニシアチブの追加や監査人向けレポートのエクスポートにも対応しています。',
    overallExplanationEn:
      'Regulatory Compliance translates technical cloud posture findings into auditor-ready control mappings across multi-cloud environments, supporting both built-in standards and custom initiatives.',
    keyPointsJa: [
      'NIST SP 800-53 / ISO 27001 / PCI DSS / MCSB 等への準拠率と失敗コントロールを一元可視化',
      'Defender CSPM（または該当プラン）の有効化により追加の標準フレームワーク割り当てとレポート出力が可能',
    ],
    keyPointsEn: [
      'Tracks pass/fail control status across NIST, ISO 27001, PCI DSS, MCSB, and custom standards',
      'Supports exporting PDF/CSV audit summaries for compliance stakeholders',
    ],
    referenceTopic: 'Defender for Cloud での規制コンプライアンスの向上',
  },
  {
    id: 'sakitoo-q110',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Sentinel プレイブックの基盤サービス（Azure Logic Apps）',
    titleEn: 'Azure Service Underlying Microsoft Sentinel Playbooks (Azure Logic Apps)',
    scenarioJa:
      'Microsoft Sentinel で重大度の高いインシデントが発生した際、Microsoft Teams への通知、エンティティの IP アドレスに対する脅威インテリジェンス照会、Microsoft Entra ID でのユーザー侵害確認、およびファイアウォールでの自動ブロックをノーコード／ローコードの自動ワークフローで実行したいと考えています。',
    scenarioEn:
      'When high-severity Sentinel incidents trigger, you want to automate Teams notifications, external threat intel lookups, Entra ID user session revocation, and firewall blocking using low-code orchestration workflows.',
    questionJa:
      'Microsoft Sentinel のプレイブックでセキュリティ インシデント対応を自動化する際に使用する Azure サービスはどれですか？',
    questionEn:
      'Which Azure service powers Microsoft Sentinel Playbooks for SOAR incident automation?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Automation Runbook',
        textEn: 'Azure Automation Runbook',
        isCorrect: false,
        explanationJa:
          'PowerShell や Python スクリプトの運用自動化には有用ですが、Sentinel Playbook のネイティブ基盤ではありません（Logic Apps から呼び出すことは可能です）。',
        explanationEn:
          'Azure Automation Runbooks are not the native engine behind Sentinel Playbooks (though Logic Apps can invoke them).',
      },
      {
        id: 'B',
        textJa: 'Azure Functions',
        textEn: 'Azure Functions',
        isCorrect: false,
        explanationJa:
          'カスタム コード実行用の Azure Functions を Logic Apps から呼び出すことはありますが、Playbook 自体の構成基盤は Logic Apps です。',
        explanationEn:
          'While Logic Apps can call Azure Functions for custom logic, Sentinel Playbooks themselves are built on Azure Logic Apps.',
      },
      {
        id: 'C',
        textJa: 'Azure Logic Apps',
        textEn: 'Azure Logic Apps',
        isCorrect: true,
        explanationJa:
          'Microsoft Sentinel のプレイブックはすべて Azure Logic Apps 上に構築されます。インシデント トリガーまたはアラート トリガー、エンティティ トリガーを受け取り、豊富な組み込みコネクターを用いて多段階の自動応答フローを視覚的に作成できます。',
        explanationEn:
          'Microsoft Sentinel Playbooks are built on Azure Logic Apps. They trigger on Sentinel incidents, alerts, or entities and orchestrate automated enrichment, notification, and remediation across Microsoft and third-party connectors.',
      },
      {
        id: 'D',
        textJa: 'Azure Event Grid',
        textEn: 'Azure Event Grid',
        isCorrect: false,
        explanationJa:
          'Event Grid はイベント ルーティング サービスであり、Sentinel の SOAR プレイブック実行基盤ではありません。',
        explanationEn:
          'Event Grid is an event routing service, not the Sentinel Playbook workflow engine.',
      },
    ],
    overallExplanationJa:
      'Azure Logic Apps ベースのプレイブックは「Consumption（従量課金）」と「Standard」の両プランに対応しており、マネージド ID を付与して Sentinel との認証・権限付与を最小権限で運用するのが推奨されます。',
    overallExplanationEn:
      'Sentinel Playbooks leverage Azure Logic Apps (Consumption or Standard). Using Managed Identities for authentication between Logic Apps, Sentinel, Entra ID, and Defender is the recommended security practice.',
    keyPointsJa: [
      'Sentinel Playbook ＝ Azure Logic Apps で構築される SOAR ワークフロー',
      'トリガーには「Incident トリガー」「Alert トリガー」「Entity トリガー」があり、自動化ルールから呼び出せる',
    ],
    keyPointsEn: [
      'Sentinel Playbooks = Azure Logic Apps workflows for SOAR',
      'Supports Incident, Alert, and Entity triggers invoked manually or via Automation Rules',
    ],
    referenceTopic: 'Microsoft Sentinel のプレイブックを使用した脅威への対応の自動化',
  },
  {
    id: 'sakitoo-q111',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Sentinel 調査グラフ（Investigation Graph）によるエンティティ相関分析',
    titleEn: 'Exploring Attack Scope with the Microsoft Sentinel Investigation Graph',
    scenarioJa:
      'SOC アナリストが、あるフィッシング関連のインシデントから派生して、攻撃者が侵害アカウントを用いて別ホストへ横展開（ラテラル ムーブメント）したり不審な外部 IP と通信したりしていないかを、直感的かつ時系列に沿って把握したいと考えています。',
    scenarioEn:
      'A SOC analyst investigating a phishing incident needs to visually trace whether a compromised user account moved laterally to other hosts or communicated with suspicious external IPs over time.',
    questionJa:
      'Microsoft Sentinel のインシデント調査で「調査グラフ（Investigation Graph）」を使用する目的はどれですか？',
    questionEn:
      'What is the purpose of using the Investigation Graph during incident investigation in Microsoft Sentinel?',
    options: [
      {
        id: 'A',
        textJa: 'ユーザー・IP・ホスト等の関連性と時系列を視覚化し攻撃範囲を把握する',
        textEn: 'Visualize linked entities and timelines to trace attack scope',
        isCorrect: true,
        explanationJa:
          '調査グラフ（Investigation Graph）は、インシデントに紐づくユーザー・ホスト・IP・プロセスなどのエンティティ同士のつながりをノード＆リンクで視覚化し、各ノードをクリックして関連アラートや探索クエリ（Exploration Queries）、タイムラインを次々と展開できるため、攻撃範囲と横展開を素早く特定できます。',
        explanationEn:
          'The Investigation Graph visualizes connected entities (accounts, hosts, IPs) around an incident, allowing analysts to expand nodes with exploration queries, inspect timelines, and trace lateral movement across the attack chain.',
      },
      {
        id: 'B',
        textJa: 'Logic Apps プレイブック内の各ステップの実行履歴とエラーを検証する',
        textEn: 'Debug step-by-step execution runs in Azure Logic Apps workflows',
        isCorrect: false,
        explanationJa:
          'プレイブックの実行履歴やフロー確認は Azure Logic Apps の「実行履歴（Runs history）」やデザイナー画面で行います。',
        explanationEn:
          'Playbook execution history is viewed in the Azure Logic Apps runs history.',
      },
      {
        id: 'C',
        textJa: '定期レポート用の汎用 KQL 集計グラフや折れ線ダッシュボードを作成する',
        textEn: 'Build general custom charts and dashboards for ad-hoc KQL logs',
        isCorrect: false,
        explanationJa:
          '一般的な KQL 集計結果のチャート可視化には Workbooks や Logs の `render` 演算子を使用します。',
        explanationEn:
          'General KQL visualizations are built using Sentinel Workbooks or the KQL render operator.',
      },
      {
        id: 'D',
        textJa: 'Log Analytics ワークスペースの月次取り込み量と課金コストを分析する',
        textEn: 'Analyze Log Analytics workspace ingestion volume and billing',
        isCorrect: false,
        explanationJa:
          '取り込みコスト分析は Sentinel の「使用状況と推定コスト」ワークブックや Azure Cost Management で行います。',
        explanationEn:
          'Ingestion cost monitoring is handled via usage workbooks and Azure Cost Management.',
      },
    ],
    overallExplanationJa:
      '調査グラフを有効に機能させるには、前述のとおり分析ルール側でエンティティ マッピングを適切に設定しておくことが重要です。Defender 統合環境では、Microsoft Defender ポータル側のインシデント グラフへ統一的に統合されています。',
    overallExplanationEn:
      'The Investigation Graph relies on properly mapped entities in analytics rules, enabling analysts to pivot from a single alert to related accounts, hosts, and historical events.',
    keyPointsJa: [
      '調査グラフ ＝ エンティティ間の関連性を視覚化し、Exploration Queries と Timeline で攻撃範囲を追跡する機能',
      '前提として分析ルールの Entity Mapping が正しく構成されている必要がある',
    ],
    keyPointsEn: [
      'Visualizes entity relationships, exploration queries, and incident timelines',
      'Requires Entity Mapping in analytics rules to link accounts, IPs, and hosts',
    ],
    referenceTopic: 'Microsoft Sentinel でグラフを使用してインシデントを詳細に調査する',
  },
  {
    id: 'sakitoo-q112',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Servers における MDVM 脆弱性評価の推奨構成方式',
    titleEn: 'Recommended Vulnerability Assessment Configuration via MDVM in Defender for Servers',
    scenarioJa:
      'Defender for Cloud を用いて、Azure VM および Azure Arc 接続サーバーの OS やインストール済みソフトウェアに存在する CVE 脆弱性を継続的に評価したいと考えています。旧来のサードパーティ スキャナー（Qualys 等）ではなく、Microsoft 推奨の最新構成を採用する方針です。',
    scenarioEn:
      'You need to enable continuous vulnerability assessment for Azure VMs and Arc-enabled servers in Defender for Cloud using Microsoft\'s recommended modern engine rather than legacy third-party extensions.',
    questionJa:
      'Defender for Cloud で Azure VM に対する Microsoft Defender 脆弱性管理の「脆弱性評価」を有効化するために推奨される方式はどれですか？',
    questionEn:
      'Which approach is recommended to enable vulnerability assessment for VMs using Microsoft Defender Vulnerability Management in Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: '対象 VM へ旧来の Qualys 脆弱性スキャン エージェントを手動導入する',
        textEn: 'Manually install the legacy Qualys vulnerability agent on VMs',
        isCorrect: false,
        explanationJa:
          'Qualys ベースの組み込み統合（Microsoft Cloud Security の旧来機能）はレガシー扱いとなり廃止・非推奨化が進んでおり、MDVM への移行が推奨されています。',
        explanationEn:
          'The legacy built-in Qualys vulnerability integration is deprecated/legacy; Microsoft recommends migrating to MDVM.',
      },
      {
        id: 'B',
        textJa: '定期スケジュールで各 VM 内部から脆弱性診断スクリプトを手動実行する',
        textEn: 'Run custom manual vulnerability scan scripts inside guest VMs',
        isCorrect: false,
        explanationJa:
          '手動スクリプト実行はスケーラブルでなく、Defender for Cloud の継続的態勢管理と統合されません。',
        explanationEn:
          'Manual scripts do not scale or integrate with continuous Defender for Cloud posture tracking.',
      },
      {
        id: 'C',
        textJa: '旧来の Azure Security Center のレガシー拡張設定をそのまま流用する',
        textEn: 'Rely on deprecated Azure Security Center vulnerability policies',
        isCorrect: false,
        explanationJa:
          'Azure Security Center は Microsoft Defender for Cloud へ刷新されており、旧ポリシーや旧エージェント構成は非推奨です。',
        explanationEn:
          'Legacy Azure Security Center policies are superseded by modern Defender for Servers MDVM settings.',
      },
      {
        id: 'D',
        textJa: 'Defender for Servers で MDVM エージェントレスまたは統合評価を有効化する',
        textEn: 'Enable MDVM agentless or MDE-integrated scanning in Defender',
        isCorrect: true,
        explanationJa:
          'Microsoft Defender for Servers（Plan 1 / Plan 2、および Defender CSPM）では、Microsoft Defender Vulnerability Management（MDVM）がネイティブ統合されており、MDE エージェント統合スキャンまたはエージェントレス ディスク スナップショット スキャン（Plan 2 / Defender CSPM）を選択して一元的に脆弱性を評価できます。',
        explanationEn:
          'Microsoft recommends enabling Microsoft Defender Vulnerability Management (MDVM) directly inside Defender for Servers settings—using MDE integration (Plan 1 & 2) and/or agentless disk snapshot scanning (Plan 2 & Defender CSPM).',
      },
    ],
    overallExplanationJa:
      '環境設定（Environment settings）→ Defender for Servers → 設定（Settings）→「Vulnerability assessment for machines」から構成を編集し、Microsoft Defender Vulnerability Management を選択して展開します。',
    overallExplanationEn:
      'Configured under Environment settings > Defender for Servers > Settings > Vulnerability assessment for machines, MDVM replaces legacy Qualys extensions with native MDE and agentless snapshot scanning.',
    keyPointsJa: [
      '推奨エンジンは Qualys ではなく Microsoft Defender Vulnerability Management（MDVM）',
      'エージェントレス（Plan 2 / DCSPM）と MDE エージェント統合の併用・選択が可能',
    ],
    keyPointsEn: [
      'Use Microsoft Defender Vulnerability Management (MDVM) instead of legacy Qualys',
      'Supports MDE-integrated scanning and agentless disk snapshot scanning (P2 / DCSPM)',
    ],
    referenceTopic: 'マシン用の Microsoft Defender 脆弱性管理を有効にする',
  },
  {
    id: 'sakitoo-q113',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Sentinel UEBA による行動ベースライン学習と異常検知',
    titleEn: 'Behavioral Anomaly Detection with Microsoft Sentinel UEBA',
    scenarioJa:
      '正規の認証情報を用いてログインしているにもかかわらず、深夜に機密共有フォルダから大量のファイルをダウンロードしたり、通常アクセスしないクラウド リソースや地理的ロケーションから操作を行ったりする内部脅威・乗っ取り済みアカウントを検知したいと考えています。',
    scenarioEn:
      'You want to detect compromised accounts and insider threats exhibiting subtle anomalies—such as unusual off-hours mass downloads or atypical resource access using valid credentials.',
    questionJa:
      'Microsoft Sentinel で「UEBA（User and Entity Behavior Analytics）」を有効化する目的はどれですか？',
    questionEn:
      'What is the purpose of enabling UEBA (User and Entity Behavior Analytics) in Microsoft Sentinel?',
    options: [
      {
        id: 'A',
        textJa: '従業員ユーザーのパスワード複雑性ポリシーと定期リセットを強制管理する',
        textEn: 'Manage user password resets, complexity, and lockout rules',
        isCorrect: false,
        explanationJa:
          'パスワード管理は Microsoft Entra ID の役割であり、UEBA の機能ではありません。',
        explanationEn:
          'Password management belongs to Microsoft Entra ID, not Sentinel UEBA.',
      },
      {
        id: 'B',
        textJa: 'エンティティの正常行動を学習し逸脱した異常活動を Insight 化する',
        textEn: 'Learn entity baselines and surface anomalous behavior Insights',
        isCorrect: true,
        explanationJa:
          'Sentinel UEBA は Entra ID・サインイン・監査ログ・SecurityEvent 等を取り込んでユーザーやホストの通常の行動プロファイルを機械学習し、逸脱行動（通常外の国・時刻・ピアグループ比較による異常等）を `BehaviorAnalytics` テーブルおよび `Anomalies` として記録し、エンティティ ページやインシデント調査の Insight を強化します。',
        explanationEn:
          'Sentinel UEBA applies machine learning across Entra ID, audit, and security logs to establish behavioral baselines and peer-group norms, writing anomalies to BehaviorAnalytics and surfacing contextual Insights on entity pages and incidents.',
      },
      {
        id: 'C',
        textJa: '組織内の Microsoft 365 セキュリティ ライセンス割り当て数を管理する',
        textEn: 'Track and assign Microsoft 365 security license entitlements',
        isCorrect: false,
        explanationJa:
          'ライセンス割り当て管理機能ではありません。',
        explanationEn:
          'UEBA does not manage software license assignments.',
      },
      {
        id: 'D',
        textJa: 'クラウド上の仮想マシンやアプリの CPU・メモリ性能をリアルタイム監視する',
        textEn: 'Monitor VM CPU, memory, and disk performance telemetry',
        isCorrect: false,
        explanationJa:
          'サーバーやアプリの性能監視は Azure Monitor VM Insights / Application Insights の役割です。',
        explanationEn:
          'Infrastructure performance monitoring is handled by Azure Monitor Insights, not UEBA.',
      },
    ],
    overallExplanationJa:
      'UEBA を有効化すると、Sentinel のエンティティ ページ（User / Host / IP）に行動分析インサイトが表示されるだけでなく、KQL 分析ルールから `BehaviorAnalytics` テーブルを参照して高リスク異常スコア（InvestigationPriority 等）に基づく検知を行うことも可能です。',
    overallExplanationEn:
      'Once UEBA is enabled and data sources (like Entra ID and Audit Logs) are selected, analysts gain Investigation Priority scores and peer-group anomaly Insights across incident triage and hunting.',
    keyPointsJa: [
      'UEBA ＝ 正常時の行動・ピアグループを学習し、逸脱（Anomaly）とリスク スコアを算出する仕組み',
      '生成データは BehaviorAnalytics / Anomalies テーブル等に格納され、インシデントやエンティティ調査に統合される',
    ],
    keyPointsEn: [
      'Builds dynamic baselines and peer-group comparisons to score anomalous behavior',
      'Enriches entity pages, Investigation Graph Insights, and KQL rules via BehaviorAnalytics',
    ],
    referenceTopic: 'Microsoft Sentinel でのユーザーとエンティティの動作分析 (UEBA) の有効化',
  },
  {
    id: 'sakitoo-q114',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: '適応型ネットワーク強化（Adaptive Network Hardening）による NSG 最小権限化',
    titleEn: 'Tightening NSG Rules with Defender for Cloud Adaptive Network Hardening',
    scenarioJa:
      'Azure VM に割り当てられたネットワーク セキュリティ グループ（NSG）において、過去に設定されたまま `Any` や広範囲な IP / ポート許可ルールが放置されており、攻撃対象領域（アタック サーフェス）が広がっています。業務通信を遮断することなく、実際のトラフィック実績に基づいて NSG を厳格化したいと考えています。',
    scenarioEn:
      'Several Azure VMs have overly permissive NSG inbound rules left over from initial deployment. You want data-driven recommendations to tighten NSG rules without breaking legitimate production traffic.',
    questionJa:
      'Defender for Cloud の「適応型ネットワーク強化（Adaptive Network Hardening）」が提供する推奨事項はどれですか？',
    questionEn:
      'What recommendations does Adaptive Network Hardening provide in Microsoft Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: '実トラフィックを ML 分析し現行より厳格な NSG ルールを推奨する',
        textEn: 'Use ML on real traffic to recommend stricter NSG rules',
        isCorrect: true,
        explanationJa:
          '適応型ネットワーク強化（Defender for Servers Plan 2 で利用可能）は、過去 30 日間の実際のネットワーク トラフィックと脅威インテリジェンス・既知の攻撃パターンを機械学習で分析し、現在許可されているものの実際には不要なポートや IP 範囲を絞り込んだ NSG 強化ルールを推奨（ワンクリック適用も可）します。',
        explanationEn:
          'Adaptive Network Hardening (included in Defender for Servers Plan 2) applies ML to ~30 days of actual traffic patterns and threat intel to recommend stricter NSG rules that restrict unused ports and overly broad source IP ranges.',
      },
      {
        id: 'B',
        textJa: 'オンプレミス接続用 ExpressRoute 回線の BGP ルーティングを最適化する',
        textEn: 'Optimize ExpressRoute circuit BGP routing and peering',
        isCorrect: false,
        explanationJa:
          'ExpressRoute の回線ルーティング最適化機能ではありません。',
        explanationEn:
          'Adaptive Network Hardening targets VM NSG rules rather than ExpressRoute circuit optimization.',
      },
      {
        id: 'C',
        textJa: '仮想マシンやサブネット間のネットワーク帯域幅と通信遅延を改善する',
        textEn: 'Improve network bandwidth throughput and packet latency',
        isCorrect: false,
        explanationJa:
          '帯域幅やスループットのチューニング機能ではありません。',
        explanationEn:
          'It hardens security exposure on NSGs rather than tuning bandwidth throughput.',
      },
      {
        id: 'D',
        textJa: 'リージョン間データ転送料金などの VNet エグレス課金コストを削減する',
        textEn: 'Reduce Virtual Network egress transfer billing charges',
        isCorrect: false,
        explanationJa:
          'ネットワーク課金のコスト削減提案機能ではありません。',
        explanationEn:
          'Cost optimization is outside the scope of Adaptive Network Hardening.',
      },
    ],
    overallExplanationJa:
      '同様に受信ポート（RDP/SSH）をオンデマンド限定化する機能として「Just-In-Time (JIT) VM アクセス」がありますが、「適応型ネットワーク強化」は実トラフィックの ML 分析に基づき既存 NSG 自体の許可範囲・送信元 IP を最適化（Harden）する点が特徴です。',
    overallExplanationEn:
      'While Just-In-Time (JIT) VM access gates management ports temporarily, Adaptive Network Hardening continuously learns from real VM traffic to recommend tighter permanent NSG rules.',
    keyPointsJa: [
      'Adaptive Network Hardening ＝ 実際のトラフィックを ML 分析し、過剰な NSG ルール（Any 許可等）を厳格化推奨',
      'Defender for Servers Plan 2 の高度なネットワーク防御機能の 1 つ（推奨画面から「Enforce」可能）',
    ],
    keyPointsEn: [
      'Uses ML over historical traffic (~30 days) to propose narrower, least-privilege NSG rules',
      'Available in Defender for Servers Plan 2 with direct enforcement from the recommendation',
    ],
    referenceTopic: '適応型ネットワーク強化を使用してネットワーク セキュリティ グループのルールをセキュリティで保護する',
  },
  {
    id: 'sakitoo-q115',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Sentinel Office 365 データ コネクターの収集対象ログ',
    titleEn: 'Activity Logs Collected by the Microsoft Sentinel Office 365 Data Connector',
    scenarioJa:
      'Microsoft 365 環境でのユーザーによるメールボックス操作、SharePoint や OneDrive 上のファイル共有・ダウンロード、Microsoft Teams でのチャネルやメンバー変更といった業務アクティビティを Microsoft Sentinel の `OfficeActivity` テーブルへ収集・相関分析したいと考えています。',
    scenarioEn:
      'You want to ingest Microsoft 365 user activity across Exchange Online, SharePoint Online, OneDrive, and Teams into the OfficeActivity table in Microsoft Sentinel for correlation and alerting.',
    questionJa:
      'Microsoft Sentinel のデータ コネクターで「Office 365」コネクターを有効化した場合に収集されるログはどれですか？',
    questionEn:
      'Which logs are collected when you enable the Office 365 data connector in Microsoft Sentinel?',
    options: [
      {
        id: 'A',
        textJa: 'OneDrive 上に保存されている全ファイルの暗号化ハッシュ値一覧',
        textEn: 'Cryptographic file hashes of all documents stored in OneDrive',
        isCorrect: false,
        explanationJa:
          '全ファイルのハッシュ一覧を常時抽出して取り込むコネクターではありません。',
        explanationEn:
          'The Office 365 connector ingests activity audit events rather than indexing file hashes for all stored files.',
      },
      {
        id: 'B',
        textJa: 'Exchange Online で送受信されたすべてのメール本文と添付ファイル',
        textEn: 'Full email message bodies and attachments from Exchange mailboxes',
        isCorrect: false,
        explanationJa:
          'プライバシーおよび監査設計上、メール本文そのものではなくメールボックスや管理者操作の監査アクティビティが収集されます。',
        explanationEn:
          'Audit logs record mailbox/sharing/admin operations and metadata, not full email message bodies.',
      },
      {
        id: 'C',
        textJa: 'Exchange・SharePoint・Teams 等の監査アクティビティ ログ',
        textEn: 'Exchange, SharePoint, Teams, and OneDrive user activity logs',
        isCorrect: true,
        explanationJa:
          'Sentinel の「Microsoft 365（旧 Office 365）」データ コネクターは、Office 365 Management Activity API を利用して Exchange・SharePoint・OneDrive・Teams の監査ログを無料で取り込み、`OfficeActivity` テーブルへ格納します。',
        explanationEn:
          'The Microsoft 365 (Office 365) data connector pulls Exchange Online, SharePoint Online, OneDrive, and Microsoft Teams audit logs via the Office 365 Management Activity API into the OfficeActivity table.',
      },
      {
        id: 'D',
        textJa: 'Microsoft 365 テナント全体の月次ライセンス割り当てと利用状況',
        textEn: 'Microsoft 365 tenant license utilization and seat counts',
        isCorrect: false,
        explanationJa:
          'ライセンス消費レポートは Microsoft 365 管理センターの領域です。',
        explanationEn:
          'License utilization reports belong to the Microsoft 365 admin center.',
      },
    ],
    overallExplanationJa:
      'なお、Microsoft 365（Office 365）コネクターによる `OfficeActivity` の取り込みは、Microsoft Sentinel の無料データ ソース（Free data sources）の 1 つに含まれており、Exchange / SharePoint / Teams を選択して有効化できます。',
    overallExplanationEn:
      'Ingestion via the Office 365 data connector (Exchange, SharePoint/OneDrive, Teams) into OfficeActivity is covered under Sentinel\'s free data ingestion benefits.',
    keyPointsJa: [
      'Office 365 コネクター ＝ Management Activity API 経由で Exchange / SharePoint / OneDrive / Teams のアクティビティを収集',
      'Log Analytics 内の「OfficeActivity」テーブルに格納（インジェスト課金対象外の無料データソース）',
    ],
    keyPointsEn: [
      'Collects Exchange, SharePoint/OneDrive, and Teams audit events into OfficeActivity',
      'Uses the Office 365 Management Activity API (included as a free Sentinel data source)',
    ],
    referenceTopic: 'Microsoft Sentinel 用 Microsoft 365 (Office 365) コネクター',
  },
  {
    id: 'sakitoo-q116',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Defender for DevOps の Code-to-Cloud マッピングによる根本原因特定',
    titleEn: 'Root-Cause Remediation with Code-to-Cloud Mapping in Defender for DevOps',
    scenarioJa:
      '本番環境のクラウド上に公開ストレージ アカウントや脆弱なネットワーク設定を持つリソースが発見されました。これらが IaC（Bicep / Terraform）パイプラインからデプロイされている環境では、クラウド側を手動修正しても次回の CI/CD デプロイで再び設定が上書き・再発してしまいます。',
    scenarioEn:
      'A misconfigured storage account was discovered in production. Because infrastructure is deployed via IaC pipelines from GitHub, manually patching Azure in the portal will simply be overwritten on the next CI/CD run.',
    questionJa:
      'Defender for Cloud の GitHub 接続（Defender for DevOps）でコードとクラウドの関連付け（Code-to-Cloud）が可能になる利点はどれですか？',
    questionEn:
      'What is the key benefit of Code-to-Cloud mapping when connecting GitHub to Defender for Cloud (Defender for DevOps)?',
    options: [
      {
        id: 'A',
        textJa: 'GitHub リポジトリへの開発者の書き込み権限やブランチ保護を制御できる',
        textEn: 'Enforce branch protection and developer access inside GitHub',
        isCorrect: false,
        explanationJa:
          'GitHub リポジトリへのアクセス権制御は GitHub 組織設定や Entra ID の役割であり、Code-to-Cloud マッピングの目的ではありません。',
        explanationEn:
          'Repository access control is managed via GitHub permissions and Entra ID, not Code-to-Cloud mapping.',
      },
      {
        id: 'B',
        textJa: 'デプロイ済みリソースから元の IaC コードまで追跡し根本原因を特定できる',
        textEn: 'Trace live cloud resources back to source IaC in GitHub to fix',
        isCorrect: true,
        explanationJa:
          'Code-to-Cloud マッピング（Cloud Security Explorer や攻撃パス分析、推奨事項と連携）により、稼働中のクラウド リソースと、それをプロビジョニングした GitHub 上の具体的なコンテナ イメージや IaC コード／リポジトリを紐付けて追跡し、ソース コード側で根本修正（および PR 自動作成等）を行えます。',
        explanationEn:
          'Code-to-Cloud mapping correlates live deployed cloud resources (such as VMs, containers, and IaC-provisioned infrastructure) back to their originating GitHub repositories, container build pipelines, and IaC files so teams can fix root causes in code.',
      },
      {
        id: 'C',
        textJa: 'GitHub Enterprise のシート課金や Actions 実行コストを自動削減できる',
        textEn: 'Reduce GitHub Enterprise licensing fees and Actions spend',
        isCorrect: false,
        explanationJa:
          'GitHub の利用料金削減機能ではありません。',
        explanationEn:
          'Code-to-Cloud is a security traceability capability, not a billing tool.',
      },
      {
        id: 'D',
        textJa: 'デプロイされる Azure クラウド リソースの演算パフォーマンスを向上できる',
        textEn: 'Boost runtime compute throughput of deployed Azure resources',
        isCorrect: false,
        explanationJa:
          'システム性能チューニング機能ではありません。',
        explanationEn:
          'It improves remediation accuracy and security posture rather than compute performance.',
      },
    ],
    overallExplanationJa:
      'ランタイム側のアラートや構成ミスだけを見て運用者がポータルを手修正すると IaC のドリフトや先祖返りが起きます。Code-to-Cloud コンテキストにより、SecOps は「どのリポジトリのどの行を直すべきか」を開発者へ正確にエスカレーションできます。',
    overallExplanationEn:
      'Patching cloud drift in the portal gets overwritten by CI/CD pipelines. Code-to-Cloud mapping bridges runtime posture findings in Defender CSPM directly to the source repository and file owner.',
    keyPointsJa: [
      'Code-to-Cloud ＝ 本番クラウド上の脆弱リソース／コンテナと GitHub 内の元 IaC／イメージ ビルド元を紐付け',
      'Cloud Security Explorer や攻撃パス分析でコードからクラウドまでのリスク連鎖を追跡し根本修正できる',
    ],
    keyPointsEn: [
      'Links live cloud misconfigurations and vulnerable containers back to source repos and IaC files',
      'Eliminates recurring misconfigurations caused by patching production without updating IaC',
    ],
    referenceTopic: 'Defender for Cloud の Code-to-Cloud コンテキスト',
  },
  {
    id: 'sakitoo-q117',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Sentinel の脅威ハンティング（Hunting）機能とブックマーク活用',
    titleEn: 'Proactive Threat Hunting Using Sentinel Hunting Blade and Bookmarks',
    scenarioJa:
      'SOC の脅威ハンターが、既存のアラートや分析ルールでは検知されていない潜在的な攻撃者の痕跡（MITRE ATT&CK の TTP に合致する不審な PowerShell 実行や異常通信など）を、能動的・仮説ベースで検索・調査し、見つかった証拠行を保存してインシデントへ昇格させたいと考えています。',
    scenarioEn:
      'A SOC threat hunter wants to proactively run hypothesis-driven KQL hunts aligned with MITRE ATT&CK to uncover stealthy attacker activity not yet triggering alerts, save evidence rows, and promote findings to incidents.',
    questionJa:
      'Microsoft Sentinel で「脅威ハンティング（Threat Hunting）」クエリを実行する場合、使用するインターフェースはどれですか？',
    questionEn:
      'Which interface should you use to execute proactive Threat Hunting workflows in Microsoft Sentinel?',
    options: [
      {
        id: 'A',
        textJa: 'Sentinel の Hunting（KQL クエリとブックマーク機能）',
        textEn: 'The Sentinel Hunting blade (queries and bookmarks)',
        isCorrect: true,
        explanationJa:
          'Sentinel の「Hunting（ハンティング）」ブレードには MITRE ATT&CK 戦術別に分類された組み込み KQL クエリ群（およびカスタム クエリ）、一括実行機能、証拠行を保存・エンティティ紐付けできる「ブックマーク（Bookmarks）」、リアルタイム監視する「ライブストリーム（Livestream）」が統合されており、調査結果をそのままインシデントへ変換できます。',
        explanationEn:
          'The Sentinel Hunting blade provides MITRE ATT&CK–mapped KQL hunting queries, bulk execution, Bookmarks to capture suspicious rows/entities, Livestream for real-time query execution, and one-click promotion to incidents.',
      },
      {
        id: 'B',
        textJa: 'Azure Monitor のメトリック アラートおよび通知ルール',
        textEn: 'Azure Monitor metric alerts and action rules',
        isCorrect: false,
        explanationJa:
          'Azure Monitor のメトリック／汎用アラートは受動的なインフラ監視アラートであり、能動的脅威ハンティング用インターフェースではありません。',
        explanationEn:
          'Azure Monitor alerts are passive infrastructure alerts, not an interactive threat hunting workspace.',
      },
      {
        id: 'C',
        textJa: '汎用 Log Analytics の単発クエリ エディター画面',
        textEn: 'Standalone raw Log Analytics Logs query editor',
        isCorrect: false,
        explanationJa:
          '生の Log Analytics エディターでも単発 KQL 自体は打てますが、MITRE ATT&CK 分類済みライブラリ、結果件数の一括比較、ブックマーク保存、ライブストリーム、インシデント昇格といったハンティング ワークフローは Sentinel の Hunting 機能が提供します。',
        explanationEn:
          'While you can run ad-hoc KQL in Log Analytics Logs, it lacks Sentinel Hunting\'s curated MITRE ATT&CK library, bookmarking, livestreaming, and direct incident promotion.',
      },
      {
        id: 'D',
        textJa: 'Defender for Cloud のセキュリティ推奨事項画面',
        textEn: 'Defender for Cloud security recommendations blade',
        isCorrect: false,
        explanationJa:
          '推奨事項は構成の脆弱性・ポスチャ改善（CSPM）向けであり、Sentinel のログ横断ハンティングとは役割が異なります。',
        explanationEn:
          'Defender for Cloud recommendations address configuration posture rather than SIEM threat hunting.',
      },
    ],
    overallExplanationJa:
      'Sentinel のハンティング ワークフローは「クエリ実行 → ブックマーク（証拠保全・エンティティ抽出）→ 調査グラフまたは既存／新規インシデントへの関連付け」という一連のサイクルで構築されています。',
    overallExplanationEn:
      'Sentinel\'s hunting lifecycle flows from MITRE-tagged KQL queries to Bookmarks (preserving evidence and entity mappings) and directly into incidents or the Investigation Graph.',
    keyPointsJa: [
      'Sentinel Hunting ブレード ＝ MITRE ATT&CK クエリ群 + 一括実行 + Bookmarks + Livestream',
      '見つけた証拠は Bookmark に保存し、新規インシデント作成または既存インシデントへの追加が可能',
    ],
    keyPointsEn: [
      'Combines curated MITRE ATT&CK KQL queries, bulk run, Bookmarks, and Livestream',
      'Bookmarks persist findings with entity mapping and can create or enrich incidents',
    ],
    referenceTopic: 'Microsoft Sentinel を使用して脅威をハンティングする',
  },
  {
    id: 'sakitoo-q118',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Cloud ワークフロー自動化（Workflow Automation）の動作',
    titleEn: 'Automated Responses via Workflow Automation in Defender for Cloud',
    scenarioJa:
      'Microsoft Defender for Cloud で新しい高重要度セキュリティ アラートや規制コンプライアンス準拠状況の変化が検出された際、ServiceNow へのインシデント チケット自動起票、Microsoft Teams への通知、または問題の自動修復をリアルタイムに実行させたいと考えています。',
    scenarioEn:
      'Whenever Microsoft Defender for Cloud triggers a high-severity security alert or compliance state change, you want to automatically open a ServiceNow ticket, notify Teams, or run remediation.',
    questionJa:
      'Defender for Cloud のワークフロー自動化（Workflow Automation）でセキュリティ アラートをトリガーとして設定できるアクションはどれですか？',
    questionEn:
      'Which automated action can be triggered by a security alert using Workflow Automation in Microsoft Defender for Cloud?',
    options: [
      {
        id: 'A',
        textJa: 'Logic Apps プレイブックを起動し通知・起票・修復を自動実行する',
        textEn: 'Invoke Logic Apps playbooks for tickets, alerts, or fixes',
        isCorrect: true,
        explanationJa:
          'Defender for Cloud のワークフロー自動化（Workflow Automation）では、セキュリティ アラート・推奨事項・規制コンプライアンスの 3 種類のトリガー条件（重要度や名前フィルタ含む）を定義し、条件一致時に Azure Logic Apps プレイブックを自動起動してメール/Teams 通知、ITSM 起票、自動修正を実行できます。',
        explanationEn:
          'Workflow Automation triggers Azure Logic Apps playbooks in response to Defender for Cloud security alerts, recommendations, or regulatory compliance changes, automating ITSM ticketing, notifications, and remediation.',
      },
      {
        id: 'B',
        textJa: '非準拠 VM に紐づく NSG 受信ルールの設定変更のみを自動実行する',
        textEn: 'Perform automated edits limited solely to VM NSG rules',
        isCorrect: false,
        explanationJa:
          'NSG 変更だけに限定されず、Logic Apps でサポートされるあらゆるコネクター／API 操作を柔軟に実行できます。',
        explanationEn:
          'Workflow Automation is not limited to NSG edits; it triggers general Logic Apps playbooks.',
      },
      {
        id: 'C',
        textJa: 'Microsoft Sentinel 側に新しいスケジュール分析ルールを作成する',
        textEn: 'Automatically author new Sentinel scheduled analytics rules',
        isCorrect: false,
        explanationJa:
          'Sentinel 分析ルールの自動作成機能ではありません（アラート連携自体には Sentinel 側の Defender for Cloud コネクターを使います）。',
        explanationEn:
          'It does not author Sentinel analytics rules; alert ingestion to Sentinel uses the Defender for Cloud data connector.',
      },
      {
        id: 'D',
        textJa: '高重大度アラートが検出された Azure VM の電源停止のみを実行する',
        textEn: 'Trigger automatic power shutdown only on alerted Azure VMs',
        isCorrect: false,
        explanationJa:
          'Logic Apps の中で VM 停止アクションを組むことは可能ですが、用途はそれに限定されません。',
        explanationEn:
          'VM shutdown is just one possible Logic App action, not the only capability.',
      },
    ],
    overallExplanationJa:
      'なお、Defender for Cloud のワークフロー自動化は「Azure Policy の DeployIfNotExists」と組み合わせて、新規作成されるサブスクリプション全体へガバナンスとして強制展開することも可能です。',
    overallExplanationEn:
      'Workflow Automation rules can even be deployed at scale across subscriptions via Azure Policy (DeployIfNotExists) to ensure consistent automated alerting and ticketing.',
    keyPointsJa: [
      'Workflow Automation ＝ Defender for Cloud のイベント（アラート／推奨／コンプライアンス変化）をトリガーに Logic Apps を起動',
      'メール・Teams 通知・ServiceNow 起票・リソース修復など幅広い自動応答を実現',
    ],
    keyPointsEn: [
      'Triggers Logic Apps on Defender for Cloud alerts, recommendations, or compliance updates',
      'Automates ITSM ticketing, alerts, and resource-level remediation at scale',
    ],
    referenceTopic: 'Defender for Cloud のセキュリティ イベントに対する応答の自動化（Workflow Automation）',
  },
  {
    id: 'sakitoo-q119',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Sentinel Notebooks (Jupyter Notebook) の高度な分析用途',
    titleEn: 'Advanced Forensics and ML Analysis with Microsoft Sentinel Notebooks',
    scenarioJa:
      '定常的なアラート対応とは別に、長期的な高度持続的脅威（APT）の痕跡を調査するため、Python の機械学習ライブラリ（pandas、scikit-learn 等）を用いた異常クラスタリング、大量 IP の外部レピュテーション一括相関、カスタム グラフ可視化を含むインタラクティブなフォレンジック分析を実施したいと考えています。',
    scenarioEn:
      'During an advanced threat investigation, analysts need Python libraries, machine learning clustering, multi-step statistical forensics, and custom interactive visualizations beyond standard KQL dashboards.',
    questionJa:
      'Microsoft Sentinel で「Notebooks（Jupyter Notebook）」を使用する適切なシナリオはどれですか？',
    questionEn:
      'Which scenario is best suited for using Jupyter Notebooks in Microsoft Sentinel?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Sentinel への標準データ コネクター接続設定',
        textEn: 'Configuring built-in Sentinel data connectors',
        isCorrect: false,
        explanationJa:
          'データ コネクター設定は Content Hub および Data connectors ブレードで行います。',
        explanationEn:
          'Data connector onboarding is configured in Content Hub and the Data Connectors blade.',
      },
      {
        id: 'B',
        textJa: 'Tier-1 アナリストによる日常的なインシデント トリアージ',
        textEn: 'Routine daily Tier-1 incident triage and closure',
        isCorrect: false,
        explanationJa:
          '日常のインシデント割り当てやステータス更新は Incidents ページと自動化ルールで行います。',
        explanationEn:
          'Routine incident queue management uses the Sentinel Incidents blade and Automation Rules.',
      },
      {
        id: 'C',
        textJa: '機械学習や高度な統計解析を用いる複雑なフォレンジック調査',
        textEn: 'Complex ML forensics and multi-step statistical analysis',
        isCorrect: true,
        explanationJa:
          'Sentinel Notebooks は Azure Machine Learning ワークスペース上で稼働する Jupyter Notebook（Python / R および `msticpy` ライブラリ統合）であり、KQL 単体では難しい統計異常検知、機械学習モデル適用、外部 TI 一括エンリッチメント、タイムライン／プロセス ツリー可視化などの高度なフォレンジック・ハンティングに適しています。',
        explanationEn:
          'Microsoft Sentinel Notebooks run on Azure Machine Learning compute with Jupyter (Python/R + msticpy), enabling ML modeling, statistical forensics, bulk threat intel enrichment, and interactive visualizations beyond standalone KQL.',
      },
      {
        id: 'D',
        textJa: '定常的な運用監視ダッシュボードや集計グラフの作成',
        textEn: 'Building routine monitoring dashboards and charts',
        isCorrect: false,
        explanationJa:
          '定型的な運用監視ダッシュボードやレポート作成には「Workbooks（ブック）」を使用します。',
        explanationEn:
          'Routine monitoring dashboards are built with Sentinel Workbooks.',
      },
    ],
    overallExplanationJa:
      '試験では「Workbooks（日常可視化・ダッシュボード）」「Hunting（KQL ベースの脅威検索＋ブックマーク）」「Notebooks（Python / Azure ML / msticpy による高度 ML・統計・複雑フォレンジック）」の使い分けが頻出ポイントです。',
    overallExplanationEn:
      'Know the Sentinel tool distinction: Workbooks for operational dashboards, Hunting for KQL-driven hunts & bookmarks, and Notebooks (Azure ML + msticpy) for Python/ML forensics.',
    keyPointsJa: [
      'Sentinel Notebooks ＝ Azure ML コンピューティング上の Jupyter Notebook + MSTICPy セキュリティ ライブラリ',
      '定常可視化は Workbooks、KQL 探索は Hunting、Python/ML 高度フォレンジックは Notebooks を使い分ける',
    ],
    keyPointsEn: [
      'Powered by Azure Machine Learning + Jupyter + MSTICPy Python security library',
      'Contrast: Workbooks (dashboards), Hunting (KQL + bookmarks), Notebooks (ML/Python forensics)',
    ],
    referenceTopic: 'Microsoft Sentinel で Jupyter Notebooks を使用して脅威をハンティングする',
  },
  {
    id: 'sakitoo-q120',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Sentinel のコア SOAR 機能（自動化ルール＋プレイブック）',
    titleEn: 'Core SOAR Architecture in Sentinel (Automation Rules + Playbooks)',
    scenarioJa:
      'SOC チームのインシデント対応時間（MTTR）を短縮するため、受信したインシデントを自動的にトリアージしてタグ付け・担当者割り当てを行い、誤検知パターンを自動クローズした上で、重大インシデントのみ外部システム連携やアカウント隔離などの多段階アクションを自動実行する SOAR 基盤を設計しています。',
    scenarioEn:
      'To reduce MTTR, your SOC team is designing Sentinel\'s SOAR layer to auto-triage, tag, assign, close known false positives, and invoke multi-step external remediation workflows for high-severity incidents.',
    questionJa:
      'Microsoft Sentinel で「セキュリティ オーケストレーション・自動化・対応（SOAR）」として分類されるコア機能の組み合わせはどれですか？',
    questionEn:
      'Which pair of features constitutes the core SOAR (Security Orchestration, Automation, and Response) engine in Microsoft Sentinel?',
    options: [
      {
        id: 'A',
        textJa: '自動化ルール + プレイブック（Logic Apps）による自動対応',
        textEn: 'Automation Rules + Playbooks (Logic Apps) response',
        isCorrect: true,
        explanationJa:
          'Sentinel の SOAR 機能の中核は「自動化ルール（Automation Rules：インシデントのタグ付け・重要度変更・割り当て・クローズ、および Playbook の呼び出し管理）」と「プレイブック（Playbooks：Azure Logic Apps による外部連携・封じ込め・通知ワークフロー）」の組み合わせです。',
        explanationEn:
          'Sentinel\'s core SOAR architecture combines Automation Rules (centralized triage, tagging, assignment, auto-close, and trigger orchestration) with Playbooks (Azure Logic Apps workflows for external response and remediation).',
      },
      {
        id: 'B',
        textJa: 'UEBA（行動分析）+ 脅威インテリジェンス（TI）による検知',
        textEn: 'UEBA behavioral analytics + Threat Intelligence feeds',
        isCorrect: false,
        explanationJa:
          'UEBA と脅威インテリジェンスは検知・分析エンリッチメント機能であり、自動対応オーケストレーション（SOAR）そのものではありません。',
        explanationEn:
          'UEBA and Threat Intelligence are detection and enrichment capabilities rather than SOAR automation.',
      },
      {
        id: 'C',
        textJa: 'スケジュール分析ルール + 監視ワークブック（Workbooks）',
        textEn: 'Scheduled Analytics Rules + monitoring Workbooks',
        isCorrect: false,
        explanationJa:
          '分析ルールは検知（SIEM）、ワークブックは可視化ダッシュボードであり、SOAR 対応機能ではありません。',
        explanationEn:
          'Analytics rules handle SIEM detection and Workbooks handle visualization, not SOAR response.',
      },
      {
        id: 'D',
        textJa: 'データ コネクター + カスタム ログ テーブル（Logs API）',
        textEn: 'Data Connectors + custom log tables (Logs API)',
        isCorrect: false,
        explanationJa:
          'データ コネクターとカスタム ログはログ収集・取り込み（データ インジェスチョン）層の機能です。',
        explanationEn:
          'Data Connectors and Custom Logs belong to the data ingestion layer, not SOAR.',
      },
    ],
    overallExplanationJa:
      'SIEM 機能（データ収集・分析ルール・UEBA・ハンティング）が脅威を「検知」するのに対し、SOAR 機能である「自動化ルール ＋ プレイブック」が定型トリアージから封じ込め・復旧までの「自動対応」を一貫して担います。',
    overallExplanationEn:
      'While connectors, analytics rules, and UEBA form Sentinel\'s SIEM detection layer, Automation Rules and Logic Apps Playbooks work together as Sentinel\'s native SOAR response engine.',
    keyPointsJa: [
      'Sentinel SOAR の二本柱 ＝「自動化ルール（軽量・一括トリアージ制御）」＋「プレイブック（Logic Apps による多段階自動対応）」',
      '複数分析ルールにまたがる Playbook 呼び出しも、自動化ルール側で条件一元管理するのがベストプラクティス',
    ],
    keyPointsEn: [
      'Core Sentinel SOAR = Automation Rules (triage/routing) + Playbooks (Logic Apps orchestration)',
      'Centralize playbook triggering inside Automation Rules rather than duplicating triggers across individual analytics rules',
    ],
    referenceTopic: 'Microsoft Sentinel での自動化ルールとプレイブックによる脅威対応の自動化',
  },
];
