import { PdfQuestionSeed } from './pdfCaseStudies';

export const PDF_QUESTIONS_PART4: PdfQuestionSeed[] = [
  {
    id: 'pdf-q61',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Security Store パートナー製エージェントの承認と最小特権セットアップ',
    titleEn: 'Approving and Setting Up Partner Agents from Microsoft Security Store',
    scenarioJa: `次の表に示すユーザーを含む Microsoft Entra テナントがあります。

| 名前 | ロール |
| :--- | :--- |
| User1 | Security Copilot 共同作成者 (Security Copilot Contributor) |
| User2 | グローバル管理者 (Global Administrator) |
| User3 | セキュリティ管理者 (Security Administrator) |
| User4 | Security Copilot 所有者 (Security Copilot Owner) |

Microsoft Security Copilot を使用しています。Microsoft Security Store から、User1 は Agent1 という名前のパートナー製エージェントをデプロイしようとしていますが、セットアップ (Set up) オプションが利用できないと報告しています。
Agent1 が Security Copilot で正常に実行できるかどうかを確認する必要があります。ソリューションは最小特権の原則に従う必要があります。`,
    scenarioEn: `You have a Microsoft Entra tenant containing the following users:

| Name | Role |
| :--- | :--- |
| User1 | Security Copilot Contributor |
| User2 | Global Administrator |
| User3 | Security Administrator |
| User4 | Security Copilot Owner |

In Microsoft Security Copilot, User1 attempts to deploy a partner-built agent named Agent1 from Microsoft Security Store, but reports that the "Set up" option is unavailable.
You need to ensure Agent1 can run properly in Security Copilot following the principle of least privilege.`,
    questionJa: 'デプロイを完了する方法として正しい組み合わせを1つ選んでください。',
    questionEn: 'Which combination of actions should you take to complete the deployment?',
    options: [
      {
        id: 'A',
        textJa: 'Agent1 の承認：User4 に承認を依頼する。／エージェントの設定：Agent1 にユーザー割り当てマネージド ID を割り当てる。',
        textEn: 'Approval: Ask User4 to approve / Setup: Assign a user-assigned managed identity to Agent1',
        isCorrect: false,
        explanationJa: '【不正解】Security Copilot 所有者（User4）にはパートナー製エージェントのアクセス許可に対するテナント承認権限がありません。また実行設定にはユーザー アカウントを割り当てます。',
        explanationEn: 'Security Copilot Owner cannot grant tenant-wide admin consent for partner agents, and setup uses a user account rather than a managed identity.',
      },
      {
        id: 'B',
        textJa: 'Agent1 の承認：User4 に承認を依頼する。／エージェントの設定：Agent1 のアプリの登録を作成する。',
        textEn: 'Approval: Ask User4 to approve / Setup: Create an app registration for Agent1',
        isCorrect: false,
        explanationJa: '【不正解】User4 に承認権限はなく、独自アプリの登録も不要です。',
        explanationEn: 'User4 lacks Global Administrator consent authority, and creating a separate app registration is unnecessary.',
      },
      {
        id: 'C',
        textJa: 'Agent1 の承認：User2 に承認を依頼する。／エージェントの設定：Agent1 にユーザー アカウントを割り当てる。',
        textEn: 'Approval: Ask User2 to approve / Setup: Assign a user account to Agent1',
        isCorrect: true,
        explanationJa: '【正解】Microsoft 製品データへアクセスするパートナー製エージェントはグローバル管理者（User2）の承認が必要です。承認後、User1 はセットアップ画面で既存のユーザー アカウントを割り当てて実行構成を完了できます。',
        explanationEn: 'A Global Administrator (User2) must approve the partner agent’s permissions first; afterwards, User1 completes setup by assigning an existing user account to Agent1.',
      },
      {
        id: 'D',
        textJa: 'Agent1 の承認：User3 に承認を依頼する。／エージェントの設定：Agent1 のアプリの登録を作成する。',
        textEn: 'Approval: Ask User3 to approve / Setup: Create an app registration for Agent1',
        isCorrect: false,
        explanationJa: '【不正解】セキュリティ管理者（User3）はグローバル管理者の承認を代行できず、アプリの登録作成も不要です。',
        explanationEn: 'Security Administrator cannot replace Global Administrator approval for partner agents.',
      },
      {
        id: 'E',
        textJa: 'Agent1 の承認：User2 に承認を依頼する。／エージェントの設定：Agent1 にユーザー割り当てマネージド ID を割り当てる。',
        textEn: 'Approval: Ask User2 to approve / Setup: Assign a user-assigned managed identity to Agent1',
        isCorrect: false,
        explanationJa: '【不正解】承認者は User2 で正しいですが、このパートナー製エージェントのセットアップではマネージド ID ではなくユーザー アカウントを割り当てます。',
        explanationEn: 'User2 is the correct approver, but the partner agent setup requires assigning a user account rather than a managed identity.',
      },
      {
        id: 'F',
        textJa: 'Agent1 の承認：User3 に承認を依頼する。／エージェントの設定：Agent1 にユーザー アカウントを割り当てる。',
        textEn: 'Approval: Ask User3 to approve / Setup: Assign a user account to Agent1',
        isCorrect: false,
        explanationJa: '【不正解】Security Administrator の User3 では承認ができません。',
        explanationEn: 'User3 (Security Administrator) does not hold the Global Administrator role required for initial approval.',
      },
    ],
    overallExplanationJa: `Security Store のパートナー製エージェントを導入する際、「Set up」が有効にならない原因はグローバル管理者による事前承認（アクセス許可の承認）が完了していないためです。User2 に承認してもらい、承認後に実行用のユーザー アカウントを割り当てます。`,
    overallExplanationEn: `When the Set up button for a Microsoft Security Store partner agent is disabled, a Global Administrator must approve the required permissions first. Once approved, assign the execution user account in setup.`,
    keyPointsJa: [
      'パートナー製エージェントの初回承認 → グローバル管理者 (User2)',
      '承認後のセットアップ構成 → Agent1 に既存ユーザー アカウントを割り当て',
    ],
    keyPointsEn: [
      'Initial partner agent approval requires Global Administrator',
      'Setup completes by assigning a user account for agent execution',
    ],
    referenceTopic: 'Microsoft Security Store パートナー エージェント導入',
  },
  {
    id: 'pdf-q62',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'AMA 経由 Syslog 取り込み前のフィルタリングとコスト削減',
    titleEn: 'Pre-Ingestion Syslog Filtering via AMA to Reduce Sentinel Costs',
    scenarioJa: `Workspace1 という名前の Microsoft Sentinel ワークスペースがあります。Linux を実行し、Azure Monitor エージェント (AMA) がインストールされたオンプレミス サーバーが 100 台あります。
これらの Linux サーバーから Syslog イベントを収集する必要があります。要件は次のとおりです。
・データが Workspace1 に書き込まれる前にフィルタリングが行われるようにする。
・価値の低い Syslog メッセージを除外して、取り込みコストを削減する。`,
    scenarioEn: `You have a Microsoft Sentinel workspace named Workspace1 and 100 on-premises Linux servers with Azure Monitor Agent (AMA) installed.
You need to collect Syslog events while ensuring:
- Filtering occurs before data is written to Workspace1.
- Low-value Syslog messages are excluded to reduce ingestion costs.`,
    questionJa: 'ソリューションに含めるべきものを1つ選んでください。',
    questionEn: 'What should you include in the solution?',
    options: [
      {
        id: 'A',
        textJa: 'ASIM クエリ パーサー',
        textEn: 'ASIM normalization parsers',
        isCorrect: false,
        explanationJa: '【不正解】ASIM パーサーは取り込み後の検索時にスキーマを正規化する機能であり、書き込み前の除外や取り込みコスト削減にはなりません。',
        explanationEn: 'ASIM parsers normalize logs at query time and do not reduce ingestion volume.',
      },
      {
        id: 'B',
        textJa: 'データ収集規則 (DCR)',
        textEn: 'Data Collection Rules (DCR)',
        isCorrect: true,
        explanationJa: '【正解】AMA が使用するデータ収集規則 (DCR) で対象ファシリティや重大度（facilityNames / logLevels）を絞り、さらに必要に応じて transformKql による取り込み時変換を設定することで、Workspace1 へ書き込まれる前の段階で低価値イベントを除外しコストを削減できます。',
        explanationEn: 'Data Collection Rules (DCRs) allow filtering by facility/severity and running transformKql transformations before logs are written to Workspace1, directly reducing ingestion cost.',
      },
      {
        id: 'C',
        textJa: 'Sentinel 分析ルール',
        textEn: 'Sentinel analytics rules',
        isCorrect: false,
        explanationJa: '【不正解】分析ルールはすでに Workspace1 に取り込まれた後のログを検索する機能です。',
        explanationEn: 'Analytics rules run against already-ingested data and do not filter ingestion.',
      },
      {
        id: 'D',
        textJa: 'テーブル変換フィルター',
        textEn: 'Table filter transformations',
        isCorrect: false,
        explanationJa: '【不正解】AMA ベースの Syslog 収集ではテーブル側のワークスペース変換ではなく、対象サーバーに割り当てる収集用 DCR で収集範囲や変換を制御します。',
        explanationEn: 'AMA-based Syslog collection is governed by Data Collection Rules assigned to the servers rather than standalone table-level transformations.',
      },
    ],
    overallExplanationJa: `Azure Monitor エージェント (AMA) で Syslog を取り込む場合、データ収集規則 (DCR) によって収集するファシリティ/ログ レベルと取り込み時変換を定義することで、ワークスペースへの書き込み前にノイズを削減し取り込み費用を抑えられます。`,
    overallExplanationEn: `DCRs control what AMA collects (facilities and log levels) and apply ingestion-time KQL transformations before data lands in Log Analytics/Sentinel.`,
    keyPointsJa: [
      'AMA の収集フィルタリングと取り込み前変換 ＝ データ収集規則 (DCR)',
      'ASIM や分析ルールは取り込み後の機能でありコスト削減にならない',
    ],
    keyPointsEn: [
      'AMA pre-ingestion filtering and cost reduction use Data Collection Rules (DCR)',
      'ASIM and analytics rules operate post-ingestion',
    ],
    referenceTopic: 'Azure Monitor Agent & データ収集規則 (DCR)',
  },
  {
    id: 'pdf-q63',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure VM 200 台からの Windows セキュリティ イベント直接収集コネクタ',
    titleEn: 'Selecting Supported Sentinel Connector for Direct Windows Security Event Collection',
    scenarioJa: `Microsoft Sentinel ワークスペースがあります。Windows Server を実行する 200 台の Azure 仮想マシンから Windows セキュリティ イベントを収集する必要があります。
要件：
・各仮想マシンからエージェントを使用して直接データを収集する（収集サーバーを経由しない）。
・新しい仮想マシンのデプロイには、サポート対象のエージェントを使用する。`,
    scenarioEn: `You have a Microsoft Sentinel workspace and need to collect Windows Security Events from 200 Windows Server Azure VMs.
Requirements:
- Collect data directly from each VM using an agent.
- Use a supported agent for newly deployed VMs.`,
    questionJa: '使用すべき Microsoft Sentinel コネクタを1つ選んでください。',
    questionEn: 'Which Microsoft Sentinel connector should you use?',
    options: [
      {
        id: 'A',
        textJa: 'Windows 転送イベント (Windows Forwarded Events)',
        textEn: 'Windows Forwarded Events',
        isCorrect: false,
        explanationJa: '【不正解】WEF により中継用の収集サーバーへ転送してから取り込む方式であり、「各 VM から直接収集」の要件に合いません。',
        explanationEn: 'Windows Forwarded Events relies on collector servers via WEF rather than collecting directly from each VM.',
      },
      {
        id: 'B',
        textJa: 'AMA 経由の Windows セキュリティ イベント (Windows Security Events via AMA)',
        textEn: 'Windows Security Events via AMA',
        isCorrect: true,
        explanationJa: '【正解】各 VM 上のサポート対象エージェントである Azure Monitor エージェント (AMA) と DCR を使用して、SecurityEvent を Sentinel に直接送信できます。',
        explanationEn: 'Windows Security Events via AMA uses the supported Azure Monitor Agent and DCRs to collect SecurityEvent logs directly from every VM.',
      },
      {
        id: 'C',
        textJa: 'レガシー エージェント経由のセキュリティ イベント (Security Events via Legacy Agent)',
        textEn: 'Security Events via Legacy Agent',
        isCorrect: false,
        explanationJa: '【不正解】旧 Log Analytics エージェント (MMA) は廃止済み/非推奨であり、新規デプロイ用のサポート対象エージェント要件を満たしません。',
        explanationEn: 'The legacy MMA agent is deprecated and does not meet the supported-agent requirement.',
      },
      {
        id: 'D',
        textJa: 'AMA 経由の Syslog (Syslog via AMA)',
        textEn: 'Syslog via AMA',
        isCorrect: false,
        explanationJa: '【不正解】Linux 等の Syslog 収集用コネクタであり、Windows セキュリティ イベント用ではありません。',
        explanationEn: 'Syslog via AMA is for Linux/network Syslog, not Windows Security Events.',
      },
      {
        id: 'E',
        textJa: 'Azure Resource Graph',
        textEn: 'Azure Resource Graph',
        isCorrect: false,
        explanationJa: '【不正解】Azure リソース メタデータの検索サービスであり、ゲスト OS イベント収集機能ではありません。',
        explanationEn: 'Azure Resource Graph queries Azure resource metadata, not guest OS security logs.',
      },
    ],
    overallExplanationJa: `新規・既存の Windows VM からサポート対象エージェントで直接 SecurityEvent を収集するには、「AMA 経由の Windows セキュリティ イベント (Windows Security Events via AMA)」コネクタを使用します。`,
    overallExplanationEn: `Windows Security Events via AMA is the modern, supported direct-collection connector using the Azure Monitor Agent and Data Collection Rules.`,
    keyPointsJa: [
      'サポート対象の直接収集 → Windows Security Events via AMA',
      'Legacy Agent (MMA) は廃止済み、WEF は中継サーバー経由',
    ],
    keyPointsEn: [
      'Direct supported Windows collection -> Windows Security Events via AMA',
      'Legacy agent is retired; WEF requires collector servers',
    ],
    referenceTopic: 'Microsoft Sentinel AMA コネクタ',
  },
  {
    id: 'pdf-q64',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: '新規インシデントの自動割り当て・タグ付け：ハンティング クエリによる解決可否',
    titleEn: 'Auto-Assigning and Tagging New Sentinel Incidents: Hunting Query Solution',
    scenarioJa: `【連問 1/4】
Microsoft Sentinel ワークスペースと、多層のセキュリティ オペレーション センター (SOC) チームがあります。
すべての新しいセキュリティ インシデントが直ちに Tier 1 アナリスト グループに割り当てられ、トリアージ用にフラグが付けられるようにする必要があります。

解決策：ハンティング クエリを作成します。`,
    scenarioEn: `[Series 1/4] You have a Microsoft Sentinel workspace and a multi-tiered SOC team.
All new security incidents must be immediately assigned to the Tier 1 analyst group and flagged for triage.
Proposed solution: You create a hunting query.`,
    questionJa: 'この解決策は目標を満たしますか。',
    questionEn: 'Does this meet the goal?',
    options: [
      {
        id: 'A',
        textJa: 'はい',
        textEn: 'Yes',
        isCorrect: false,
        explanationJa: '【不正解】ハンティング クエリは能動的なログ検索機能であり、インシデント作成時に所有者やタグを自動変更する機能ではありません。',
        explanationEn: 'Hunting queries search logs proactively and do not automatically assign or tag newly created incidents.',
      },
      {
        id: 'B',
        textJa: 'いいえ',
        textEn: 'No',
        isCorrect: true,
        explanationJa: '【正解】目標を満たしません。新規インシデントが生成された瞬間に担当者割り当てやタグ付けを自動実行するには、自動化ルール (Automation rule) を構成する必要があります。',
        explanationEn: 'No. Assigning owners and adding triage tags upon incident creation requires a Sentinel automation rule, not a hunting query.',
      },
    ],
    overallExplanationJa: `ハンティング クエリは KQL で脅威の兆候を調査するための機能です。生成されたインシデントの自動トリアージ処理（所有者割り当て・タグ付与）には自動化ルールを使用します。`,
    overallExplanationEn: `Hunting queries only search log tables; incident auto-assignment and tagging require automation rules.`,
    keyPointsJa: [
      'ハンティング クエリ＝能動的脅威検索（インシデント属性の自動更新不可）',
      'インシデント作成時の自動割り当て・タグ付け＝自動化ルール',
    ],
    keyPointsEn: [
      'Hunting queries perform log searches and cannot update incident attributes',
      'Use automation rules for immediate triage assignment and tagging',
    ],
    referenceTopic: 'Microsoft Sentinel 自動化ルール vs ハンティング',
  },
  {
    id: 'pdf-q65',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: '新規インシデントの自動割り当て・タグ付け：プレイブック単体作成による解決可否',
    titleEn: 'Auto-Assigning and Tagging New Sentinel Incidents: Playbook-Only Solution',
    scenarioJa: `【連問 2/4】
Microsoft Sentinel ワークスペースと、複数階層の SOC チームがあります。
すべての新しいセキュリティ インシデントが直ちに Tier 1 アナリスト グループに割り当てられ、トリアージ対象としてフラグ付けされるようにする必要があります。

解決策：プレイブックを作成します。`,
    scenarioEn: `[Series 2/4] You have a Microsoft Sentinel workspace and a multi-tiered SOC team.
All new security incidents must be immediately assigned to the Tier 1 analyst group and flagged for triage.
Proposed solution: You create a playbook.`,
    questionJa: 'この解決策は目標を満たしますか。',
    questionEn: 'Does this meet the goal?',
    options: [
      {
        id: 'A',
        textJa: 'はい',
        textEn: 'Yes',
        isCorrect: false,
        explanationJa: '【不正解】プレイブック（Logic Apps ワークフロー）を作成しただけでは、インシデント作成時に自動起動するよう関連付けられないため、目標を満たしません。',
        explanationEn: 'Merely creating a playbook does not attach it to trigger automatically on every new incident.',
      },
      {
        id: 'B',
        textJa: 'いいえ',
        textEn: 'No',
        isCorrect: true,
        explanationJa: '【正解】目標を満たしません。プレイブックの作成だけでは全インシデント作成時に自動実行されず、また所有者とタグの更新自体はプレイブックではなく自動化ルールのみで完結します。',
        explanationEn: 'No. Creating a playbook alone does not trigger it for all new incidents; an automation rule is required (and can assign/tag directly without a playbook).',
      },
    ],
    overallExplanationJa: `プレイブックは作成するだけでは自動実行されず、起動条件として自動化ルール等への関連付けが必要です。さらに所有者の割り当てとタグの付与は自動化ルールの標準アクションだけで実行可能です。`,
    overallExplanationEn: `Creating a playbook does not trigger it on new incidents without an automation rule, and automation rules handle owner/tag updates natively.`,
    keyPointsJa: [
      'プレイブック作成単体では新規インシデントの自動トリガーにならない',
      '自動化ルールによる組み込みアクションで対応すべき',
    ],
    keyPointsEn: [
      'Playbooks alone are not automatically triggered on incident creation',
      'Automation rules are required for event-driven incident triage',
    ],
    referenceTopic: 'Microsoft Sentinel 自動化ルール vs プレイブック',
  },
  {
    id: 'pdf-q66',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: '新規インシデントの自動割り当て・タグ付け：自動化ルールによる解決可否',
    titleEn: 'Auto-Assigning and Tagging New Sentinel Incidents: Automation Rule Solution',
    scenarioJa: `【連問 3/4】
Microsoft Sentinel ワークスペースと、複数の階層から成る SOC チームがあります。
すべての新しいセキュリティ インシデントが直ちに Tier 1 アナリスト グループに割り当てられ、トリアージ対象としてフラグを付ける必要があります。

解決策：自動化ルールを作成します。`,
    scenarioEn: `[Series 3/4] You have a Microsoft Sentinel workspace and a multi-tiered SOC team.
All new security incidents must be immediately assigned to the Tier 1 analyst group and flagged for triage.
Proposed solution: You create an automation rule.`,
    questionJa: 'この解決策は目標を満たしますか。',
    questionEn: 'Does this meet the goal?',
    options: [
      {
        id: 'A',
        textJa: 'はい',
        textEn: 'Yes',
        isCorrect: true,
        explanationJa: '【正解】「インシデントが作成されたとき」をトリガーとする自動化ルールを作成し、アクションで「所有者の割り当て (Tier 1 グループ)」と「タグの追加 (Triage 等)」を設定すれば、プレイブックなしで即座に全件へ自動適用できます。',
        explanationEn: 'Yes. An automation rule triggered "When incident is created" natively supports both "Assign owner" and "Add tags" actions for all new incidents.',
      },
      {
        id: 'B',
        textJa: 'いいえ',
        textEn: 'No',
        isCorrect: false,
        explanationJa: '【不正解】自動化ルールは所有者の割り当てとタグの追加を組み込みアクションとしてサポートしているため、目標を満たします。',
        explanationEn: 'Automation rules natively provide owner assignment and tagging actions on incident creation.',
      },
    ],
    overallExplanationJa: `Microsoft Sentinel の自動化ルールは、インシデント作成時にすべての新規インシデントを対象として「所有者の割り当て」や「タグの追加」などのトリアージ処理を自動実行する最適な機能です。`,
    overallExplanationEn: `Sentinel automation rules natively assign owners and add tags immediately when incidents are created.`,
    keyPointsJa: [
      'トリガー「インシデントが作成されたとき」＋ アクション「所有者割り当て」「タグ追加」',
      'プレイブック不要で自動化ルール単体で完結可能',
    ],
    keyPointsEn: [
      'Automation rules natively assign owners and add triage tags at creation time',
      'No separate playbook is needed for basic attribute updates',
    ],
    referenceTopic: 'Microsoft Sentinel 自動化ルール',
  },
  {
    id: 'pdf-q67',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: '新規インシデントの自動割り当て・タグ付け：分析ルールによる解決可否',
    titleEn: 'Auto-Assigning and Tagging New Sentinel Incidents: Analytics Rule Solution',
    scenarioJa: `【連問 4/4】
Microsoft Sentinel ワークスペースと、複数の階層からなる SOC チームがあります。
すべての新しいセキュリティ インシデントが直ちに Tier 1 アナリスト グループに割り当てられ、トリアージ対象としてフラグが付けられるようにする必要があります。

解決策：分析ルールを作成します。`,
    scenarioEn: `[Series 4/4] You have a Microsoft Sentinel workspace and a multi-tiered SOC team.
All new security incidents must be immediately assigned to the Tier 1 analyst group and flagged for triage.
Proposed solution: You create an analytics rule.`,
    questionJa: 'この解決策は目標を満たしますか。',
    questionEn: 'Does this meet the goal?',
    options: [
      {
        id: 'A',
        textJa: 'はい',
        textEn: 'Yes',
        isCorrect: false,
        explanationJa: '【不正解】分析ルールは脅威を検出してインシデントを生成する設定であり、すべての新規インシデント（他製品からの連携インシデント含む）に自動で所有者やタグを割り当てる処理ではありません。',
        explanationEn: 'Analytics rules detect threats and create incidents; they do not automatically assign owners and tags across all new incidents.',
      },
      {
        id: 'B',
        textJa: 'いいえ',
        textEn: 'No',
        isCorrect: true,
        explanationJa: '【正解】目標を満たしません。分析ルールではなく、インシデント作成イベントに反応する「自動化ルール」を作成する必要があります。',
        explanationEn: 'No. Analytics rules generate incidents from log queries rather than applying automated triage assignment/tagging across all new incidents.',
      },
    ],
    overallExplanationJa: `分析ルールはログの検出条件とアラート/インシデント生成を担い、生成後のすべてのインシデントに対する担当グループ割り当てやタグ付けは「自動化ルール」が担当します。`,
    overallExplanationEn: `Analytics rules define detection queries, whereas automation rules handle post-creation incident assignment and tagging.`,
    keyPointsJa: [
      '分析ルール＝ログからの検出・インシデント生成',
      'すべての新規インシデントの振り分け＝自動化ルール',
    ],
    keyPointsEn: [
      'Analytics rules handle threat detection',
      'Automation rules handle incident triage and owner assignment',
    ],
    referenceTopic: 'Microsoft Sentinel 分析ルール vs 自動化ルール',
  },
  {
    id: 'pdf-q68',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Storage マルウェア検出の自動修復ワークフロー',
    titleEn: 'Automating Remediation for Defender for Storage Malware Detections',
    scenarioJa: `Sub1 という名前の Azure サブスクリプションがあり、その中に storage1 という名前のストレージ アカウントがあります。Sub1 では Microsoft Defender for Storage とマルウェア スキャンが有効になっています。
storage1 で検出されたマルウェアの修復（隔離や削除など）を自動化するソリューションを構成する必要があります。`,
    scenarioEn: `Your Azure subscription Sub1 contains a storage account named storage1 with Microsoft Defender for Storage and malware scanning enabled.
You need to configure a solution that automates remediation of malware detected in storage1.`,
    questionJa: 'このソリューションに含めるべきものを1つ選んでください。',
    questionEn: 'What should you include in the solution?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Logic Apps',
        textEn: 'Azure Logic Apps',
        isCorrect: true,
        explanationJa: '【正解】Azure Logic Apps を使用して、Defender for Cloud のワークフロー自動化や Event Grid トリガーを受け取り、感染 BLOB の隔離・削除や管理者通知を自動実行できます。',
        explanationEn: 'Azure Logic Apps can receive Defender for Cloud workflow automation or Event Grid triggers to automatically quarantine or delete malicious blobs.',
      },
      {
        id: 'B',
        textJa: 'Log Analytics ワークスペース',
        textEn: 'A Log Analytics workspace',
        isCorrect: false,
        explanationJa: '【不正解】ログを保存・検索する基盤であり、感染 BLOB を自動隔離・削除する実行エンジンではありません。',
        explanationEn: 'Log Analytics stores and queries logs rather than executing automated blob remediation.',
      },
      {
        id: 'C',
        textJa: 'アラート ルール',
        textEn: 'Alert rules',
        isCorrect: false,
        explanationJa: '【不正解】アラート ルール自体は通知やトリガーの入口であり、BLOB を隔離・削除する実処理はワークフロー側で行います。',
        explanationEn: 'Alert rules only detect conditions and trigger actions; Logic Apps performs the remediation workflow.',
      },
      {
        id: 'D',
        textJa: 'Azure Policy',
        textEn: 'Azure Policy',
        isCorrect: false,
        explanationJa: '【不正解】Azure Policy は構成の準拠監査や修復を行うもので、アップロードされた個別マルウェア BLOB の削除処理はできません。',
        explanationEn: 'Azure Policy enforces resource governance settings and cannot remediate infected blob files.',
      },
    ],
    overallExplanationJa: `Defender for Storage のマルウェア スキャンで悪意あるファイルが検出された際の自動隔離・削除などの実処理は、Defender for Cloud のワークフロー自動化や Event Grid と連携させた Azure Logic Apps で実装します。`,
    overallExplanationEn: `Use Azure Logic Apps (triggered via Defender for Cloud workflow automation or Event Grid) to automatically quarantine or delete malicious blobs detected by Defender for Storage.`,
    keyPointsJa: [
      'マルウェア検出後の隔離・削除実行 → Azure Logic Apps',
      'Log Analytics（保存）や Azure Policy（構成統制）ではファイル修復不可',
    ],
    keyPointsEn: [
      'Automated malware blob remediation -> Azure Logic Apps',
      'Not handled by Log Analytics or Azure Policy',
    ],
    referenceTopic: 'Defender for Cloud ワークフロー自動化 & Logic Apps',
  },
  {
    id: 'pdf-q69',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Arc サーバーへの Microsoft Entra 認証 RDP ログオン権限付与',
    titleEn: 'Granting Least-Privilege Entra RDP Sign-In Access on an Azure Arc Server',
    scenarioJa: `User1 を含む Microsoft Entra テナントがあり、Windows Server を実行する SRV1 という名前の Azure Arc 対応サーバーがあります。SRV1 は Microsoft Entra サインイン用に構成されています。
User1 が Microsoft Entra の資格情報を使用して RDP 経由で SRV1 にサインインしようとすると、次のメッセージが表示されます。
“Your account is configured to prevent you from using this device.”

User1 が RDP 経由で SRV1 にサインインできるようにする必要があります。ソリューションは最小特権の原則に従う必要があります。`,
    scenarioEn: `You have a Microsoft Entra tenant containing User1 and an Azure Arc-enabled Windows Server named SRV1 configured for Microsoft Entra sign-in.
When User1 tries to sign in to SRV1 via RDP using Microsoft Entra credentials, they receive:
"Your account is configured to prevent you from using this device."
You need to allow User1 to sign in to SRV1 via RDP while following the principle of least privilege.`,
    questionJa: '何を行うべきか、1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'SRV1 に対して User1 に仮想マシン管理者ログイン (Virtual Machine Administrator Login) ロールを割り当てる。',
        textEn: 'Assign the Virtual Machine Administrator Login role to User1 on SRV1.',
        isCorrect: false,
        explanationJa: '【不正解】管理者権限まで付与するため、一般ユーザー ログイン権限で足りる場合は最小特権に反します。',
        explanationEn: 'This grants local administrator privileges, exceeding least privilege for standard RDP sign-in.',
      },
      {
        id: 'B',
        textJa: 'SRV1 へのサインイン時に多要素認証 (MFA) を必須とする条件付きアクセス ポリシーを作成する。',
        textEn: 'Create a Conditional Access policy requiring MFA for sign-in.',
        isCorrect: false,
        explanationJa: '【不正解】認証時の要件を増やすものであり、SRV1 へのサインイン認可ロールが不足している原因は解消しません。',
        explanationEn: 'Conditional Access adds sign-in requirements but does not grant the RBAC login role required by the server.',
      },
      {
        id: 'C',
        textJa: 'SRV1 上のローカル Remote Desktop Users セキュリティ グループに User1 を直接追加する。',
        textEn: 'Add User1 to the local Remote Desktop Users group on SRV1.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Entra サインインでは Azure RBAC のログイン ロールによってアクセスが制御されます。',
        explanationEn: 'Microsoft Entra sign-in authorization is governed by Azure RBAC login roles rather than local group membership.',
      },
      {
        id: 'D',
        textJa: 'SRV1 に対して User1 に仮想マシン ユーザー ログイン (Virtual Machine User Login) ロールを割り当てる。',
        textEn: 'Assign the Virtual Machine User Login role to User1 on SRV1.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Entra 資格情報での RDP/SSH ログオンを認可するには Azure RBAC ロールが必要です。SRV1 スコープで「仮想マシン ユーザー ログイン」を割り当てれば、管理者権限を与えずにサインインを許可できます。',
        explanationEn: 'Assigning Virtual Machine User Login at the SRV1 scope authorizes Entra RDP sign-in without granting local administrator privileges.',
      },
    ],
    overallExplanationJa: `Azure VM や Azure Arc 対応サーバーで Microsoft Entra サインインを有効にした場合、接続するユーザーには「Virtual Machine User Login（一般ユーザー）」または「Virtual Machine Administrator Login（管理者）」の Azure RBAC ロールを付与する必要があります。`,
    overallExplanationEn: `Microsoft Entra sign-in on Azure VMs and Arc-enabled servers requires either Virtual Machine User Login or Virtual Machine Administrator Login via Azure RBAC.`,
    keyPointsJa: [
      '標準ユーザーとして RDP サインイン → Virtual Machine User Login',
      '最小特権の原則により Virtual Machine Administrator Login は避ける',
    ],
    keyPointsEn: [
      'Least-privilege Entra RDP login -> Virtual Machine User Login',
      'Avoid Administrator Login unless local admin rights are required',
    ],
    referenceTopic: 'Azure Arc / VM への Microsoft Entra サインインと Azure RBAC',
  },
  {
    id: 'pdf-q70',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Bicep による Azure Storage の HTTPS 強制とキー出力保護',
    titleEn: 'Securing Bicep Storage Templates with HTTPS Enforcement and @secure Output',
    scenarioJa: `規制対象データを格納する Azure Storage アカウント用の Bicep ファイルがあります。次の要件を満たすように修正する必要があります。
・HTTPS のみのトラフィックを要求する。
・デプロイの出力でストレージ アカウントのキーが公開されないようにする。

候補値：\`@description\`、\`@secure\`、\`listKeys\`、\`publicNetworkAccess\`、\`reference\`、\`supportsHttpsTrafficOnly\`

\`\`\`bicep
param location string = resourceGroup().location
param storageName string = 'st\${uniqueString(resourceGroup().id)}'
resource stg 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: storageName
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    （空欄1）: true
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
  }
}
（空欄2）()
output storageAccountKey string = （空欄3）(stg.id, '2023-01-01').keys[0].value
\`\`\``,
    scenarioEn: `You have a Bicep template for an Azure Storage account storing regulated data. You need to update it to:
- Require HTTPS-only traffic.
- Prevent the storage account key from being exposed in deployment outputs.

Candidate values: \`@description\`, \`@secure\`, \`listKeys\`, \`publicNetworkAccess\`, \`reference\`, \`supportsHttpsTrafficOnly\`

\`\`\`bicep
param location string = resourceGroup().location
param storageName string = 'st\${uniqueString(resourceGroup().id)}'
resource stg 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: storageName
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    (Blank 1): true
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
  }
}
(Blank 2)()
output storageAccountKey string = (Blank 3)(stg.id, '2023-01-01').keys[0].value
\`\`\``,
    questionJa: 'Bicep コードの空欄1～3に入る値の正しい組み合わせはどれですか。',
    questionEn: 'Which combination of values correctly fills Blanks 1, 2, and 3 in the Bicep code?',
    options: [
      {
        id: 'A',
        textJa: '空欄1：publicNetworkAccess、空欄2：reference、空欄3：listKeys',
        textEn: 'Blank 1: publicNetworkAccess / Blank 2: reference / Blank 3: listKeys',
        isCorrect: false,
        explanationJa: '【不正解】publicNetworkAccess は真偽値ではなく Enabled/Disabled を取ります。また @secure() でないと出力値が保護されません。',
        explanationEn: 'publicNetworkAccess takes string values ("Enabled"/"Disabled") rather than boolean, and reference() is not an output protection decorator.',
      },
      {
        id: 'B',
        textJa: '空欄1：supportsHttpsTrafficOnly、空欄2：@description、空欄3：reference',
        textEn: 'Blank 1: supportsHttpsTrafficOnly / Blank 2: @description / Blank 3: reference',
        isCorrect: false,
        explanationJa: '【不正解】@description は説明文のメタデータであり、機密値のログ記録を防ぎません。また keys[0].value の取得には listKeys() を使用します。',
        explanationEn: '@description does not mask secret outputs, and reference() does not return account keys.',
      },
      {
        id: 'C',
        textJa: '空欄1：reference、空欄2：reference、空欄3：publicNetworkAccess',
        textEn: 'Blank 1: reference / Blank 2: reference / Blank 3: publicNetworkAccess',
        isCorrect: false,
        explanationJa: '【不正解】プロパティ名・デコレーター・関数がすべて誤っています。',
        explanationEn: 'All three placeholders are assigned incorrect property, decorator, and function names.',
      },
      {
        id: 'D',
        textJa: '空欄1：reference、空欄2：@description、空欄3：publicNetworkAccess',
        textEn: 'Blank 1: reference / Blank 2: @description / Blank 3: publicNetworkAccess',
        isCorrect: false,
        explanationJa: '【不正解】HTTPS 強制も、シークレット出力の保護も、キー取得も実現できません。',
        explanationEn: 'None of the three blanks fulfill HTTPS enforcement, secure output masking, or key retrieval.',
      },
      {
        id: 'E',
        textJa: '空欄1：supportsHttpsTrafficOnly、空欄2：@secure、空欄3：listKeys',
        textEn: 'Blank 1: supportsHttpsTrafficOnly / Blank 2: @secure / Blank 3: listKeys',
        isCorrect: true,
        explanationJa: '【正解】空欄1に supportsHttpsTrafficOnly: true（HTTPS 必須化）、空欄2に @secure()（デプロイ履歴への平文出力防止）、空欄3に listKeys(...)（アクセス キー配列の取得）を指定します。',
        explanationEn: 'Blank 1 uses supportsHttpsTrafficOnly: true to enforce HTTPS; Blank 2 uses @secure() to mask the output in deployment logs; Blank 3 uses listKeys() to retrieve .keys[0].value.',
      },
      {
        id: 'F',
        textJa: '空欄1：publicNetworkAccess、空欄2：@secure、空欄3：reference',
        textEn: 'Blank 1: publicNetworkAccess / Blank 2: @secure / Blank 3: reference',
        isCorrect: false,
        explanationJa: '【不正解】空欄1は supportsHttpsTrafficOnly、空欄3は listKeys である必要があります。',
        explanationEn: 'Blank 1 must be supportsHttpsTrafficOnly and Blank 3 must be listKeys.',
      },
    ],
    overallExplanationJa: `Azure Storage の Bicep 定義では、\`supportsHttpsTrafficOnly: true\` で非暗号化 HTTP を禁止し、出力に \`@secure()\` デコレーターを付与することでデプロイ履歴でのキー露出を防ぎます（通常はそもそもキーを output しないのがベストプラクティスですが、出力が必要な場合は @secure() を使用します）。`,
    overallExplanationEn: `In Bicep, set supportsHttpsTrafficOnly: true for HTTPS-only storage access, decorate sensitive outputs with @secure() to prevent plain logging, and call listKeys() to access key arrays.`,
    keyPointsJa: [
      'HTTPS のみの要求 → supportsHttpsTrafficOnly: true',
      'デプロイ出力での秘密値保護 → @secure()',
      'ストレージ キー取得関数 → listKeys(stg.id, apiVersion).keys[0].value',
    ],
    keyPointsEn: [
      'Enforce HTTPS -> supportsHttpsTrafficOnly: true',
      'Protect output -> @secure()',
      'Retrieve keys -> listKeys()',
    ],
    referenceTopic: 'Azure Bicep Storage セキュリティ構成 & @secure()',
  },
  {
    id: 'pdf-q71',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '特定リソースのみの更新・削除を防止するリソース ロックの選択',
    titleEn: 'Applying Resource Locks to Prevent Modification and Deletion of a VNet Only',
    scenarioJa: `Sub1 という名前の Azure サブスクリプションに RG1 という名前のリソース グループがあります。RG1 には VNet1 という名前の仮想ネットワークと storage1 という名前のストレージ アカウントが含まれています。複数のエンジニアに Sub1 の所有者ロールが割り当てられています。
VNet1 の更新と削除を防ぐ必要がありますが、エンジニアが RG1 内の他のリソースを引き続き更新できるようにする必要があります。`,
    scenarioEn: `Subscription Sub1 has resource group RG1 containing VNet1 and storage1. Multiple engineers have the Owner role on Sub1.
You need to prevent VNet1 from being updated or deleted while allowing engineers to continue updating other resources in RG1.`,
    questionJa: '適用すべきロックを1つ選んでください。',
    questionEn: 'Which lock should you apply?',
    options: [
      {
        id: 'A',
        textJa: 'RG1 スコープの読み取り専用リソース ロック',
        textEn: 'A ReadOnly lock at the RG1 scope',
        isCorrect: false,
        explanationJa: '【不正解】RG1 に ReadOnly ロックを適用すると配下の storage1 にも継承され、他のリソースまで更新できなくなります。',
        explanationEn: 'A lock on RG1 is inherited by storage1 and would block updates to other resources in RG1.',
      },
      {
        id: 'B',
        textJa: 'RG1 スコープの削除リソース ロック',
        textEn: 'A CanNotDelete lock at the RG1 scope',
        isCorrect: false,
        explanationJa: '【不正解】CanNotDelete は更新（変更）を防げないうえ、RG1 配下の他リソースにも影響します。',
        explanationEn: 'CanNotDelete does not prevent updates, and applying it at RG1 affects all child resources.',
      },
      {
        id: 'C',
        textJa: 'VNet1 スコープの読み取り専用リソース ロック',
        textEn: 'A ReadOnly lock at the VNet1 scope',
        isCorrect: true,
        explanationJa: '【正解】VNet1 のスコープに読み取り専用 (ReadOnly) ロックを適用すれば、所有者であっても VNet1 の更新と削除がブロックされ、同じ RG1 内の storage1 等への更新には影響しません。',
        explanationEn: 'Applying a ReadOnly lock directly on VNet1 prevents both modifications and deletion of VNet1 without locking other resources in RG1.',
      },
      {
        id: 'D',
        textJa: 'VNet1 スコープの削除リソース ロック',
        textEn: 'A CanNotDelete lock at the VNet1 scope',
        isCorrect: false,
        explanationJa: '【不正解】CanNotDelete では VNet1 に対するアドレス空間やサブネット構成の更新を防ぐことができません。',
        explanationEn: 'CanNotDelete prevents deletion only and still allows configuration updates to VNet1.',
      },
    ],
    overallExplanationJa: `リソース ロックは適用先と配下へ継承されます。「更新と削除の両方を防ぐ」場合は ReadOnly ロックを、「対象リソースのみ」に効かせる場合は RG1 ではなく VNet1 自体のスコープへ割り当てます。`,
    overallExplanationEn: `Resource locks inherit downward. Use ReadOnly to block both updates and deletes, and scope it to VNet1 directly so other resources in RG1 remain editable.`,
    keyPointsJa: [
      '更新と削除の両方を禁止 → ReadOnly (読み取り専用) ロック',
      '他リソースへの継承を防ぐため対象リソース (VNet1) に直接設定',
    ],
    keyPointsEn: [
      'Block both update and delete -> ReadOnly lock',
      'Scope to VNet1 directly to avoid inheriting onto storage1',
    ],
    referenceTopic: 'Azure リソース ロック (ReadOnly / CanNotDelete)',
  },
  {
    id: 'pdf-q72',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: '複数の条件付きアクセス ポリシー（CA1 / CA2）によるアクセス判定評価',
    titleEn: 'Evaluating Combined Conditional Access Policies (CA1 and CA2)',
    scenarioJa: `次のユーザーが含まれる Microsoft Entra テナントがあります。

| 名前 | グループ メンバーシップ |
| :--- | :--- |
| User1 | Group1 |
| User2 | Group2 |
| User3 | なし |

企業ネットワークの IP アドレスを含む \`HQ-Trusted\` という名前の場所があります。

**条件付きアクセス ポリシー CA1:**
・割り当て：すべてのユーザー（除外：Group1）
・対象リソース：Office 365
・アクセス制御（許可）：多要素認証を必須にする ＋ デバイスが準拠としてマークされていることを必須にする（**選択したすべての制御を必須にする**）

**条件付きアクセス ポリシー CA2:**
・割り当て：すべてのユーザー（除外：Group2）
・対象リソース：すべてのリソース
・条件（ネットワーク）：任意のネットワークまたは場所（除外：HQ-Trusted）
・アクセス制御：**アクセスをブロックする**

**評価する記述:**
・記述1：User2 は自宅ネットワークから Microsoft 365 サービスにサインインできる。
・記述2：User3 は準拠デバイスを使用して、パブリック Wi-Fi ネットワークから Azure portal にサインインできる。
・記述3：User1 は HQ-Trusted ネットワークから Microsoft 365 サービスにサインインするとき、多要素認証（MFA）を求められる。`,
    scenarioEn: `A Microsoft Entra tenant contains the following users:

| Name | Group membership |
| :--- | :--- |
| User1 | Group1 |
| User2 | Group2 |
| User3 | None |

There is a named location \`HQ-Trusted\` containing corporate IP addresses.

**CA1:**
- Users: All users (Exclude: Group1)
- Target resources: Office 365
- Grant: Require MFA AND Require device to be marked as compliant (**Require all of the selected controls**)

**CA2:**
- Users: All users (Exclude: Group2)
- Target resources: All resources
- Conditions (Network): Any network or location (Exclude: HQ-Trusted)
- Grant: **Block access**

**Statements:**
- Statement 1: User2 can sign in to Microsoft 365 services from a home network.
- Statement 2: User3 can sign in to the Azure portal from a public Wi-Fi network using a compliant device.
- Statement 3: User1 is prompted for MFA when signing in to Microsoft 365 services from the HQ-Trusted network.`,
    questionJa: '各記述の真偽を示す組み合わせを1つ選んでください。',
    questionEn: 'Which combination correctly identifies the truth value of Statements 1–3?',
    options: [
      {
        id: 'A',
        textJa: '記述1：はい／記述2：いいえ／記述3：いいえ',
        textEn: 'Statement 1: Yes / Statement 2: No / Statement 3: No',
        isCorrect: true,
        explanationJa: '【正解】記述1：User2 (Group2) は CA2 のブロック対象外で、CA1 の条件（MFA＋準拠デバイス）を満たせば自宅から利用可能なため「はい」。記述2：User3 はパブリック Wi-Fi から全リソース対象の CA2 によりブロックされるため「いいえ」。記述3：User1 (Group1) は CA1 から除外され、HQ-Trusted からは CA2 も対象外のため MFA 要求はなく「いいえ」。',
        explanationEn: 'Statement 1 is Yes (User2 is excluded from CA2 and can satisfy CA1); Statement 2 is No (User3 on public Wi-Fi is blocked by CA2 for all resources); Statement 3 is No (User1 is excluded from CA1 and HQ-Trusted is excluded from CA2).',
      },
      {
        id: 'B',
        textJa: '記述1：はい／記述2：はい／記述3：はい',
        textEn: 'Statement 1: Yes / Statement 2: Yes / Statement 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】記述2の User3 は CA2 のブロックに該当し、記述3の User1 は CA1 の除外対象です。',
        explanationEn: 'User3 is blocked by CA2 on public Wi-Fi, and User1 is excluded from CA1.',
      },
      {
        id: 'C',
        textJa: '記述1：いいえ／記述2：いいえ／記述3：いいえ',
        textEn: 'Statement 1: No / Statement 2: No / Statement 3: No',
        isCorrect: false,
        explanationJa: '【不正解】User2 は Group2 として CA2 から除外されているため、自宅からもサインインできます（記述1は「はい」）。',
        explanationEn: 'User2 is excluded from CA2 via Group2 and can sign in after satisfying CA1.',
      },
      {
        id: 'D',
        textJa: '記述1：いいえ／記述2：はい／記述3：はい',
        textEn: 'Statement 1: No / Statement 2: Yes / Statement 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】3つの記述すべてが逆の判定になっています。',
        explanationEn: 'All three statements are evaluated in reverse.',
      },
      {
        id: 'E',
        textJa: '記述1：はい／記述2：はい／記述3：いいえ',
        textEn: 'Statement 1: Yes / Statement 2: Yes / Statement 3: No',
        isCorrect: false,
        explanationJa: '【不正解】準拠デバイスであっても CA2 の「アクセスをブロックする」を回避できないため、記述2は「いいえ」です。',
        explanationEn: 'Using a compliant device does not bypass CA2’s Block access control on public Wi-Fi.',
      },
      {
        id: 'F',
        textJa: '記述1：はい／記述2：いいえ／記述3：はい',
        textEn: 'Statement 1: Yes / Statement 2: No / Statement 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】User1 は Group1 に所属しており CA1 から除外されているため、記述3は「いいえ」です。',
        explanationEn: 'User1 is a member of Group1, which is excluded from CA1.',
      },
    ],
    overallExplanationJa: `条件付きアクセスでは各ポリシーの割り当て・除外を独立して評価し、適用されたすべてのポリシーを満たす必要があります。特に Block は他の許可条件（準拠デバイスなど）で上書きできません。`,
    overallExplanationEn: `Each Conditional Access policy evaluates inclusions and exclusions independently. Any matching Block policy denies access regardless of device compliance.`,
    keyPointsJa: [
      'User2 (Group2)：CA2 から除外 → CA1 の条件を満たせばアクセス可（記述1：はい）',
      'User3 (パブリック Wi-Fi)：CA2 が全リソースをブロック（記述2：いいえ）',
      'User1 (Group1, HQ-Trusted)：CA1・CA2 とも適用対象外（記述3：いいえ）',
    ],
    keyPointsEn: [
      'User2 (Group2) excluded from CA2 -> Yes',
      'User3 on public Wi-Fi blocked by CA2 -> No',
      'User1 (Group1) excluded from CA1 and from CA2 at HQ-Trusted -> No',
    ],
    referenceTopic: 'Microsoft Entra 条件付きアクセス ポリシー評価',
  },
  {
    id: 'pdf-q73',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '別テナント承認者による Recovery Services コンテナー変更保護 (MUA)',
    titleEn: 'Protecting Recovery Services Vault Changes with Cross-Tenant Multi-User Authorization',
    scenarioJa: `contoso.com という名前の Microsoft Entra テナントにリンクされた Sub1 サブスクリプションがあり、仮想マシンのバックアップを格納する RSVault1 という名前の Recovery Services コンテナーがあります。
会社のセキュリティ チームは、security.contoso.com という名前の専用の Microsoft Entra テナントを管理しています。
RSVault1 のバックアップ設定を変更するには、security.contoso.com 内の承認者による承認が必要となるようにする必要があります。`,
    scenarioEn: `Subscription Sub1 (linked to contoso.com) contains a Recovery Services vault named RSVault1 storing VM backups. Your security team manages a dedicated Microsoft Entra tenant named security.contoso.com.
You need to ensure that modifying RSVault1 backup settings requires approval from an approver in security.contoso.com.`,
    questionJa: 'contoso.com で行うべきことを1つ選んでください。',
    questionEn: 'What should you do in contoso.com?',
    options: [
      {
        id: 'A',
        textJa: 'RSVault1 のバックアップ不変性を有効にし、その不変性の設定をロックする。',
        textEn: 'Enable immutability on RSVault1 and lock the immutability setting.',
        isCorrect: false,
        explanationJa: '【不正解】不変性は保存済み復旧ポイントの削除や短縮を防ぐ機能であり、別テナントの承認者による操作認可を提供する機能ではありません。',
        explanationEn: 'Vault immutability prevents data deletion/shortening but does not enforce cross-tenant approver authorization.',
      },
      {
        id: 'B',
        textJa: 'VNet1 上に RSVault1 向けのプライベート エンドポイントを作成する。',
        textEn: 'Create a private endpoint for RSVault1 on a virtual network.',
        isCorrect: false,
        explanationJa: '【不正解】プライベート エンドポイントはネットワーク接続経路の分離であり、管理操作の多者承認とは無関係です。',
        explanationEn: 'Private endpoints secure network transport and do not enforce administrative approval.',
      },
      {
        id: 'C',
        textJa: 'バックアップ オペレーター (Backup Operator) ロールの PIM アクティブ化を構成する。',
        textEn: 'Configure PIM activation for the Backup Operator role.',
        isCorrect: false,
        explanationJa: '【不正解】PIM だけでは別テナントの Resource Guard に基づく重要操作保護を構成できません。',
        explanationEn: 'PIM role activation does not bind critical vault operations to a Resource Guard in another tenant.',
      },
      {
        id: 'D',
        textJa: 'RSVault1 のマルチユーザー認可 (Multi-user authorization (MUA)) を有効にする。',
        textEn: 'Enable Multi-user authorization (MUA) on RSVault1.',
        isCorrect: true,
        explanationJa: '【正解】contoso.com 側の RSVault1 でマルチユーザー認可 (MUA) を有効にし、security.contoso.com 側で管理する Resource Guard に関連付けることで、設定変更や保護停止などの重要操作に別テナント承認者の権限確認を強制できます。',
        explanationEn: 'Enabling MUA on RSVault1 and linking it to a Resource Guard managed in security.contoso.com ensures critical vault changes require cross-tenant approval.',
      },
    ],
    overallExplanationJa: `Azure Backup のマルチユーザー認可 (MUA) は、別サブスクリプションまたは別テナント（Azure Lighthouse 経由など）に配置された Resource Guard とコンテナーを関連付け、管理権限の分離と事前承認を実現します。`,
    overallExplanationEn: `Azure Backup Multi-User Authorization (MUA) uses a Resource Guard (which can live in a separate tenant) to add an independent authorization layer over critical Recovery Services vault operations.`,
    keyPointsJa: [
      'バックアップ重要操作の多者・別テナント承認 → マルチユーザー認可 (MUA)',
      'コンテナー側で MUA 有効化 ＋ 承認側で Resource Guard 管理',
    ],
    keyPointsEn: [
      'Cross-tenant approval for vault settings -> Multi-user authorization (MUA)',
      'Links RSVault1 to a Resource Guard managed by security approvers',
    ],
    referenceTopic: 'Azure Backup マルチユーザー認可 (MUA) & Resource Guard',
  },
  {
    id: 'pdf-q74',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '複数サブスクリプション間でのバックアップ管理・承認分離 (MUA + Resource Guard)',
    titleEn: 'Separating Backup Administration and Approval Across Subscriptions',
    scenarioJa: `Sub1 と Sub2 という2つの Azure サブスクリプションと、Group1・Group2 という2つのグループがあります。Group1 は Sub1 にのみアクセスでき、Group2 は Sub2 にのみアクセスできます。
Sub1 には、Group1 によって管理されている RSVault1 という Recovery Services コンテナーがあります。
RSVault1 のバックアップ設定を変更するには、Group2 の承認者による承認が必要になるようにする必要があります。

機能の候補：Azure Backup コンテナー / マルチユーザー認可 (MUA) / Recovery Services コンテナー / 不変性 / PIM / Resource Guard`,
    scenarioEn: `You have two Azure subscriptions (Sub1, Sub2) and two groups (Group1 accesses Sub1 only; Group2 accesses Sub2 only).
Sub1 contains a Recovery Services vault named RSVault1 managed by Group1.
Changing RSVault1 backup settings must require approval from approvers in Group2.
Candidate features: Azure Backup vault, Multi-user authorization (MUA), Recovery Services vault, Immutability, PIM, Resource Guard.`,
    questionJa: '各サブスクリプションに構成する機能の組み合わせを1つ選んでください。',
    questionEn: 'Which combination of features should you configure in Sub1 and Sub2?',
    options: [
      {
        id: 'A',
        textJa: 'Sub1：マルチユーザー認可 (MUA)／Sub2：Privileged Identity Management (PIM)',
        textEn: 'Sub1: Multi-user authorization (MUA) / Sub2: PIM',
        isCorrect: false,
        explanationJa: '【不正解】Sub2 には MUA と関連付けるための Resource Guard リソースをデプロイする必要があります。',
        explanationEn: 'Sub2 needs a Resource Guard resource to link with MUA on RSVault1.',
      },
      {
        id: 'B',
        textJa: 'Sub1：Azure Backup コンテナー／Sub2：Resource Guard',
        textEn: 'Sub1: Azure Backup vault / Sub2: Resource Guard',
        isCorrect: false,
        explanationJa: '【不正解】既存の RSVault1 に対して必要な設定はコンテナー新設ではなく MUA の有効化です。',
        explanationEn: 'You need to enable MUA on the existing RSVault1 rather than creating a new Backup vault.',
      },
      {
        id: 'C',
        textJa: 'Sub1：マルチユーザー認可 (MUA)／Sub2：Resource Guard',
        textEn: 'Sub1: Multi-user authorization (MUA) / Sub2: Resource Guard',
        isCorrect: true,
        explanationJa: '【正解】Sub1 の RSVault1 側で「マルチユーザー認可 (MUA)」を有効化し、Group2 だけが管理する Sub2 に「Resource Guard」を作成して関連付けることで、Group1 単独でのバックアップ設定変更を防げます。',
        explanationEn: 'Enable MUA on RSVault1 in Sub1 and deploy Resource Guard in Sub2 (managed by Group2) so Group1 cannot modify critical settings without Group2 approval.',
      },
      {
        id: 'D',
        textJa: 'Sub1：Recovery Services コンテナー／Sub2：PIM',
        textEn: 'Sub1: Recovery Services vault / Sub2: PIM',
        isCorrect: false,
        explanationJa: '【不正解】MUA と Resource Guard の関連付けが構成されません。',
        explanationEn: 'This neither enables MUA nor deploys a Resource Guard.',
      },
      {
        id: 'E',
        textJa: 'Sub1：Azure Backup コンテナー／Sub2：不変性',
        textEn: 'Sub1: Azure Backup vault / Sub2: Immutability',
        isCorrect: false,
        explanationJa: '【不正解】不変性は別サブスクリプションから他サブスクリプションのコンテナー変更を承認する仕組みではありません。',
        explanationEn: 'Immutability does not act as a cross-subscription approval resource.',
      },
      {
        id: 'F',
        textJa: 'Sub1：Recovery Services コンテナー／Sub2：不変性',
        textEn: 'Sub1: Recovery Services vault / Sub2: Immutability',
        isCorrect: false,
        explanationJa: '【不正解】Group2 による承認機能を提供できません。',
        explanationEn: 'This does not enforce approval by Group2.',
      },
    ],
    overallExplanationJa: `バックアップ管理と承認を別サブスクリプション（Group1 vs Group2）に分離する場合、保護対象のコンテナーがある Sub1 側で MUA を有効にし、承認者が管理する Sub2 側に Resource Guard リソースを配置して関連付けます。`,
    overallExplanationEn: `Separate backup administration from approval by configuring MUA on the vault in Sub1 and deploying the linked Resource Guard in Sub2 under Group2's control.`,
    keyPointsJa: [
      '保護コンテナー側 (Sub1) → マルチユーザー認可 (MUA)',
      '承認者側 (Sub2) → Resource Guard',
    ],
    keyPointsEn: [
      'Protected vault subscription (Sub1) -> MUA',
      'Approver subscription (Sub2) -> Resource Guard',
    ],
    referenceTopic: 'Azure Backup MUA & サブスクリプション間 Resource Guard 分離',
  },
  {
    id: 'pdf-q75',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Key Vault のプライベート IP 接続強制と外部要求拒否（2つ選択）',
    titleEn: 'Enforcing Private Endpoint Access and Denying External Requests to Key Vault (Select 2)',
    scenarioJa: `KV1 という名前の Azure Key Vault と、App1 という名前の Azure App Service Web アプリがあります。App1 は Azure Private DNS ゾーンにリンクされた VNet1 に統合されており、KV1 のシークレットにアクセスします。

次の要件を満たすように KV1 を構成する必要があります。
・App1 は、VNet1 上のプライベート IP アドレスを使用してシークレットにアクセスする必要がある。
・VNet1 の外部からの要求は拒否される必要がある。`,
    scenarioEn: `You have an Azure Key Vault named KV1 and an App Service web app named App1 integrated with VNet1 (linked to an Azure Private DNS zone).
You need to configure KV1 so that:
- App1 accesses secrets using a private IP address on VNet1.
- Requests from outside VNet1 are denied.`,
    questionJa: 'KV1 に対して実行すべき操作を2つ選んでください。',
    questionEn: 'Which two actions should you perform on KV1?',
    requiredSelections: 2,
    options: [
      {
        id: 'A',
        textJa: 'プライベート エンドポイントを作成する。',
        textEn: 'Create a private endpoint.',
        isCorrect: true,
        explanationJa: '【正解】VNet1 内に KV1 用のプライベート エンドポイントを作成することで、Private DNS 経由でプライベート IP アドレスを使ったシークレット アクセスが可能になります。',
        explanationEn: 'Creating a private endpoint in VNet1 provides a private IP address for KV1 resolved via the Private DNS zone.',
      },
      {
        id: 'B',
        textJa: 'App1 の IP アドレスを追加する。',
        textEn: 'Add App1’s IP addresses.',
        isCorrect: false,
        explanationJa: '【不正解】パブリック IP の許可リスト追加は公開エンドポイント経由の通信を許可するものであり、プライベート IP 接続になりません。',
        explanationEn: 'Adding outbound IPs to the firewall allows public endpoint traffic rather than enforcing private IP access.',
      },
      {
        id: 'C',
        textJa: 'パブリック アクセスを無効にする。',
        textEn: 'Disable public access.',
        isCorrect: true,
        explanationJa: '【正解】パブリック ネットワーク アクセスを無効 (Disabled) にすることで、VNet1 外部からの公開エンドポイント宛て要求をすべて拒否できます。',
        explanationEn: 'Disabling public network access ensures all requests from outside VNet1 to the public endpoint are denied.',
      },
      {
        id: 'D',
        textJa: 'アクセス ポリシーを作成する。',
        textEn: 'Create an access policy.',
        isCorrect: false,
        explanationJa: '【不正解】アクセス ポリシーはシークレット操作の認可であり、プライベート IP 接続や外部ネットワーク遮断の要件を満たしません。',
        explanationEn: 'Access policies control data-plane permissions rather than network isolation.',
      },
    ],
    overallExplanationJa: `PaaS リソースへのプライベート接続を強制するには、(1) 仮想ネットワークに「プライベート エンドポイントを作成する」ことと、(2) 公開側の到達性を閉じるために「パブリック アクセスを無効にする」ことの2つを組み合わせます。`,
    overallExplanationEn: `Enforcing private-only access to Azure Key Vault requires both creating a private endpoint in VNet1 and disabling public network access.`,
    keyPointsJa: [
      'プライベート IP 経由のアクセス → プライベート エンドポイント作成',
      '外部からの要求拒否 → パブリック アクセス無効化 (publicNetworkAccess: Disabled)',
    ],
    keyPointsEn: [
      'Private IP access -> Create private endpoint',
      'Block external requests -> Disable public network access',
    ],
    referenceTopic: 'Azure Key Vault プライベート エンドポイント & ネットワーク分離',
  },
  {
    id: 'pdf-q76',
    domain: 'Entra ID & CIEM',
    difficulty: '高度 (Expert)',
    titleJa: 'AND / OR 制御を含む条件付きアクセス ポリシーの複合評価',
    titleEn: 'Evaluating Conditional Access Policies with AND vs. OR Grant Controls',
    scenarioJa: `次のユーザーを含む Microsoft Entra テナントがあります。

| 名前 | ロール | グループのメンバーシップ |
| :--- | :--- | :--- |
| User1 | グローバル管理者 | Group1 |
| User2 | なし | Group1 |
| User3 | グローバル管理者 | なし |

**ポリシー CA1:**
・割り当て：ディレクトリ ロール「グローバル管理者」
・ターゲット リソース：すべてのリソース
・ネットワーク：任意のネットワークまたは場所
・アクセス制御（許可）：多要素認証を要求する ＋ デバイスが準拠としてマークされていることを要求する（**選択したすべての制御を必須にする / AND**）

**ポリシー CA2:**
・割り当て：ユーザーとグループ「Group1」
・ターゲット リソース：Office 365
・ネットワーク：任意のネットワークまたは場所
・アクセス制御（許可）：多要素認証を要求する ＋ アプリ保護ポリシーを要求する（**選択した制御のいずれか1つを必須にする / OR**）

**ユーザーの操作:**
・User1：準拠していないデバイス上の Outlook から Microsoft 365 にサインイン
・User2：アプリ保護ポリシーなし、かつ準拠していないデバイスから Microsoft 365 にサインイン
・User3：準拠しているデバイスから Azure portal にサインイン`,
    scenarioEn: `A Microsoft Entra tenant includes the following users:

| Name | Role | Group membership |
| :--- | :--- | :--- |
| User1 | Global Administrator | Group1 |
| User2 | None | Group1 |
| User3 | Global Administrator | None |

**CA1:**
- Users: Directory role Global Administrator
- Target resources: All resources
- Network: Any network or location
- Grant: Require MFA AND Require device to be marked as compliant (**Require all selected controls**)

**CA2:**
- Users: Group1
- Target resources: Office 365
- Network: Any network or location
- Grant: Require MFA OR Require app protection policy (**Require one of the selected controls**)

**User actions:**
- User1 signs in to Microsoft 365 from Outlook on a non-compliant device.
- User2 signs in to Microsoft 365 from a non-compliant device without an app protection policy.
- User3 signs in to the Azure portal from a compliant device.`,
    questionJa: '記述1（User1 の M365 許可）、記述2（User2 の M365 許可）、記述3（User3 の Azure portal 許可）について、MFA 完了後にアクセスが許可されるかどうかの真偽の組み合わせを1つ選んでください。',
    questionEn: 'After completing MFA, which combination correctly reflects whether Statements 1–3 are granted access?',
    options: [
      {
        id: 'A',
        textJa: '記述1：はい、記述2：はい、記述3：はい',
        textEn: 'Statement 1: Yes, Statement 2: Yes, Statement 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】User1 にはグローバル管理者として CA1（AND 条件）も適用されるため、準拠デバイスでない限り許可されません。',
        explanationEn: 'User1 is also subject to CA1 (Global Administrator) and fails the device compliance requirement.',
      },
      {
        id: 'B',
        textJa: '記述1：いいえ、記述2：いいえ、記述3：はい',
        textEn: 'Statement 1: No, Statement 2: No, Statement 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】User2 は CA2 のみ適用され、CA2 は OR 条件（MFA またはアプリ保護ポリシーのいずれか1つ）のため、MFA 完了により許可されます。',
        explanationEn: 'User2 is only governed by CA2, which uses OR logic—completing MFA satisfies CA2.',
      },
      {
        id: 'C',
        textJa: '記述1：はい、記述2：いいえ、記述3：はい',
        textEn: 'Statement 1: Yes, Statement 2: No, Statement 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】記述1と記述2の判定が逆になっています。',
        explanationEn: 'Statements 1 and 2 are reversed.',
      },
      {
        id: 'D',
        textJa: '記述1：いいえ、記述2：はい、記述3：はい',
        textEn: 'Statement 1: No, Statement 2: Yes, Statement 3: Yes',
        isCorrect: true,
        explanationJa: '【正解】User1 は CA1 (MFA AND 準拠デバイス) により非準拠デバイスでは拒否（いいえ）。User2 は CA2 (MFA OR アプリ保護) のみ対象のため MFA 完了で許可（はい）。User3 は CA1 のみ対象で準拠デバイス＋MFA を満たすため許可（はい）。',
        explanationEn: 'User1 fails CA1’s AND requirement for a compliant device (No); User2 only matches CA2’s OR policy and passes with MFA (Yes); User3 matches CA1 and has a compliant device + MFA (Yes).',
      },
      {
        id: 'E',
        textJa: '記述1：いいえ、記述2：はい、記述3：いいえ',
        textEn: 'Statement 1: No, Statement 2: Yes, Statement 3: No',
        isCorrect: false,
        explanationJa: '【不正解】User3 は Group1 外かつ接続先も Azure portal なので CA2 は対象外であり、CA1 を満たすため許可されます。',
        explanationEn: 'User3 satisfies CA1 and is not targeted by CA2.',
      },
      {
        id: 'F',
        textJa: '記述1：はい、記述2：はい、記述3：いいえ',
        textEn: 'Statement 1: Yes, Statement 2: Yes, Statement 3: No',
        isCorrect: false,
        explanationJa: '【不正解】User1 と User3 の判定が逆です。',
        explanationEn: 'Statements 1 and 3 are evaluated incorrectly.',
      },
    ],
    overallExplanationJa: `複数ポリシーが一致する場合、ユーザーは一致した「すべての」ポリシーを満たさなければなりません。CA1 は「すべて必須 (AND)」、CA2 は「いずれか1つ必須 (OR)」である点に注意して評価します。`,
    overallExplanationEn: `Users must satisfy every matching Conditional Access policy. Pay close attention to "Require all" (AND) on CA1 versus "Require one" (OR) on CA2.`,
    keyPointsJa: [
      'User1 (グローバル管理者＋Group1)：CA1 の AND 条件で準拠デバイス必須 → 不可',
      'User2 (Group1 のみ)：CA2 の OR 条件 → MFA 完了だけで可',
      'User3 (グローバル管理者のみ)：CA1 対象・準拠デバイス＋MFA → 可',
    ],
    keyPointsEn: [
      'User1 (CA1 + CA2): Fails CA1 compliant device AND check',
      'User2 (CA2 only): Passes CA2 OR check via MFA',
      'User3 (CA1 only): Passes CA1 with compliant device + MFA',
    ],
    referenceTopic: 'Microsoft Entra 条件付きアクセス (AND / OR 制御)',
  },
  {
    id: 'pdf-q77',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '動的 IP の VM からファイアウォール有効 Key Vault へのサブネット許可接続',
    titleEn: 'Allowing Dynamic-IP VM Access to Firewalled Key Vault via Service Endpoint',
    scenarioJa: `VNet1 という名前の仮想ネットワークがあり、Subnet1 という名前のサブネットと VM1 という名前の仮想マシンが含まれています。VM1 は Subnet1 からの動的 IP アドレスのみを使用します。
KV1 という名前の Azure Key Vault でファイアウォールを有効にし、選択した仮想ネットワークと IP アドレスからのみアクセスを許可しています。
VM1 が KV1 にアクセスしようとすると 403 エラーが発生します。
KV1 の現在の制限を維持しながら、VM1 が KV1 にアクセスできるようにする必要があります。`,
    scenarioEn: `Virtual network VNet1 has subnet Subnet1 and VM1, which uses only a dynamic IP address from Subnet1.
Azure Key Vault KV1 has its firewall enabled to allow access only from selected virtual networks and IP addresses.
VM1 receives a 403 error when accessing KV1. You need to allow VM1 to access KV1 while preserving KV1’s current firewall restrictions.`,
    questionJa: '何をすべきですか。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Subnet1 にカスタム ユーザー定義のルーティング規則を作成する。',
        textEn: 'Create a user-defined routing rule on Subnet1 for KV1.',
        isCorrect: false,
        explanationJa: '【不正解】ユーザー定義ルートでは Key Vault ファイアウォールにサブネットを識別・許可させることはできません。',
        explanationEn: 'Routing rules cannot authorize Subnet1 in the Key Vault firewall.',
      },
      {
        id: 'B',
        textJa: '信頼された Microsoft サービスが KV1 のファイアウォールをバイパスすることを許可する。',
        textEn: 'Allow trusted Microsoft services to bypass KV1’s firewall.',
        isCorrect: false,
        explanationJa: '【不正解】VM1 上の独自ワークロードは「信頼された Microsoft サービス」の例外対象に含まれません。',
        explanationEn: 'User VMs are not included in the Trusted Microsoft Services bypass list.',
      },
      {
        id: 'C',
        textJa: 'Subnet1 に Microsoft.KeyVault サービス エンドポイントを追加する。',
        textEn: 'Add the Microsoft.KeyVault service endpoint to Subnet1.',
        isCorrect: true,
        explanationJa: '【正解】Subnet1 に Microsoft.KeyVault サービス エンドポイントを追加し、KV1 の仮想ネットワーク規則で Subnet1 を許可することで、VM1 の動的プライベート IP に依存せずサブネット単位で安全に接続を許可できます。',
        explanationEn: 'Adding the Microsoft.KeyVault service endpoint to Subnet1 lets KV1 recognize and allow traffic from Subnet1 regardless of VM1’s dynamic IP.',
      },
      {
        id: 'D',
        textJa: 'VM1 の現在の IPv4 アドレスを KV1 のファイアウォールの許可リストに追加する。',
        textEn: 'Add VM1’s current IPv4 address to KV1’s firewall allowlist.',
        isCorrect: false,
        explanationJa: '【不正解】Key Vault の IP ファイアウォール規則はパブリック IPv4 用であり、動的プライベート IP には対応せず運用も破綻します。',
        explanationEn: 'Key Vault IP firewall rules only accept public IPv4 ranges, not private dynamic VM IPs.',
      },
    ],
    overallExplanationJa: `選択した仮想ネットワークからのみ許可する Key Vault ファイアウォール構成では、対象サブネット（Subnet1）に \`Microsoft.KeyVault\` サービス エンドポイントを有効にし、Key Vault 側の VNet 規則にそのサブネットを追加します。`,
    overallExplanationEn: `To permit a subnet in Key Vault’s VNet firewall rules, enable the Microsoft.KeyVault service endpoint on the subnet and add the subnet to Key Vault’s virtual network rules.`,
    keyPointsJa: [
      'サブネット単位の PaaS ファイアウォール許可 → Microsoft.KeyVault サービス エンドポイント',
      'IP 規則はパブリック IP 用であり、VM の動的プライベート IP では使用しない',
    ],
    keyPointsEn: [
      'Subnet-based Key Vault firewall access -> Microsoft.KeyVault service endpoint',
      'Key Vault IP rules do not accept private VM IPs',
    ],
    referenceTopic: 'Azure Key Vault ファイアウォール & サービス エンドポイント',
  },
  {
    id: 'pdf-q78',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure Storage Bicep コードにおける匿名公開・VNet 規則・TLS 制御の読み取り',
    titleEn: 'Evaluating Azure Storage Security Controls in a Bicep Template',
    scenarioJa: `IaC を使用して Azure Storage アカウントのセキュリティ制御を実装しています。次の Bicep コードをデプロイします。

\`\`\`bicep
param storageAccountName string
param subnetResourceId string
resource stg 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageAccountName
  location: resourceGroup().location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    networkAcls: {
      defaultAction: 'Deny'
      bypass: 'AzureServices'
      virtualNetworkRules: [
        {
          id: subnetResourceId
        }
      ]
    }
  }
}
\`\`\`

| レコード | 記述 |
| :--- | :--- |
| 1 | ストレージ アカウント内のコンテナーに匿名読み取りアクセスを設定できる。 |
| 2 | \`subnetResourceId\` で指定されたサブネット内のリソースは、ストレージ アカウントにアクセスできる。 |
| 3 | 一覧にないパブリック IP アドレスから発信され、TLS 1.2 を使用するクライアント接続は、ストレージ アカウントにアクセスできる。 |`,
    scenarioEn: `You deploy the following Bicep code for an Azure Storage account:

\`\`\`bicep
param storageAccountName string
param subnetResourceId string
resource stg 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageAccountName
  location: resourceGroup().location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    networkAcls: {
      defaultAction: 'Deny'
      bypass: 'AzureServices'
      virtualNetworkRules: [
        {
          id: subnetResourceId
        }
      ]
    }
  }
}
\`\`\`

| Record | Statement |
| :--- | :--- |
| 1 | Anonymous read access can be configured on a container in the storage account. |
| 2 | Resources in the subnet specified by \`subnetResourceId\` can access the storage account. |
| 3 | Client connections from unlisted public IP addresses using TLS 1.2 can access the storage account. |`,
    questionJa: '各記述に対する、はい／いいえの正しい組み合わせを1つ選んでください。',
    questionEn: 'Which Yes/No combination is correct for Records 1–3?',
    options: [
      {
        id: 'A',
        textJa: 'レコード1：はい、レコード2：はい、レコード3：いいえ',
        textEn: 'Record 1: Yes, Record 2: Yes, Record 3: No',
        isCorrect: false,
        explanationJa: '【不正解】allowBlobPublicAccess: false によりアカウント全体でコンテナー単位の匿名アクセス設定も禁止されます。',
        explanationEn: 'allowBlobPublicAccess: false blocks container-level anonymous read access across the entire account.',
      },
      {
        id: 'B',
        textJa: 'レコード1：いいえ、レコード2：いいえ、レコード3：はい',
        textEn: 'Record 1: No, Record 2: No, Record 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】subnetResourceId は virtualNetworkRules で許可されており、一方で一覧外のパブリック IP は defaultAction: Deny で拒否されます。',
        explanationEn: 'subnetResourceId is allowed via virtualNetworkRules, whereas unlisted public IPs are denied by defaultAction: Deny.',
      },
      {
        id: 'C',
        textJa: 'レコード1：はい、レコード2：いいえ、レコード3：はい',
        textEn: 'Record 1: Yes, Record 2: No, Record 3: Yes',
        isCorrect: false,
        explanationJa: '【不正解】レコード1〜3すべてがプロパティ定義と逆の解釈になっています。',
        explanationEn: 'Records 1, 2, and 3 all contradict the template properties.',
      },
      {
        id: 'D',
        textJa: 'レコード1：いいえ、レコード2：はい、レコード3：いいえ',
        textEn: 'Record 1: No, Record 2: Yes, Record 3: No',
        isCorrect: true,
        explanationJa: '【正解】レコード1：allowBlobPublicAccess が false のため「いいえ」。レコード2：virtualNetworkRules に subnetResourceId が指定されているため「はい」。レコード3：defaultAction が Deny のため TLS 1.2 でも未許可 IP は拒否され「いいえ」。',
        explanationEn: 'Record 1 is No (allowBlobPublicAccess: false); Record 2 is Yes (virtualNetworkRules includes subnetResourceId); Record 3 is No (defaultAction: Deny blocks unlisted public IPs regardless of TLS version).',
      },
    ],
    overallExplanationJa: `Azure Storage Bicep の各セキュリティ プロパティは独立して作用します。\`allowBlobPublicAccess: false\` はコンテナー単位の匿名公開も全面禁止し、\`networkAcls.defaultAction: 'Deny'\` は許可リストにない接続元を TLS バージョンに関わらず遮断します。`,
    overallExplanationEn: `Each security property acts independently: allowBlobPublicAccess: false disables anonymous container access, virtualNetworkRules permits the specified subnet, and defaultAction: 'Deny' rejects unlisted public IPs even over TLS 1.2.`,
    keyPointsJa: [
      'allowBlobPublicAccess: false → コンテナー単位でも匿名アクセス設定不可',
      'virtualNetworkRules に id 指定 → 当該サブネットからアクセス可',
      'defaultAction: Deny → 一覧外のパブリック IP は TLS 1.2 でも拒否',
    ],
    keyPointsEn: [
      'allowBlobPublicAccess: false disables container anonymous access',
      'virtualNetworkRules permits subnetResourceId',
      'defaultAction: Deny blocks unlisted public IPs even on TLS 1.2',
    ],
    referenceTopic: 'Azure Storage Bicep セキュリティ プロパティ評価',
  },
  {
    id: 'pdf-q79',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft Authenticator を主要なパスワードレス認証方法として有効化',
    titleEn: 'Enabling Microsoft Authenticator as a Primary Passwordless Authentication Method',
    scenarioJa: `Group1 という名前のグループを含む Microsoft Entra テナントがあり、Group1 を対象に Microsoft Authenticator 認証方法を使用する予定です。
Group1 のメンバーが Authenticator アプリを「主要な認証方法（パスワードを使わないサインイン）」として使用できるようにする必要があります。`,
    scenarioEn: `Your Microsoft Entra tenant contains a group named Group1. You plan to use the Microsoft Authenticator authentication method for Group1.
You need to enable Group1 members to use the Authenticator app as their primary authentication method.`,
    questionJa: '実行すべきことを次のうち1つ選んでください。',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Group1 に対して Authenticator のワンタイム パスコード認証を有効にする。',
        textEn: 'Enable the Authenticator one-time passcode authentication method for Group1.',
        isCorrect: false,
        explanationJa: '【不正解】OTP はパスワードに追加する第2要素（MFA）であり、パスワードを使わない主要なサインイン方式ではありません。',
        explanationEn: 'One-time passcodes serve as a second factor after a password rather than primary passwordless sign-in.',
      },
      {
        id: 'B',
        textJa: 'Group1 のメンバーのサインイン セッションを強制的に取り消す。',
        textEn: 'Revoke all active sign-in sessions for every member of Group1.',
        isCorrect: false,
        explanationJa: '【不正解】セッション失効は再認証を求めるだけであり、パスワードレス認証方式を有効化しません。',
        explanationEn: 'Revoking sessions forces re-authentication but does not enable passwordless sign-in.',
      },
      {
        id: 'C',
        textJa: 'Group1 に対して Authenticator のプッシュ通知認証モードを有効にする。',
        textEn: 'Enable the Authenticator push notification authentication method for Group1.',
        isCorrect: false,
        explanationJa: '【不正解】プッシュ通知モードはパスワード入力後の MFA 承認用であり、パスワードを置き換える電話サインインとは別モードです。',
        explanationEn: 'Push mode is used for secondary MFA approval after entering a password, not passwordless primary authentication.',
      },
      {
        id: 'D',
        textJa: 'Group1 に対して Authenticator のパスワードレス認証方法を有効にする。',
        textEn: 'Enable the Authenticator passwordless authentication method for Group1.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Entra 認証方法ポリシーで Group1 を対象に「パスワードレス (Passwordless)」認証モードを有効にすることで、電話によるサインインをパスワードの代わりの主要な認証方法として利用できます。',
        explanationEn: 'Enabling Passwordless mode in the Microsoft Authenticator authentication methods policy for Group1 allows members to sign in without a password.',
      },
    ],
    overallExplanationJa: `Microsoft Authenticator 認証方法ポリシーでは、認証モードとして「プッシュ（MFA 用）」「パスワードレス（電話サインイン用）」「任意 (Any)」を選択できます。主要なサインイン方法として使うには「パスワードレス」を有効化します。`,
    overallExplanationEn: `In Microsoft Entra Authentication Methods policies, set Microsoft Authenticator's authentication mode to Passwordless (or Any) for Group1 so users can use phone sign-in as their primary credential.`,
    keyPointsJa: [
      'パスワードの代わりにサインイン → パスワードレス認証モード',
      'プッシュ通知や OTP はパスワード後の MFA 追加要素',
    ],
    keyPointsEn: [
      'Primary sign-in without password -> Passwordless authentication mode',
      'Push notifications and OTPs are secondary MFA factors',
    ],
    referenceTopic: 'Microsoft Entra パスワードレス電話サインイン',
  },
  {
    id: 'pdf-q80',
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'サードパーティへの時間制限付き・最小特権 Blob アップロード認可 (ユーザー委任 SAS)',
    titleEn: 'Providing Time-Limited Least-Privilege Blob Upload Access via User Delegation SAS',
    scenarioJa: `内部アプリケーションで使用される BLOB コンテナーをホストする storage1 という名前の Azure Storage アカウントがあります。サードパーティのワークフロー システムが storage1 に BLOB をアップロードできるようにする予定です。
そのサードパーティ システムに、時間制限付きで最小特権のアップロード アクセスを提供する必要があります。`,
    scenarioEn: `You have an Azure Storage account named storage1 hosting a Blob container. A third-party workflow system needs to upload blobs to storage1.
You need to provide the third-party system with time-limited, least-privilege upload access.`,
    questionJa: 'どの認可方法を使用すべきですか。',
    questionEn: 'Which authorization method should you use?',
    options: [
      {
        id: 'A',
        textJa: 'ワークフロー システムでユーザー委任の共有アクセス署名 (SAS) を使用するように構成する。',
        textEn: 'Configure the workflow system to use a user delegation SAS.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Entra 資格情報で署名される「ユーザー委任 SAS」を発行し、操作権限をアップロード用（作成・書き込み）のみ、かつ有効期限付きで制限することで、アカウント キーを共有せず安全・最小特権に委任できます。',
        explanationEn: 'A user delegation SAS signed with Microsoft Entra credentials restricts scope, upload permissions, and expiry without sharing storage account keys.',
      },
      {
        id: 'B',
        textJa: 'ワークフロー システムのマネージド ID を有効にし、storage1 に対するロールを割り当てる。',
        textEn: 'Assign a managed identity and storage1 RBAC role to the system.',
        isCorrect: false,
        explanationJa: '【不正解】サードパーティ システムは Azure マネージド ID に対応しているとは限らず、また RBAC ロール割り当てだけでは時限付きアップロード制限になりません。',
        explanationEn: 'External third-party systems generally cannot use Azure managed identities, and RBAC roles are not inherently time-bound upload tokens.',
      },
      {
        id: 'C',
        textJa: 'storage1 の BLOB コンテナーで匿名パブリック読み取りアクセスを有効化する。',
        textEn: 'Enable anonymous public read access on the blob container.',
        isCorrect: false,
        explanationJa: '【不正解】読み取り公開はアップロード権限を与えず、セキュリティ上も不適切です。',
        explanationEn: 'Public read access neither grants upload permissions nor restricts external access.',
      },
      {
        id: 'D',
        textJa: 'ワークフロー システムで Shared Key 認可を使用するように構成する。',
        textEn: 'Configure the workflow system to use Shared Key authorization.',
        isCorrect: false,
        explanationJa: '【不正解】ストレージ アカウント キーはアカウント全体のフルアクセス権限を持ち、最小特権・時限付き委任の要件に反します。',
        explanationEn: 'Shared Key exposes full storage account administrative/data keys and is neither time-limited nor least-privilege.',
      },
    ],
    overallExplanationJa: `第三者システムへストレージ操作を時限付きで委任する際は SAS を使用します。特にアカウント キーに依存しない「ユーザー委任 SAS (User delegation SAS)」は Microsoft 推奨の最も安全な SAS 方式です。`,
    overallExplanationEn: `User delegation SAS is Microsoft’s recommended SAS type for granting granular, time-limited access to third parties without exposing storage account keys.`,
    keyPointsJa: [
      '外部システムへの時限・最小特権アップロード委任 → ユーザー委任 SAS',
      'Shared Key（アカウント キー直接共有）は過剰権限',
    ],
    keyPointsEn: [
      'Time-limited least-privilege third-party upload -> User delegation SAS',
      'Signed with Microsoft Entra ID rather than storage account keys',
    ],
    referenceTopic: 'Azure Storage ユーザー委任 SAS',
  },
];
