import { Question } from '../types/quiz';

export const CORE_QUESTIONS_BATCH2: Question[] = [
  {
    id: 'sc500-q39',
    number: 39,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Just-In-Time (JIT) VM アクセスによる RDP ポート 3389 の保護',
    titleEn: 'Securing RDP Port 3389 with Just-In-Time (JIT) VM Access',
    scenarioJa: `あなたの組織では、Azure サブスクリプションで Microsoft Defender for Servers を有効にした Microsoft Defender for Cloud を使用しています。メンテナンス作業のために、管理者がときどき RDP (ポート 3389) でアクセスする必要がある Azure 仮想マシンが 40 台あります。

仮想マシンへの RDP アクセスは既定でブロックされ、管理者がアクセス要求を送信して承認を受けた後の限られた時間のみ許可されるようにする必要があります。また、ファイアウォール規則の管理に必要な継続的な管理作業を最小限に抑える必要があります。`,
    scenarioEn: `Your organization uses Microsoft Defender for Cloud with Microsoft Defender for Servers enabled on an Azure subscription. You have 40 Azure virtual machines that administrators occasionally need to access using RDP (port 3389) for maintenance tasks.

You need to ensure that RDP access to the virtual machines is blocked by default and is only allowed for a limited time after an administrator submits and receives approval for an access request. The solution must minimize the ongoing administrative effort required to manage firewall rules.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Defender for Cloud でアダプティブ アプリケーション制御を有効にし、RDP クライアント実行を許可リスト化する',
        textEn: 'Enable adaptive application controls in Defender for Cloud to allowlist Remote Desktop apps.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Defender for Cloud のアダプティブ アプリケーション制御は、VM 上で実行できる承認済みアプリケーションの許可リストを作成してマルウェアや不正なソフトウェアの実行をブロックするための機能です。ネットワーク ポート アクセスや RDP 接続の制御は行いません。',
        explanationEn: 'Adaptive application controls in Microsoft Defender for Cloud are used to create allowlists of approved applications that can run on a VM, helping to block malware and unauthorized software execution. They do not manage network port access or RDP connectivity.'
      },
      {
        id: 'B',
        textJa: '管理者アカウントの Azure portal サインインすべてに MFA を求める条件付きアクセスを構成する',
        textEn: 'Configure a Conditional Access policy requiring MFA for all admin sign-ins to Azure portal.',
        isCorrect: false,
        explanationJa: '【不正解】条件付きアクセス ポリシーは、Azure portal など Microsoft Entra ID で保護されたリソースへのサインイン時の認証要件を制御しますが、仮想マシンへのネットワーク レベルのポート アクセスは制御しません。ネットワーク層で RDP トラフィックをブロックまたは時間制限することはできません。',
        explanationEn: 'Conditional Access policies control authentication requirements for sign-ins to Microsoft Entra ID protected resources, such as the Azure portal, but they do not control network-level port access to virtual machines. They would not block or time-limit RDP traffic at the network layer.'
      },
      {
        id: 'C',
        textJa: 'Defender for Cloud で仮想マシンの JIT VM アクセスを有効化し、承認と期間付きでポート 3389 を構成する',
        textEn: 'Enable JIT VM access in Defender for Cloud, configuring port 3389 with approval and a max duration.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Defender for Cloud の Just-In-Time (JIT) VM アクセスは、指定されたポートに対してネットワーク セキュリティ グループ (NSG) に「拒否」規則を自動的に作成し、要求が承認された後にのみ一時的かつ時間制限付きでアクセスを開放し、期限が切れると再びポートを閉じます。Defender for Cloud が規則変更を自動管理するため、既定ブロック・承認ベースの時間制限付き例外・最小限の運用負荷という要件をすべて満たします。',
        explanationEn: 'Just-in-time VM access in Microsoft Defender for Cloud automatically creates a "deny" rule in the network security group for the specified port and only opens temporary, time-limited access after a request is approved, closing the port again once the time expires. This directly meets the requirement for default-blocked access with limited-time, approval-based exceptions and minimal ongoing effort, since Defender for Cloud manages the rule changes automatically.'
      },
      {
        id: 'D',
        textJa: 'ポート 3389 を恒久的に拒否する NSG 規則を作成し、管理者がアクセスするたびに規則を手動編集して許可する',
        textEn: 'Create a permanent deny NSG rule for port 3389 and manually edit it to allow traffic during maintenance.',
        isCorrect: false,
        explanationJa: '【不正解】恒久的な拒否 NSG 規則は既定で RDP をブロックしますが、管理者がアクセスするたびに手動で規則を編集すると継続的な管理負荷が大きくなり、JIT VM アクセスがネイティブに提供する承認ワークフローや自動的な時間制限付きアクセスも強制できません。',
        explanationEn: 'While a permanent deny NSG rule blocks RDP by default, manually editing the rule each time an administrator needs access requires significant ongoing administrative effort and does not enforce approval workflows or automatic time-limited access, which JIT VM access provides natively.'
      }
    ],
    overallExplanationJa: `Microsoft Defender for Cloud の Just-In-Time (JIT) VM アクセスは、RDP や SSH などの管理ポートを既定でロックダウンしつつ、必要なときに承認済みで自動的に時間制限された一時的アクセスを許可するための専用機能です。

セキュリティ要件 (既定で拒否) と運用要件 (手動作業の最小化) の両方を満たすため、条件付きアクセス、アプリケーション制御、手動での NSG 管理よりも JIT VM アクセスが最適なソリューションとなります。`,
    overallExplanationEn: `Just-in-time (JIT) VM access in Microsoft Defender for Cloud is purpose-built to lock down management ports like RDP and SSH by default while allowing temporary, approved, and automatically time-limited access when needed. This satisfies both the security requirement (default deny) and the operational requirement (minimal manual effort), making JIT VM access the best solution compared to Conditional Access, application controls, or manual NSG management.`,
    keyPointsJa: [
      '管理ポート (RDP 3389 / SSH 22) の既定拒否＋承認付き時限開放 ＝ Defender for Cloud の JIT VM アクセス',
      'Defender for Cloud が NSG 規則の追加・削除を自動管理するため運用負荷が最小',
      'アダプティブ アプリケーション制御は実行プロセス制御、条件付きアクセスは認証制御であり、ポート制御ではない'
    ],
    keyPointsEn: [
      'Use Defender for Cloud JIT VM access to block management ports by default and allow time-limited, approved access',
      'JIT automatically updates and reverts NSG rules, minimizing ongoing administrative effort',
      'Adaptive application controls govern executables; Conditional Access governs identity sign-in, not VM network ports'
    ],
    referenceTopic: 'Defender for Cloud Just-In-Time (JIT) VM アクセス'
  },
  {
    id: 'sc500-q40',
    number: 40,
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender for AI Services アラートへのユーザー プロンプト証拠の追加',
    titleEn: 'Including User Prompt Evidence in Defender for AI Services Alerts',
    scenarioJa: `Contoso 社は、Azure OpenAI Service リソースをホストするサブスクリプションで Microsoft Defender for AI Services プランを有効にしており、ジェイルブレイクの試みや不審なプロンプトに関するアラートが Microsoft Defender for Cloud に表示されるようになりました。

アナリストがこれらのアラートをトリアージする際、アラートの証拠 (Evidence) にはアプリケーションと操作が識別されているものの、検出をトリガーしたプロンプトのテキストが表示されないため、アラートが真陽性 (True Positive) かどうかを判断するのが困難です。`,
    scenarioEn: `Contoso has enabled the Microsoft Defender for AI Services plan on the subscription that hosts its Azure OpenAI Service resources, and alerts for jailbreak attempts and suspicious prompts are now appearing in Microsoft Defender for Cloud.

When analysts triage these alerts, the alert evidence identifies the application and the operation but does not show the text of the prompt that triggered the detection, which makes it difficult to judge whether an alert is a true positive.`,
    questionJa: '問題のあるプロンプトの内容がアラートの証拠に表示されるようにするには、何を構成すべきですか？',
    questionEn: 'What should you configure so that the offending prompt content appears in the alert evidence?',
    options: [
      {
        id: 'A',
        textJa: 'Defender for AI Services プラン設定で「ユーザー プロンプトの証拠」(user prompt evidence) を有効化する',
        textEn: 'Enable user prompt evidence in the Defender for AI Services plan settings.',
        isCorrect: true,
        explanationJa: '【正解】ユーザー プロンプトの証拠 (user prompt evidence) は、該当するプロンプトと応答のセグメントをアラートに添付するオプトイン設定です。プロンプトのテキストには機密データや個人情報が含まれる可能性があるため既定では無効になっており、管理者が意図的に有効化する必要があります。',
        explanationEn: 'User prompt evidence is an opt-in setting on the plan that attaches the relevant prompt and response segments to the alert. It is disabled by default because prompt text can contain sensitive or personal data, so an administrator must deliberately turn it on.'
      },
      {
        id: 'B',
        textJa: 'Azure OpenAI Service 構成でコンテンツ フィルターの重大度しきい値を最も厳格な保護レベルへ引き上げる',
        textEn: 'Raise Azure OpenAI content filter severity thresholds to the strictest level.',
        isCorrect: false,
        explanationJa: '【不正解】コンテンツ フィルターのしきい値は、どのプロンプトや補完がブロックまたはフラグ設定されるかを変更するものであり、Defender アラートにどのような証拠が添付されるかは変更しません。しきい値を厳しくすると、プロンプトのコンテキストを追加することなくアラート数だけが増加します。',
        explanationEn: 'Content filter thresholds change which prompts and completions are blocked or flagged, not what evidence is attached to a Defender alert. Tightening them would increase alert volume without adding prompt context.'
      },
      {
        id: 'C',
        textJa: 'Azure OpenAI リソースを含むサブスクリプション全体で Microsoft Purview 統合監査ログ収集を有効にする',
        textEn: 'Enable Microsoft Purview auditing across the subscription hosting Azure OpenAI.',
        isCorrect: false,
        explanationJa: '【不正解】Purview 監査は Microsoft 365 および Purview ワークロード全体の管理・ユーザー アクティビティを記録するものであり、Defender for AI Services のアラート証拠のソースではありません。Defender for Cloud アラートにプロンプト テキストは追加されません。',
        explanationEn: 'Purview auditing records administrative and user activity across Microsoft 365 and Purview workloads, and it is not the source of alert evidence for Defender for AI Services. It would not add prompt text to the Defender for Cloud alert.'
      },
      {
        id: 'D',
        textJa: 'Azure OpenAI リソースの診断設定を作成し、すべての API 要求ログを Log Analytics ワークスペースに送信する',
        textEn: 'Configure diagnostic settings on Azure OpenAI to send logs to Log Analytics.',
        isCorrect: false,
        explanationJa: '【不正解】診断ログは操作・ステータス・トークン数などの要求メタデータを記録しますが、Defender for Cloud アラートの内部にプロンプト テキストを表示させることはありません。アナリストは依然として必要な証拠がないままトリアージを行うことになります。',
        explanationEn: 'Diagnostic logs capture request metadata such as operation, status, and token counts, but they do not surface prompt text inside the Defender for Cloud alert. Analysts would still be triaging alerts without the evidence they need.'
      }
    ],
    overallExplanationJa: `Defender for AI Services は、検出の原因となった特定のプロンプトおよび応答のセグメントをアラートに含めることができますが、そのためにはプラン設定で「ユーザー プロンプトの証拠」(user prompt evidence) が有効になっている必要があります。

プロンプトには機密性の高い業務データや個人情報が含まれることが多いため、すべてのアラート閲覧者に公開するかどうかは意図的な判断に委ねられており、この設定は既定でオフになっています。有効化すると、ジェイルブレイクやプロンプト インジェクション試行などのアラートの証拠ペインに問題のあるテキストが直接表示され、真陽性と誤検知の切り分けが格段に容易になります。このオプションを有効にする組織では、通常、Defender for Cloud アラートを閲覧できるユーザーに対するアクセス制御も強化します。`,
    overallExplanationEn: `Defender for AI Services can include the specific prompt and response segments that caused a detection, but only when user prompt evidence has been enabled on the plan. The setting is off by default precisely because prompts frequently contain confidential business data or personal information, so exposing them to every alert reader is a deliberate decision. Once it is enabled, alerts such as jailbreak or prompt injection attempts carry the offending text directly in the evidence pane, which makes true and false positives far easier to separate. Diagnostic logging, content filter thresholds, and Purview auditing all serve legitimate purposes but none of them change alert evidence. Organizations that enable this option usually pair it with tighter access controls on who may view Defender for Cloud alerts.`,
    keyPointsJa: [
      'Defender for AI Services のアラート証拠にプロンプト本文を表示 ＝ プラン設定の「user prompt evidence」を有効化',
      'プロンプト内の個人情報・機密情報保護のため既定値はオフ（オプトイン）',
      '診断ログはトークン数・操作等のメタデータのみで、プロンプト本文は含まない'
    ],
    keyPointsEn: [
      'Enable "user prompt evidence" in Defender for AI Services plan settings to include prompt/response snippets in alerts',
      'Disabled by default to avoid exposing PII or confidential prompt text to all alert readers',
      'Diagnostic logs record request metadata (tokens, latency, status), not alert prompt evidence'
    ],
    referenceTopic: 'Defender for AI Services のユーザー プロンプト証拠設定'
  },
  {
    id: 'sc500-q41',
    number: 41,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'カスタム セキュリティ標準の作成と規制コンプライアンス ダッシュボードでの評価',
    titleEn: 'Creating a Custom Security Standard in Defender for Cloud',
    scenarioJa: `Contoso 社は、20 個のコントロールを含む社内のクラウド セキュリティ ポリシーを定義しました。そのうち 15 個は Microsoft Defender for Cloud に既存の推奨事項としてマッピングされており、残りの 5 個は Contoso 社が作成したカスタム Azure Policy 定義でカバーされています。

ガバナンス チームは、すでに追跡されている組み込み標準と並べて、この社内ポリシーに対する Contoso 社のサブスクリプションのスコアを「規制コンプライアンス」(Regulatory compliance) ダッシュボードの単一ビューで確認したいと考えています。`,
    scenarioEn: `Contoso has defined an internal cloud security policy that contains 20 controls. Fifteen of them map to recommendations that already exist in Microsoft Defender for Cloud; the remaining five are covered by custom Azure Policy definitions that Contoso authored.

The governance team wants a single view in the Regulatory compliance dashboard that scores Contoso's subscriptions against this internal policy, alongside the built-in standards that are already tracked.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: '推奨事項を Log Analytics にエクスポートし、20 個の項目をスコア化するブックを作成する',
        textEn: 'Export the recommendations to a Log Analytics workspace and build a workbook that scores the 20 controls.',
        isCorrect: false,
        explanationJa: '【不正解】ブックを使用するとエクスポートされたデータを可視化できますが、規制コンプライアンス ダッシュボードの外部に存在し、ダッシュボード上にコンプライアンス スコアを生成しません。要件は明示的にダッシュボード ビューを求めるものです。',
        explanationEn: 'A workbook can visualize exported data, but it lives outside the Regulatory compliance dashboard and does not produce a compliance score there. The requirement is explicitly for the dashboard view.'
      },
      {
        id: 'B',
        textJa: '各サブスクリプションに Microsoft クラウド セキュリティ ベンチマークを 2 回目として割り当て、割り当て名を変更する',
        textEn: 'Assign the Microsoft cloud security benchmark to each subscription a second time and rename the assignment.',
        isCorrect: false,
        explanationJa: '【不正解】標準の名前を変更して組織固有のフレームワークにすることはできず、ベンチマークを再割り当てしても同じコントロールが重複するだけです。5 つのカスタム コントロールは依然としてダッシュボードに表示されません。',
        explanationEn: 'A standard cannot be renamed into an organization-specific framework, and reassigning the benchmark simply duplicates the same controls. The five custom controls would still be missing from the dashboard.'
      },
      {
        id: 'C',
        textJa: 'Defender for Cloud でカスタム セキュリティ標準を作成し、組み込みとカスタム推奨事項を登録する',
        textEn: 'Create a custom security standard in Defender for Cloud combining built-in and custom recommendations.',
        isCorrect: true,
        explanationJa: '【正解】Defender for Cloud では、組み込みの推奨事項と独自の Azure Policy 定義によって生成された推奨事項の任意の組み合わせからカスタム標準を構築できます。標準をサブスクリプションに割り当てると、組み込み標準と並んで規制コンプライアンス ダッシュボードでスコア化および表示されます。',
        explanationEn: 'Defender for Cloud lets you build a custom standard from any combination of built-in recommendations and recommendations generated by your own Azure Policy definitions. Once the standard is assigned to the subscriptions, it is scored and displayed in the Regulatory compliance dashboard alongside the built-in standards.'
      },
      {
        id: 'D',
        textJa: '20 個のコントロールを含む Azure Policy イニシアチブを新規作成して管理グループ スコープへ割り当てる',
        textEn: 'Create an Azure Policy initiative containing the 20 controls and assign it at the management group scope.',
        isCorrect: false,
        explanationJa: '【不正解】イニシアチブの割り当てはポリシー評価を実行し、カスタム推奨事項を作成するための必要な構成要素ですが、それだけでは規制コンプライアンス ダッシュボードに追跡対象の標準として表示されません。Defender for Cloud でカスタム セキュリティ標準を作成する必要があります。',
        explanationEn: 'An initiative assignment drives policy evaluation, and it is a necessary building block for custom recommendations, but on its own it does not appear as a tracked standard in the Regulatory compliance dashboard. The standard must still be created in Defender for Cloud.'
      }
    ],
    overallExplanationJa: `Microsoft Defender for Cloud の規制コンプライアンス ダッシュボードは、Microsoft が既定で提供する標準のみに限定されません。カスタム セキュリティ標準を作成し、組み込みの推奨事項と、独自の Azure Policy 定義から生成されたカスタム推奨事項を任意に組み合わせて登録できます。

その標準を関連するサブスクリプションまたは管理グループに割り当てると、PCI DSS や ISO 27001 などのベンチマークと同じダッシュボード上で継続的に評価・スコア化されます。Azure Policy イニシアチブ自体はカスタム推奨事項を生成するための土台として機能しますが、ダッシュボードでの標準表示とスコア化には Defender for Cloud のカスタム標準の作成が不可欠です。`,
    overallExplanationEn: `The Regulatory compliance dashboard is not limited to the standards Microsoft ships with Defender for Cloud. You can create a custom security standard, then populate it with any mix of built-in recommendations and custom recommendations produced by your own Azure Policy definitions. Assigning that standard to the relevant subscriptions or management group causes it to be evaluated continuously and scored in the same dashboard as benchmarks such as PCI DSS or ISO 27001. Workbooks built on exported data can complement this view, but they do not create a tracked standard or a compliance score. Custom Azure Policy initiatives remain part of the plumbing, because they generate the custom recommendations the standard references.`,
    keyPointsJa: [
      '組み込み＋カスタム推奨事項を規制コンプライアンス ダッシュボードで一元スコア化 ＝ カスタム セキュリティ標準を作成',
      'カスタム Azure Policy はカスタム推奨事項を生成する土台だが、イニシアチブ割り当てのみではダッシュボードの標準として表示されない',
      '作成したカスタム標準をサブスクリプションや管理グループに割り当てることで継続的に評価される'
    ],
    keyPointsEn: [
      'Create a custom security standard in Defender for Cloud to track built-in + custom recommendations together',
      'Assigning the custom standard surfaces a compliance score directly in the Regulatory compliance dashboard',
      'An Azure Policy initiative alone does not register as a tracked standard in the Defender for Cloud compliance dashboard'
    ],
    referenceTopic: 'Defender for Cloud カスタム セキュリティ標準'
  },
  {
    id: 'sc500-q42',
    number: 42,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '監査ログ ストレージ アカウントの誤削除防止 (CanNotDelete ロック)',
    titleEn: 'Preventing Accidental Deletion of Audit Storage with CanNotDelete Lock',
    scenarioJa: `Contoso Ltd. は、auditlogsa という名前の Azure Storage アカウントに不変 (Immutable) 監査ログを保存しています。セキュリティ コンプライアンス チームは、サブスクリプションの所有者 (Owner) を含め、誰も誤ってこのストレージ アカウントを削除できないようにしつつ、中断することなく新しい監査ログ エントリを継続的に書き込めるようにすることを要求しています。

最小限の管理オーバーヘッドで両方の要件を満たすガバナンス コントロールを構成する必要があります。`,
    scenarioEn: `Contoso Ltd. stores immutable audit logs in an Azure Storage account named auditlogsa. The security compliance team requires that no one—including subscription Owners—can accidentally delete this storage account, but they must still be able to write new audit log entries to it continuously without interruption. You need to configure a governance control that meets both requirements with minimal administrative overhead.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'auditlogsa ストレージ アカウント全体に「ReadOnly」リソース ロックを適用する',
        textEn: 'Apply a ReadOnly resource lock directly to the auditlogsa storage account',
        isCorrect: false,
        explanationJa: '【不正解】ReadOnly ロックはリソースの削除と変更の両方を防止し、プロパティ・キー・構成の更新などの書き込み操作もブロックします。これにより新しい監査ログ エントリの継続的な書き込みがブロックされ、要件を満たせません。',
        explanationEn: 'A ReadOnly lock prevents both deletion and modification of the resource, including any write operations such as updates to properties, keys, or configuration. This would block the continuous writing of new audit log entries, failing the requirement to keep the storage account writable.'
      },
      {
        id: 'B',
        textJa: 'auditlogsa を含むリソース グループから全ユーザーの「所有者」ロールを削除する',
        textEn: 'Remove all Owner role assignments on the auditlogsa resource group',
        isCorrect: false,
        explanationJa: '【不正解】所有者ロールの割り当てを削除しても、共同作成者 (Contributor) など他のロールや将来のロール割り当てによって削除が許可される可能性があるため、削除防止を保証できません。また通常の管理アクセスを妨げます。',
        explanationEn: 'Removing Owner role assignments does not guarantee protection against deletion, since other roles (such as Contributor) or future role assignments could still permit deletion. This approach also disrupts normal administrative access and does not directly address the stated goal in a reliable, scoped way.'
      },
      {
        id: 'C',
        textJa: 'ストレージ アカウントへの削除操作のみを拒否する Azure Policy を作成する',
        textEn: 'Create an Azure Policy with a deny effect blocking delete operations',
        isCorrect: false,
        explanationJa: '【不正解】Azure Policy は作成時または更新時のリソース プロパティと構成を評価・強制するための機能 (Deny、Audit、Append など) であり、既存リソースに対する削除アクションをブロックするための仕組みではありません。削除防止にはリソース ロックを使用します。',
        explanationEn: 'Azure Policy is designed to evaluate and enforce resource properties and configurations at creation or update time (using effects like Deny, Audit, or Append); it is not the mechanism used to block delete actions on existing resources. Resource locks, not policy definitions, are the purpose-built governance feature for preventing deletion.'
      },
      {
        id: 'D',
        textJa: 'auditlogsa ストレージ アカウント全体に「CanNotDelete」リソース ロックを適用する',
        textEn: 'Apply a CanNotDelete resource lock directly to the auditlogsa storage account',
        isCorrect: true,
        explanationJa: '【正解】CanNotDelete ロックを使用すると、承認されたユーザーはリソースの読み取りおよび変更 (書き込み) を継続できますが、所有者 (Owner) を含むユーザーが保持する RBAC アクセス許可に関係なく、すべての削除操作がブロックされます。削除を防ぎつつ監査ログの書き込みを継続できるため、両方の要件を満たします。',
        explanationEn: 'A CanNotDelete lock allows authorized users to read and modify (write to) the resource but blocks all delete operations, regardless of the RBAC permissions the user holds, including Owner. This satisfies both requirements: deletion is prevented while write operations for audit logging continue uninterrupted.'
      }
    ],
    overallExplanationJa: `Azure のリソース ロックには 2 つの保護レベルがあります：
- **ReadOnly**: 書き込みと削除の両方をブロックします。
- **CanNotDelete**: 書き込み・変更は許可しつつ、削除操作のみをブロックします。

本シナリオでは削除を防止しながら監査ログの継続的な書き込みを許可する必要があるため、CanNotDelete ロックが適切なガバナンス コントロールであり、所有者 (Owner) を含むすべてのユーザーの RBAC アクセス許可よりも優先して適用されます。`,
    overallExplanationEn: `Resource locks in Azure provide two levels of protection: ReadOnly (blocks both writes and deletes) and CanNotDelete (blocks only deletes while allowing writes). Since the scenario requires preventing deletion while still allowing continuous writes, a CanNotDelete lock is the correct governance control, and it overrides RBAC permissions for all users, including Owners.`,
    keyPointsJa: [
      '削除のみ防止し、書き込みや変更は継続許可 ＝ CanNotDelete ロック',
      'リソース ロックは RBAC (所有者/Owner 権限を含む) を上書きして保護する',
      'ReadOnly ロックは書き込み・構成変更・アクセスキー操作等も止めてしまうため不適切'
    ],
    keyPointsEn: [
      'CanNotDelete lock prevents resource deletion while allowing ongoing read/write operations',
      'Azure resource locks override RBAC permissions, including Owner',
      'ReadOnly locks block writes and management operations, which breaks continuous logging/updates'
    ],
    referenceTopic: 'Azure リソース ロック (CanNotDelete vs ReadOnly)'
  },
  {
    id: 'sc500-q43',
    number: 43,
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Copilot 展開前の SharePoint 過剰共有を特定する Purview DSPM for AI',
    titleEn: 'Identifying SharePoint Oversharing with Purview DSPM for AI',
    scenarioJa: `Contoso Ltd. は、組織全体で Microsoft 365 Copilot を展開する予定です。Copilot を有効にする前に、セキュリティ チームは「外部ユーザー以外のすべてのユーザー」(Everyone except external users) と共有されているサイトや、ラベル付けされていない機密ファイルが広くアクセス可能になっているサイトなど、過度に寛容なアクセス制御を持つ SharePoint サイトを事前に特定したいと考えています。

目標は、アクセス権を持つべきではないユーザーに Copilot がコンテンツを提示してしまう前に、過剰共有 (Oversharing) の問題を修復することです。`,
    scenarioEn: `Contoso Ltd. plans to deploy Microsoft 365 Copilot across the organization. Before enabling Copilot, the security team wants to proactively identify SharePoint sites that have overly permissive access controls, such as sites shared with "Everyone except external users" or sites containing sensitive, unlabeled files that are broadly accessible. The goal is to remediate oversharing issues before Copilot can potentially surface this content to users who should not have access to it.`,
    questionJa: 'SharePoint データのこの過剰露出 (Overexposure) を特定するために、セキュリティ チームはどの Microsoft Purview 機能を使用すべきですか？',
    questionEn: 'Which Microsoft Purview capability should the security team use to identify this overexposure of SharePoint data?',
    options: [
      {
        id: 'A',
        textJa: 'コミュニケーション コンプライアンス ポリシー',
        textEn: 'Communication Compliance policies',
        isCorrect: false,
        explanationJa: '【不正解】コミュニケーション コンプライアンスは、メッセージ内のハラスメントや規制違反などの不適切なコンテンツを検出するための機能であり、SharePoint サイトのアクセス許可の評価やファイル・フォルダーの過剰共有を特定する機能はありません。',
        explanationEn: 'Communication Compliance is designed to detect inappropriate content in messages, such as harassment or regulatory violations, and has no functionality for assessing SharePoint site permissions or identifying oversharing of files and folders.'
      },
      {
        id: 'B',
        textJa: '情報バリアとセグメント分離ポリシー',
        textEn: 'Information Barriers policies',
        isCorrect: false,
        explanationJa: '【不正解】情報バリアは利益相反を防ぐために特定のユーザー グループ間の通信とコラボレーションを制限する機能ですが、過剰に公開された SharePoint コンテンツを特定するためのレポートや評価機能は提供しません。',
        explanationEn: 'Information Barriers restrict communication and collaboration between specific groups of users to prevent conflicts of interest, but they do not provide reporting or assessment capabilities for identifying overexposed SharePoint content.'
      },
      {
        id: 'C',
        textJa: 'Purview DSPM for AI リスク評価',
        textEn: 'Purview DSPM for AI assessments',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Purview Data Security Posture Management (DSPM) for AI は、広範なアクセス許可、ラベル付けされていない機密データ、大人数のグループからアクセス可能なコンテンツなど、過剰共有の問題がある SharePoint サイトを具体的に特定するデータ リスク評価レポートを提供し、Copilot などの AI ツールを有効化する前の露出修復を支援します。',
        explanationEn: 'Microsoft Purview Data Security Posture Management (DSPM) for AI provides data risk assessment reports that specifically identify SharePoint sites with oversharing issues, such as broad permissions, unlabeled sensitive data, and content accessible to large groups, helping organizations remediate exposure before enabling AI tools like Copilot.'
      },
      {
        id: 'D',
        textJa: 'インサイダー リスク管理ポリシー構成',
        textEn: 'Insider Risk Management policies',
        isCorrect: false,
        explanationJa: '【不正解】インサイダー リスク管理は、特定されたユーザーによるデータ持ち出しやポリシー違反など危険なユーザー行動の検出に重点を置いており、SharePoint サイトのアクセス許可構造を評価したりテナント全体の意図しないデータ露出を特定したりする機能ではありません。',
        explanationEn: 'Insider Risk Management focuses on detecting risky user behaviors such as data exfiltration or policy violations by identified users, not on assessing SharePoint site permission structures or identifying broad, unintended data exposure across the tenant.'
      }
    ],
    overallExplanationJa: `Microsoft Purview Data Security Posture Management (DSPM) for AI は、Microsoft 365 Copilot などの AI 展開に備えて、組織が SharePoint の過剰共有やデータ過剰露出のリスクを特定・修復できるように設計された専用機能です。

サイトのアクセス許可、ラベル未設定の機密データ、広範な共有構成に関する実用的なデータ リスク評価インサイトを生成するため、Copilot 導入前の事前評価に最適なツールです。`,
    overallExplanationEn: `Microsoft Purview DSPM for AI is purpose-built to help organizations identify and remediate SharePoint oversharing and data overexposure risks in preparation for AI deployments like Microsoft 365 Copilot. It generates actionable insights on site permissions, unlabeled sensitive data, and broad access configurations, making it the correct tool for this scenario.`,
    keyPointsJa: [
      'M365 Copilot 導入前の SharePoint 過剰共有・未ラベル機密ファイルの発見 ＝ Purview DSPM for AI',
      '「Everyone except external users」等の過剰なアクセス権をデータ リスク評価レポートで可視化',
      'DSPM for AI は態勢評価・推奨提供を行い、実際の Copilot 処理ブロックは Purview DLP 等と組み合わせて実施'
    ],
    keyPointsEn: [
      'Use Microsoft Purview DSPM for AI to assess SharePoint oversharing and unlabeled sensitive data before Copilot rollout',
      'Provides data risk assessment reports highlighting sites shared broadly (e.g., Everyone except external users)',
      'Communication Compliance, Information Barriers, and Insider Risk Management address different compliance scenarios'
    ],
    referenceTopic: 'Microsoft Purview DSPM for AI による過剰共有対策'
  },
  {
    id: 'sc500-q44',
    number: 44,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'App Service へのトラフィックを特定の Azure Front Door プロファイルのみに制限する',
    titleEn: 'Restricting App Service Origin Traffic to a Specific Front Door Profile',
    scenarioJa: `Contoso 社は、キャッシュ、Web アプリケーション ファイアウォール (WAF)、および TLS 終端を提供する Azure Front Door Premium を介してパブリック Web アプリケーションを公開しています。テスト担当者は、オリジンの App Service に azurewebsites.net アドレスで直接アクセスできるため、Front Door の保護をバイパスできることを発見しました。

別の顧客の Front Door インスタンスがオリジンへ到達しようとした場合も含め、Contoso 社自身の Front Door プロファイルを経由して到着するトラフィックのみを App Service が受け入れるようにする必要があります。`,
    scenarioEn: `Contoso publishes a public web application through Azure Front Door Premium, which provides caching, a Web Application Firewall, and TLS termination. Testers discover that the origin App Service can still be reached directly at its azurewebsites.net address, allowing the Front Door protections to be bypassed.

You must ensure that the App Service accepts traffic only when it arrives through Contoso's own Front Door profile, including when another customer's Front Door instance attempts to reach the origin.`,
    questionJa: 'App Service で何を構成すべきですか？',
    questionEn: 'What should you configure on the App Service?',
    options: [
      {
        id: 'A',
        textJa: 'パブリック ネットワーク アクセスを無効にした状態で App Service にプライベート エンドポイントを構成する',
        textEn: 'A private endpoint on the App Service with public network access disabled.',
        isCorrect: false,
        explanationJa: '【不正解】プライベート エンドポイントはパブリック到達可能性を完全に削除するため、エンドツーエンドで Private Link オリジン サポートを構成しない限り標準的な Front Door 統合パスもブロックされます。既存の公開トポロジを維持したままバイパス トラフィックのみをフィルターする要件とは異なります。',
        explanationEn: 'A private endpoint removes public reachability altogether, which would also block the Front Door Standard integration path unless Private Link origin support is configured end to end. As described here it would break the published application rather than just filtering bypass traffic.'
      },
      {
        id: 'B',
        textJa: 'AzureFrontDoor.Backend サービス タグのみを許可するアクセス制限規則',
        textEn: 'An access restriction rule that allows only the AzureFrontDoor.Backend service tag.',
        isCorrect: false,
        explanationJa: '【不正解】このサービス タグはすべての顧客が使用する Azure Front Door インフラストラクチャ全体をカバーしているため、他テナントの Front Door プロファイルも依然としてオリジンに到達できてしまいます。テナント固有に制限するにはヘッダー チェックが必要です。',
        explanationEn: 'The service tag covers Azure Front Door infrastructure used by every customer, so any tenant\'s Front Door profile could still reach the origin. The header check is what makes the rule tenant-specific.'
      },
      {
        id: 'C',
        textJa: 'App Service に直接適用された Web アプリケーション ファイアウォール (WAF) ポリシー',
        textEn: 'A Web Application Firewall policy applied directly to the App Service.',
        isCorrect: false,
        explanationJa: '【不正解】App Service は Front Door WAF ポリシーを直接ホストせず、WAF はどのフロント エンドが要求を転送したかを検証するのではなく要求の内容を検査します。オリジンのホスト名への直接要求は引き続き処理されてしまいます。',
        explanationEn: 'App Service does not host a Front Door WAF policy directly, and a WAF inspects request content rather than validating which front end forwarded the request. Direct requests to the origin hostname would still be served.'
      },
      {
        id: 'D',
        textJa: 'AzureFrontDoor.Backend と X-Azure-FDID 一致を要求するアクセス制限',
        textEn: 'An access restriction matching AzureFrontDoor.Backend and Contoso\'s X-Azure-FDID.',
        isCorrect: true,
        explanationJa: '【正解】サービス タグは受信トラフィックをすべての顧客間で共有される Front Door プラットフォームのアドレス範囲に制限します。さらに X-Azure-FDID 値のヘッダー一致を追加することで、規則が Contoso の特定の Front Door プロファイルに紐付けられ、別テナントのインスタンスからのアクセスも拒否されます。',
        explanationEn: 'The service tag limits inbound traffic to the Front Door platform\'s address ranges, which are shared across all customers. Adding a header match on the X-Azure-FDID value ties the rule to Contoso\'s specific Front Door profile, so another tenant\'s instance is rejected.'
      }
    ],
    overallExplanationJa: `オリジンを特定の Azure Front Door プロファイルのみにロックするには、2 つの制御を組み合わせる必要があります：
1. **サービス タグ (AzureFrontDoor.Backend)**: 受信トラフィックを Front Door が使用する IP アドレス範囲に制限します。ただし、これらの範囲はすべての Azure 顧客で共有されているため、サービス タグだけでは第三者の Front Door プロファイルからの呼び出しを許可してしまいます。
2. **X-Azure-FDID ヘッダー一致**: Front Door は各要求にプロファイルの一意識別子を含む X-Azure-FDID ヘッダーを付与し、App Service のアクセス制限はそのヘッダー値に一致させることができます。

サービス タグと X-Azure-FDID ヘッダー一致を組み合わせることで、Front Door インフラストラクチャ経由かつ Contoso 自身のプロファイル ID を持つ要求のみが受け入れられます。`,
    overallExplanationEn: `Locking an origin to a specific Front Door profile takes two coordinated controls. The AzureFrontDoor.Backend service tag restricts inbound traffic to the address ranges Front Door uses, but those ranges are shared by every Azure customer, so on its own the tag would still allow a stranger's profile to call the origin. Front Door stamps each request with an X-Azure-FDID header containing the profile's unique identifier, and App Service access restrictions can match on that header value. Combining the service tag with the header match means requests are accepted only when they come from Front Door infrastructure and carry Contoso's own profile ID. Private Link origins are a stronger alternative on supported tiers, but they change the publishing topology rather than simply filtering the existing one.`,
    keyPointsJa: [
      'App Service オリジンへのバイパス防止 ＝ AzureFrontDoor.Backend サービス タグ ＋ X-Azure-FDID ヘッダー一致',
      'サービス タグのみでは他テナントの Azure Front Door からのアクセスを防げない',
      'X-Azure-FDID は自社の特定 Front Door プロファイル ID のみを許可するための必須検証ヘッダー'
    ],
    keyPointsEn: [
      'Combine AzureFrontDoor.Backend service tag with X-Azure-FDID header matching on App Service access restrictions',
      'Service tag alone allows any customer\'s Front Door profile to reach your origin',
      'Matching X-Azure-FDID locks access to your specific Front Door profile ID'
    ],
    referenceTopic: 'App Service と Azure Front Door のオリジン ロック (X-Azure-FDID)'
  },
  {
    id: 'sc500-q45',
    number: 45,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Cosmos DB 向けの Defender プラン個別有効化',
    titleEn: 'Enabling Microsoft Defender for Azure Cosmos DB Plan',
    scenarioJa: `あなたは、Azure SQL Database、Azure Cosmos DB for NoSQL、および Azure Database for PostgreSQL フレキシブル サーバーといった複数の Azure データベース サービスを使用する Contoso 社のセキュリティ管理者です。Microsoft Defender for Cloud で、サブスクリプション レベルの Microsoft Defender for SQL プランを有効にし、Azure SQL Database インスタンスで脆弱性評価と脅威アラートが正常に動作していることを確認しました。

セキュリティ レビュー中に、Azure Cosmos DB アカウントが数週間アクティブであり異常なクエリ アクティビティが記録されているにもかかわらず、脅威検出アラートをまったく生成していないことが判明しました。`,
    scenarioEn: `You are the security administrator for Contoso, which uses multiple Azure database services: Azure SQL Database, Azure Cosmos DB for NoSQL, and Azure Database for PostgreSQL flexible server. In Microsoft Defender for Cloud, you enable the Microsoft Defender for SQL plan at the subscription level and confirm that vulnerability assessments and threat alerts are working correctly for the Azure SQL Database instances.

During a security review, you discover that the Azure Cosmos DB account is not generating any threat detection alerts, even though it has been active for several weeks and has recorded anomalous query activity.`,
    questionJa: 'Defender for Cloud が Cosmos DB アカウントに脅威保護を提供するようにするには、何をすべきですか？',
    questionEn: 'What should you do to ensure that Defender for Cloud provides threat protection for the Cosmos DB account?',
    options: [
      {
        id: 'A',
        textJa: 'Sentinel が自動的に脅威アラートを Defender for Cloud に送り返すため、Cosmos DB 診断ログ用の Microsoft Sentinel データ コネクタを新規作成して有効にする',
        textEn: 'Create and enable a Microsoft Sentinel data connector for Cosmos DB diagnostic logs, since Sentinel automatically forwards alerts back to Defender for Cloud.',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Sentinel は調査と相関分析のためにログやアラートを取り込めますが、Cosmos DB 用の基盤となる Defender for Cloud 脅威検出アラートを生成するわけではありません。Defender for Cosmos DB プランを有効にしていない限り、そもそも Sentinel へ転送するネイティブの脅威アラートが存在しません。',
        explanationEn: 'Microsoft Sentinel can ingest logs and alerts for investigation and correlation, but it does not generate the underlying Defender for Cloud threat detection alerts for Cosmos DB. Without the Defender for Cosmos DB plan enabled, there are no native threat alerts to forward to Sentinel in the first place.'
      },
      {
        id: 'B',
        textJa: 'Defender for Cloud の環境設定で、Cosmos DB アカウントを含むサブスクリプションまたはリソースに対して Microsoft Defender for Azure Cosmos DB プランを有効にする',
        textEn: 'In Defender for Cloud environment settings, enable the Microsoft Defender for Azure Cosmos DB plan for the subscription or resource containing the Cosmos DB account.',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Defender for Cloud は各 Azure データベース サービスを個別のプランで保護しており、Defender for Azure Cosmos DB は Defender for SQL とは別に明示的に有効化する必要があります。サブスクリプションまたはリソース レベルでこのプランを有効にすることで、異常なクエリ、潜在的な SQL インジェクション、Cosmos DB 固有の不審なアクセス パターンに対する脅威検出がアクティブになります。',
        explanationEn: 'Microsoft Defender for Cloud protects each Azure database service through a distinct plan, and Defender for Azure Cosmos DB must be explicitly enabled separately from Defender for SQL. Enabling this plan at the subscription or resource level activates threat detection, including alerts for anomalous queries, potential SQL injection, and unusual access patterns specific to Cosmos DB.'
      },
      {
        id: 'C',
        textJa: '既存の Azure SQL Database の Advanced Threat Protection 設定を開き、保護対象のリソース リンクとして Cosmos DB アカウントを明示的に追加する',
        textEn: 'Open the Azure SQL Database Advanced Threat Protection settings in Defender for Cloud and add the Cosmos DB account as a linked protected resource.',
        isCorrect: false,
        explanationJa: '【不正解】Azure SQL Database 内の Advanced Threat Protection 設定は SQL リソースにのみ適用され、保護対象を Cosmos DB に「リンク」または拡張する仕組みはありません。Defender for Cloud ではデータベースの種類ごとに専用プランを個別に有効化する必要があります。',
        explanationEn: 'Advanced Threat Protection settings within Azure SQL Database apply only to SQL resources and have no mechanism to "link" or extend coverage to Cosmos DB. Each database type in Defender for Cloud has its own dedicated plan that must be individually enabled.'
      },
      {
        id: 'D',
        textJa: 'Cosmos DB データは最終的に基盤となる Azure Storage インフラストラクチャに保存されるため、サブスクリプションで Microsoft Defender for Storage プランを有効にする',
        textEn: 'Enable the Microsoft Defender for Storage plan on the subscription, since Cosmos DB data is ultimately stored on underlying Azure Storage infrastructure.',
        isCorrect: false,
        explanationJa: '【不正解】Cosmos DB データは基盤となる Azure インフラストラクチャ上に保存されますが、Microsoft Defender for Storage は BLOB やファイル ストレージ アカウントを保護するものであり、Cosmos DB の異常なクエリ パターン検出といったデータベース層の脅威検出は提供しません。',
        explanationEn: 'Although Cosmos DB data is stored on underlying Azure infrastructure, Microsoft Defender for Storage protects blob and file storage accounts and does not provide database-layer threat detection, such as anomalous query pattern detection, for Cosmos DB.'
      }
    ],
    overallExplanationJa: `Microsoft Defender for Cloud は、データベース保護をサービス固有の個別プラン (Defender for SQL、Defender for Azure Cosmos DB、Defender for open-source relational databases など) として実装しています。

あるプランを有効にしても、他の種類のデータベース サービスへ自動的に保護が拡張されることはありません。該当する Azure データベース サービス固有の脅威検出および脆弱性評価機能を有効にするには、環境設定でそれぞれのプランを個別に有効化する必要があります。`,
    overallExplanationEn: `Microsoft Defender for Cloud implements database protection through separate, service-specific plans (e.g., Defender for SQL, Defender for Cosmos DB, Defender for open-source relational databases). Enabling one plan does not automatically extend protection to other database types; each plan must be individually enabled to activate the relevant threat detection and vulnerability assessment capabilities for that specific Azure database service.`,
    keyPointsJa: [
      'Defender for Cloud のデータベース プランはサービス種類ごとに独立 (Defender for SQL とは別に Defender for Azure Cosmos DB が必要)',
      '環境設定でサブスクリプションまたはリソース単位でプランを有効化する',
      'Defender for Storage や Sentinel 診断ログ接続では Cosmos DB の脅威検出アラートは生成されない'
    ],
    keyPointsEn: [
      'Defender for Cloud database plans are separate per database engine; enable Defender for Azure Cosmos DB explicitly',
      'Enabling Defender for SQL does not cover Cosmos DB or open-source relational databases',
      'Sentinel ingests alerts/logs but does not replace the dedicated Defender plan'
    ],
    referenceTopic: 'Defender for Cloud のデータベース別プラン構成'
  },
  {
    id: 'sc500-q46',
    number: 46,
    domain: 'Entra ID & CIEM',
    difficulty: '標準 (Medium)',
    titleJa: 'PIM ロール設定での MFA・正当な理由・承認者の強制',
    titleEn: 'Enforcing MFA, Justification, and Approval in Entra ID PIM',
    scenarioJa: `Contoso Ltd. は、Microsoft Entra ID Privileged Identity Management (PIM) を使用して特権ロールを管理しています。セキュリティ チームは、ユーザーが適格 (Eligible) な Exchange 管理者 (Exchange Administrator) ロールをアクティブ化するたびに、次の要件を強制したいと考えています：

- ユーザーはアクティブ化の正当な業務上の理由 (Business justification) を入力する必要がある。
- ロールがアクティブになる前に、ユーザーは Azure 多要素認証 (MFA) を完了する必要がある。
- ロールが付与される前に、指定されたセキュリティ責任者がアクティブ化要求を承認する必要がある。

最小限の管理作業でこれらの要件を満たすように PIM を構成する必要があります。`,
    scenarioEn: `Contoso Ltd. uses Microsoft Entra ID Privileged Identity Management (PIM) to manage privileged roles. The security team wants to enforce the following requirements whenever a user activates the eligible Exchange Administrator role:

- The user must provide a business justification for the activation.
- The user must complete Azure Multi-Factor Authentication (MFA) before the role becomes active.
- A designated security officer must approve the activation request before the role is granted.

You need to configure PIM to meet these requirements with the least administrative effort.`,
    questionJa: '何を実行すべきですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Exchange 管理者ベースのカスタム ロールを作成し、割り当て前に MFA とマネージャー承認を要求する条件付きアクセスを構成する',
        textEn: 'Create a custom role for Exchange Administrator and configure Conditional Access to require MFA and manager approval before assignment.',
        isCorrect: false,
        explanationJa: '【不正解】カスタム ロールの作成は既存の組み込み Exchange 管理者ロールを不必要に重複させるものであり、条件付きアクセス単体ではロール アクティブ化時の正当な理由の入力や承認要件を強制できないため、要件を満たせません。',
        explanationEn: 'Creating a custom role duplicates the built-in Exchange Administrator role unnecessarily, and Conditional Access alone cannot enforce justification or approval requirements for role activation; this adds complexity without meeting all stated requirements.'
      },
      {
        id: 'B',
        textJa: 'Exchange 管理者向けに MFA を求める条件付きアクセスと、ロール割り当てに承認を求めるアクセス レビューを構成する',
        textEn: 'Create a Conditional Access policy requiring MFA for Exchange Administrator and an access review requiring manager approval.',
        isCorrect: false,
        explanationJa: '【不正解】条件付きアクセスはサインイン時に MFA を強制できますが、PIM ロールのアクティブ化に特化して理由や承認を要求することはできません。また、アクセス レビューは既存の割り当てを定期的に再認証するためのものであり、リアルタイムのアクティブ化要求を制御するものではありません。',
        explanationEn: 'Conditional Access can enforce MFA at sign-in, but it cannot require justification or approval specifically for a PIM role activation, and access reviews are used to periodically recertify existing assignments, not to gate real-time activation requests.'
      },
      {
        id: 'C',
        textJa: '有効期限付きで Exchange 管理者ロールをアクティブ (Active) に割り当て、すべてのサインインで MFA を完了させる',
        textEn: 'Assign the Exchange Administrator role as Active with an expiration date and instruct users to complete MFA on every sign-in.',
        isCorrect: false,
        explanationJa: '【不正解】ロールを「アクティブ (Active)」として割り当てるとアクティブ化プロセス自体が不要になり、ユーザーは正当な理由や承認ワークフローなしに常時アクセス権 (Standing access) を持つことになるため、制御された承認済みアクティブ化プロセスの要件に反します。',
        explanationEn: 'Assigning the role as Active removes the need for activation entirely, meaning the user would have standing access without justification or approval workflows, which directly contradicts the requirement for a controlled, approved activation process.'
      },
      {
        id: 'D',
        textJa: 'PIM の Exchange 管理者ロール設定 [アクティブ化] タブで MFA・理由・セキュリティ責任者承認を必須にする',
        textEn: 'Open PIM Role settings > Activation tab for Exchange Administrator and require MFA, justification, and security officer approval.',
        isCorrect: true,
        explanationJa: '【正解】PIM のロール設定の [アクティブ化] タブでは、適格 (Eligible) なロール割り当てをアクティブ化する前提条件として MFA、理由の入力、および指定した承認者による承認をネイティブに要求でき、単一の専用構成で 3 つの要件すべてを確実に満たします。',
        explanationEn: 'PIM role settings on the Activation tab allow an administrator to natively require MFA, justification, and approval (with a specified approver) as prerequisites for activating an eligible role assignment, satisfying all three requirements in a single, purpose-built configuration.'
      }
    ],
    overallExplanationJa: `Microsoft Entra ID PIM のロール設定 (Role settings) は、各特権ロールの [アクティブ化] タブ上できめ細かな組み込みコントロール (MFA、正当な理由、承認ワークフロー) を直接提供しており、これらの要件を強制する最も正確かつ効率的な方法です。

条件付きアクセスやアクセス レビューは補完的な別目的の機能であり、PIM ネイティブのアクティブ化制御を完全に代替することはできません。`,
    overallExplanationEn: `PIM role settings provide granular, built-in controls (MFA, justification, and approval) directly on the Activation tab for each privileged role, making it the correct and most efficient way to enforce these requirements. Conditional Access and access reviews serve complementary but different purposes and cannot fully replace PIM's native activation controls.`,
    keyPointsJa: [
      'PIM 適格ロールのアクティブ化要件 (MFA・理由・承認者) ＝ PIM「ロール設定」の [アクティブ化] タブで構成',
      'Active 割り当ては常時権限となりアクティブ化ワークフローをバイパスしてしまう',
      'アクセス レビューは定期的な棚卸し用であり、リアルタイムの昇格承認には使えない'
    ],
    keyPointsEn: [
      'Configure MFA, justification, and approval directly in PIM Role settings -> Activation tab',
      'Active assignments bypass JIT activation controls; Eligible assignments enforce them',
      'Access reviews handle periodic recertification, not real-time activation gating'
    ],
    referenceTopic: 'Microsoft Entra ID PIM のロール設定 (アクティブ化要件)'
  },
  {
    id: 'sc500-q47',
    number: 47,
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'Global Secure Access / Private Access におけるアプリ単位の条件付きアクセス適用',
    titleEn: 'Granular Conditional Access per App in Microsoft Entra Private Access',
    scenarioJa: `あなたの組織では、オンプレミス リソースへの安全なリモート アクセスを提供するために Microsoft Entra Private Access (Microsoft Entra Global Secure Access の一部) を使用しています。プライベート ネットワーク コネクタを展開し、Global Secure Access クライアントを実行しているすべてのマネージド デバイスで Private Access トラフィック転送プロファイルを有効にしています。

現在、すべての内部サーバーとアプリケーションは、内部 IP アドレス範囲を一覧表示する既定の「クイック アクセス」(Quick Access) 構成を通じて到達可能です。今回、ユーザーが TCP ポート 443 上の 10.10.5.20 の内部サーバーでホストされている特定の財務基幹業務アプリケーションに接続するときに「のみ」、多要素認証 (MFA) と準拠デバイス (Compliant device) を要求する条件付きアクセス ポリシーを強制する必要があります。クイック アクセスを介した他のすべての内部リソースへのアクセスは、この新しい要件の影響を受けないようにする必要があります。`,
    scenarioEn: `Your organization uses Microsoft Entra Private Access (part of Microsoft Entra Global Secure Access) to provide secure remote access to on-premises resources. You have already deployed a Private Network Connector and enabled the Private Access traffic forwarding profile on all managed devices, which are running the Global Secure Access Client.

Currently, all internal servers and applications are reachable through the default Quick Access configuration, which lists the internal IP address ranges. You now need to enforce a Conditional Access policy that requires multifactor authentication (MFA) and a compliant device, but ONLY when users connect to a specific finance line-of-business application hosted on an internal server at 10.10.5.20 on TCP port 443. Access to all other internal resources through Quick Access must remain unaffected by this new requirement.`,
    questionJa: 'この要件を満たすには何をすべきですか？',
    questionEn: 'What should you do to meet this requirement?',
    options: [
      {
        id: 'A',
        textJa: '財務アプリケーション サーバー上で証明書ベース認証を要求する Windows ファイアウォール規則を構成した上で、Global Secure Access クライアント詳細設定でアプリ単位のトンネリングを有効にする',
        textEn: 'Configure a Windows Firewall rule on the internal finance application server to require certificate-based authentication, and enable per-app tunneling in the Global Secure Access Client settings.',
        isCorrect: false,
        explanationJa: '【不正解】Global Secure Access は条件付きアクセスの強制にクライアント側の Windows ファイアウォール規則や証明書ベースのアプリ単位トンネリング構成を使用しません。アクセス制御はローカル ファイアウォールではなく、エンタープライズ アプリケーションに適用された条件付きアクセス ポリシーで管理されます。',
        explanationEn: 'Global Secure Access does not use Windows Firewall rules or certificate-based per-app tunneling configurations on the client for enforcing Conditional Access; access controls are managed through Conditional Access policies applied to Enterprise Applications, not local firewall settings.'
      },
      {
        id: 'B',
        textJa: 'クラウド アプリケーションの対象として Private Access トラフィック転送プロファイル全体を選択した条件付きアクセス ポリシーを作成し、すべてのユーザーに MFA とデバイス準拠を要求する',
        textEn: 'Create a Conditional Access policy that targets the entire Private Access traffic forwarding profile as the cloud app, and require multifactor authentication and a compliant device for all users.',
        isCorrect: false,
        explanationJa: '【不正解】Private Access トラフィック転送プロファイル全体を対象にすると、特定の財務アプリケーションだけでなくすべてのプライベート ネットワーク トラフィックに条件付きアクセス要件が適用されてしまい、他のリソースに影響を与えないという要件に違反します。',
        explanationEn: 'Targeting the Private Access traffic forwarding profile as a whole would apply the Conditional Access requirements to all private network traffic, not just the specific finance application, violating the requirement to leave other resources unaffected.'
      },
      {
        id: 'C',
        textJa: 'Global Secure Access で新しいエンタープライズ アプリケーションを作成し、10.10.5.20 の TCP ポート 443 用のアプリケーション セグメントを定義して、この特定のアプリケーションを対象とする条件付きアクセス ポリシーを割り当てる',
        textEn: 'Create a new Enterprise Application in Global Secure Access, define an application segment for 10.10.5.20 on TCP port 443, and assign a Conditional Access policy that targets this specific application.',
        isCorrect: true,
        explanationJa: '【正解】特定のアプリケーション セグメント (FQDN/IP とポート) を持つ専用のエンタープライズ アプリケーションを作成すると、Microsoft Entra Private Access はそのリソースを独自の保護対象アプリとして扱うことができ、そのアプリに対してのみ MFA とデバイス準拠を強制する条件付きアクセス ポリシーを個別に割り当てられます。',
        explanationEn: 'Creating a dedicated Enterprise Application with a specific application segment (FQDN/IP and port) allows Microsoft Entra Private Access to treat that resource as its own protected application, enabling you to assign a targeted Conditional Access policy that enforces MFA and device compliance only for that application.'
      },
      {
        id: 'D',
        textJa: '既存のクイック アクセス (Quick Access) ネットワーク IP 範囲に財務アプリケーションの 10.10.5.20 とポート 443 を追加し、クイック アクセス プロファイル全体に条件付きアクセス ポリシーを適用する',
        textEn: 'Add the finance application\'s IP address (10.10.5.20) and TCP port 443 to the existing Quick Access network range, and then apply a Conditional Access policy to the Quick Access profile.',
        isCorrect: false,
        explanationJa: '【不正解】クイック アクセスは定義済み IP 範囲への広範で低摩擦な接続を目的としており、リソース単位のきめ細かな条件付きアクセス ポリシーの適用はサポートしていません。クイック アクセスに適用されたポリシーは財務アプリだけでなく範囲内のすべてのリソースに影響します。',
        explanationEn: 'Quick Access is designed for broad, low-friction connectivity to defined IP ranges and does not support applying granular, per-resource Conditional Access policies; any policy applied to Quick Access would affect all resources in that range, not just the finance application.'
      }
    ],
    overallExplanationJa: `Microsoft Entra Private Access でアプリケーションごとのきめ細かな条件付きアクセス制御を適用するには、特定のリソース (IP/FQDN とポート) のアプリケーション セグメントを定義した専用の「エンタープライズ アプリケーション」(Enterprise Application) としてオンボーディングし、そのアプリをスコープとして条件付きアクセス ポリシーを割り当てる必要があります。

クイック アクセス (Quick Access) はシンプルかつ広範な内部接続向けの機能であり、単一アプリ・単一ポートに絞ったポリシー強制はサポートしていないため、専用のエンタープライズ アプリケーションを作成する方法が要件を満たす唯一の解決策となります。`,
    overallExplanationEn: `To apply granular, per-application Conditional Access controls in Microsoft Entra Private Access, administrators must onboard the specific resource as an Enterprise Application with a defined application segment, then scope a Conditional Access policy to that application. Quick Access is intended for simple, broad connectivity and cannot support resource-specific policy enforcement, making a dedicated Enterprise Application the only solution that meets the stated requirements.`,
    keyPointsJa: [
      'Private Access で特定 IP:Port のみに条件付きアクセスを適用 ＝ 専用エンタープライズ アプリ作成 ＋ アプリケーション セグメント定義',
      'クイック アクセス (Quick Access) や転送プロファイル単位へのポリシー適用は全内部リソースに影響してしまう',
      'より具体的なアプリケーション セグメント定義がクイック アクセスの広い範囲よりも優先・個別制御される'
    ],
    keyPointsEn: [
      'Create a Global Secure Access Enterprise Application with an application segment (10.10.5.20 TCP 443) for per-app Conditional Access',
      'Applying Conditional Access to Quick Access or the forwarding profile affects all internal traffic',
      'Per-app segmentation isolates MFA and device compliance enforcement cleanly'
    ],
    referenceTopic: 'Microsoft Entra Private Access のエンタープライズ アプリ単位制御'
  },
  {
    id: 'sc500-q48',
    number: 48,
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Purview DLP による M365 Copilot の機密ラベル付きコンテンツ要約制限',
    titleEn: 'Restricting Copilot Processing of Labeled Content with Purview DLP',
    scenarioJa: `Contoso 社は Microsoft 365 Copilot を展開しました。SharePoint Online のドキュメントには Microsoft Purview 秘密度ラベルが付与されており、法務部門は、対象ドキュメントを開く権限を持つユーザーであっても、「極秘」(Highly Confidential) ラベルが付いたコンテンツは Copilot の応答内で決して要約や引用が行われないように規定しました。

その他のラベル付きおよびラベルなしコンテンツはすべて、通常どおり Copilot で引き続き利用可能である必要があります。`,
    scenarioEn: `Contoso has deployed Microsoft 365 Copilot. Documents in SharePoint Online are labelled with Microsoft Purview sensitivity labels, and legal has ruled that content carrying the Highly Confidential label must never be summarized or quoted in a Copilot response, even for users who are otherwise permitted to open those documents.

All other labelled and unlabelled content must remain available to Copilot as normal.`,
    questionJa: '何を構成すべきですか？',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'M365 Copilot と Copilot Chat 場所を対象に、極秘ラベルでの Copilot 処理を制限する Purview DLP ポリシー',
        textEn: 'A Purview DLP policy for the M365 Copilot and Copilot Chat location that restricts Copilot from processing Highly Confidential items.',
        isCorrect: true,
        explanationJa: '【正解】「Microsoft 365 Copilot and Copilot Chat」DLP 場所は、ファイルに対するユーザー自身のアクセス権限とは無関係に、特定のラベル付きアイテムが Copilot 応答のグラウンディング (参照) や要約に使用されるのを停止するために特別に用意されています。ルールに一致したアイテムは応答の引用元リストに表示されることはあっても、その内容は回答の生成に使用されません。',
        explanationEn: 'The Microsoft 365 Copilot and Copilot Chat DLP location exists specifically to stop labelled items being used to ground or summarise Copilot responses, independently of the user\'s own permissions on the file. Items matched by the rule can still be listed in the response citations, but their content is not used in the answer.'
      },
      {
        id: 'B',
        textJa: 'SharePoint の極秘ドキュメントに対し 5 年間のデータ保持を強制する Microsoft Purview 保持ラベル ポリシー',
        textEn: 'A Microsoft Purview retention label policy that applies a five-year preservation lock to Highly Confidential SharePoint documents.',
        isCorrect: false,
        explanationJa: '【不正解】保持ラベルはコンテンツの保存期間および破棄時期を管理するものであり、Copilot が応答生成時にアイテムを参照できるかどうかには影響しません。',
        explanationEn: 'Retention labels govern how long content is preserved and when it is disposed of. They do not influence whether Copilot may reference an item when generating a response.'
      },
      {
        id: 'C',
        textJa: 'SharePoint の過剰共有リスクやラベル未設定ファイルを検出する DSPM for AI の推奨事項レポート機能',
        textEn: 'Data Security Posture Management (DSPM) for AI recommendations that report oversharing risks across SharePoint sites.',
        isCorrect: false,
        explanationJa: '【不正解】DSPM for AI は過剰共有リスクが存在する箇所を報告して修復アクションを推奨します。可視性とガイダンスを提供しますが、応答時に特定コンテンツの処理をブロックする強制コントロールではありません。',
        explanationEn: 'DSPM for AI reports where oversharing risk exists and recommends remediation actions. It provides visibility and guidance rather than an enforcement control that blocks specific content at response time.'
      },
      {
        id: 'D',
        textJa: '対象ドキュメントを検索インデックスから除外してアクセスを防ぐ SharePoint Online サイト レベル制限',
        textEn: 'A SharePoint Online site-level search setting that excludes Highly Confidential documents from search indexing.',
        isCorrect: false,
        explanationJa: '【不正解】検索インデックスからコンテンツを除外すると、Copilot だけでなくすべてのユーザーおよびすべてのワークロードの検索性・発見可能性に影響が生じ、維持すべき正当なアクセス シナリオも損なわれてしまいます。',
        explanationEn: 'Removing content from the search index affects discoverability for every user and every workload, not just Copilot. It also breaks legitimate access scenarios that the requirement says must be preserved.'
      }
    ],
    overallExplanationJa: `Microsoft Purview データ損失防止 (DLP) は、専用の **Microsoft 365 Copilot and Copilot Chat** ポリシー場所をサポートしています (カスタム ポリシー テンプレートから選択でき、同一ポリシー内の他の場所は無効になります)。

条件として「コンテンツに含まれる情報 > 秘密度ラベル」(Highly Confidential)、アクションとして Copilot によるコンテンツ処理の制限を設定すると、他のすべてのコンテンツを通常どおり利用可能な状態に保ちつつ、対象アイテムが Copilot によって要約・引用されるのを確実に防止できます。これはプロンプト処理時に Purview によって強制されるため、ドキュメントに対する完全なアクセス権を持つユーザーに対しても有効です。`,
    overallExplanationEn: `Microsoft Purview data loss prevention supports a dedicated Microsoft 365 Copilot and Copilot Chat policy location that is available only from the Custom policy template and disables all other locations in the same policy. A rule with a Content contains > Sensitivity labels condition for Highly Confidential and the action to restrict Copilot from processing content prevents those items from being summarised or quoted, while everything else stays available. This is enforced by Purview at prompt processing time, so it applies even to users who have full permissions on the document. Retention labels manage lifecycle, removing sites from search is a blunt change that affects normal search as well, and DSPM for AI reports on oversharing risk but does not itself block Copilot from processing labelled content.`,
    keyPointsJa: [
      'アクセス権があるユーザーの Copilot でも特定ラベル文書の要約・引用を禁止 ＝ Purview DLP の「Microsoft 365 Copilot and Copilot Chat」場所',
      'カスタム ポリシー テンプレートから選択し、秘密度ラベル条件で Copilot 処理を制限する',
      '検索インデックス除外は通常の SharePoint 検索も壊すため不適切、DSPM for AI は可視化のみで動的ブロック機能ではない'
    ],
    keyPointsEn: [
      'Use a Purview DLP policy targeting the "Microsoft 365 Copilot and Copilot Chat" location with sensitivity label conditions',
      'Prevents Copilot from grounding or summarizing labeled content even when the user has file access',
      'Retention labels and search-index removal do not satisfy selective Copilot processing controls'
    ],
    referenceTopic: 'Purview DLP による Microsoft 365 Copilot 処理制限'
  },
  {
    id: 'sc500-q49',
    number: 49,
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Tier 1 SOC アナリスト向け最小権限ロール (Microsoft Sentinel Responder)',
    titleEn: 'Least-Privilege Role for Tier 1 SOC Analysts (Microsoft Sentinel Responder)',
    scenarioJa: `あなたの組織では、Microsoft Defender for Endpoint および Microsoft Entra ID からセキュリティ イベントを収集して相関分析するために Microsoft Sentinel を使用しています。Priya という名前の Tier 1 SOC アナリストに対し、インシデント、アラート、およびブックを表示し、担当者の割り当て、コメントの追加、およびインシデントのステータスの変更によってインシデントをトリアージする機能を付与する必要があります。

Priya は、分析ルール、データ コネクタ、またはオートメーション ルールを作成または変更できてはなりません。`,
    scenarioEn: `Your organization uses Microsoft Sentinel to collect and correlate security events from Microsoft Defender for Endpoint and Microsoft Entra ID. You need to grant a Tier 1 SOC analyst named Priya the ability to view incidents, alerts, and workbooks, and to triage incidents by assigning owners, adding comments, and changing incident status. Priya must NOT be able to create or modify analytics rules, data connectors, or automation rules.`,
    questionJa: '最小権限の原則に従ってこれらの要件を満たすために、Priya にどの Microsoft Sentinel ロールを割り当てるべきですか？',
    questionEn: 'Which Microsoft Sentinel role should you assign to Priya to meet these requirements with the principle of least privilege?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Sentinel 閲覧者 (Microsoft Sentinel Reader)',
        textEn: 'Microsoft Sentinel Reader',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Sentinel Reader はデータ、インシデント、ブック、その他の Sentinel リソースの表示を許可しますが、担当者の割り当て、コメントの追加、インシデント ステータスの変更といったインシデント管理権限は付与しません。Priya には読み取り専用以上のアクセス権が必要です。',
        explanationEn: 'Microsoft Sentinel Reader allows viewing data, incidents, workbooks, and other Sentinel resources, but it does not grant the ability to manage incidents, such as assigning owners, adding comments, or changing incident status. Priya requires more than read-only access.'
      },
      {
        id: 'B',
        textJa: 'Microsoft Sentinel 自動化共同作成者 (Microsoft Sentinel Automation Contributor)',
        textEn: 'Microsoft Sentinel Automation Contributor',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Sentinel Automation Contributor は、Sentinel 自身のマネージド ID または自動化アカウントにプレイブックを実行する権限を付与するためのものであり、人間のアナリストがインシデントをトリアージするために設計されたロールではありません。',
        explanationEn: 'Microsoft Sentinel Automation Contributor is intended for granting Sentinel\'s own managed identity or automation accounts the ability to run playbooks; it is not designed for human analysts to triage incidents and does not provide incident management or viewing permissions in the way required.'
      },
      {
        id: 'C',
        textJa: 'Microsoft Sentinel レスポンダー (Microsoft Sentinel Responder)',
        textEn: 'Microsoft Sentinel Responder',
        isCorrect: true,
        explanationJa: '【正解】Microsoft Sentinel Responder は、データ、インシデント、およびブックを表示できるほか、担当者の割り当て・コメント追加・ステータス変更によるインシデント管理も実行でき、Priya のトリアージ業務に完全に一致します。分析ルールやデータ コネクタの作成・編集権限は含まれないため、最小権限を満たします。',
        explanationEn: 'Microsoft Sentinel Responder can view data, incidents, and workbooks, and can also manage incidents by assigning owners, adding comments, and changing status—exactly matching Priya\'s triage responsibilities. This role does not include permissions to create or edit analytics rules, data connectors, or other Sentinel resources, satisfying least privilege.'
      },
      {
        id: 'D',
        textJa: 'Microsoft Sentinel 共同作成者 (Microsoft Sentinel Contributor)',
        textEn: 'Microsoft Sentinel Contributor',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Sentinel Contributor は、分析ルール、ブック、データ コネクタの作成・編集を含む完全な管理機能を付与するため、Priya の要件を超えており、最小権限の原則に違反します。',
        explanationEn: 'Microsoft Sentinel Contributor grants full management capabilities, including creating and editing analytics rules, workbooks, and data connectors, which exceeds what Priya needs and violates least privilege.'
      }
    ],
    overallExplanationJa: `Microsoft Sentinel は組み込みの Azure RBAC ロールを使用してアクセスを制御します：
- **Reader**: 閲覧のみ（インシデントの更新不可）
- **Responder**: 閲覧に加え、インシデントのトリアージ（担当者割り当て、コメント追加、クローズ／ステータス変更）が可能。ルールやコネクタの変更は不可。
- **Contributor**: 分析ルールやデータ コネクタの作成・編集が可能。
- **Automation Contributor**: 自動化ルールがプレイブックを呼び出すためのサービス側ロール。

したがって、トリアージ担当の Tier 1 アナリストには Microsoft Sentinel Responder が最小権限の正解となります。`,
    overallExplanationEn: `Microsoft Sentinel uses built-in Azure RBAC roles to control access. Microsoft Sentinel Responder is specifically designed for SOC analysts who need to view and triage incidents (assign, comment, close) without being able to modify the underlying configuration such as analytics rules or connectors, making it the correct least-privilege choice for Priya's role.`,
    keyPointsJa: [
      'インシデントのトリアージ (担当割当・コメント・ステータス変更) が必要だがルール変更は禁止 ＝ Microsoft Sentinel Responder',
      'Reader はインシデントのステータス変更や担当割り当てができない',
      'Contributor は分析ルールやデータ コネクタの変更権限まで与えてしまうため過剰権限'
    ],
    keyPointsEn: [
      'Microsoft Sentinel Responder allows viewing data/workbooks and triaging incidents (assign, comment, change status)',
      'Responder cannot create or edit analytics rules, data connectors, or automation rules',
      'Reader lacks triage write access; Contributor grants rule/connector management'
    ],
    referenceTopic: 'Microsoft Sentinel の組み込み Azure RBAC ロール'
  },
  {
    id: 'sc500-q50',
    number: 50,
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Azure Activity コネクタによるサブスクリプション管理プレーン操作の収集',
    titleEn: 'Collecting Subscription Management-Plane Logs with Azure Activity Connector',
    scenarioJa: `Contoso 社のセキュリティ エンジニアは、15 個の Azure サブスクリプションを持つテナント向けに Microsoft Sentinel を構成しています。セキュリティ オペレーション センター (SOC) は、Azure portal、CLI、または REST API を通じて実行された不正なロール割り当て、リソースの削除、ネットワーク セキュリティ グループ (NSG) 規則の変更など、不審な管理アクティビティを検出して調査したいと考えています。

分析ルールがすべてのサブスクリプションにわたるこれらの管理プレーン (Management-plane) 操作についてアラートを発報できるように、データを Sentinel ワークスペースに取り込む必要があります。`,
    scenarioEn: `A security engineer at Contoso is configuring Microsoft Sentinel for a tenant that has 15 Azure subscriptions. The Security Operations Center wants to detect and investigate suspicious administrative activity, such as unauthorized role assignments, resource deletions, and changes to network security group rules performed through the Azure portal, CLI, or REST API. The data must be ingested into the Sentinel workspace so that analytics rules can alert on these management-plane operations across all subscriptions.`,
    questionJa: 'この要件を満たすために、エンジニアは Microsoft Sentinel でどのデータ コネクタを構成すべきですか？',
    questionEn: 'Which data connector should the engineer configure in Microsoft Sentinel to meet this requirement?',
    options: [
      {
        id: 'A',
        textJa: 'Azure Key Vault',
        textEn: 'Azure Key Vault',
        isCorrect: false,
        explanationJa: '【不正解】Azure Key Vault コネクタはシークレットや証明書へのアクセスなど Key Vault 操作に固有の診断ログを取り込むものであり、全リソースを対象としたサブスクリプション全体の管理操作やロール割り当てアクティビティではありません。',
        explanationEn: 'The Azure Key Vault connector ingests diagnostic logs specific to Key Vault operations, such as secret and certificate access, not general subscription-wide administrative or role assignment activity across all resources.'
      },
      {
        id: 'B',
        textJa: 'Azure DNS',
        textEn: 'Azure DNS',
        isCorrect: false,
        explanationJa: '【不正解】Azure DNS コネクタは名前解決アクティビティの DNS クエリおよび分析ログを取り込むものであり、ロール割り当てやリソース管理変更などの管理操作とは無関係です。',
        explanationEn: 'The Azure DNS connector ingests DNS query and analytics logs for name resolution activity, which is unrelated to administrative operations like role assignments or resource management changes.'
      },
      {
        id: 'C',
        textJa: 'Azure Activity',
        textEn: 'Azure Activity',
        isCorrect: true,
        explanationJa: '【正解】Azure Activity コネクタは、リソースの作成・削除・更新やロール割り当て変更などサブスクリプション レベルの管理プレーン操作を記録する Azure アクティビティ ログを Sentinel ワークスペース (AzureActivity テーブル) にストリーミングします。これは複数サブスクリプションにわたり portal・CLI・REST API 経由で行われた管理アクションを監査するための正しいソースです。',
        explanationEn: 'The Azure Activity connector streams the Azure Activity Log, which records subscription-level management-plane operations such as resource creation, deletion, updates, and role assignment changes, into the Sentinel workspace (AzureActivity table). This is the correct source for auditing administrative actions performed via the portal, CLI, or REST API across subscriptions.'
      },
      {
        id: 'D',
        textJa: 'Microsoft Defender for Cloud',
        textEn: 'Microsoft Defender for Cloud',
        isCorrect: false,
        explanationJa: '【不正解】Microsoft Defender for Cloud コネクタは Defender for Cloud によって生成されたセキュリティ アラートや推奨事項を Sentinel に取り込みますが、ロール割り当てやリソース削除を追跡するために必要な生の管理操作ログ (コントロール プレーン イベント) は提供しません。',
        explanationEn: 'The Microsoft Defender for Cloud connector brings security alerts and recommendations generated by Defender for Cloud into Sentinel, but it does not provide the raw administrative operation logs (control-plane events) needed to track role assignments or resource deletions.'
      }
    ],
    overallExplanationJa: `Azure リソース全体にわたるサブスクリプション レベルの管理プレーン (コントロール プレーン) イベントを脅威検出・調査向けに収集するには、Microsoft Sentinel で **Azure Activity** データ コネクタを使用します。

このコネクタは Azure アクティビティ ログをワークスペースの AzureActivity テーブルに転送し、「誰が・いつ・どこから・どの管理操作を実行したか」を記録するため、全サブスクリプションを通じたロール割り当てや NSG 変更・リソース削除の監視に最適です。`,
    overallExplanationEn: `To collect subscription-level administrative and management-plane events across Azure resources for threat detection and investigation, Microsoft Sentinel uses the Azure Activity connector, which forwards the Azure Activity Log into the workspace's AzureActivity table. This log captures who performed which control-plane operation, when, and from where, making it the correct connector for monitoring role assignments, resource changes, and deletions across subscriptions.`,
    keyPointsJa: [
      'サブスクリプションの管理プレーン操作 (RBAC 変更・削除・NSG 変更) を Sentinel に収集 ＝ Azure Activity コネクタ',
      '取り込み先テーブルは AzureActivity',
      'Defender for Cloud コネクタは生ログではなくセキュリティ アラートの取り込み用'
    ],
    keyPointsEn: [
      'Use the Azure Activity data connector to ingest subscription management-plane logs into Sentinel\'s AzureActivity table',
      'Captures portal, CLI, and REST API administrative operations (RBAC changes, deletions, NSG edits)',
      'Microsoft Defender for Cloud connector ingests alerts, not raw Azure Activity control-plane events'
    ],
    referenceTopic: 'Microsoft Sentinel の Azure Activity データ コネクタ'
  },
  {
    id: 'sc500-q51',
    number: 51,
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Defender for Cloud 継続的エクスポートによる 12 か月間の KQL トレンド分析',
    titleEn: 'Long-Term Secure Score Trending via Defender for Cloud Continuous Export',
    scenarioJa: `Contoso 社は、すべての Azure サブスクリプションにおいて、過去 12 か月間にわたりセキュア スコアと「異常な (Unhealthy) セキュリティ推奨事項」の件数がどのように変化したかを示す月次レポートをリスク委員会に提出する必要があります。

Defender for Cloud ポータルでは限られた期間の履歴しか表示されず、レポート チームは Kusto 照会言語 (KQL) を使用して独自のトレンド ビジュアルを構築できるように、クエリ可能なストアに基礎データを保持したいと考えています。`,
    scenarioEn: `Contoso must deliver a monthly report to its risk committee that shows how the secure score and the count of unhealthy security recommendations have changed over the previous 12 months across all Azure subscriptions.

The Defender for Cloud portal shows only a limited history, and the reporting team needs the underlying records in a queryable store so they can build their own trend visuals with Kusto Query Language.`,
    questionJa: '何を構成すべきですか？',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'レポート チームがポータルで過去のスコアを表示できるように「セキュリティ閲覧者」(Security Reader) ロールを割り当てる',
        textEn: 'Assign the Security Reader role to the reporting team so they can view historical scores in the portal.',
        isCorrect: false,
        explanationJa: '【不正解】読み取りアクセス権を付与するとチームは現在のポータル ビューを確認できますが、ポータルが保持する履歴期間は延長されません。カスタム クエリ用のデータも利用できません。',
        explanationEn: 'Granting read access lets the team see the current portal view, but it does not extend the history the portal retains. The data still would not be available for custom queries.'
      },
      {
        id: 'B',
        textJa: '各サブスクリプションのアクティビティ ログに対して Log Analytics 宛の診断設定を有効にする',
        textEn: 'Enable diagnostic settings on each subscription activity log to stream to Log Analytics.',
        isCorrect: false,
        explanationJa: '【不正解】アクティビティ ログはリソースの作成やロール割り当て変更などのコントロール プレーン操作を記録するものであり、セキュア スコア値や推奨事項の正常性ステータスは含まれません。',
        explanationEn: 'Activity logs record control-plane operations such as resource creation and role assignment changes. They contain no secure score values or recommendation health states.'
      },
      {
        id: 'C',
        textJa: 'Defender for Cloud の継続的エクスポートを有効化し Log Analytics へ送信する',
        textEn: 'Enable continuous export in Defender for Cloud to stream posture data to Log Analytics.',
        isCorrect: true,
        explanationJa: '【正解】継続的エクスポートは、セキュリティ推奨事項、セキュア スコア、アラート、および関連データが生成されるたびに Log Analytics ワークスペースまたは Event Hub に書き込みます。データがワークスペースに格納されると、レポート チームは保持された全履歴を KQL でクエリし、独自のトレンド ビジュアルを構築できます。',
        explanationEn: 'Continuous export writes security recommendations, secure score, alerts, and related data to a Log Analytics workspace or Event Hub as they are generated. Once the data lands in the workspace, the reporting team can query the full retained history with Kusto Query Language and build their own trend visuals.'
      },
      {
        id: 'D',
        textJa: '毎月、規制コンプライアンス ダッシュボードのレポートを PDF としてダウンロードしてアーカイブする',
        textEn: 'Download the Regulatory compliance dashboard report as a PDF each month and archive it.',
        isCorrect: false,
        explanationJa: '【不正解】月次の PDF スナップショットは静的な成果物であり、KQL でクエリしたりトレンドとして集計したりすることはできません。また、毎月の手動エクスポート作業に依存してしまいます。',
        explanationEn: 'A monthly PDF snapshot is a static artifact that cannot be queried or aggregated into trends. It also depends on someone remembering to perform the export every month.'
      }
    ],
    overallExplanationJa: `Defender for Cloud はポータル内に短いローリング履歴しか保持しないため、12 か月間などの長期トレンド レポートにはデータのエクスポートが必要です。

**継続的エクスポート (Continuous export)** はそのための組み込み機能であり、推奨事項・セキュア スコア・セキュリティ アラート・コンプライアンス評価データを Log Analytics ワークスペースまたは Event Hub にストリーミングできます。Log Analytics ワークスペースに送信することで、ワークスペースの保持期間設定に従って履歴を保存でき、KQL による長期トレンド分析が可能になります（サブスクリプション単位で構成でき、Azure Policy で大規模展開も可能です）。`,
    overallExplanationEn: `Defender for Cloud keeps only a short rolling history in the portal, so long-range trend reporting requires exporting the data. Continuous export is the built-in mechanism for this and can stream recommendations, secure score, security alerts, and compliance assessment data either to a Log Analytics workspace or to an Event Hub. Sending it to a workspace gives the reporting team a queryable store where retention is governed by the workspace settings, which is what makes 12-month trending possible. Activity log diagnostics capture a different data set entirely, and simply granting read access does nothing to extend history. Continuous export is configured per subscription and can also be deployed at scale through Azure Policy.`,
    keyPointsJa: [
      'セキュア スコア・推奨事項の長期保存と KQL トレンド分析 ＝ Defender for Cloud の継続的エクスポート (送信先: Log Analytics ワークスペース)',
      'ワークスペースの保持期間設定によって 12 か月以上のデータ保持と集計が可能になる',
      'サブスクリプションのアクティビティ ログにはセキュア スコアや推奨事項の健全性データは含まれない'
    ],
    keyPointsEn: [
      'Enable Defender for Cloud continuous export to a Log Analytics workspace for long-term KQL querying of secure score and recommendations',
      'Workspace retention settings govern how long the exported posture data is retained (e.g., 12+ months)',
      'Continuous export can be deployed at scale across subscriptions via Azure Policy'
    ],
    referenceTopic: 'Defender for Cloud の継続的エクスポート (Continuous Export)'
  }
];
