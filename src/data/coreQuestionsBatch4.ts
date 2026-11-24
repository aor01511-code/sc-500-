import { Question } from '../types/quiz';

export const CORE_QUESTIONS_BATCH4: Question[] = [
  {
    id: 'sc500-q64',
    number: 64,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Storage アップロード時マルウェア スキャンと月間容量上限',
    titleEn: 'Configuring Defender for Storage On-Upload Malware Scanning',
    scenarioJa: `Contoso Ltd. は、Web アプリケーションを通じて外部パートナーからアップロードされたファイルを受信する Azure Storage アカウント (contosouploads) を運用しています。セキュリティ チームは、すべてのファイルがアップロード直後に悪意のあるコンテンツについて自動的にスキャンされ、悪意のあるファイルが検出された場合は Microsoft Defender for Cloud でセキュリティ アラートがトリガーされるように Microsoft Defender for Storage を構成したいと考えています。

また、コストを制御するために、スキャン対象データ量に月間容量制限 (GB 単位) を設定したいと考えています。`,
    scenarioEn: `Contoso Ltd. operates an Azure Storage account (contosouploads) that receives files uploaded by external partners through a web application. The security team wants to configure Microsoft Defender for Storage so that every file is automatically scanned for malicious content immediately after it is uploaded, and any malicious file triggers a security alert in Microsoft Defender for Cloud. The team also wants to set a monthly capacity limit (in GB) on how much data is scanned to control costs.`,
    questionJa: 'これらの要件を満たすために、どの Defender for Storage 機能を構成すべきですか？',
    questionEn: 'Which Defender for Storage capability should you configure to meet these requirements?',
    options: [
      {
        id: 'A',
        textJa: 'アップロード時マルウェア スキャン (Malware Scanning)',
        textEn: 'Malware Scanning (on-upload)',
        isCorrect: true,
        explanationJa: '【正解】Defender for Storage のマルウェア スキャン (Malware Scanning) は、Microsoft Defender マルウェア対策エンジンを使用してアップロード時の BLOB をほぼリアルタイムでスキャンし、検出されたマルウェアに対してセキュリティ アラートを生成するとともに、コスト管理のためにスキャンの月間容量上限 (GB) を構成できます。',
        explanationEn: 'Malware Scanning in Defender for Storage uses the Microsoft Defender Antimalware engine to scan blobs near real-time as they are uploaded, generates security alerts for detected malware, and allows administrators to configure a monthly capacity (GB) limit for scanning to manage costs.'
      },
      {
        id: 'B',
        textJa: '機密データの脅威検出 (Sensitive Data Threat Detection)',
        textEn: 'Sensitive Data Threat Detection',
        isCorrect: false,
        explanationJa: '【不正解】機密データの脅威検出は、機密データ (Microsoft Purview によって分類されたデータなど) が公開されたり不審なアクセスを受けたりした場合に識別する機能であり、ファイル コンテンツのマルウェア スキャンやファイル単位の悪意あるコンテンツ検出機能はありません。',
        explanationEn: 'Sensitive Data Threat Detection identifies when sensitive data (such as classified by Microsoft Purview) is exposed or accessed suspiciously, but it does not scan file content for malware and has no per-file malicious content detection capability.'
      },
      {
        id: 'C',
        textJa: 'アクティビティ監視 (Activity Monitoring)',
        textEn: 'Activity Monitoring',
        isCorrect: false,
        explanationJa: '【不正解】アクティビティ監視は、異常なアクセス パターン、アクセス許可の変更、データ持ち出しの試みなどを検出するためにコントロール プレーンおよびデータ プレーン操作を分析しますが、アップロードされたファイルのコンテンツ レベルのマルウェア スキャンは実行しません。',
        explanationEn: 'Activity Monitoring analyzes control-plane and data-plane operations (such as unusual access patterns, permission changes, or exfiltration attempts) to detect anomalous behavior, but it does not perform content-level malware scanning of uploaded files.'
      },
      {
        id: 'D',
        textJa: 'Defender for Cloud の規制コンプライアンス評価',
        textEn: 'Regulatory compliance assessments',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Defender for Cloud の規制コンプライアンス評価は、コンプライアンス標準やベンチマークに対してリソースの構成を評価するものであり、マルウェア検出やファイル スキャン機能とは無関係です。',
        explanationEn: 'Regulatory compliance assessments in Microsoft Defender for Cloud evaluate resources against compliance standards and benchmarks; they are unrelated to malware detection or file scanning capabilities.'
      }
    ],
    overallExplanationJa: `**マルウェア スキャン (アップロード時)** は、Microsoft Defender マルウェア対策エンジンを使用してアップロードされた BLOB をスキャンし、検出時に Defender for Cloud へアラートを発報し、さらにコスト制御のために月間の GB スキャン上限 (月間キャッピング) の設定をサポートする Defender for Storage 固有の機能です。

他の選択肢 (機密データ脅威検出、アクティビティ監視、規制コンプライアンス評価) は異なる脅威・管理シナリオに対応するものであり、アップロード時のマルウェア スキャンは行いません。`,
    overallExplanationEn: `Malware Scanning is the specific Defender for Storage feature that scans uploaded blobs using the Microsoft Defender Antimalware engine, raises alerts on detection, and supports configuring a monthly GB scanning cap for cost control—directly matching all the stated requirements. The other options address different threat scenarios (sensitive data exposure, anomalous activity, or compliance) and do not perform malware scanning.`,
    keyPointsJa: [
      'アップロードされた BLOB のリアルタイム マルウェア検査 ＋ 月間 GB スキャン上限設定 ＝ Defender for Storage「Malware Scanning (on-upload)」',
      'Microsoft Defender Antimalware エンジンで検査し、検知時は Defender for Cloud アラートを生成',
      'Sensitive Data Threat Detection は機密データ露出・不審アクセス検知用でありウイルス検査ではない'
    ],
    keyPointsEn: [
      'Use Defender for Storage Malware Scanning (on-upload) to scan uploaded blobs near real-time with Defender Antimalware',
      'Supports configuring a monthly GB scanning cap per storage account for cost governance',
      'Activity Monitoring and Sensitive Data Threat Detection do not scan file contents for malware'
    ],
    referenceTopic: 'Microsoft Defender for Storage のアップロード時マルウェア スキャン'
  },
  {
    id: 'sc500-q65',
    number: 65,
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure Logic Apps (従量課金) HTTP トリガーでの Microsoft Entra ID OAuth 認証強制',
    titleEn: 'Requiring Microsoft Entra ID OAuth Authentication on Logic App Request Trigger',
    scenarioJa: `Contoso Ltd. には、要求 (HTTP) トリガーで開始する従量課金 (Consumption) プランの Azure Logic App があります。このワークフローは、パートナー組織のアプリケーションから発注書を送信するために呼び出されます。セキュリティ チームには次の要件があります：

- Logic App への呼び出しは、パートナーの Microsoft Entra ID アプリ登録を使用して認証される必要がある。
- ワークフローを実行する前に、呼び出し元が Microsoft Entra ID によって発行された有効な OAuth ベアラー トークンを提示していることを Logic App が検証する必要がある。
- 組み込みの SAS ベースのトリガー URL だけでは、ワークフローを呼び出すのに十分であってはならない。

最小限の管理作業でこれらの要件を満たすように Logic App を構成する必要があります。`,
    scenarioEn: `Contoso Ltd. has a Consumption-plan Azure Logic App that starts with a Request (HTTP) trigger. The workflow is called by a partner organization's application to submit purchase orders. The security team has the following requirements:

- Calls to the Logic App must be authenticated using the partner's Microsoft Entra ID app registration.
- The Logic App must validate that the caller presents a valid OAuth bearer token issued by Microsoft Entra ID before the workflow runs.
- The built-in SAS-based trigger URL should no longer be sufficient on its own to invoke the workflow.

You need to configure the Logic App to meet these requirements with the least administrative effort.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Logic App のアクセス制御 (CORS/IP) 設定で IP ベースのアクセス制限を構成し、パートナーのパブリック IP 範囲のみを許可する',
        textEn: 'Configure an IP-based access restriction on the Logic App\'s Access control (CORS/IP) settings to allow only the partner\'s public IP range.',
        isCorrect: false,
        explanationJa: '【不正解】IP 制限はどのネットワークの場所から Logic App エンドポイントに到達できるかを制限しますが、ID を検証したり OAuth トークンを要求したりすることはないため、Microsoft Entra ID 経由での呼び出し元認証の要件を満たしません。',
        explanationEn: 'IP restrictions limit which network locations can reach the Logic App endpoint, but they do not validate identity or require an OAuth token, so they do not meet the requirement to authenticate the caller via Microsoft Entra ID.'
      },
      {
        id: 'B',
        textJa: 'Logic App でシステム割り当てマネージド ID を有効化し、Logic App 共同作成者ロールを付与する',
        textEn: 'Enable a system-assigned managed identity on the Logic App and assign it the Logic App Contributor role.',
        isCorrect: false,
        explanationJa: '【不正解】システム割り当てマネージド ID は、Logic App が他の Azure リソースへ送信呼び出し (アウトバウンド) を行う際に認証するために使用されます。受信呼び出し元を検証したり、要求トリガー自体に認証を強制したりするものではありません。',
        explanationEn: 'A system-assigned managed identity is used so the Logic App can authenticate to other Azure resources when making outbound calls; it does not validate inbound callers or enforce authentication on the Request trigger itself.'
      },
      {
        id: 'C',
        textJa: 'Microsoft Entra ID への API 接続を作成し、呼び出し元のトークンを検証するために要求トリガーの直後のアクションとして使用する',
        textEn: 'Create an API connection to Microsoft Entra ID and use it as an action immediately after the Request trigger to validate the caller\'s token.',
        isCorrect: false,
        explanationJa: '【不正解】受信ベアラー トークンをそのように検証するアクションは存在せず、トリガーの後にアクションを追加しても未認証の要求がトリガー自体に到達・実行されるのを防げません。認証は実行開始前にトリガー側で強制される必要があります。',
        explanationEn: 'There is no action that validates an inbound bearer token this way, and adding an action after the trigger would not prevent unauthenticated requests from reaching and executing the trigger itself; authentication must be enforced on the trigger before the run starts.'
      },
      {
        id: 'D',
        textJa: '要求トリガーで Microsoft Entra ID Open Authentication を構成し、テナント・対象ユーザー・発行者を指定する',
        textEn: 'Configure Microsoft Entra ID Open Authentication on the Request trigger specifying tenant, audience, and issuer.',
        isCorrect: true,
        explanationJa: '【正解】Logic Apps (従量課金プラン) は要求トリガー上で Microsoft Entra ID 認証を直接構成することをサポートしており、呼び出し元に Microsoft Entra ID からの有効な OAuth ベアラー トークンの提示を要求し、テナント・対象ユーザー (Audience)・発行者 (Issuer) ごとにアクセスを制限して、SAS ベースの URL のみに依存する状態を置き換えることができます。',
        explanationEn: 'Logic Apps (Consumption) support configuring Microsoft Entra ID authentication directly on the Request trigger, which requires callers to present a valid OAuth bearer token from Microsoft Entra ID and lets you restrict access by tenant, audience, and issuer, replacing reliance on the SAS-based URL alone.'
      }
    ],
    overallExplanationJa: `HTTP トリガーで起動する従量課金プランの Azure Logic App に対して Microsoft Entra ID ベースの呼び出し元認証を要求するには、ワークフローの**要求 (Request) トリガー上で Azure Active Directory Open Authentication (Authorization policies)** を直接構成し、想定されるテナント (Issuer) や対象ユーザー (Audience) 等のクレーム条件を指定します。

これにより、ワークフローの実行前に有効な Entra ID OAuth トークンを持つ要求のみが受け入れられるようになり、SAS クエリ パラメーター付きの URL のみでの呼び出しを防げます。`,
    overallExplanationEn: `To require Microsoft Entra ID-based authentication for callers of an HTTP-triggered Logic App, you configure Azure Active Directory Open Authentication directly on the Request trigger, specifying the expected tenant, audience, and issuer. This ensures only requests with a valid Entra ID token are accepted, superseding reliance on the SAS-protected trigger URL alone.`,
    keyPointsJa: [
      'Logic Apps (Consumption) の HTTP トリガーで Entra ID OAuth トークン検証を強制 ＝ Request トリガー上で Azure AD Open Authentication (Authorization policy) を構成',
      'Tenant / Issuer / Audience などの許可クレームを指定してパートナーのアプリ登録を検証する',
      'マネージド ID はアウトバウンド接続用であり、インバウンド HTTP トリガー認証には使われない'
    ],
    keyPointsEn: [
      'Configure Azure Active Directory Open Authentication directly on the Consumption Logic App Request trigger',
      'Validate caller OAuth bearer tokens by specifying allowed tenant, audience, and issuer claims',
      'Replaces reliance on SAS-only trigger URLs before workflow execution starts'
    ],
    referenceTopic: 'Logic Apps (Consumption) HTTP トリガーの Microsoft Entra ID 認証'
  },
  {
    id: 'sc500-q66',
    number: 66,
    domain: 'Purview & コンプライアンス監査',
    difficulty: '標準 (Medium)',
    titleJa: 'Purview eDiscovery による退職社員の Copilot プロンプト・応答の収集と訴訟ホールド',
    titleEn: 'Collecting and Holding M365 Copilot Interactions with Purview eDiscovery',
    scenarioJa: `Contoso 社の法務チームは、退職予定の従業員に関する調査を開始しました。この案件の一環として、法務部門は過去 6 か月間にその従業員が Microsoft 365 Copilot に送信したプロンプトと Copilot が返した応答を取得し、案件が進行中の間に削除されないようそれらのアイテムを保持 (Preserve) する必要があります。`,
    scenarioEn: `Contoso's legal team opens an investigation into a departing employee. As part of the matter, legal must retrieve the prompts that the employee submitted to Microsoft 365 Copilot and the responses Copilot returned over the past six months, and must preserve those items so they cannot be deleted while the matter is open.`,
    questionJa: '法務チームはどの Microsoft Purview 機能を使用すべきですか？',
    questionEn: 'Which Microsoft Purview capability should the legal team use?',
    options: [
      {
        id: 'A',
        textJa: 'インサイダー リスク管理を用いてユーザーの AI 利用リスク指標を監視する',
        textEn: 'Insider Risk Management, monitoring risky AI usage behavior',
        isCorrect: false,
        explanationJa: '【不正解】インサイダー リスク管理は危険なユーザー行動をスコア化して調査トリアージ用のアラートを生成する機能であり、法務案件向けに特定ユーザーの Copilot コンテンツを証拠保全可能な形で収集・保持する仕組みではありません。',
        explanationEn: 'Insider Risk Management scores risky user behaviour and generates alerts for investigation triage. It does not produce a defensible, preservable collection of a specific user\'s Copilot content.'
      },
      {
        id: 'B',
        textJa: 'DSPM for AI を用いて組織全体の AI 利用状況と過剰共有を評価する',
        textEn: 'DSPM for AI, reviewing tenant-wide AI posture and oversharing',
        isCorrect: false,
        explanationJa: '【不正解】DSPM for AI は組織全体の AI 利用パターン、危険なプロンプト、過剰共有リスクに関する集計された可視性を提供する態勢・レポート ツールであり、法務案件のために特定個人のやり取りを収集・エクスポート・保持する機能ではありません。',
        explanationEn: 'DSPM for AI provides aggregated visibility into AI usage patterns, risky prompts, and oversharing risk across the organization. It is a posture and reporting tool and does not collect, export, or preserve one individual\'s interactions for a legal matter.'
      },
      {
        id: 'C',
        textJa: 'コミュニケーション コンプライアンスで不適切なプロンプトや応答を検査する',
        textEn: 'Communication Compliance, scanning prompts for policy violations',
        isCorrect: false,
        explanationJa: '【不正解】コミュニケーション コンプライアンスは不適切またはコンプライアンス違反の通信を検出するためにポリシーに対してメッセージを評価する検出ワークフローであり、法的な証拠収集や保持 (Hold) のメカニズムではありません。',
        explanationEn: 'Communication Compliance evaluates messages against policies to detect inappropriate or non-compliant communication. It is a detection workflow rather than a legal collection and preservation mechanism.'
      },
      {
        id: 'D',
        textJa: '電子情報開示 (eDiscovery) でメールボックスを検索し保留 (Hold) を適用する',
        textEn: 'eDiscovery, searching the mailbox for Copilot records and holding',
        isCorrect: true,
        explanationJa: '【正解】Microsoft 365 Copilot のプロンプトと応答はユーザーのメールボックス内のアイテムとして保持されるため、Purview eDiscovery 検索を通じて検索・特定できます。ケースを作成し、その場所を対象に検索を実行して保留 (Hold) を適用することで、対話記録を取得しつつ案件継続中の削除を防止できます。',
        explanationEn: 'Microsoft 365 Copilot prompts and responses are retained as items in the user\'s mailbox, which makes them discoverable through Purview eDiscovery searches. Creating a case, running a search across that location, and applying a hold both retrieves the interactions and preserves them for the duration of the matter.'
      }
    ],
    overallExplanationJa: `Microsoft 365 Copilot の対話履歴 (プロンプトと応答) は、それを実行したユーザーのメールボックス内にレコードとして保存されるため、メールや Teams のメッセージと同じコンプライアンス境界に配置されます。

この保存モデルにより、法務調査では **Microsoft Purview eDiscovery** を使用して特定ユーザーのプロンプトと応答を検索・ケース内でレビュー・エクスポートでき、さらにケース内の該当場所 (メールボックス) に**保留 (Hold)** を適用することで案件が終了するまで削除を防止できます。`,
    overallExplanationEn: `Microsoft 365 Copilot interactions are stored as records in the mailbox of the user who made them, which places them inside the same compliance boundary as email and Teams content. That storage model is what allows Purview eDiscovery to search for a specific user's prompts and responses, review them within a case, and export them. Applying a hold to the location within the case prevents deletion for as long as the matter remains open, satisfying the preservation requirement. DSPM for AI, Insider Risk Management, and Communication Compliance each analyse AI or user activity for security and policy purposes, but none of them provides legal collection and preservation. Audit log search is a useful companion for establishing when interactions occurred, though it does not preserve the content itself.`,
    keyPointsJa: [
      'M365 Copilot のプロンプト・応答履歴の保存場所 ＝ ユーザーの Exchange メールボックス内',
      '法務調査での検索・抽出・削除防止 (保留) ＝ Purview eDiscovery でケース作成、メールボックス検索、Hold 適用',
      'DSPM for AI / コミュニケーション コンプライアンス / インサイダー リスク管理には訴訟ホールドや法的保全機能はない'
    ],
    keyPointsEn: [
      'M365 Copilot prompts and responses are stored in the user\'s mailbox',
      'Use Purview eDiscovery to search the employee\'s mailbox for Copilot interaction records and apply a legal hold',
      'Audit logs show activity metadata, whereas eDiscovery preserves and exports the actual interaction content'
    ],
    referenceTopic: 'Purview eDiscovery による M365 Copilot 対話履歴の検索と保全'
  },
  {
    id: 'sc500-q67',
    number: 67,
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Microsoft 365 管理センターでの特定 Copilot エージェントのブロック',
    titleEn: 'Blocking a Specific Copilot Agent in Microsoft 365 Admin Center',
    scenarioJa: `あなたの組織ではすべての従業員に対して Microsoft 365 Copilot を有効化しています。数名の業務ユーザーが Copilot Studio を使用して宣言型エージェント (Declarative agents) を作成・公開しており、これらのエージェントは現在 Microsoft 365 管理センターの Copilot ワークロード下に表示されています。

定期レビュー中に、セキュリティ チームは「Expense Helper」という名前のエージェントが、本来のスコープ外である機密人事 (HR) データを含む SharePoint サイトへのアクセス権を持っていることを発見しました。他のすべての公開済みエージェントは引き続き通常どおり機能させながら、組織内のすべてのユーザーがこの特定のエージェントを実行できないように直ちに防ぐ必要があり、これを最小限の管理作業で実現したいと考えています。`,
    scenarioEn: `Your organization has enabled Microsoft 365 Copilot for all employees. Several business users have created and published declarative agents using Copilot Studio, and these agents now appear in the Microsoft 365 admin center under the Copilot workload.

During a routine review, the security team discovers that an agent named "Expense Helper" has been granted access to a SharePoint site containing confidential HR data, which is outside its intended scope. You need to immediately prevent all users in the organization from running this specific agent while continuing to allow all other published agents to function normally, and you want to accomplish this with the least administrative effort.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Power Platform 管理センターで、組織のすべての Copilot Studio エージェントをホストしている環境を無効にする',
        textEn: 'In the Power Platform admin center, disable the environment that hosts all Copilot Studio agents for the organization.',
        isCorrect: false,
        explanationJa: '【不正解】Power Platform 環境を無効にすると、問題の単一エージェントだけでなく、その環境でホストされているすべてのアプリ・フロー・エージェントに影響が及ぶため、範囲が広すぎて業務に大きな支障をきたします。',
        explanationEn: 'Disabling the Power Platform environment would affect every app, flow, and agent hosted in that environment, not just the single problematic agent, making it an overly broad and disruptive action.'
      },
      {
        id: 'B',
        textJa: 'Microsoft 365 管理センターで [設定] > [組織設定] > [Copilot] に移動し、組織全体で Microsoft 365 Copilot を無効にする',
        textEn: 'In the Microsoft 365 admin center, navigate to Settings > Org settings > Copilot, and disable Microsoft 365 Copilot for the entire organization.',
        isCorrect: false,
        explanationJa: '【不正解】組織全体の Copilot を無効にすると、すべてのユーザーからすべてのエージェントと Copilot 機能が失われるため、要件よりはるかに広範囲となり無関係な業務プロセスの生産性を大きく損ないます。',
        explanationEn: 'Disabling Copilot for the entire organization would remove access to all agents and Copilot functionality for every user, which is far broader than required and would significantly disrupt productivity for unrelated business processes.'
      },
      {
        id: 'C',
        textJa: 'Microsoft Entra ID でエージェントに関連付けられたエンタープライズ アプリケーションを探し、アプリケーション登録を削除する',
        textEn: 'In Microsoft Entra ID, locate the enterprise application associated with the agent and delete the application registration.',
        isCorrect: false,
        explanationJa: '【不正解】エンタープライズ アプリケーション登録の削除は、その ID に紐付いた他の統合を破壊する可能性があり、組織全体で単一エージェントの使用を制御的に停止する方法ではなく破壊的で取り消せない操作であるため推奨されません。',
        explanationEn: 'Deleting the enterprise application registration could break other integrations tied to that identity and is a destructive, irreversible action rather than a controlled way to disable a single agent\'s use across the organization; it also is not the recommended mechanism for managing agent availability.'
      },
      {
        id: 'D',
        textJa: 'Microsoft 365 管理センターの [エージェント] > [すべてのエージェント] から対象エージェントに「ブロック」を適用する',
        textEn: 'In the Microsoft 365 admin center, go to Agents > All agents, select the Expense Helper agent, and apply the Block action for the whole organization.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft 365 管理センターのエージェント レジストリにはテナント内のすべての共有エージェントが一覧表示されており、エージェント単位で適用できる「ブロック (Block)」および「ブロック解除 (Unblock)」のガバナンス アクションが用意されています。Copilot Studio エージェントをブロックすると、他のエージェントに影響を与えることなく Microsoft Copilot やホスト製品から即座に無効化できます。',
        explanationEn: 'The agent registry in the Microsoft 365 admin center lists every shared agent in the tenant and exposes governance actions including Block and Unblock, applied per agent. Blocking a Copilot Studio agent removes it from Microsoft Copilot and the other host products without affecting any other agent.'
      }
    ],
    overallExplanationJa: `Copilot Studio や Agent Builder で作成された共有 Copilot エージェントは、Microsoft 365 管理センターの **[エージェント] > [すべてのエージェント] (Agents > All agents)** のエージェント レジストリに表示されます。

管理者はレジストリから特定のエージェントを検索し、エージェント単位のライフサイクル アクション (**Block / Unblock**) を使用して組織全体で該当エージェントのみをブロックできるため、他の正常なエージェントを稼働させたまま最小限の労力で問題を封じ込めることができます。`,
    overallExplanationEn: `Shared Copilot agents, including those built in Copilot Studio and Agent Builder, appear in the agent registry in the Microsoft 365 admin center under Agents > All agents. Administrators can search the registry and use the per-agent lifecycle actions to block or unblock a specific agent for the entire organization, which is the least-effort way to stop one agent while leaving every other agent running. Disabling Microsoft 365 Copilot org-wide or disabling the whole Power Platform environment would take down far more than the single problematic agent. Deleting the underlying Entra application registration is destructive, is not the documented governance control, and can break other dependencies.`,
    keyPointsJa: [
      '特定の公開済み Copilot エージェントのみを組織全体で停止 ＝ Microsoft 365 管理センター [Agents] > [All agents] で対象エージェントに「Block」を実行',
      'Block / Unblock はエージェント単位で可逆的に制御でき、他のエージェントや M365 Copilot 本体に影響を与えない',
      'Power Platform 環境無効化や Entra アプリ削除は影響範囲が過大・破壊的'
    ],
    keyPointsEn: [
      'Block a specific Copilot agent organization-wide via Microsoft 365 admin center -> Agents > All agents -> Block',
      'Per-agent governance keeps all other published agents and Copilot features running normally',
      'Avoid disabling entire Power Platform environments or deleting Entra app registrations'
    ],
    referenceTopic: 'Microsoft 365 管理センターでの Copilot エージェント ガバナンス'
  },
  {
    id: 'sc500-q68',
    number: 68,
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'Entra ID Protection サインイン リスク連動型条件付きアクセス ポリシー',
    titleEn: 'Configuring Sign-In Risk Conditional Access Policy with Entra ID Protection',
    scenarioJa: `あなたは、Microsoft Entra ID P2 ライセンスを保有する企業の Microsoft Entra ID 管理者です。同社は、ユーザー サインインのリスク スコアを計算するために Microsoft Entra ID Protection を使用しています。

次の要件を満たす条件付きアクセス ポリシーを構成する必要があります：Microsoft Entra ID Protection が個々のサインイン試行を「中 (Medium)」または「高 (High)」リスクと分類した場合にのみ、ユーザーが多要素認証 (MFA) を完了する必要があること。「低 (Low)」リスクと分類されたサインインに対しては MFA を要求してはなりません。`,
    scenarioEn: `You are the Microsoft Entra ID administrator for a company that has a Microsoft Entra ID P2 license. The company uses Microsoft Entra ID Protection to calculate risk scores for user sign-ins.

You need to configure a Conditional Access policy that meets the following requirement: users must complete multifactor authentication (MFA) only when Microsoft Entra ID Protection classifies the individual sign-in attempt as medium or high risk. Sign-ins classified as low risk must NOT be challenged for MFA.`,
    questionJa: '条件付きアクセス ポリシーで何を構成すべきですか？',
    questionEn: 'What should you configure in the Conditional Access policy?',
    options: [
      {
        id: 'A',
        textJa: '[条件] で「ユーザー リスク」(User risk) 条件を [中] および [高] に設定し、[付与] で「多要素認証を要求する」を選択する',
        textEn: 'Under Conditions, set the "User risk" condition to Medium and High, and under Grant, select "Require multifactor authentication."',
        isCorrect: false,
        explanationJa: '【不正解】「ユーザー リスク」は個々のサインイン イベントのリスクではなく、長期間にわたって集約されたシグナル (流出した資格情報など) に基づいて特定のユーザーの ID が侵害されている可能性を反映します。サインインごとのリスク評価とは異なるシグナルになるため誤りです。',
        explanationEn: '"User risk" reflects the probability that a specific user\'s identity has been compromised, based on signals aggregated over time (such as leaked credentials), not the risk of an individual sign-in event. Using User risk would evaluate a different signal than what the scenario describes and could produce different enforcement behavior than intended.'
      },
      {
        id: 'B',
        textJa: '[条件] で「サインイン リスク」(Sign-in risk) 条件を [中] および [高] に設定し、[付与] で「多要素認証を要求する」を選択する',
        textEn: 'Under Conditions, set the "Sign-in risk" condition to Medium and High, and under Grant, select "Require multifactor authentication."',
        isCorrect: true,
        explanationJa: '【正解】条件付きアクセスの「サインイン リスク」条件は Microsoft Entra ID Protection によって設定され、特定のサインイン試行のリアルタイムのリスク レベル (匿名 IP アドレス、非定型移動、不慣れなサインイン プロパティなど) を反映します。これを [中] と [高] に設定して「多要素認証を要求する」と組み合わせることで、要件に完全に一致します。',
        explanationEn: 'The "Sign-in risk" condition in Conditional Access is populated by Microsoft Entra ID Protection and reflects the real-time risk level of a specific sign-in attempt (for example, anonymous IP address, atypical travel, or unfamiliar sign-in properties). Setting this condition to Medium and High, combined with a Require MFA grant control, exactly matches the requirement to challenge only risky sign-ins with MFA.'
      },
      {
        id: 'C',
        textJa: '[セッション] で「サインイン頻度」を構成してリスクが検出されるたびに再認証するようにし、[付与] で「多要素認証を要求する」を選択する',
        textEn: 'Under Session, configure "Sign-in frequency" to reauthenticate every time risk is detected, and under Grant, select "Require multifactor authentication."',
        isCorrect: false,
        explanationJa: '【不正解】サインイン頻度はユーザーが再認証しなければならない間隔を制御するセッション制御であり、特定のリスク レベル (低/中/高) を評価したりフィルタリングしたりするものではないため、中・高リスクのサインインのみ MFA をトリガーする用途には使えません。',
        explanationEn: 'Sign-in frequency is a session control that governs how often a user must reauthenticate; it does not evaluate or filter by a specific risk level (low/medium/high) and therefore cannot be used by itself to ensure MFA is triggered only for medium or high risk sign-ins.'
      },
      {
        id: 'D',
        textJa: '[条件] で「インサイダー リスク」(Insider risk) 条件を [中] および [高] に設定し、[付与] で「多要素認証を要求する」を選択する',
        textEn: 'Under Conditions, set the "Insider risk" condition to Medium and High, and under Grant, select "Require multifactor authentication."',
        isCorrect: false,
        explanationJa: '【不正解】条件付きアクセス ポリシーに「インサイダー リスク」条件は存在しません (「インサイダー リスク」は Microsoft Purview の機能で、Entra ID 保護のサインイン リスク レベルとは異なる枠組みです)。',
        explanationEn: 'There is no "Insider risk" condition available in Conditional Access policies; insider risk is a separate capability delivered through Microsoft Purview Insider Risk Management and is not a Conditional Access signal that can be combined with sign-in risk levels.'
      }
    ],
    overallExplanationJa: `条件付きアクセスは、Microsoft Entra ID Protection と 2 つの異なるリスク ベース条件を通じて統合されています：
- **サインイン リスク (Sign-in risk)**: 個々のセッション／サインイン試行が本人以外によって実行されているリアルタイムの可能性 (匿名 IP、不可能な移動など)。
- **ユーザー リスク (User risk)**: 流出資格情報など、累積的な ID 侵害の可能性。

本要件は「個々のサインイン試行」が中リスクまたは高リスクの場合にのみ MFA を要求するものであるため、条件で **Sign-in risk = Medium / High** を選択し、付与制御で **Require multifactor authentication** を設定します。`,
    overallExplanationEn: `Conditional Access integrates with Microsoft Entra ID Protection through two distinct risk-based conditions: Sign-in risk (per-session risk) and User risk (cumulative identity compromise risk). Because the requirement is to act on the risk of the individual sign-in attempt, the Sign-in risk condition set to Medium and High, paired with the Require multifactor authentication grant control, ensures MFA is requested only for medium- and high-risk sign-ins while leaving low-risk sign-ins unchallenged.`,
    keyPointsJa: [
      '個々のサインイン試行ごとのリアルタイム リスクで MFA 要求 ＝ 条件「サインイン リスク (Sign-in risk)」を Medium と High に設定',
      '「ユーザー リスク (User risk)」は累積的なアカウント侵害確率 (パスワード変更強制などと組み合わせることが多い)',
      'Microsoft Entra ID P2 ライセンスがリスク ベース条件付きアクセスの前提条件'
    ],
    keyPointsEn: [
      'Use the "Sign-in risk" condition (Medium and High) + "Require multifactor authentication" grant control',
      'Sign-in risk evaluates the individual authentication attempt in real time; User risk tracks account-level compromise',
      'Low-risk sign-ins are excluded when only Medium and High are selected'
    ],
    referenceTopic: '条件付きアクセスのサインイン リスク vs ユーザー リスク'
  },
  {
    id: 'sc500-q69',
    number: 69,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Update Manager による Azure VM と Azure Arc サーバーの統合パッチ管理',
    titleEn: 'Unified OS Patch Management with Azure Update Manager',
    scenarioJa: `Contoso 社はすでに 120 台のオンプレミス Windows および Linux サーバーを Azure Arc にオンボーディングしており、Microsoft Defender for Servers Plan 2 が有効になっています。運用チームは、毎月第 2 土曜日の 01:00 から 05:00 の間に承認済み OS 更新プログラムをそれらのサーバーに適用し、メンテナンス ウィンドウの合間にもどのマシンで更新プログラムが不足しているかをレポートできるようにする必要があります。

ソリューションはネイティブの Azure 機能を使用し、Arc 対応サーバーと Azure 仮想マシンを同じ方法でカバーする必要があります。`,
    scenarioEn: `Contoso has already onboarded 120 on-premises Windows and Linux servers to Azure Arc, and Microsoft Defender for Servers Plan 2 is enabled. The operations team must now apply approved operating system updates to those servers on the second Saturday of each month between 01:00 and 05:00, and must be able to report on which machines are missing updates between those windows.

The solution must use native Azure capabilities and must cover the Arc-enabled servers and the Azure virtual machines in the same way.`,
    questionJa: '何を構成すべきですか？',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: '定期的な評価とスケジュール付きメンテナンス構成を設定した Azure Update Manager を構成する',
        textEn: 'Azure Update Manager with periodic assessment enabled and a monthly patching maintenance configuration.',
        isCorrect: true,
        explanationJa: '【正解】定期的な評価 (Periodic assessment) により、各マシンは定期的に更新プログラムの準拠状態を報告するため、パッチ ウィンドウの合間に必要なレポートを取得できます。また、スケジュール付きのメンテナンス構成 (Maintenance configuration) により、毎月の第 2 土曜日ウィンドウを定義して Arc 対応サーバーと Azure VM の両方に承認済み更新プログラムを統一的に適用できます。',
        explanationEn: 'Periodic assessment makes each machine report its update compliance on a recurring basis, which provides the reporting the team needs between windows. A maintenance configuration with a schedule defines the recurring Saturday window and applies the approved updates to both Arc-enabled servers and Azure virtual machines.'
      },
      {
        id: 'B',
        textJa: 'スケジュールに従って各マシン上の OS 更新コマンドを呼び出す Azure Automation Runbook',
        textEn: 'An Azure Automation runbook that invokes the operating system update command on each machine on a schedule.',
        isCorrect: false,
        explanationJa: '【不正解】カスタム Runbook は、準拠レポートや再起動処理など Azure Update Manager がすでに標準で提供している機能を自作することになり、Windows と Linux の 2 つの OS 向けに継続的なスクリプト保守の負担が増えます。',
        explanationEn: 'A custom runbook recreates functionality Azure Update Manager already provides, including compliance reporting and reboot handling. It also adds ongoing script maintenance for two different operating systems.'
      },
      {
        id: 'C',
        textJa: '不足しているシステム更新プログラムに対する Microsoft Defender for Cloud の推奨事項ベースの修復タスク',
        textEn: 'A Microsoft Defender for Cloud recommendation-based remediation task for missing system updates.',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Cloud は不足している更新プログラムに関する推奨事項を表示しますが、定義されたメンテナンス ウィンドウ内でパッチをスケジュール適用する機能はありません。ギャップを報告するのみで適用は行いません。',
        explanationEn: 'Defender for Cloud surfaces recommendations about missing updates but does not schedule and apply patches within a defined maintenance window. It reports the gap rather than closing it.'
      },
      {
        id: 'D',
        textJa: 'DeployIfNotExists 効果で全マシンへ AMA エージェントを導入する Azure Policy',
        textEn: 'Azure Policy with a DeployIfNotExists effect that installs the Azure Monitor Agent on every machine.',
        isCorrect: false,
        explanationJa: '【不正解】エージェントのインストールはパッチ適用そのものを実行しません。また Azure Update Manager は更新プログラムの評価やインストールにおいて Azure Monitor Agent に依存していません。',
        explanationEn: 'Installing an agent is at most a prerequisite step and performs no patching. Azure Update Manager also does not depend on the Azure Monitor Agent to assess or install updates.'
      }
    ],
    overallExplanationJa: `**Azure Update Manager** は、Azure 仮想マシンと Azure Arc 対応サーバーの両方を同じインターフェイスで統一的に管理できる、OS 更新プログラムの評価・インストール用ネイティブ サービスです。

- **定期的な評価 (Periodic assessment)**: 各マシンが定期的に更新ステータスを再評価するため、パッチ適用期間の間もコンプライアンス レポートを最新に保てます。
- **メンテナンス構成 (Maintenance configuration)**: 第 2 土曜日 01:00〜05:00 のような繰り返しスケジュール・ウィンドウ長・適用する更新分類を定義して一括適用します。`,
    overallExplanationEn: `Azure Update Manager is the native service for assessing and installing operating system updates, and it treats Arc-enabled servers and Azure virtual machines through the same interface. Periodic assessment is the setting that makes each machine re-evaluate its update status on a regular cadence so that compliance reporting stays current between patch runs. Scheduled patching is expressed as a maintenance configuration, which carries the recurrence, the window length, and the classifications of updates to install. Defender for Cloud can surface the resulting compliance gap as a recommendation, but it does not perform scheduled installation itself. Custom runbooks and agent-deployment policies either duplicate the service or address an unrelated prerequisite.`,
    keyPointsJa: [
      'Azure VM と Azure Arc サーバーを同じ仕組みで定期評価＋定例ウィンドウ パッチ適用 ＝ Azure Update Manager',
      '定期的な評価 (Periodic assessment) でウィンドウ間の最新コンプライアンス状態を可視化・レポート',
      'スケジュール適用はメンテナンス構成 (Maintenance configuration) で設定する'
    ],
    keyPointsEn: [
      'Azure Update Manager provides native, unified OS patching across both Azure VMs and Azure Arc-enabled servers',
      'Enable periodic assessment for continuous compliance visibility between patching windows',
      'Define recurring patch schedules (e.g., 2nd Saturday 01:00–05:00) using a maintenance configuration'
    ],
    referenceTopic: 'Azure Update Manager によるハイブリッド パッチ管理'
  },
  {
    id: 'sc500-q70',
    number: 70,
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Security Copilot 共同作成者 (Contributor) ロールによる最小権限割り当て',
    titleEn: 'Assigning Security Copilot Contributor Role for SOC Analysts',
    scenarioJa: `あなたの組織では Microsoft Security Copilot を展開しました。新しい SOC アナリストの Priya に対し、Security Copilot セッション内でプロンプトを実行し、生成された結果を確認し、プロンプトブック (Promptbooks) を作成できるようにロールを割り当てる必要があります。

Priya は、プラグイン設定の変更、割り当てられたコンピューティング容量の変更、または Security Copilot 内の他ユーザーのロール割り当て管理を行えてはなりません。`,
    scenarioEn: `Your organization has deployed Microsoft Security Copilot. You need to assign a role to a new SOC analyst named Priya so that she can run prompts, review generated results, and create promptbooks within Security Copilot sessions. Priya must NOT be able to modify plugin settings, change the assigned compute capacity, or manage role assignments for other users in Security Copilot.`,
    questionJa: 'Priya にどの Security Copilot ロールを割り当てるべきですか？',
    questionEn: 'Which Security Copilot role should you assign to Priya?',
    options: [
      {
        id: 'A',
        textJa: 'Security Copilot 所有者 (Security Copilot Owner)',
        textEn: 'Security Copilot Owner',
        isCorrect: false,
        explanationJa: '【不正解】Security Copilot Owner ロールは、プラグインの管理、コンピューティング容量管理、他ユーザーへのロール割り当てを含む完全な管理制御を必要とするユーザー向けです。Priya に割り当てると不要な管理権限が付与され、最小権限の原則に違反します。',
        explanationEn: 'The Security Copilot Owner role is designed for users who need full administrative control, including managing plugins, capacity, and assigning roles to other users. Assigning this role to Priya would give her more permissions than required, violating the principle of least privilege.'
      },
      {
        id: 'B',
        textJa: 'Security Copilot 共同作成者 (Security Copilot Contributor)',
        textEn: 'Security Copilot Contributor',
        isCorrect: true,
        explanationJa: '【正解】Security Copilot Contributor ロールは、ユーザーがプロンプトの実行、結果の確認、プロンプトブックやセッションの作成・管理を行うことを許可しますが、組織全体のプラグイン設定変更・容量変更・ロール割り当て管理の権限は付与しません。Priya に必要なアクセス レベルに完全に一致します。',
        explanationEn: 'The Security Copilot Contributor role allows users to run prompts, review results, and create or manage promptbooks and sessions, but it does not grant permissions to modify plugin settings, change capacity, or manage role assignments. This matches exactly the access level Priya needs.'
      },
      {
        id: 'C',
        textJa: 'セキュリティ管理者 (Security Administrator)',
        textEn: 'Security Administrator',
        isCorrect: false,
        explanationJa: '【不正解】Security Administrator は Microsoft セキュリティ製品全体のセキュリティ構成を管理するために使用される Microsoft Entra ID ロールであり、Security Copilot 体験内のアクセスを制御する 2 つの専用 Security Copilot ロール (Owner / Contributor) ではありません。',
        explanationEn: 'Security Administrator is a Microsoft Entra ID role used to manage security configurations across Microsoft security products, but it is not one of the two dedicated Security Copilot roles (Owner or Contributor) that govern access within the Security Copilot experience itself.'
      },
      {
        id: 'D',
        textJa: 'グローバル管理者 (Global Administrator)',
        textEn: 'Global Administrator',
        isCorrect: false,
        explanationJa: '【不正解】Global Administrator はすべての Microsoft サービスにわたるテナント全体の管理アクセス権を付与する Microsoft Entra ID ロールであり、Priya の業務に必要な権限を大幅に超えています。',
        explanationEn: 'Global Administrator is a Microsoft Entra ID role that grants tenant-wide administrative access across all Microsoft services, far exceeding what is needed for Priya\'s task and is not the appropriate role-based access control mechanism specific to Security Copilot.'
      }
    ],
    overallExplanationJa: `Security Copilot は、サービス内のアクセスを制御するために 2 つの専用ロールを使用します：
- **Security Copilot Owner**: コンピューティング容量 (SCU)、組織のプラグイン設定、およびロール割り当てを管理します。
- **Security Copilot Contributor**: 管理制御権限を持たず、ツールの利用 (プロンプトの実行、調査セッション、プロンプトブックの作成) のみに権限が限定されます。

したがって、通常の SOC 分析・プロンプトブック作成を行う Priya には **Security Copilot Contributor** が最適です。`,
    overallExplanationEn: `Security Copilot uses two dedicated roles—Security Copilot Owner and Security Copilot Contributor—to control access within the service. The Owner role manages capacity, plugins, and role assignments, while the Contributor role is limited to using the tool (running prompts, sessions, and promptbooks) without administrative control, making it the correct fit for Priya's requirements.`,
    keyPointsJa: [
      'Security Copilot の専用プラットフォーム ロールは「Owner」と「Contributor」の 2 種類のみ',
      'プロンプト実行・セッション・Promptbook 作成のみ許可し容量・ロール管理は不可 ＝ Security Copilot Contributor',
      'Entra ID の Security Administrator / Global Administrator とは別体系のロール'
    ],
    keyPointsEn: [
      'Security Copilot Contributor allows running prompts, reviewing results, and creating promptbooks',
      'Contributor cannot manage SCU capacity, org-wide plugin policies, or user role assignments',
      'Dedicated Security Copilot roles (Owner/Contributor) are distinct from Microsoft Entra ID directory roles'
    ],
    referenceTopic: 'Microsoft Security Copilot のロールベース アクセス制御 (RBAC)'
  },
  {
    id: 'sc500-q71',
    number: 71,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Servers Plan 2 による 4 大 VM 保護機能の一括有効化',
    titleEn: 'Enabling Full VM Protection via Defender for Servers Plan 2',
    scenarioJa: `あなたの会社には Microsoft Entra テナントと 200 台の Azure 仮想マシン (VM) を含む Azure サブスクリプションがあります。このサブスクリプション向けに Microsoft Defender for Cloud を構成しています。

すべての Azure VM が次の機能を受けられるようにする必要があります：
- 脆弱性評価スキャン (Vulnerability assessment scanning)
- Just-in-time VM アクセス (Just-in-time VM access)
- ファイル整合性監視 (File integrity monitoring)
- Microsoft Defender for Endpoint センサーの自動展開 (Automatic deployment)

最小限の手動構成で、組み込みの Defender for Cloud 機能を使用してこの機能を有効にする必要があります。`,
    scenarioEn: `Your company has a Microsoft Entra tenant and an Azure subscription that contains 200 Azure virtual machines (VMs). You are configuring Microsoft Defender for Cloud for the subscription.

You need to ensure that all Azure VMs receive the following capabilities:
- Vulnerability assessment scanning
- Just-in-time VM access
- File integrity monitoring
- Automatic deployment of the Microsoft Defender for Endpoint sensor

You must enable this functionality with the least amount of manual configuration and use built-in Defender for Cloud capabilities.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Defender for Cloud の環境設定で Defender for Servers Plan 1 を選び、MDE 拡張機能を有効化する',
        textEn: 'Enable Defender for Servers Plan 1 in Environment settings and turn on the MDE sensor extension.',
        isCorrect: false,
        explanationJa: '【不正解】Defender for Servers Plan 1 は Microsoft Defender for Endpoint との統合および基本的な脅威検出のみを提供し、Just-in-time VM アクセスやファイル整合性監視 (FIM) などの要件をすべて満たすことはできません。',
        explanationEn: 'Defender for Servers Plan 1 only provides integration with Microsoft Defender for Endpoint and basic threat detection; it does not include vulnerability assessment, just-in-time VM access, or file integrity monitoring, so it does not meet all the stated requirements.'
      },
      {
        id: 'B',
        textJa: 'Microsoft Sentinel で Azure Activity コネクタを作成し、VM 脅威用の組み込み分析ルールを有効化する',
        textEn: 'Connect Azure Activity logs in Microsoft Sentinel and enable built-in analytics rules for VMs.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Sentinel のデータ コネクタと分析ルールは SIEM 検出・調査機能を提供しますが、Defender for Cloud の Defender for Servers プランを通じて構成されるワークロード保護機能 (脆弱性スキャン、JIT アクセス、FIM、MDE センサー自動展開) は有効にしません。',
        explanationEn: 'Microsoft Sentinel data connectors and analytics rules provide SIEM detection and investigation capabilities but do not enable the workload protection features (vulnerability scanning, JIT access, file integrity monitoring, or MDE sensor deployment) that are configured through Defender for Cloud\'s Defender for Servers plan.'
      },
      {
        id: 'C',
        textJa: 'Defender for Cloud の環境設定で Defender for Servers Plan 2 を選び、MDE や脆弱性評価の拡張機能をオンにする',
        textEn: 'Enable Defender for Servers Plan 2 in Environment settings and turn on MDE and vulnerability assessment extensions.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Defender for Servers Plan 2 は、脆弱性評価 (統合エージェントレス スキャナーまたは Defender 脆弱性管理)、Just-in-time VM アクセス、ファイル整合性監視 (FIM)、および Microsoft Defender for Endpoint センサーの自動展開というフル機能セットを含むプランです。サブスクリプション レベルで Plan 2 を有効化し環境設定で関連拡張機能をオンにすることで、最小の手動構成で全要件を満たせます。',
        explanationEn: 'Microsoft Defender for Servers Plan 2 is the plan that includes the full feature set: vulnerability assessment (via the integrated agentless or Microsoft Defender vulnerability management scanner), just-in-time VM access, file integrity monitoring, and automatic deployment of the Microsoft Defender for Endpoint sensor. Enabling Plan 2 at the subscription level and turning on the relevant extensions in Environment settings delivers all required capabilities with minimal manual configuration.'
      },
      {
        id: 'D',
        textJa: 'Defender for Cloud Apps にサブスクリプションを接続し、全 VM へ条件付きアクセス アプリ制御を適用する',
        textEn: 'Connect the Azure subscription in Defender for Cloud Apps and enable Conditional Access App Control.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Defender for Cloud Apps と条件付きアクセス アプリ制御は SaaS アプリケーションの検出とセッション制御のためのものであり、Azure VM ワークロードの保護や脆弱性評価・JIT アクセスの有効化には使用されません。',
        explanationEn: 'Microsoft Defender for Cloud Apps and Conditional Access App Control are used for SaaS application discovery and session control, not for protecting Azure VM workloads or enabling vulnerability assessment and JIT access.'
      }
    ],
    overallExplanationJa: `Defender for Cloud の [環境設定] で **Microsoft Defender for Servers Plan 2** を有効にして関連設定をオンにすることは、以下の Azure VM 向け機能を最小限の構成で一括有効化する単一の正しいアクションです：
- 脆弱性評価スキャン (Vulnerability assessment)
- Just-in-time (JIT) VM アクセス
- ファイル整合性監視 (FIM)
- Microsoft Defender for Endpoint (MDE) センサーの自動展開

Plan 1 は MDE 統合を中心としており、JIT アクセスや FIM などのフル機能は含まれません。`,
    overallExplanationEn: `Enabling and correctly configuring the Microsoft Defender for Servers Plan 2 plan in Defender for Cloud's Environment settings is the single action that activates vulnerability assessment, just-in-time VM access, file integrity monitoring, and automatic Microsoft Defender for Endpoint sensor deployment for Azure VMs. Other options either provide a subset of features (Plan 1) or belong to unrelated services (Defender for Cloud Apps, Microsoft Sentinel) that do not deliver workload protection for VMs.`,
    keyPointsJa: [
      'JIT VM アクセス ＋ ファイル整合性監視 (FIM) ＋ 脆弱性評価 ＋ MDE 自動展開 ＝ Defender for Servers Plan 2',
      'Defender for Servers Plan 1 には JIT VM アクセスやファイル整合性監視は含まれない',
      'サブスクリプション単位の環境設定 (Environment settings) から拡張機能を含めて有効化する'
    ],
    keyPointsEn: [
      'Defender for Servers Plan 2 includes JIT VM access, File Integrity Monitoring (FIM), vulnerability assessment, and MDE auto-onboarding',
      'Plan 1 lacks JIT VM access and File Integrity Monitoring',
      'Configure under Defender for Cloud Environment settings for the subscription'
    ],
    referenceTopic: 'Defender for Servers Plan 1 と Plan 2 の機能比較'
  },
  {
    id: 'sc500-q72',
    number: 72,
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: '確認済み発行元と低リスク権限に限定したユーザー同意ポリシーの構成',
    titleEn: 'Restricting Entra ID User Consent to Verified Publishers and Low-Risk Permissions',
    scenarioJa: `あなたは Microsoft Entra ID テナントのセキュリティ管理者です。現在、ユーザーはアクセス許可を要求する任意のサードパーティ アプリケーションに同意できます。レビューの結果、次の要件を満たす新しいポリシーを実装する必要があります：

- アプリケーションが「確認済みの発行元 (Verified publisher)」によって公開されており、かつセキュリティ チームが「低リスク (Low risk)」として分類したアクセス許可のみを要求する場合に限り、ユーザー自身が同意を付与できる。
- 両方の条件を満たさない同意要求は、承認のために管理者に転送される必要がある。
- 承認済みの低リスク シナリオの既存機能は、管理者の介入なしに引き続き動作する必要がある。`,
    scenarioEn: `You are the security administrator for a Microsoft Entra ID tenant. Users currently can consent to any third-party application that requests permissions. Following a review, you must implement a new policy that meets these requirements:

- Users can grant consent themselves only if the application was published by a verified publisher AND requests only permissions that your security team has classified as low risk.
- Any consent request that does not meet both conditions must be forwarded to an administrator for approval.
- Existing functionality for approved low-risk scenarios must continue to work without administrator intervention.`,
    questionJa: 'これらの要件を満たすために、Microsoft Entra ID で何を構成すべきですか？',
    questionEn: 'What should you configure in Microsoft Entra ID to meet these requirements?',
    options: [
      {
        id: 'A',
        textJa: '一般ユーザーの Microsoft Entra 管理センター接続を拒否し、既定の同意ポリシー設定のまま運用を継続する',
        textEn: 'Block non-admin access to the Microsoft Entra admin center via Conditional Access while keeping default consent settings.',
        isCorrect: false,
        explanationJa: '【不正解】管理センターへのアクセスをブロックしてもアプリケーションに対する OAuth の同意動作は制御されず、ユーザーがアプリのアクセス許可に同意する方法には影響しません。',
        explanationEn: 'Blocking access to the admin center does not control OAuth consent behavior for applications and has no effect on how users consent to app permissions. This option does not address the stated requirements at all.'
      },
      {
        id: 'B',
        textJa: 'ユーザー同意設定を「ユーザーの同意を許可しない」に設定し、管理者同意ワークフローですべての要求を承認者へ送る',
        textEn: 'Set user consent to "Do not allow user consent," routing all app requests to reviewers via the admin consent workflow.',
        isCorrect: false,
        explanationJa: '【不正解】「ユーザーの同意を許可しない」に設定するとユーザーがいかなるアプリにも同意できなくなり、確認済みの低リスク アプリに対するセルフ同意を許可する要件に反します。すべての要求で管理者の介入が必要になってしまいます。',
        explanationEn: 'Setting user consent to "Do not allow user consent" removes the ability for users to consent to any application, which contradicts the requirement that users be able to self-consent to verified, low-risk apps. This forces every request through the admin consent workflow, adding unnecessary administrative overhead.'
      },
      {
        id: 'C',
        textJa: 'ユーザー同意設定を「確認済みの発行元・選択した権限のみ許可」にし、承認済み権限を「Low」分類へ追加する',
        textEn: 'Allow user consent only for verified publishers and selected permissions, adding approved permissions to the "Low" classification.',
        isCorrect: true,
        explanationJa: '【正解】「選択したアクセス許可について、確認済みの発行元からのアプリへのユーザーの同意を許可する」設定では、両方の条件 (確認済み発行元＋選択された低リスク権限) を満たす場合のみユーザーが同意でき、アクセス許可の分類 (Permission classifications) で「Low」リスクに該当する権限を厳密に定義できます。条件を満たさない要求は自動的にユーザーの同意がブロックされ、管理者の同意ワークフローへルーティングできます。',
        explanationEn: 'The "Allow user consent for apps from verified publishers, for selected permissions" setting lets users consent only when both conditions (verified publisher and specific permissions) are met, and permission classifications let you define exactly which permissions count as "Low" risk. Requests that don\'t meet these criteria are automatically blocked from user consent and can be routed through the admin consent workflow.'
      },
      {
        id: 'D',
        textJa: 'ユーザー同意設定を「アプリへのユーザーの同意を許可」に設定し、同意要求ごとに管理者通知するよう構成する',
        textEn: 'Set user consent to "Allow user consent for apps," and configure the admin consent workflow to notify admins on requests.',
        isCorrect: false,
        explanationJa: '【不正解】「アプリへのユーザーの同意を許可する」は発行元の確認状態や権限のリスク レベルに関係なくすべてのアプリへの同意を許可してしまうため、確認済み発行元と低リスク権限のみに制限する要件を満たせません。',
        explanationEn: '"Allow user consent for apps" permits users to consent to any app regardless of publisher verification or permission risk level, which does not meet the requirement to restrict self-consent to verified publishers and low-risk permissions only. Notifying admins of every request also defeats the goal of avoiding unnecessary admin intervention for approved scenarios.'
      }
    ],
    overallExplanationJa: `Microsoft Entra ID では、**「選択したアクセス許可について、確認済みの発行元からのアプリへのユーザーの同意を許可する」**設定と、**アクセス許可の分類 (Permission classifications: Low / Medium / High)** を組み合わせることで、ユーザーによるアプリ同意をきめ細かく制御できます。

これにより、信頼できる発行元の低リスク権限アプリについてはユーザー自身のセルフサービス同意を許可しつつ、条件を満たさない高リスク／未確認アプリのみを管理者の同意ワークフローにエスカレーションできるため、セキュリティと利便性を両立できます。`,
    overallExplanationEn: `Microsoft Entra ID allows granular control of user consent through the "Allow user consent for apps from verified publishers, for selected permissions" setting combined with permission classifications (Low, Medium, High). This combination lets organizations empower users to self-service consent for trusted, low-risk scenarios while ensuring all other requests are escalated through the admin consent workflow, satisfying both security and usability requirements.`,
    keyPointsJa: [
      '確認済み発行元 (Verified publisher) ＋ 分類済み低リスク権限のみユーザー同意許可 ＝「Allow user consent for apps from verified publishers, for selected permissions」＋「Low」分類',
      '条件を外れたアプリはユーザー同意できず、Admin consent workflow で管理者承認を要求できる',
      '「Do not allow user consent」では低リスク アプリもすべて管理者承認待ちになってしまう'
    ],
    keyPointsEn: [
      'Select "Allow user consent for apps from verified publishers, for selected permissions" and classify approved permissions as "Low"',
      'Apps failing either condition are blocked from user consent and routed via the admin consent workflow',
      'Balances usability for trusted low-risk apps with strict governance against risky OAuth consent'
    ],
    referenceTopic: 'Microsoft Entra ID のユーザー同意設定とアクセス許可の分類'
  },
  {
    id: 'sc500-q73',
    number: 73,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Bastion デプロイ用専用サブネット (AzureBastionSubnet /26) の準備',
    titleEn: 'Preparing a Virtual Network for Azure Bastion Deployment',
    scenarioJa: `あなたは Contoso Ltd. のセキュリティ管理者です。Microsoft Defender for Cloud は、VNet1 という名前の仮想ネットワーク内のいくつかの VM に対して「仮想マシンの管理ポートを閉じる必要があります」という推奨事項を生成しています。現在、VM に割り当てられたパブリック IP アドレス上で RDP (ポート 3389) がインターネットに公開されています。

あなたは Azure Bastion をデプロイしてこの検出結果を修復し、管理者が RDP や SSH ポートをインターネットに公開することなく、また VM 上にパブリック IP アドレスを保持することなく Azure portal 経由で VM に安全に接続できるようにする予定です。

Azure Bastion のデプロイをサポートするために VNet1 を準備する必要があります。`,
    scenarioEn: `You are the security administrator for Contoso Ltd. Microsoft Defender for Cloud generates the recommendation "Management ports of virtual machines should be closed" for several VMs in a virtual network named VNet1. Currently, RDP (port 3389) is open to the internet on public IP addresses assigned to the VMs.

You plan to remediate this finding by deploying Azure Bastion so that administrators can connect to the VMs securely through the Azure portal without exposing RDP or SSH ports to the internet, and without keeping public IP addresses on the VMs.

You need to prepare VNet1 to support the Azure Bastion deployment.`,
    questionJa: 'どのアクションを実行すべきですか？',
    questionEn: 'Which action should you perform?',
    options: [
      {
        id: 'A',
        textJa: 'VNet1 に最小サイズ /24 で BastionSubnet という名前のサブネットを作成する',
        textEn: 'Create a subnet named BastionSubnet with a minimum size of /24 in VNet1.',
        isCorrect: false,
        explanationJa: '【不正解】サブネット名は「BastionSubnet」ではなく、正確に「AzureBastionSubnet」でなければなりません。/24 は最小サイズ要件を満たしていますが、サブネット名が誤っているため Azure Bastion のデプロイ検証に失敗します。',
        explanationEn: 'The subnet must be named exactly "AzureBastionSubnet," not "BastionSubnet." While /24 would satisfy the minimum size requirement, the incorrect subnet name means Azure Bastion deployment would fail validation.'
      },
      {
        id: 'B',
        textJa: 'VNet1 に最小サイズ /26 で GatewaySubnet という名前のサブネットを作成する',
        textEn: 'Create a subnet named GatewaySubnet with a minimum size of /26 in VNet1.',
        isCorrect: false,
        explanationJa: '【不正解】「GatewaySubnet」は VPN Gateway や ExpressRoute Gateway のデプロイに必要なサブネット名であり、Azure Bastion 用ではありません。',
        explanationEn: '"GatewaySubnet" is the required subnet name for VPN Gateway or ExpressRoute Gateway deployments, not for Azure Bastion. Using this name would not satisfy Azure Bastion\'s naming requirement.'
      },
      {
        id: 'C',
        textJa: 'VNet1 に最小サイズ /26 で AzureBastionSubnet という名前のサブネットを作成する',
        textEn: 'Create a subnet named AzureBastionSubnet with a minimum size of /26 in VNet1.',
        isCorrect: true,
        explanationJa: '【正解】Azure Bastion には専用のサブネットが必要であり、名前は正確に「AzureBastionSubnet」で、Bastion ホストのスケーリングおよび管理要件に対応するために最小プレフィックス サイズが /26 以上である必要があります。',
        explanationEn: 'Azure Bastion requires a dedicated subnet that must be named exactly "AzureBastionSubnet" and must have a minimum prefix size of /26 to accommodate the Bastion host\'s scaling and management requirements.'
      },
      {
        id: 'D',
        textJa: 'VNet1 に最小サイズ /29 で AzureBastionSubnet という名前のサブネットを作成する',
        textEn: 'Create a subnet named AzureBastionSubnet with a minimum size of /29 in VNet1.',
        isCorrect: false,
        explanationJa: '【不正解】サブネット名「AzureBastionSubnet」は正しいですが、/29 は小さすぎます。Azure Bastion ではホスト インスタンスやスケール ユニットに必要な IP アドレス数を確保するために最小 /26 が必要です。',
        explanationEn: 'The subnet name "AzureBastionSubnet" is correct, but /29 is too small; Azure Bastion requires a minimum of /26 to support the required number of IP addresses for host instances and scale units.'
      }
    ],
    overallExplanationJa: `VM 上のパブリック IP アドレスや公開された管理ポート (RDP/SSH) を廃止するために Azure Bastion をデプロイする際は、対象仮想ネットワーク内に次の 2 条件を満たす専用サブネットを作成する必要があります：
- **サブネット名**: 正確に **AzureBastionSubnet**
- **アドレス空間サイズ**: 最小 **/26** 以上 (/26、/25、/24 など)

名前または最小サイズのどちらかが誤っているとデプロイに失敗するため、/26 以上の AzureBastionSubnet のみが完全に要件を満たす選択となります。`,
    overallExplanationEn: `When planning an Azure Bastion deployment to eliminate the need for public IP addresses and open management ports on VMs, you must create a dedicated subnet named exactly "AzureBastionSubnet" with a minimum size of /26. Getting either the name or the minimum size wrong will prevent successful deployment, making a /26 or larger AzureBastionSubnet the only fully compliant choice.`,
    keyPointsJa: [
      'Azure Bastion 用の必須サブネット名 ＝ 正確に「AzureBastionSubnet」',
      '必須の最小サブネット サイズ ＝ /26 以上 (/27 や /29 は不可)',
      'Bastion 導入により VM からパブリック IP とインターネット向け 3389/22 開放を削除できる'
    ],
    keyPointsEn: [
      'Azure Bastion requires a subnet named exactly "AzureBastionSubnet"',
      'Minimum allowed CIDR prefix size is /26 (or larger, such as /25 or /24)',
      'GatewaySubnet is for VPN/ExpressRoute gateways, not Azure Bastion'
    ],
    referenceTopic: 'Azure Bastion デプロイのネットワーク要件'
  },
  {
    id: 'sc500-q74',
    number: 74,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'ストレージ アカウント レベルでの匿名パブリック BLOB アクセスの完全禁止',
    titleEn: 'Disabling Anonymous Public Blob Access at the Storage Account Level',
    scenarioJa: `ある企業は、"contosodocs" という名前のストレージ アカウント内の Azure Blob Storage に機密性の高い顧客ドキュメントを保存しています。セキュリティ チームは、複数の BLOB コンテナーが個別に匿名パブリック読み取りアクセスを許可するように構成されており、機密データがインターネットに公開されていることを発見しました。

セキュリティ チームは、今後データ所有者によってコンテナー レベルの個別設定がどのように変更されたとしても、このストレージ アカウント内のどの BLOB コンテナーも匿名パブリック アクセスを許可するように構成できなくなることを保証したいと考えています。`,
    scenarioEn: `A company stores sensitive customer documents in Azure Blob Storage within a storage account named "contosodocs". The security team discovers that several blob containers have been individually configured to allow anonymous public read access, exposing sensitive data to the internet. The security team wants to ensure that no blob container in this storage account can ever be configured for anonymous public access, regardless of how individual container-level settings are configured by data owners in the future.`,
    questionJa: 'この要件を満たすために、セキュリティ チームはどの設定を構成すべきですか？',
    questionEn: 'Which setting should the security team configure to meet this requirement?',
    options: [
      {
        id: 'A',
        textJa: 'すべてのクライアント アプリ向けに読み取り専用の SAS トークンを生成する',
        textEn: 'Generate a read-only SAS token for client application container access',
        isCorrect: false,
        explanationJa: '【不正解】SAS トークンは定義済みの権限と有効期限で特定のクライアントへの委任アクセスを制御するものですが、コンテナーが匿名パブリック アクセスを許可するように構成されるのを防ぐ効果はありません。',
        explanationEn: 'A SAS token controls delegated access for specific clients with defined permissions and expiration, but it does nothing to prevent containers from being configured for anonymous public access. SAS tokens are a separate access mechanism unrelated to blocking public container settings.'
      },
      {
        id: 'B',
        textJa: 'ストレージ アカウント全体で「安全な転送が必須」構成を有効化する',
        textEn: 'Enable "Secure transfer required" at the storage account settings',
        isCorrect: false,
        explanationJa: '【不正解】「安全な転送が必須」は転送中のデータの HTTPS (および SMB 暗号化) の使用を強制してネットワーク上の盗聴から保護しますが、コンテナーが匿名パブリック読み取りアクセスに構成できるかどうかには影響しません。',
        explanationEn: '"Secure transfer required" enforces the use of HTTPS (and SMB encryption) for data in transit, protecting data from interception on the network, but it has no effect on whether a container can be configured for anonymous public read access.'
      },
      {
        id: 'C',
        textJa: 'ストレージ アカウント レベルで「BLOB パブリック アクセスを許可する」を無効にする',
        textEn: 'Set "Allow Blob public access" to Disabled at the storage account level',
        isCorrect: true,
        explanationJa: '【正解】ストレージ アカウント レベルの「Allow Blob public access」設定はマスター スイッチとして機能します。無効にすると、コンテナー レベルのすべての匿名アクセス構成を上書きし、後でデータ所有者がコンテナー側で有効にしようとしてもパブリック アクセスを一切許可できなくなります。',
        explanationEn: 'The "Allow Blob public access" setting at the storage account level acts as a master switch; when disabled, it overrides any container-level anonymous access configuration, ensuring that no container can be set to allow public access even if a data owner attempts to enable it later.'
      },
      {
        id: 'D',
        textJa: '利用者に Azure RBAC の「Storage Blob Data Reader」ロールを割り当てる',
        textEn: 'Assign the "Storage Blob Data Reader" role to all users',
        isCorrect: false,
        explanationJa: '【不正解】Azure RBAC ロールの割り当ては認証された Microsoft Entra ID に対するアクセスを制御しますが、匿名アクセス設定は RBAC とは独立して動作するため、コンテナーが個別に匿名パブリック アクセスを許可するよう設定されるのを防ぐことはできません。',
        explanationEn: 'Assigning Azure RBAC roles controls access for authenticated Microsoft Entra identities, but it does not prevent a container from being independently configured to allow anonymous (unauthenticated) public access, since that setting operates outside of RBAC.'
      }
    ],
    overallExplanationJa: `ストレージ アカウント レベルの **「BLOB パブリック アクセスを許可する」(Allow Blob public access)** 設定は、BLOB データへの匿名パブリック アクセスを防ぐための決定的な制御ポイントです。

これを **Disabled** に設定すると、アカウント内のすべての個別コンテナーのパブリック アクセス構成よりも優先して上書きされ、データ所有者が後からコンテナー単位でパブリック アクセスを有効化することも不可能になるため、アカウント全体の強力なガードレールとして機能します。`,
    overallExplanationEn: `The storage account-level "Allow Blob public access" setting is the definitive control point for preventing anonymous public access to blob data; when disabled, it takes precedence over any individual container's public access configuration, providing a tenant/account-wide guardrail. The other options address different security concerns—data-in-transit encryption, delegated temporary access, or authenticated access control—none of which prevent public anonymous access at the container level.`,
    keyPointsJa: [
      'コンテナー個別の設定を上書きして匿名パブリック アクセスを完全禁止 ＝ ストレージ アカウント レベルで「Allow Blob public access」を Disabled にする',
      '「Secure transfer required」は HTTPS 強制のみ、「Storage Blob Data Reader」は認証済み Entra ID アクセス用',
      'Allow Blob public access を無効化すると既存の匿名設定も即座に遮断され、新規の匿名許可設定もできなくなる'
    ],
    keyPointsEn: [
      'Disable "Allow Blob public access" at the storage account level to block anonymous access across all containers',
      'Overrides existing container-level public access settings and prevents future public container creation',
      'Secure transfer required enforces HTTPS/SMB encryption, not anonymous access blocking'
    ],
    referenceTopic: 'Azure Storage の BLOB パブリック アクセス制御'
  },
  {
    id: 'sc500-q75',
    number: 75,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for Containers による Azure Container Registry イメージの自動脆弱性スキャン',
    titleEn: 'Automated ACR Image Vulnerability Scanning with Defender for Containers',
    scenarioJa: `Contoso Ltd. は、Azure Kubernetes Service (AKS) クラスターにデプロイされるコンテナー イメージを格納するために contosoacr という名前の Azure Container Registry (ACR) を使用しています。セキュリティ チームは、レジストリにプッシュされた新しいコンテナー イメージが既知の脆弱性について自動的にスキャンされ、そのスキャン結果が Microsoft Defender for Cloud のセキュリティ推奨事項として表示されるようにしたいと考えています。

チームが追加のスキャン ツールをインストールしたり管理したりする必要があってはなりません。`,
    scenarioEn: `Contoso Ltd. uses Azure Container Registry (ACR) named contosoacr to store container images that are deployed to an Azure Kubernetes Service (AKS) cluster. The security team wants any new container image pushed to the registry to be automatically scanned for known vulnerabilities, with the scan results surfaced as security recommendations in Microsoft Defender for Cloud. No additional scanning tools should need to be installed or managed by the team.`,
    questionJa: 'この要件を満たすためにどのアクションを実行すべきですか？',
    questionEn: 'Which action should you take to meet this requirement?',
    options: [
      {
        id: 'A',
        textJa: 'AKS クラスターのサブネットからのアクセスのみを許可するように ACR ファイアウォール規則を構成する',
        textEn: 'Configure an ACR firewall rule to allow access only from the AKS cluster\'s subnet.',
        isCorrect: false,
        explanationJa: '【不正解】ファイアウォール規則は特定の IP 範囲や仮想ネットワークからのレジストリへのネットワーク アクセスを制限する制御ですが、イメージの脆弱性スキャンには影響しません。',
        explanationEn: 'Firewall rules restrict network access to the registry from specific IP ranges or virtual networks, which is a network security control, but they have no effect on scanning images for vulnerabilities.'
      },
      {
        id: 'B',
        textJa: '保存時に contosoacr の内容を暗号化するためにカスタマー マネージド キー (CMK) を有効にする',
        textEn: 'Enable customer-managed keys to encrypt the contents of contosoacr at rest.',
        isCorrect: false,
        explanationJa: '【不正解】カスタマー マネージド キーは保存時のレジストリ データを保護する暗号化キーの制御を提供しますが、イメージのスキャンや脆弱性の推奨事項の生成は行いません。',
        explanationEn: 'Customer-managed keys provide control over the encryption keys used to protect registry data at rest, addressing data protection requirements, but they do not scan images or generate vulnerability recommendations.'
      },
      {
        id: 'C',
        textJa: 'contosoacr のサブスクリプションで Microsoft Defender for Containers プランを有効化する',
        textEn: 'Enable the Microsoft Defender for Containers plan on the subscription hosting contosoacr.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Defender for Containers プランを有効にすると、Azure Container Registry に格納されているイメージにも脆弱性スキャンが拡張され、新しいイメージがプッシュされたときに自動的にスキャンをトリガーし、別のスキャン インフラストラクチャを必要とせずに結果を Microsoft Defender for Cloud の推奨事項として表示します。',
        explanationEn: 'Enabling the Microsoft Defender for Containers plan extends vulnerability scanning to images stored in Azure Container Registry, automatically triggering scans when new images are pushed and surfacing results as recommendations in Microsoft Defender for Cloud without requiring separate scanning infrastructure.'
      },
      {
        id: 'D',
        textJa: 'contosoacr でコンテンツの信頼 (Content trust) を有効にし、プルする前にすべてのイメージが署名されることを要求する',
        textEn: 'Enable content trust on contosoacr and require all images to be signed before they can be pulled.',
        isCorrect: false,
        explanationJa: '【不正解】コンテンツの信頼は信頼された発行元によって署名されたイメージのみをプルできるようにすることでイメージの整合性を支援しますが、脆弱性スキャンを実行したり Microsoft Defender for Cloud へ結果を報告したりしません。',
        explanationEn: 'Content trust ensures that only images signed by trusted publishers can be pulled, which helps with image integrity, but it does not perform vulnerability scanning or report findings to Microsoft Defender for Cloud.'
      }
    ],
    overallExplanationJa: `Azure Container Registry (ACR) 内のコンテナー イメージの脆弱性を自動スキャンし、検出結果を Microsoft Defender for Cloud の推奨事項として表示するには、**Microsoft Defender for Containers** プランを有効にする必要があります。

他の選択肢 (イメージ署名 / Content trust、ネットワーク分離、保存時の CMK 暗号化) は ACR セキュリティの別の側面に対処するものですが、脆弱性スキャン機能は提供しません。`,
    overallExplanationEn: `To automatically scan container images in Azure Container Registry for vulnerabilities and have findings appear as recommendations in Microsoft Defender for Cloud, you must enable the Microsoft Defender for Containers plan. The other options address different aspects of ACR security (image signing, network isolation, and encryption at rest) but do not provide vulnerability scanning capabilities.`,
    keyPointsJa: [
      'ACR へプッシュされたコンテナー イメージの自動脆弱性評価＋Defender for Cloud 推奨表示 ＝ Microsoft Defender for Containers プランを有効化',
      '追加のスキャン ツールの導入や保守は不要（サーバーレス／エージェントレスで自動スキャン）',
      'Content trust はイメージのデジタル署名検証用であり CVE スキャンではない'
    ],
    keyPointsEn: [
      'Enable Microsoft Defender for Containers to automatically scan ACR images on push and surface CVEs in Defender for Cloud',
      'Requires no external scanning infrastructure or agent installation on the registry',
      'Content trust handles image signing; CMK handles encryption at rest; firewall rules restrict network access'
    ],
    referenceTopic: 'Defender for Containers による ACR 脆弱性スキャン'
  },
  {
    id: 'sc500-q76',
    number: 76,
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure API Management AI Gateway のトークン消費量ベース調整 (azure-openai-token-limit)',
    titleEn: 'Throttling LLM Usage by Tokens with azure-openai-token-limit Policy',
    scenarioJa: `あなたの組織では Microsoft Foundry を通じて大規模言語モデル (LLM) をデプロイし、Azure API Management で構築した AI ゲートウェイを使用して社内開発者に公開しています。Azure OpenAI Service バックエンドからのコスト超過を抑えるため、API 呼び出し回数ではなく、各サブスクリプション キーによって消費されたプロンプトおよび完了トークン (Prompt and completion tokens) の数に基づいて使用量を調整 (スロットリング) するポリシーを構成する必要があります。`,
    scenarioEn: `Your organization deploys large language models through Microsoft Foundry and exposes them to internal developers using an AI Gateway built with Azure API Management. You need to configure a policy that throttles usage based on the number of prompt and completion tokens consumed by each subscription key, rather than the number of API calls, to control cost overruns from the Azure OpenAI Service backend.`,
    questionJa: 'どの Azure API Management ポリシーを構成すべきですか？',
    questionEn: 'Which Azure API Management policy should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'azure-openai-token-limit',
        textEn: 'azure-openai-token-limit',
        isCorrect: true,
        explanationJa: '【正解】azure-openai-token-limit ポリシーは Azure API Management の AI ゲートウェイ シナリオ専用に構築されており、単なる要求回数ではなく Azure OpenAI Service バックエンドから返されたプロンプトおよび完了トークン数に基づいて制限を強制するため、トークンベースのコスト超過制御に最適な選択肢です。',
        explanationEn: 'The azure-openai-token-limit policy is purpose-built for AI Gateway scenarios in Azure API Management and enforces limits based on prompt and completion tokens returned by the Azure OpenAI Service backend, not just the number of requests, making it the correct choice for controlling token-based cost overruns.'
      },
      {
        id: 'B',
        textJa: 'rate-limit-by-key',
        textEn: 'rate-limit-by-key',
        isCorrect: false,
        explanationJa: '【不正解】rate-limit-by-key ポリシーはサブスクリプション キーごとの時間枠内における「呼び出し回数」に基づいてスロットリングを行いますが、要求や応答ペイロード内のトークン消費量を認識できないため、トークン使用量に起因するコストを制御できません。',
        explanationEn: 'The rate-limit-by-key policy throttles based on the number of calls made within a time window per subscription key, but it has no awareness of token consumption within the request or response payload, so it cannot control costs driven by token usage.'
      },
      {
        id: 'C',
        textJa: 'ip-filter',
        textEn: 'ip-filter',
        isCorrect: false,
        explanationJa: '【不正解】ip-filter ポリシーは呼び出し元の IP アドレス範囲に基づいてアクセスを許可または拒否するネットワーク レベルの制御であり、使用量のスロットリングやトークン消費量とは無関係です。',
        explanationEn: 'The ip-filter policy restricts or allows access based on the caller\'s IP address range and is unrelated to usage throttling or token consumption; it addresses network-level access control, not cost or token governance.'
      },
      {
        id: 'D',
        textJa: 'quota-by-key',
        textEn: 'quota-by-key',
        isCorrect: false,
        explanationJa: '【不正解】quota-by-key ポリシーはサブスクリプション キーごとに長期間 (月単位など) の呼び出しボリュームや帯域幅クォータを強制しますが、rate-limit-by-key と同様に言語モデルによって処理されたトークン数を検査・制限することはできません。',
        explanationEn: 'The quota-by-key policy enforces a longer-term call volume or bandwidth quota (for example, calls per month) per subscription key, but like rate-limit-by-key it does not inspect or throttle based on the number of tokens processed by the language model.'
      }
    ],
    overallExplanationJa: `Microsoft Foundry / Azure OpenAI バックエンド向けに Azure API Management で AI ゲートウェイを構成する場合、**azure-openai-token-limit** ポリシーを使用することで、応答からトークン使用量 (プロンプト＋完了トークン) を解析し、サブスクリプション キーや任意のカウンター キーごとにトークン単価ベースのレート制限／クォータ制御を実現できます。

汎用的な ` + '`rate-limit-by-key`' + ` や ` + '`quota-by-key`' + ` は HTTP リクエスト回数またはデータ転送量のみを対象とするため、1 リクエストで大量のトークンを消費する LLM ワークロードのコスト制御には適しません。`,
    overallExplanationEn: `When configuring an AI Gateway in Azure API Management for Microsoft Foundry backends, the azure-openai-token-limit policy is specifically designed to parse token usage from Azure OpenAI Service responses and enforce limits per key, subscription, or other identifiers, enabling fine-grained cost and abuse control that generic call-based or network-based policies cannot provide.`,
    keyPointsJa: [
      'APIM AI ゲートウェイでのトークン数ベースの利用制限・スロットリング ＝ azure-openai-token-limit ポリシー',
      'rate-limit-by-key / quota-by-key は HTTP 呼び出し回数・帯域幅ベースであり LLM トークン数を考慮できない',
      'サブスクリプション キー等の識別子ごとに TPM (Tokens Per Minute) やトークン クォータを制限してコスト超過を防止できる'
    ],
    keyPointsEn: [
      'Use azure-openai-token-limit in Azure API Management AI Gateway to enforce token-based (TPM/quota) limits',
      'Parses prompt and completion token usage per subscription key or custom counter key',
      'rate-limit-by-key and quota-by-key count API calls or bandwidth, not LLM tokens'
    ],
    referenceTopic: 'Azure API Management AI Gateway の azure-openai-token-limit ポリシー'
  }
];
