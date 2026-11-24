import { PdfQuestionSeed } from './pdfCaseStudies';

export const PDF_QUESTIONS_PART9: PdfQuestionSeed[] = [
  {
    id: 'pdf-q161',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '既存 Gen2 VM へのトラステッド起動（Trusted Launch）とセキュアブート・vTPM の有効化',
    titleEn: 'Enabling Trusted Launch, Secure Boot, and vTPM on an Existing Gen2 VM',
    scenarioJa:
      '現在実行中の第 2 世代（Gen2）Azure 仮想マシン VM1 があり、セキュリティの種類は「標準（Standard）」に設定されています。VM1 のサイズと OS イメージはトラステッド起動（Trusted launch）と互換性があります。最小限の管理労力で VM1 に対してセキュアブート（Secure Boot）および仮想 TPM（vTPM）を有効にする必要があります。',
    scenarioEn:
      'You have a running Generation 2 (Gen2) Azure virtual machine (VM1) whose security type is currently set to Standard. The VM size and OS image are compatible with Trusted launch. You need to enable Secure Boot and virtual TPM (vTPM) on VM1 with minimal administrative effort.',
    questionJa: 'どの手順を実行すべきですか？',
    questionEn: 'Which action should you take?',
    options: [
      {
        id: 'A',
        textJa: 'VM1 を割り当て解除せず実行したままオンラインでセキュリティの種類を「トラステッド起動（Trusted launch）」に切り替える',
        textEn: 'Switch the security type of VM1 to Trusted launch online while it continues running',
        isCorrect: false,
        explanationJa:
          'セキュリティの種類（Standard から Trusted launch への変更）およびセキュアブート・vTPM の有効化は、VM が実行中の状態では変更できず、いったん割り当て解除（Deallocate）する必要があります。',
        explanationEn:
          'Changing security type from Standard to Trusted launch and enabling Secure Boot/vTPM cannot be done while the VM is running; the VM must be deallocated first.',
      },
      {
        id: 'B',
        textJa: '既存の VM1 をいったん削除し、新しいコンフィデンシャル仮想マシン（Confidential VM）のセキュリティの種類で再作成する',
        textEn: 'Delete VM1 and recreate the virtual machine from scratch using Confidential VM type',
        isCorrect: false,
        explanationJa:
          'VM1 の再構築は管理労力が大きく、また Confidential VM（ハードウェアメモリ暗号化）までは不要で既存の互換 Gen2 VM を Trusted launch へインプレース更新可能です。',
        explanationEn:
          'Deleting and recreating VM1 as a Confidential VM involves unnecessary effort; compatible Gen2 VMs can be upgraded in-place to Trusted launch.',
      },
      {
        id: 'C',
        textJa: 'VM1 を割り当て解除（Deallocate）し、セキュリティの種類を「トラステッド起動（Trusted launch）」に変更してセキュアブートと vTPM を有効にする',
        textEn: 'Deallocate VM1, change the security type to Trusted launch, and enable Secure Boot and vTPM',
        isCorrect: true,
        explanationJa:
          '互換性のある既存の Gen2 Standard VM は再構築することなく「トラステッド起動（Trusted launch）」へアップグレードできます。VM1 を割り当て解除（停止）した状態でセキュリティの種類を Trusted launch に変更し、セキュアブートと vTPM を有効化して再起動するのが最小限の労力で済む手順です。',
        explanationEn:
          'Existing compatible Gen2 Standard VMs can be upgraded in-place to Trusted launch without recreation. Deallocating VM1, switching security type to Trusted launch, and enabling Secure Boot and vTPM requires minimal effort.',
      },
      {
        id: 'D',
        textJa: 'VM1 を実行したまま構成変更せず Guest Attestation（ゲスト構成証明）VM 拡張機能だけを追加インストールする',
        textEn: 'Install only the Guest Attestation VM extension on running VM1 without updating profile',
        isCorrect: false,
        explanationJa:
          'Guest Attestation 拡張機能は vTPM を用いた構成証明を検証するものであり、これを入れても VM のセキュリティ種類が Trusted launch になりセキュアブート/vTPM が有効化されるわけではありません。',
        explanationEn:
          'The Guest Attestation extension verifies boot integrity using vTPM, but does not convert a Standard VM to Trusted launch or enable Secure Boot/vTPM.',
      },
    ],
    overallExplanationJa:
      'サポートされる Gen2 サイズ・OS の標準（Standard）VM は、削除して作り直す必要なく「トラステッド起動（Trusted launch）」へ変換できます。ただし VM 実行中のままでは変更できないため、**事前に VM を割り当て解除（Deallocate）してから**セキュリティプロファイルを更新し、Secure Boot と vTPM を有効化します。',
    overallExplanationEn:
      'Supported Gen2 Standard Azure VMs can be upgraded in-place to Trusted launch. First deallocate the VM, then update the security type to Trusted launch and enable Secure Boot and vTPM.',
    keyPointsJa: [
      '互換性のある Gen2 Standard VM は再作成せずにトラステッド起動へアップグレードできる',
      'セキュリティの種類と Secure Boot / vTPM の変更には VM の割り当て解除（Deallocate）が必要',
    ],
    keyPointsEn: [
      'Compatible Gen2 Standard VMs support in-place upgrade to Trusted launch',
      'Deallocate the VM before changing security type and enabling Secure Boot and vTPM',
    ],
    referenceTopic: 'Azure VM トラステッド起動（Trusted launch）へのアップグレード',
  },
  {
    id: 'pdf-q162',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'ユーザープロンプトのプロンプトシールド（Prompt Shields）による直接ジェイルブレイクの遮断',
    titleEn: 'Blocking Direct Jailbreaks with User Prompt Shields in Microsoft Foundry',
    scenarioJa:
      'Microsoft Foundry（旧 Azure AI Foundry）の Project1 内にチャットエージェント Agent1 がデプロイされています。ユーザーがチャットメッセージの入力欄に直接ジェイルブレイク（脱獄・システムプロンプト回避）指示を入力して不正な出力を引き出そうとする攻撃を、モデルが応答を生成する前にブロックすることが実現する鍵となります。',
    scenarioEn:
      'A chat agent (Agent1) is deployed in Microsoft Foundry Project1. Blocking attempts where users type direct jailbreak instructions into chat messages to bypass system safeguards before reaching the model is the key requirement.',
    questionJa: 'Agent1 に割り当てるコンテンツフィルターでどの設定を有効にすべきですか？',
    questionEn: 'Which setting should you enable in the content filter assigned to Agent1?',
    options: [
      {
        id: 'A',
        textJa: '入力（Input）のドキュメント用プロンプトシールド（Document Prompt Shields）でブロックを有効にする',
        textEn: 'Enable blocking with Document Prompt Shields on input',
        isCorrect: false,
        explanationJa:
          'ドキュメント用プロンプトシールド（Spotlight/Indirect attack 対策）は RAG 検索結果や外部文書に埋め込まれた間接プロンプトインジェクションを防ぐ設定であり、ユーザーが直接入力したチャットメッセージ内のジェイルブレイク対策はユーザープロンプト側です。',
        explanationEn:
          'Document Prompt Shields protects against indirect prompt injection embedded in retrieved documents or grounding data, not direct user jailbreak prompts.',
      },
      {
        id: 'B',
        textJa: '出力（Output）フィルターの憎悪・性的・暴力・自傷カテゴリを Low しきい値でブロックする',
        textEn: 'Enable Output filters for Hate, Sexual, Violence, and Self-harm at Low',
        isCorrect: false,
        explanationJa:
          '出力フィルターはモデルが応答を生成した後の有害表現を検知するものであり、入力時点でのジェイルブレイク指示自体をモデル到達前にブロックする機能ではありません。',
        explanationEn:
          'Output content filters evaluate generated model responses after inference rather than blocking direct jailbreak instructions prior to model processing.',
      },
      {
        id: 'C',
        textJa: '入力（Input）に対するユーザープロンプトのプロンプトシールド（User prompt Prompt Shields）でブロックを有効にする',
        textEn: 'Enable blocking with User prompt Prompt Shields on input',
        isCorrect: true,
        explanationJa:
          'ユーザーがチャットメッセージに直接入力するジェイルブレイク攻撃（直接プロンプト攻撃）をモデル到達前に検知してブロックするには、コンテンツフィルターの入力側にある「ユーザープロンプトのプロンプトシールド（Prompt Shields for user prompts）」を有効化してブロック動作を設定します。',
        explanationEn:
          'Prompt Shields for user prompts on input detects and blocks direct jailbreak instructions typed by users in chat messages before they are processed by the model.',
      },
      {
        id: 'D',
        textJa: '入力（Input）フィルターの憎悪・性的・暴力・自傷カテゴリを Low しきい値でブロックする',
        textEn: 'Enable Input filters for Hate, Sexual, Violence, and Self-harm at Low',
        isCorrect: false,
        explanationJa:
          '有害コンテンツカテゴリ（Hate/Violence 等）は不適切な表現の有無を判定するものであり、システム指示を上書きしようとするジェイルブレイク手法（直接プロンプト攻撃）を専門に検知・遮断する機能ではありません。',
        explanationEn:
          'Harm category filters evaluate hate, sexual, violence, and self-harm content rather than detecting adversarial jailbreak techniques.',
      },
    ],
    overallExplanationJa:
      'Azure AI Content Safety / Microsoft Foundry の**プロンプトシールド（Prompt Shields）**は、攻撃対象に応じて 2 つに分かれています。\n- **ユーザープロンプト（User prompt attacks）**: チャット入力欄への直接ジェイルブレイク攻撃をブロック\n- **ドキュメント（Document attacks）**: RAG 等の外部文書・メールに仕込まれた間接プロンプトインジェクションをブロック',
    overallExplanationEn:
      'Microsoft Foundry / Azure AI Content Safety Prompt Shields distinguishes between **User prompt attacks** (direct jailbreak attempts typed by users) and **Document attacks** (indirect injections inside grounding documents). Direct chat jailbreaks require User prompt Prompt Shields on input.',
    keyPointsJa: [
      'チャット欄への直接ジェイルブレイク防止には入力側の「ユーザープロンプト用 Prompt Shields」を使用する',
      'RAG や外部文書由来の間接攻撃には「ドキュメント用 Prompt Shields」を使用する',
    ],
    keyPointsEn: [
      'Use User prompt Prompt Shields on input to block direct chat jailbreak attacks',
      'Use Document Prompt Shields for indirect attacks embedded in external documents',
    ],
    referenceTopic: 'Microsoft Foundry の Prompt Shields（ユーザープロンプト攻撃対策）',
  },
  {
    id: 'pdf-q163',
    domain: 'Purview & コンプライアンス監査',
    difficulty: '標準 (Medium)',
    titleJa: 'SharePoint Advanced Management（SAM）の共有リンクレポートによる匿名リンク多用サイトの特定',
    titleEn: 'Identifying Sites with Frequent Anyone Links Using SAM Sharing Links Reports',
    scenarioJa:
      'テナントで SharePoint Advanced Management（SAM）が有効になっています。サインインなしで誰でもアクセスできる「すべてのユーザー（Anyone）」共有リンクが頻繁に作成されている SharePoint Online サイトを、最小限の労力で特定する必要があります。',
    scenarioEn:
      'SharePoint Advanced Management (SAM) is enabled in your tenant. You need to identify SharePoint Online sites where "Anyone" sharing links (accessible without sign-in) are frequently created, using minimal administrative effort.',
    questionJa: 'どの機能またはレポートを使用すべきですか？',
    questionEn: 'Which feature or report should you use?',
    options: [
      {
        id: 'A',
        textJa: 'SharePoint Advanced Management の「サイトアクセスレビュー（Site access reviews）」を確認する',
        textEn: 'Review the SharePoint Advanced Management Site access reviews',
        isCorrect: false,
        explanationJa:
          'サイトアクセスレビューは Data Access Governance（DAG）レポートで過剰共有候補が見つかった後にサイト所有者へ確認を依頼する機能であり、最初に「Anyone」リンクの頻度別サイト一覧を取得するレポートではありません。',
        explanationEn:
          'Site access reviews delegate review tasks to site owners after identifying overshared sites, rather than providing the initial sharing link inventory report.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Purview の監査ログ（Audit）検索で「すべてのユーザー」リンク作成イベントのクエリを実行する',
        textEn: 'Run a manual search for link events in Microsoft Purview Audit',
        isCorrect: false,
        explanationJa:
          '監査ログから個別のリンク作成イベントを集計してサイトごとの頻度ランキングを作るのは手間がかかり、SAM の組み込みレポートを使う方がはるかに省力です。',
        explanationEn:
          'Aggregating individual Purview Audit link-creation events manually across sites requires far more effort than SAM built-in reports.',
      },
      {
        id: 'C',
        textJa: 'SharePoint 管理センターの「ポリシー > 共有（外部共有設定）」設定とサイト一覧を確認する',
        textEn: 'Check the SharePoint admin center Policies > Sharing settings',
        isCorrect: false,
        explanationJa:
          '外部共有設定画面ではテナント全体やサイト設定の上限値は確認できますが、実際にどのサイトで「Anyone」リンクが頻繁に生成されているかの実績リストは取得できません。',
        explanationEn:
          'The Sharing settings page shows policy configurations rather than reporting which sites frequently generate Anyone links.',
      },
      {
        id: 'D',
        textJa: 'SharePoint Advanced Management の「共有リンクレポート（Sharing links reports）」を確認する',
        textEn: 'Review the SharePoint Advanced Management Sharing links reports',
        isCorrect: true,
        explanationJa:
          'SharePoint Advanced Management（SAM）の Data Access Governance（DAG）レポートに含まれる「共有リンクレポート（Sharing links reports）」は、「すべてのユーザー（Anyone）リンク」「組織内のすべてのユーザーリンク」「特定のユーザーリンク」の作成数が多いサイトを自動で一覧集計して可視化するため、最小限の労力で対象サイトを特定できます。',
        explanationEn:
          'SAM Data Access Governance (DAG) includes Sharing links reports, which automatically aggregate and rank sites with the highest volume of Anyone links, People-in-your-organization links, and Specific-people links with minimal effort.',
      },
    ],
    overallExplanationJa:
      'SharePoint Advanced Management（SAM）のデータアクセスガバナンス（DAG）レポート群には、Copilot やセキュリティガバナンスのために過剰共有を即座に洗い出す**共有リンクレポート（Sharing links reports）**が備わっています。ここで「Anyone links（すべてのユーザー）」レポートを生成・確認するだけで、匿名共有リンクを多用しているサイトを即座に特定できます。',
    overallExplanationEn:
      'SharePoint Advanced Management (SAM) provides Data Access Governance **Sharing links reports** specifically built to surface sites with high counts of "Anyone" (anonymous) sharing links at a glance.',
    keyPointsJa: [
      'SAM の共有リンクレポート（Sharing links reports）で Anyone リンクが多用されているサイトを簡単に特定可能',
      'サイトアクセスレビューはその後のサイト所有者への棚卸し依頼ワークフロー',
    ],
    keyPointsEn: [
      'SAM Sharing links reports identify sites with frequent Anyone links with minimal effort',
      'Site access reviews are a follow-up workflow for site owners to attest permissions',
    ],
    referenceTopic: 'SharePoint Advanced Management（SAM）共有リンクレポート',
  },
  {
    id: 'pdf-q164',
    domain: 'Entra ID & CIEM',
    difficulty: '応用 (Hard)',
    titleJa: 'AKS における Entra ID 統合と Kubernetes 用 Azure RBAC の構成',
    titleEn: 'Configuring AKS-Managed Microsoft Entra Integration and Azure RBAC for Kubernetes',
    scenarioJa:
      'サブスクリプション Sub1（Microsoft Entra テナント `contoso.com` にリンク）に Azure Kubernetes Service（AKS）クラスター `AKS1` をデプロイします。クラスターオペレーターが `kubectl` で接続する際に `contoso.com` の資格情報で認証できるようにし、さらにクラスター内の Pod や Service などの Kubernetes リソースに対するアクセス権限を、Kubernetes マニフェスト（RoleBinding 等）ではなく Azure Portal の「アクセス制御（IAM）」から割り当てられるようにする必要があります。\n\n| 設定する項目 | 候補 |\n| :--- | :--- |\n| 認証設定 | Entra ID 関連の統合機能 |\n| 認可設定 | Azure 側の権限管理方式 |',
    scenarioEn:
      'You are deploying an Azure Kubernetes Service (AKS) cluster named AKS1 in subscription Sub1 (linked to Microsoft Entra tenant `contoso.com`). Cluster operators must authenticate using `contoso.com` credentials when running `kubectl`, and access permissions to Kubernetes resources such as Pods and Services must be assigned via Azure Portal Access control (IAM) rather than Kubernetes RoleBindings.\n\n| Setting | Target |\n| :--- | :--- |\n| Authentication | Entra ID integration mode |\n| Authorization | Azure-managed access control |',
    questionJa: '認証設定と認可設定の正しい組み合わせはどれですか？',
    questionEn: 'Which combination of authentication and authorization settings should you choose?',
    options: [
      {
        id: 'A',
        textJa: '認証: ローカルアカウントの無効化（Disable local accounts）のみ / 認可: Kubernetes ネイティブ RBAC（Kubernetes RBAC）',
        textEn: 'Auth: Disable local accounts only / AuthZ: Native Kubernetes RBAC Authorization',
        isCorrect: false,
        explanationJa:
          'ローカルアカウント無効化だけでは Entra ID 認証が有効にならず、Kubernetes RBAC では Azure Portal IAM から Pod/Service 権限を管理できません。',
        explanationEn:
          'Disabling local accounts alone does not enable Entra integration, and Kubernetes RBAC requires native RoleBindings instead of Azure IAM.',
      },
      {
        id: 'B',
        textJa: '認証: AKS マネージド Microsoft Entra 統合 / 認可: Kubernetes ネイティブ RBAC（Kubernetes RBAC Authorization）',
        textEn: 'Auth: AKS-managed Microsoft Entra integration / AuthZ: Native Kubernetes RBAC AuthZ',
        isCorrect: false,
        explanationJa:
          'Kubernetes RBAC の場合は権限付与を `Role` / `ClusterRoleBinding` 等の Kubernetes マニフェストで行う必要があり、Azure Portal IAM で Pod/Service へのアクセス制御を行えません。',
        explanationEn:
          'With Kubernetes RBAC, Kubernetes resource permissions must still be managed via native RoleBindings rather than Azure Portal IAM.',
      },
      {
        id: 'C',
        textJa: '認証: ローカルアカウントの無効化（Disable local accounts）のみ / 認可: Azure Policy アドオン（Azure Policy add-on）',
        textEn: 'Auth: Disable local accounts only / AuthZ: Azure Policy add-on for Kubernetes',
        isCorrect: false,
        explanationJa:
          'Azure Policy アドオンは Pod セキュリティ基準などのコンプライアンス制御用であり、IAM による認可機能ではありません。',
        explanationEn:
          'Azure Policy add-on enforces admission compliance policies, not user IAM authorization.',
      },
      {
        id: 'D',
        textJa: '認証: Microsoft Entra Workload ID 統合 / 認可: Kubernetes 承認用 Azure RBAC（Azure RBAC for Kubernetes）',
        textEn: 'Auth: Microsoft Entra Workload ID / AuthZ: Azure RBAC for Kubernetes Authorization',
        isCorrect: false,
        explanationJa:
          'Workload ID はクラスター内の Pod が Azure Key Vault 等の外部リソースへアクセスするための ID 仕組みであり、オペレーターの `kubectl` サインイン認証ではありません。',
        explanationEn:
          'Entra Workload ID allows Pods to access Azure resources, whereas kubectl user sign-in requires AKS-managed Microsoft Entra integration.',
      },
      {
        id: 'E',
        textJa: '認証: AKS マネージド Microsoft Entra 統合 / 認可: Kubernetes 承認用 Azure RBAC（Azure RBAC for Kubernetes Authorization）',
        textEn: 'Auth: AKS-managed Microsoft Entra integration / AuthZ: Azure RBAC for Kubernetes Authorization',
        isCorrect: true,
        explanationJa:
          'オペレーターが `contoso.com` のアカウントで `kubectl` 認証するには「AKS マネージド Microsoft Entra 統合（AKS-managed Microsoft Entra integration）」を有効にします。また Pod や Service などの Kubernetes オブジェクトへの権限を Azure Portal の IAM ロール（Azure Kubernetes Service RBAC Reader/Writer/Admin 等）で一元管理するには「Kubernetes 承認用 Azure RBAC（Azure RBAC for Kubernetes Authorization）」を選択します。',
        explanationEn:
          'Enabling AKS-managed Microsoft Entra integration lets operators sign in to kubectl with `contoso.com` credentials, and Azure RBAC for Kubernetes Authorization allows managing Pod and Service permissions directly through Azure Portal IAM.',
      },
      {
        id: 'F',
        textJa: '認証: Microsoft Entra Workload ID 統合 / 認可: Azure Policy アドオン（Azure Policy add-on for AKS）',
        textEn: 'Auth: Microsoft Entra Workload ID / AuthZ: Azure Policy add-on for Kubernetes',
        isCorrect: false,
        explanationJa:
          'どちらも `kubectl` の人間オペレーター認証や Azure Portal IAM による Kubernetes リソース認可には該当しません。',
        explanationEn:
          'Neither option handles human kubectl Entra sign-in or Azure IAM authorization for Kubernetes objects.',
      },
    ],
    overallExplanationJa:
      'AKS の認証・認可設計では 2 段階の構成を組み合わせて理解することが不可欠です。\n1. **認証（Authentication）**: **AKS マネージド Microsoft Entra 統合**により、`kubectl` 時に Entra ID トークンでサインイン可能（ローカルアカウント無効化と併用推奨）。\n2. **認可（Authorization）**: **Azure RBAC for Kubernetes Authorization** を有効にすると、Kubernetes 内部の YAML ではなく Azure Portal の IAM からネームスペースやクラスター単位の RBAC ロールを付与できます。',
    overallExplanationEn:
      'In AKS, **AKS-managed Microsoft Entra integration** handles Entra authentication for `kubectl`, while **Azure RBAC for Kubernetes Authorization** lets administrators assign Kubernetes object permissions directly via Azure Portal IAM instead of native YAML RoleBindings.',
    keyPointsJa: [
      'kubectl での Entra ID サインインには「AKS マネージド Microsoft Entra 統合」を使用する',
      'Azure IAM での Pod/Service 権限割り当てには「Kubernetes 承認用 Azure RBAC」を使用する',
      'Workload ID は人間ではなく Pod から Azure サービスへのアクセス用 ID',
    ],
    keyPointsEn: [
      'Use AKS-managed Microsoft Entra integration for kubectl Entra authentication',
      'Use Azure RBAC for Kubernetes Authorization to manage Kubernetes permissions in Azure Portal IAM',
      'Workload ID authenticates Pods to Azure services, not human operators via kubectl',
    ],
    referenceTopic: 'AKS の Microsoft Entra 統合と Kubernetes 承認用 Azure RBAC',
  },
  {
    id: 'pdf-q165',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Azure API Management における双方向 TLS（mTLS）クライアント証明書検証とバックエンド提示',
    titleEn: 'APIM Mutual TLS Validation and Backend Client Certificate Authentication',
    scenarioJa:
      'Azure API Management（APIM1）でバックエンド API `OrdersAPI` を公開しており、APIM1 には秘密鍵を含む証明書 `Cert1` がアップロード・登録されています。セキュリティ要件として、以下の両方を構成する必要があります。\n1. 呼び出し元クライアント → APIM1 間：クライアントが提示した証明書の信頼チェーンと有効期限を検証する。\n2. APIM1 → バックエンド `OrdersAPI` 間：APIM1 がクライアント証明書として `Cert1` を `OrdersAPI` に提示して認証する。',
    scenarioEn:
      'Azure API Management (APIM1) exposes backend API `OrdersAPI`, and certificate `Cert1` (with private key) is uploaded to APIM1. You must configure two mutual TLS behaviors:\n1. Caller -> APIM1: Validate the trust chain and expiration date of the client certificate presented by callers.\n2. APIM1 -> OrdersAPI: Present `Cert1` as the client certificate when authenticating to backend `OrdersAPI`.',
    questionJa:
      '呼び出し元→APIM1 のポリシー要素と、APIM1→OrdersAPI のポリシー要素の正しい組み合わせはどれですか？',
    questionEn:
      'Which combination of policy elements should you configure for Caller->APIM1 and APIM1->OrdersAPI?',
    options: [
      {
        id: 'A',
        textJa: '呼び出し元→APIM1: validate-client-certificate / APIM1→OrdersAPI: validate-client-certificate',
        textEn: 'Caller->APIM1: validate-client-certificate / APIM1->OrdersAPI: validate-client-certificate',
        isCorrect: false,
        explanationJa:
          'validate-client-certificate は受信するクライアント証明書を検証するインバウンドポリシーであり、バックエンドへ APIM1 自身の証明書を送信するためには使えません。',
        explanationEn:
          'validate-client-certificate validates incoming client certificates; it does not send a client certificate to the backend.',
      },
      {
        id: 'B',
        textJa: '呼び出し元→APIM1: set-header / APIM1→OrdersAPI: set-header',
        textEn: 'Caller->APIM1: set-header / APIM1->OrdersAPI: set-header',
        isCorrect: false,
        explanationJa:
          'set-header は HTTP ヘッダーを操作するポリシーであり、TLS レイヤーでの証明書検証や mTLS 提示には使えません。',
        explanationEn:
          'set-header manipulates HTTP headers rather than performing TLS certificate validation or mTLS authentication.',
      },
      {
        id: 'C',
        textJa: '呼び出し元→APIM1: authentication-certificate / APIM1→OrdersAPI: authentication-certificate',
        textEn: 'Caller->APIM1: authentication-certificate / APIM1->OrdersAPI: authentication-certificate',
        isCorrect: false,
        explanationJa:
          'authentication-certificate はバックエンドへの認証用であり、呼び出し元クライアントの証明書チェーン検証には validate-client-certificate が必要です。',
        explanationEn:
          'authentication-certificate authenticates APIM to the backend; validating incoming caller certificates requires validate-client-certificate.',
      },
      {
        id: 'D',
        textJa: '呼び出し元→APIM1: set-header / APIM1→OrdersAPI: validate-client-certificate',
        textEn: 'Caller->APIM1: set-header / APIM1->OrdersAPI: validate-client-certificate',
        isCorrect: false,
        explanationJa: 'いずれの方向も用途とポリシーが一致していません。',
        explanationEn: 'Neither policy matches its respective direction and requirement.',
      },
      {
        id: 'E',
        textJa: '呼び出し元→APIM1: authentication-certificate / APIM1→OrdersAPI: set-header',
        textEn: 'Caller->APIM1: authentication-certificate / APIM1->OrdersAPI: set-header',
        isCorrect: false,
        explanationJa: 'インバウンド検証とバックエンド TLS 認証が誤って割り当てられています。',
        explanationEn: 'Both policy assignments are incorrect for inbound validation and backend mTLS.',
      },
      {
        id: 'F',
        textJa: '呼び出し元→APIM1: validate-client-certificate / APIM1→OrdersAPI: authentication-certificate',
        textEn: 'Caller->APIM1: validate-client-certificate / APIM1->OrdersAPI: authentication-certificate',
        isCorrect: true,
        explanationJa:
          'クライアントからの TLS 証明書を検証するインバウンド処理では `<validate-client-certificate validate-trust="true" validate-not-after="true" ... />` を使用し、APIM からバックエンド API へクライアント証明書（Cert1）を提示する際には `<authentication-certificate certificate-id="Cert1" />` を使用します。',
        explanationEn:
          'Use `<validate-client-certificate>` in the inbound section to validate the caller certificate chain and expiration, and `<authentication-certificate>` to present `Cert1` to the backend `OrdersAPI`.',
      },
    ],
    overallExplanationJa:
      'Azure API Management の相互 TLS（mTLS）ポリシーでは方向によって明確にポリシー名が異なります。\n- **クライアント → APIM（受信証明書の検証）**: `<validate-client-certificate>`（証明書チェーン・失効・有効期限・サブジェクト等の検証）\n- **APIM → バックエンド（証明書の提示）**: `<authentication-certificate>`（APIM にアップロードされた証明書を指定してバックエンドへ認証提示）',
    overallExplanationEn:
      'In APIM mutual TLS policies:\n- **Inbound (validate caller certificate)**: `<validate-client-certificate>` checks chain trust, dates, revocation, and thumbprint/subject.\n- **Backend (authenticate APIM to backend)**: `<authentication-certificate>` sends the uploaded client certificate to the backend service.',
    keyPointsJa: [
      'クライアント証明書の受信検証には validate-client-certificate ポリシーを使用する',
      'APIM からバックエンドへのクライアント証明書提示には authentication-certificate ポリシーを使用する',
    ],
    keyPointsEn: [
      'Use validate-client-certificate to validate incoming caller TLS certificates',
      'Use authentication-certificate to authenticate APIM to the backend with a client certificate',
    ],
    referenceTopic: 'APIM の mTLS ポリシー（validate-client-certificate と authentication-certificate）',
  },
  {
    id: 'pdf-q166',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'オンプレミスサーバーの Azure Arc オンボーディングと DCR による Windows イベントログ収集',
    titleEn: 'Onboarding On-Premises Servers to Azure Arc and Collecting Windows Event Logs via DCR',
    scenarioJa:
      'Windows Server 2022 を実行しているオンプレミスサーバー Server1 があり、現在は Azure Arc に接続されていません。Microsoft Sentinel 用の Log Analytics ワークスペース Workspace1 とデータ収集ルール DCR1 が用意されています。Server1 を Azure Arc に登録し、DCR1 を使用して Windows イベントログを収集して Workspace1 へ送信する必要があります。',
    scenarioEn:
      'An on-premises server (Server1) running Windows Server 2022 is not yet connected to Azure Arc. You have a Log Analytics workspace (Workspace1) for Microsoft Sentinel and a Data Collection Rule (DCR1). You must onboard Server1 to Azure Arc and collect Windows event logs via DCR1 into Workspace1.',
    questionJa: 'Azure Arc 登録用とイベントログ収集用に Server1 へ導入すべきエージェント／拡張機能の正しい組み合わせはどれですか？',
    questionEn: 'Which combination of agent/extension should you install on Server1 for Arc registration and log collection?',
    options: [
      {
        id: 'A',
        textJa: 'Arc 登録: Azure Monitor エージェント拡張機能 / ログ収集: Microsoft Defender for Endpoint センサー',
        textEn: 'Arc registration: Azure Monitor Agent extension / Log collection: MDE sensor',
        isCorrect: false,
        explanationJa: 'Arc 登録とログ収集の両方とも役割が誤っています。',
        explanationEn: 'Both agent selections are incorrect for Arc onboarding and DCR log collection.',
      },
      {
        id: 'B',
        textJa: 'Arc 登録: Microsoft Defender for Endpoint センサー / ログ収集: Azure Connected Machine エージェント',
        textEn: 'Arc registration: MDE sensor / Log collection: Azure Connected Machine agent',
        isCorrect: false,
        explanationJa: 'MDE センサーは EDR 用であり Arc 登録は行わず、Connected Machine エージェント自体では DCR ログ収集はできません。',
        explanationEn: 'The MDE sensor provides EDR telemetry rather than Arc onboarding, and Connected Machine agent does not collect DCR logs itself.',
      },
      {
        id: 'C',
        textJa: 'Arc 登録: Azure Connected Machine エージェント / ログ収集: Azure Connected Machine エージェント',
        textEn: 'Arc registration: Azure Connected Machine agent / Log collection: Azure Connected Machine agent',
        isCorrect: false,
        explanationJa:
          'Connected Machine エージェントは Arc サーバーのベース接続用であり、DCR を使ったイベントログ収集には別途 Azure Monitor エージェント拡張機能が必要です。',
        explanationEn:
          'The Connected Machine agent handles Arc onboarding and management, but collecting Windows event logs via DCR requires the Azure Monitor Agent extension.',
      },
      {
        id: 'D',
        textJa: 'Arc 登録: Azure Monitor エージェント拡張機能 / ログ収集: Azure Monitor エージェント拡張機能',
        textEn: 'Arc registration: Azure Monitor Agent extension / Log collection: Azure Monitor Agent extension',
        isCorrect: false,
        explanationJa:
          'Azure Monitor エージェント拡張機能を展開する前に、まず Azure Connected Machine エージェントでサーバーを Azure Arc に登録する必要があります。',
        explanationEn:
          'You must first onboard the server to Azure Arc using the Azure Connected Machine agent before deploying the AMA extension.',
      },
      {
        id: 'E',
        textJa: 'Arc 登録: Azure Connected Machine エージェント / ログ収集: Azure Monitor エージェント（AMA）拡張機能',
        textEn: 'Arc registration: Azure Connected Machine agent / Log collection: Azure Monitor Agent (AMA) extension',
        isCorrect: true,
        explanationJa:
          'オンプレミスの Windows/Linux サーバーを Azure Arc 対応サーバーとして登録するには **Azure Connected Machine エージェント** をインストールします。その後、Azure Arc の拡張機能管理（または DCR 関連付け）を通じて **Azure Monitor エージェント（AMA）拡張機能** を導入することで、DCR1 に基づく Windows イベントログ収集が可能になります。',
        explanationEn:
          'Install the **Azure Connected Machine agent** on Server1 to onboard it as an Azure Arc-enabled server, then deploy the **Azure Monitor Agent (AMA) extension** so DCR1 can collect Windows event logs and forward them to Workspace1.',
      },
      {
        id: 'F',
        textJa: 'Arc 登録: Microsoft Defender for Endpoint センサー / ログ収集: Microsoft Defender for Endpoint センサー',
        textEn: 'Arc registration: MDE sensor / Log collection: MDE sensor',
        isCorrect: false,
        explanationJa: 'MDE センサーでは Azure Arc 登録や DCR による Log Analytics イベントログ収集はできません。',
        explanationEn: 'The MDE sensor does not perform Azure Arc onboarding or DCR-based Log Analytics event collection.',
      },
    ],
    overallExplanationJa:
      'オンプレミス等の非 Azure マシンを Azure の制御下・ログ収集基盤に統合する標準パイプラインは 2 段階です。\n1. **Azure Connected Machine agent**: オンプレミスサーバーを Azure Arc リソースとして登録し、マネージド ID と拡張機能管理機能を提供。\n2. **Azure Monitor Agent (AMA) extension**: DCR（Data Collection Rule）を解釈して Windows イベントログ等を収集し Log Analytics へ送信。',
    overallExplanationEn:
      'Integrating on-premises servers with Azure Monitor/Sentinel DCRs uses a two-layer architecture:\n1. **Azure Connected Machine agent**: Onboards the machine to Azure Arc.\n2. **Azure Monitor Agent (AMA) extension**: Processes DCRs to collect Windows event logs and send them to Log Analytics.',
    keyPointsJa: [
      'オンプレミスの Azure Arc 登録には Azure Connected Machine エージェントを使用する',
      'DCR を使ったイベントログ収集には Azure Monitor エージェント（AMA）拡張機能を使用する',
    ],
    keyPointsEn: [
      'Use Azure Connected Machine agent to onboard on-premises servers to Azure Arc',
      'Use Azure Monitor Agent (AMA) extension to collect event logs via Data Collection Rules',
    ],
    referenceTopic: 'Azure Arc Connected Machine エージェントと AMA 拡張機能',
  },
  {
    id: 'pdf-q167',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: '既存 Log Analytics ワークスペースへの Microsoft Sentinel 有効化',
    titleEn: 'Enabling Microsoft Sentinel on an Existing Log Analytics Workspace',
    scenarioJa:
      '現在、Azure リソースの診断ログが送信されている既存の Log Analytics ワークスペース `WS1` があります。既存のログの送信先を変更することなく、収集されたログに対してスケジュールされた分析ルール（Scheduled analytics rules）を実行し、インシデントのトリアージと管理を行えるようにする必要があります。',
    scenarioEn:
      'You have an existing Log Analytics workspace (WS1) receiving Azure resource diagnostic logs. Without changing the destination of the existing logs, you need to run scheduled analytics rules against those logs and manage resulting security incidents.',
    questionJa: 'どの操作を実行すべきですか？',
    questionEn: 'Which action should you take?',
    options: [
      {
        id: 'A',
        textJa: '既存のワークスペース WS1 上で Microsoft Sentinel を有効にする',
        textEn: 'Enable Microsoft Sentinel on workspace WS1',
        isCorrect: true,
        explanationJa:
          'Microsoft Sentinel は Log Analytics ワークスペース上のソリューションとして有効化（オンボード）します。既存の WS1 に対して Microsoft Sentinel を有効にすれば、既存ログの保存先や診断設定を変更することなく、そのままスケジュール分析ルールやインシデント管理・調査機能を利用できます。',
        explanationEn:
          'Microsoft Sentinel is enabled directly on top of an existing Log Analytics workspace. Enabling Sentinel on WS1 allows you to run scheduled analytics rules and manage incidents without altering existing log destinations.',
      },
      {
        id: 'B',
        textJa: 'WS1 を送信先とする新しいデータ収集ルール（DCR）を作成する',
        textEn: 'Create a new Data Collection Rule (DCR) targeting WS1',
        isCorrect: false,
        explanationJa:
          'DCR はログの収集・変換・転送を定義するものであり、スケジュール分析ルールやインシデント管理（SIEM 機能）を提供するものではありません。',
        explanationEn:
          'DCRs define data collection pipelines and do not provide SIEM scheduled analytics rules or incident management.',
      },
      {
        id: 'C',
        textJa: 'WS1 上に Azure Monitor ログ検索アラートを作成する',
        textEn: 'Create a Monitor log search alert rule on WS1',
        isCorrect: false,
        explanationJa:
          'Azure Monitor のログ検索アラートではインフラ監視アラートは発報できますが、Sentinel のスケジュール分析ルールや統合インシデント管理・調査ワークフローは提供されません。',
        explanationEn:
          'Azure Monitor log search alerts generate operational alerts rather than providing Sentinel scheduled analytics rules and security incident management.',
      },
      {
        id: 'D',
        textJa: 'サブスクリプション Sub1 で Defender CSPM プランを有効にする',
        textEn: 'Enable the Defender CSPM plan on subscription Sub1',
        isCorrect: false,
        explanationJa:
          'Defender CSPM はクラウド態勢管理・攻撃パス分析用であり、Log Analytics ワークスペース上の SIEM 分析・インシデント管理機能ではありません。',
        explanationEn:
          'Defender CSPM provides cloud posture management rather than SIEM analytics rules and incident management on Log Analytics.',
      },
    ],
    overallExplanationJa:
      'Microsoft Sentinel は独立したログストアを作るのではなく、**既存の Log Analytics ワークスペースに SIEM/SOAR 機能を追加有効化**するアーキテクチャを採用しています。そのため、すでにログが集約されている `WS1` に対して Microsoft Sentinel を有効化するだけで、ログの転送先を変えることなくすぐに分析ルールやインシデント管理を開始できます。',
    overallExplanationEn:
      'Microsoft Sentinel sits on top of an Azure Monitor Log Analytics workspace. Enabling Sentinel directly on WS1 immediately unlocks scheduled analytics rules and incident management over existing logs without changing ingestion destinations.',
    keyPointsJa: [
      '既存 Log Analytics ワークスペースにそのまま Microsoft Sentinel を有効化できる',
      'ログの保存先を変更せずに分析ルールとインシデント管理が利用可能になる',
    ],
    keyPointsEn: [
      'Microsoft Sentinel is enabled on top of an existing Log Analytics workspace',
      'No change to existing log ingestion destinations is required',
    ],
    referenceTopic: 'Log Analytics ワークスペースへの Microsoft Sentinel オンボード',
  },
  {
    id: 'pdf-q168',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'Content Hub ソリューション導入後のデータコネクタ構成と分析ルール有効化',
    titleEn: 'Configuring Data Connectors and Enabling Analytics Rules After Installing a Content Hub Solution',
    scenarioJa:
      'Microsoft Sentinel ワークスペース `Workspace1` において、Content Hub から Microsoft 365 ソリューション（データコネクタとスケジュール分析ルールテンプレートを含む）をインストールしました。しかし、まだ接続やルール作成の構成は行っていません。\n\n以下の手順リストから、データ収集の開始（ログ取り込み）と脅威検出の開始（ルール有効化）に必要な操作をそれぞれ選ぶ必要があります。\n- **データ収集候補**: 収集1（データコネクタページを開き接続手順を実行する）、収集2（コンテンツハブでソリューションを再デプロイする）、収集3（ウォッチリストを作成する）\n- **検出開始候補**: 検出1（分析ルールテンプレートからルールを作成して有効化する）、検出2（ハンティングクエリを実行する）',
    scenarioEn:
      'In Microsoft Sentinel workspace Workspace1, you installed the Microsoft 365 solution (containing a data connector and scheduled analytics rule templates) from Content Hub, but have not yet configured it.\n\nChoose the actions required to start data collection and threat detection:\n- **Collection candidates**: 収集1 (Open the Data connectors page and run the connection steps), 収集2 (Redeploy the solution in Content Hub), 収集3 (Create a watchlist)\n- **Detection candidates**: 検出1 (Create and enable analytics rules from the rule templates), 検出2 (Run hunting queries)',
    questionJa: 'データ収集と脅威検出のために実行すべき操作の正しい組み合わせはどれですか？',
    questionEn: 'Which combination of actions should you take to start data collection and threat detection?',
    options: [
      {
        id: 'A',
        textJa: 'データ収集: 収集2（コンテンツハブでソリューションを再デプロイする） / 脅威検出: 検出2（ハンティングクエリを実行する）',
        textEn: 'Data collection: 収集2 (Redeploy the solution in Content Hub) / Detection: 検出2 (Run hunting queries in Sentinel)',
        isCorrect: false,
        explanationJa: 'ソリューションの再デプロイではデータコネクタは接続されず、ハンティングクエリは手動実行であり自動検出ではありません。',
        explanationEn: 'Redeploying does not connect data sources, and hunting queries are manual rather than scheduled detections.',
      },
      {
        id: 'B',
        textJa: 'データ収集: 収集1（データコネクタページで接続手順を実行する） / 脅威検出: 検出2（ハンティングクエリを実行する）',
        textEn: 'Data collection: 収集1 (Open Data connectors page & run connection steps) / Detection: 検出2 (Run hunting queries)',
        isCorrect: false,
        explanationJa: 'ハンティングクエリは継続的な自動検出（スケジュール分析ルール）ではありません。',
        explanationEn: 'Hunting queries do not automatically create alerts/incidents on a schedule.',
      },
      {
        id: 'C',
        textJa: 'データ収集: 収集3（新しいウォッチリストを手動で作成する） / 脅威検出: 検出2（ハンティングクエリを実行する）',
        textEn: 'Data collection: 収集3 (Create a new watchlist in Sentinel) / Detection: 検出2 (Run hunting queries in Sentinel)',
        isCorrect: false,
        explanationJa: 'ウォッチリストではログ収集は開始されません。',
        explanationEn: 'Watchlists do not ingest external M365 logs.',
      },
      {
        id: 'D',
        textJa: 'データ収集: 収集2（コンテンツハブでソリューションを再デプロイする） / 脅威検出: 検出1（分析ルールテンプレートからルールを作成）',
        textEn: 'Data collection: 収集2 (Redeploy solution in Content Hub) / Detection: 検出1 (Create & enable rules from Analytics templates)',
        isCorrect: false,
        explanationJa: 'データコネクタを開いて接続手順を実行する必要があります。',
        explanationEn: 'You must open the Data connectors page and configure the connector rather than redeploying.',
      },
      {
        id: 'E',
        textJa: 'データ収集: 収集1（データコネクタページで接続手順を実行） / 脅威検出: 検出1（分析ルールテンプレートからルールを作成して有効化）',
        textEn: 'Data collection: 収集1 (Open Data connectors page & run connection steps) / Detection: 検出1 (Create & enable rules from Analytics rule templates)',
        isCorrect: true,
        explanationJa:
          'Content Hub からソリューションをインストールしただけではログ収集も検出も始まりません。まず「データコネクタ（Data connectors）」ページから対象コネクタを開いて接続操作（収集1）を行い、次に「分析（Analytics）」ページのルールテンプレートタブから必要なテンプレートを選択してアクティブな分析ルールを作成・有効化（検出1）する必要があります。',
        explanationEn:
          'Installing a Content Hub solution only stages templates and connectors. You must open Data connectors to complete connection steps (収集1), and then create/enable active rules from the Analytics rule templates (検出1).',
      },
    ],
    overallExplanationJa:
      'Microsoft Sentinel の Content Hub でソリューションをインストールしただけでは「テンプレートやコネクタ定義がワークスペースに追加されただけ」の状態です。実際の運用開始には必ず以下の 2 ステップが必要です。\n1. **データコネクタ**画面からコネクタを開き「接続（Connect）」やログ種別の選択を実行\n2. **分析（Analytics）> ルールテンプレート**から「ルールの作成」を行って有効化',
    overallExplanationEn:
      'Installing a Microsoft Sentinel Content Hub solution only stages its assets. To operationalize it, you must (1) configure the connector on the **Data connectors** page and (2) instantiate and enable active rules from **Analytics > Rule templates**.',
    keyPointsJa: [
      'Content Hub インストールだけではログ収集もルール実行も開始されない',
      'データコネクタページで接続手順を完了し、ルールテンプレートからアクティブなルールを作成・有効化する',
    ],
    keyPointsEn: [
      'Content Hub installation alone does not start ingestion or detections',
      'Complete connector setup in Data connectors and create active rules from Rule templates',
    ],
    referenceTopic: 'Microsoft Sentinel Content Hub ソリューション導入後の構成手順',
  },
  {
    id: 'pdf-q169',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '応用 (Hard)',
    titleJa: '管理グループスコープでの Azure Activity データコネクタ（Azure Policy）と修復タスクの展開',
    titleEn: 'Deploying Azure Activity Data Connector at Management Group Scope via Azure Policy',
    scenarioJa:
      '管理グループ `MG1` 配下に複数のサブスクリプション（`Sub1`、`Sub2`）があり、Microsoft Sentinel ワークスペース `Workspace1` は `Sub1` のリソースグループ `RG1` に配置されています。`MG1` 配下の既存サブスクリプションおよび今後新規追加されるすべてのサブスクリプションから、Azure サブスクリプションの管理ログ（Azure Activity）を最小限の管理労力で `Workspace1` に収集する必要があります。',
    scenarioEn:
      'Management group MG1 contains subscriptions Sub1 and Sub2. Microsoft Sentinel workspace Workspace1 resides in resource group RG1 of Sub1. You must collect Azure subscription management logs (Azure Activity) from all existing and future subscriptions under MG1 into Workspace1 with minimal administrative effort.',
    questionJa: 'どの手順を実行すべきですか？',
    questionEn: 'Which action should you take?',
    options: [
      {
        id: 'A',
        textJa: 'MG1 スコープで Azure Activity データコネクタの Azure Policy（Workspace1 への送信設定）を割り当て、既存リソース向けに修復タスク（Remediation task）を作成する',
        textEn: 'Assign the Azure Activity data connector Azure Policy at MG1 scope targeting Workspace1 and create a remediation task',
        isCorrect: true,
        explanationJa:
          'Azure Activity データコネクタは Azure Policy（DeployIfNotExists）を使用して展開します。管理グループ `MG1` スコープにこのポリシーを割り当てて `Workspace1` を送信先に指定し、修復タスクを実行することで、既存の全サブスクリプションおよび今後 MG1 配下に追加されるサブスクリプションのアクティビティログを自動収集できます。',
        explanationEn:
          'The Azure Activity data connector uses a DeployIfNotExists Azure Policy. Assigning it at the MG1 management group scope targeting Workspace1 with a remediation task covers all existing and future subscriptions under MG1 automatically.',
      },
      {
        id: 'B',
        textJa: 'MG1 スコープで全リソースの診断ログ（allLogs）を収集する Azure Policy を割り当て、既存の非準拠リソースに対して修復タスクを作成する',
        textEn: 'Assign an Azure Policy collecting allLogs resource logs at MG1 scope targeting Workspace1 with remediation',
        isCorrect: false,
        explanationJa:
          'リソースレベルの診断ログ（allLogs）ではなく、サブスクリプションレベルの管理操作（コントロールプレーン）を記録する Azure Activity 用のポリシーを使用する必要があります。',
        explanationEn:
          'Resource diagnostic logs (allLogs) capture individual resource telemetry rather than subscription-level Azure Activity control-plane logs.',
      },
      {
        id: 'C',
        textJa: 'RG1 スコープで Azure Activity データコネクタの Azure Policy（Workspace1 宛）を割り当て、修復タスク（Remediation task）を作成する',
        textEn: 'Assign the Azure Activity data connector Azure Policy at RG1 scope targeting Workspace1 with a remediation task',
        isCorrect: false,
        explanationJa:
          'RG1 スコープに割り当てても、Sub1 や Sub2 全体および将来 MG1 配下に作成されるサブスクリプションには適用されません。',
        explanationEn:
          'Assigning the policy at RG1 scope will not apply to Sub2 or future subscriptions under MG1.',
      },
      {
        id: 'D',
        textJa: 'RG1 スコープで全リソースの診断ログ（allLogs）を Workspace1 へ送信する Azure Policy を割り当て、修復タスクを作成する',
        textEn: 'Assign an allLogs resource diagnostic logs Azure Policy at RG1 scope targeting Workspace1 with remediation',
        isCorrect: false,
        explanationJa: 'スコープも収集対象ログ種別も要件を満たしていません。',
        explanationEn: 'Both the scope (RG1) and log type (allLogs) fail to meet the requirement.',
      },
    ],
    overallExplanationJa:
      'Microsoft Sentinel の **Azure Activity** コネクタは診断設定を自動構成する Azure Policy（`Configure Azure Activity logs to stream to specified Log Analytics workspace`）で構成されます。このポリシーを**管理グループ（MG1）**スコープに割り当てて**修復タスク（Remediation task）**を作成しておけば、配下の既存サブスクリプションに一括適用され、新規サブスクリプションにも自動継承されます。',
    overallExplanationEn:
      'The Sentinel **Azure Activity** connector relies on an Azure Policy (`DeployIfNotExists`). Assigning that policy at the **management group (MG1)** scope with a remediation task automatically configures all current and future child subscriptions to stream Activity logs to `Workspace1`.',
    keyPointsJa: [
      '既存＋将来の全サブスクリプションを対象にするには管理グループ（MG1）スコープで Azure Policy を割り当てる',
      '既存サブスクリプションへ即時適用するには修復タスク（Remediation task）の作成が必要',
    ],
    keyPointsEn: [
      'Assign the Azure Activity Azure Policy at Management Group scope to cover current and future subscriptions',
      'Run a remediation task to apply the policy to existing subscriptions',
    ],
    referenceTopic: '管理グループスコープの Azure Activity データコネクタ展開',
  },
  {
    id: 'pdf-q170',
    domain: 'Defender XDR & 統合SecOps',
    difficulty: '標準 (Medium)',
    titleJa: 'Defender XDR 高度なハンティングの CloudAppEvents テーブルによるアクティビティ検索',
    titleEn: 'Searching M365 Activities in Defender XDR Advanced Hunting via CloudAppEvents',
    scenarioJa:
      'Microsoft 365 E5 ライセンス環境で Microsoft Purview 監査が有効になっており、Microsoft Defender for Cloud Apps の Microsoft 365 アプリコネクタを通じて Exchange Online および SharePoint Online のアクティビティデータを取り込んでいます。アラートを発生させていない操作も含め、過去 7 日間のユーザー User1 による受信トレイ（Inbox）ルールの作成やファイルダウンロード履歴を詳細に調査・検索する必要があります。',
    scenarioEn:
      'Your Microsoft 365 E5 environment has Purview Audit enabled and ingests Exchange Online and SharePoint Online activity via the Microsoft Defender for Cloud Apps M365 app connector. You need to search the past 7 days of User1 actions—including inbox rule creations and file downloads, even those that did not trigger alerts.',
    questionJa: 'Microsoft Defender ポータルの高度なハンティング（Advanced hunting）でどの KQL テーブルを検索すべきですか？',
    questionEn: 'Which table should you query in Advanced hunting in the Microsoft Defender portal?',
    options: [
      {
        id: 'A',
        textJa: '高度なハンティングで IdentityDirectoryEvents テーブルをクエリする',
        textEn: 'Query the IdentityDirectoryEvents table in Advanced hunting',
        isCorrect: false,
        explanationJa:
          'IdentityDirectoryEvents は Defender for Identity が収集するオンプレミス Active Directory / Entra ID 関連のディレクトリイベント用テーブルであり、SharePoint ファイルダウンロードや Exchange 受信トレイ操作は含まれません。',
        explanationEn:
          'IdentityDirectoryEvents logs Active Directory / identity directory changes from Defender for Identity, not Exchange or SharePoint app activities.',
      },
      {
        id: 'B',
        textJa: '高度なハンティングで CloudAppEvents テーブルをクエリする',
        textEn: 'Query the CloudAppEvents table in Advanced hunting',
        isCorrect: true,
        explanationJa:
          'Microsoft Defender for Cloud Apps が Microsoft 365（Exchange/SharePoint/Teams 等）や接続済みクラウドアプリから収集したアクティビティイベント（ファイルダウンロード、受信トレイルール作成などアラート外の全操作を含む）は、Defender XDR 高度なハンティングの `CloudAppEvents` テーブルに格納されます。',
        explanationEn:
          'The `CloudAppEvents` table in Defender XDR Advanced hunting stores cloud app activities collected by Defender for Cloud Apps—including Exchange inbox rule changes and SharePoint file downloads—even when no alert was generated.',
      },
      {
        id: 'C',
        textJa: '高度なハンティングで CloudAuditEvents テーブルをクエリする',
        textEn: 'Query the CloudAuditEvents table in Advanced hunting',
        isCorrect: false,
        explanationJa:
          'Advanced hunting の標準スキーマとしてクラウドアプリ操作を調査するテーブルは CloudAuditEvents ではなく CloudAppEvents です。',
        explanationEn:
          'CloudAuditEvents is not the Defender XDR Advanced hunting table for Microsoft 365/Defender for Cloud Apps activity logs; CloudAppEvents is.',
      },
      {
        id: 'D',
        textJa: '高度なハンティングで DataSecurityEvents テーブルをクエリする',
        textEn: 'Query the DataSecurityEvents table in Advanced hunting',
        isCorrect: false,
        explanationJa:
          'DataSecurityEvents は Purview 関連データセキュリティ指標向けであり、Exchange 受信トレイルール作成等の詳細監査履歴検索の主要テーブルではありません。',
        explanationEn:
          'DataSecurityEvents focuses on data security telemetry rather than general Exchange/SharePoint Defender for Cloud Apps activity logs.',
      },
    ],
    overallExplanationJa:
      'Microsoft Defender XDR の高度なハンティング（Advanced hunting）において、Defender for Cloud Apps（M365 アプリコネクタ等）経由で取り込まれたすべてのクラウドアプリの操作ログは **`CloudAppEvents`** テーブルに記録されます。インシデント調査で `New-InboxRule` や `FileDownloaded` のような生アクティビティを KQL で追跡する際の定番テーブルです。',
    overallExplanationEn:
      'In Defender XDR Advanced hunting, all SaaS and Microsoft 365 activity logs ingested via Defender for Cloud Apps are stored in **`CloudAppEvents`**, making it the primary KQL table for hunting actions like inbox rule creation and file downloads.',
    keyPointsJa: [
      'Defender for Cloud Apps が収集した M365/SaaS アクティビティは高度なハンティングの CloudAppEvents テーブルに入る',
      'IdentityDirectoryEvents は AD/ID ディレクトリ変更用テーブル',
    ],
    keyPointsEn: [
      'CloudAppEvents stores M365 and cloud app activity ingested by Defender for Cloud Apps',
      'IdentityDirectoryEvents tracks directory-level identity events',
    ],
    referenceTopic: 'Defender XDR 高度なハンティング - CloudAppEvents テーブル',
  },
  {
    id: 'pdf-q171',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '標準 (Medium)',
    titleJa: 'Security Copilot ワークスペースのユーザー/グループおよびロール管理の委任',
    titleEn: 'Delegating User/Group Membership and Role Management in a Security Copilot Workspace',
    scenarioJa:
      'Sub1 のキャパシティに紐づいた Microsoft Security Copilot ワークスペース `Workspace1` があります。`Workspace1` 内でのユーザーおよびグループのメンバーシップ管理と、Security Copilot ロール割り当て権限をユーザー `User1` に委任する必要があります。',
    scenarioEn:
      'You have a Microsoft Security Copilot workspace (Workspace1) backed by capacity in Sub1. You need to delegate management of user and group memberships and Security Copilot role assignments within Workspace1 to user User1.',
    questionJa: 'User1 にどのロールを割り当てるべきですか？',
    questionEn: 'Which role should you assign to User1?',
    options: [
      {
        id: 'A',
        textJa: 'Security Copilot 所有者（Security Copilot Owner）',
        textEn: 'Security Copilot Owner',
        isCorrect: true,
        explanationJa:
          'Microsoft Security Copilot 内でワークスペースの設定、ロール割り当て（Owner/Contributor）、およびアクセスできるユーザー/グループ管理を行えるのは「Security Copilot 所有者（Security Copilot Owner）」ロール（または Entra 全体の Security Administrator / Global Administrator）です。',
        explanationEn:
          'Within Security Copilot, the Security Copilot Owner role grants permissions to manage workspace settings, user/group memberships, and Security Copilot role assignments.',
      },
      {
        id: 'B',
        textJa: 'Security Copilot 共同作成者（Security Copilot Contributor）',
        textEn: 'Security Copilot Contributor',
        isCorrect: false,
        explanationJa:
          'Security Copilot 共同作成者はプロンプトの実行、プロンプトブックの作成、プラグイン利用などの日常的なアナリスト操作を行えますが、ワークスペースのロール割り当てやアクセス管理はできません。',
        explanationEn:
          'Security Copilot Contributor can run prompts and use promptbooks/plugins, but cannot manage workspace roles or user/group access.',
      },
      {
        id: 'C',
        textJa: 'ユーザー アクセス管理者（User Access Administrator）',
        textEn: 'User Access Administrator',
        isCorrect: false,
        explanationJa:
          'Azure RBAC のユーザーアクセス管理者は Azure リソース（キャパシティ等）の IAM 権限を管理するロールであり、Security Copilot ポータル内のワークスペースロール割り当てとは異なります。',
        explanationEn:
          'Azure RBAC User Access Administrator manages Azure resource IAM permissions rather than internal Security Copilot workspace role assignments.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Sentinel レスポンダー（Microsoft Sentinel Responder）',
        textEn: 'Microsoft Sentinel Responder',
        isCorrect: false,
        explanationJa:
          'Sentinel ワークスペース上のインシデント対応ロールであり、Security Copilot ワークスペースのロール管理権限は含まれません。',
        explanationEn:
          'Microsoft Sentinel Responder manages Sentinel incidents, not Security Copilot workspace access and roles.',
      },
    ],
    overallExplanationJa:
      'Microsoft Security Copilot には独自のロールモデルがあり、主に **Security Copilot Owner（所有者）** と **Security Copilot Contributor（共同作成者）** の 2 つが定義されています。ワークスペースへのユーザー・グループ追加やロール管理を委任する場合は **Security Copilot Owner** を割り当てます。',
    overallExplanationEn:
      'Microsoft Security Copilot uses two primary workspace roles: **Security Copilot Owner** (can manage workspace settings, plugins, and user/group role assignments) and **Security Copilot Contributor** (runs prompts and investigations).',
    keyPointsJa: [
      'Security Copilot のロール割り当てやユーザー/グループ管理を行うには Security Copilot Owner ロールが必要',
      'Security Copilot Contributor は調査・プロンプト実行用でありアクセス管理はできない',
    ],
    keyPointsEn: [
      'Assign Security Copilot Owner to manage user/group access and role assignments',
      'Security Copilot Contributor cannot manage workspace roles',
    ],
    referenceTopic: 'Microsoft Security Copilot のロールとアクセス管理',
  },
  {
    id: 'pdf-q172',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: 'SecurityEvent テーブルのインタラクティブ保持期間とアーカイブ保持期間の設定',
    titleEn: 'Configuring Interactive and Archive Retention Periods on SecurityEvent Table',
    scenarioJa:
      'Log Analytics ワークスペース `Workspace1` の `SecurityEvent` テーブル（現在は Analytics ティア、テーブル保持期間 180 日）について、直近 90 日間はインタラクティブな KQL クエリや分析ルールですぐに検索可能な状態に保ちつつ、残りの 90 日間（合計 180 日まで）は低コストのアーカイブ保持として保管するように構成を変更する必要があります。',
    scenarioEn:
      'In Log Analytics workspace Workspace1, the SecurityEvent table is currently in the Analytics tier with 180 days of table retention. You need to keep the most recent 90 days in an interactively searchable state and retain the remaining 90 days (up to 180 days total) in low-cost archive storage.',
    questionJa: 'どの設定を構成すべきですか？',
    questionEn: 'Which configuration should you apply?',
    options: [
      {
        id: 'A',
        textJa: 'Workspace1 ワークスペース全体の既定インタラクティブ保持期間を 90 日、合計保持期間（Total retention）を 180 日に設定する',
        textEn: 'Set the Workspace1 workspace-level interactive retention to 90 days and Total retention to 180 days',
        isCorrect: false,
        explanationJa:
          'ワークスペース全体の保持設定は他の全テーブルに影響を与え、テーブル単位で異なるアーカイブ要件を適用する本来の設定対象ではありません。',
        explanationEn:
          'Changing workspace-level defaults affects all tables rather than configuring the SecurityEvent table specifically.',
      },
      {
        id: 'B',
        textJa: 'SecurityEvent テーブルの Analytics（インタラクティブ）保持期間を 90 日、合計保持期間（Total retention）を 180 日に設定する',
        textEn: 'Set the SecurityEvent table Analytics (interactive) retention to 90 days and Total retention to 180 days',
        isCorrect: true,
        explanationJa:
          'Log Analytics のテーブル単位保持設定では、「合計保持期間（Total retention）」から「Analytics 保持期間（インタラクティブ保持）」を差し引いた期間が自動的に低コストなアーカイブ（Archive）期間になります。よってインタラクティブ保持 90 日、合計保持 180 日に設定すると、最初の 90 日は高速検索、残りの 90 日はアーカイブ保存になります。',
        explanationEn:
          'In Log Analytics table retention settings, archive duration equals Total retention minus Analytics (interactive) retention. Setting Analytics retention to 90 days and Total retention to 180 days gives 90 days interactive + 90 days archive.',
      },
      {
        id: 'C',
        textJa: 'SecurityEvent テーブルの Analytics（インタラクティブ）保持期間を 90 日、合計保持期間（Total retention）を 90 日に設定する',
        textEn: 'Set the SecurityEvent table Analytics (interactive) retention to 90 days and Total retention to 90 days',
        isCorrect: false,
        explanationJa:
          '合計保持期間を 90 日にするとアーカイブ期間が 0 日になり、90 日経過後にデータが削除されてしまいます。',
        explanationEn:
          'Setting Total retention to 90 days results in zero archive retention and deletes logs after 90 days.',
      },
      {
        id: 'D',
        textJa: 'SecurityEvent テーブルの Analytics（インタラクティブ）保持期間を 180 日、合計保持期間（Total retention）を 180 日に設定する',
        textEn: 'Set the SecurityEvent table Analytics (interactive) retention to 180 days and Total retention to 180 days',
        isCorrect: false,
        explanationJa:
          '180 日すべてが高コストなインタラクティブ（Analytics）保持のままになり、後半 90 日の低コストアーカイブ化になりません。',
        explanationEn:
          'Keeping Analytics retention at 180 days retains all 180 days in higher-cost interactive storage rather than archiving days 91–180.',
      },
    ],
    overallExplanationJa:
      'Log Analytics テーブルの保持モデルでは以下の計算式でアーカイブ期間が決まります。\n`アーカイブ保持期間 ＝ 合計保持期間（Total retention） － インタラクティブ保持期間（Analytics retention）`\n要件は「90 日インタラクティブ ＋ 90 日アーカイブ（計 180 日）」なので、**Analytics 保持 90 日・合計保持 180 日**を `SecurityEvent` テーブルに設定します。',
    overallExplanationEn:
      'In Azure Monitor Logs table retention, `Archive period = Total retention - Analytics (interactive) retention`. To retain 90 days interactively plus 90 days in archive, set Analytics retention to 90 days and Total retention to 180 days on `SecurityEvent`.',
    keyPointsJa: [
      'アーカイブ期間 = Total retention - Analytics retention',
      '90 日インタラクティブ + 90 日アーカイブにするには Analytics=90日, Total=180日 をテーブル単位で設定する',
    ],
    keyPointsEn: [
      'Archive duration equals Total retention minus Analytics retention',
      'Set Analytics retention to 90 days and Total retention to 180 days on SecurityEvent',
    ],
    referenceTopic: 'Log Analytics テーブル単位の保持期間とアーカイブ設定',
  },
  {
    id: 'pdf-q173',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'Cloud Security Explorer による攻撃パス外のインターネット到達可能かつ重大脆弱性 VM の抽出',
    titleEn: 'Querying Internet-Exposed VMs with Critical Vulnerabilities Using Cloud Security Explorer',
    scenarioJa:
      'Defender CSPM（仮想マシンの脆弱性評価機能を含む）が有効化された Azure サブスクリプションと AWS アカウントがあります。両方のクラウド環境を対象として、インターネットから到達可能で、かつ「重大（Critical）」レベルの脆弱性が存在する仮想マシン（EC2 / Azure VM）を一覧表示する必要があります。ただし、現在攻撃パス（Attack path）に含まれていない VM も漏れなく結果に含める必要があります。',
    scenarioEn:
      'You have an Azure subscription and an AWS account onboarded with Defender CSPM (including VM vulnerability assessment). Across both cloud environments, you need to list all virtual machines (Azure VMs and AWS EC2) that are reachable from the internet and have Critical vulnerabilities—including VMs that are NOT currently part of any identified attack path.',
    questionJa: 'どの機能を使用すべきですか？',
    questionEn: 'Which feature should you use?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Defender External Attack Surface Management（EASM）のアセットインベントリを確認する',
        textEn: 'Review the asset inventory in Microsoft Defender External Attack Surface Management (EASM)',
        isCorrect: false,
        explanationJa:
          'EASM は外部から観測可能な公開アセットのディスカバリーには使えますが、Defender CSPM のエージェントレス脆弱性評価に基づく全 VM 横断の正確な OS/ソフトウェア Critical 脆弱性クエリはできません。',
        explanationEn:
          'Defender EASM discovers externally visible assets rather than querying Defender CSPM internal OS/software vulnerability findings across Azure and AWS.',
      },
      {
        id: 'B',
        textJa: 'Microsoft Defender for Cloud の Cloud Security Explorer でマルチクラウドクエリを作成する',
        textEn: 'Create a query in Cloud Security Explorer in Microsoft Defender for Cloud',
        isCorrect: true,
        explanationJa:
          'Cloud Security Explorer はクラウドセキュリティグラフ（Azure/AWS/GCP 横断）に対して、インターネット露出、脆弱性（Critical）、ネットワーク構成などの条件を自由に組み合わせて検索できます。攻撃パスの有無を問わず条件に一致するすべての VM を一覧表示可能です。',
        explanationEn:
          'Cloud Security Explorer lets you build custom graph queries across Azure and AWS (such as VMs exposed to the internet with Critical vulnerabilities), returning all matching assets regardless of whether they appear in an attack path.',
      },
      {
        id: 'C',
        textJa: 'Defender for Cloud の攻撃パス分析（Attack path analysis）画面で条件フィルターを適用する',
        textEn: 'Apply exposure and severity filters in the Attack path analysis view',
        isCorrect: false,
        explanationJa:
          '攻撃パス分析は横展開から重要資産（ターゲット）へ至る確立された攻撃経路のみを表示するため、攻撃パスの一部になっていない VM はリストに表示されません。',
        explanationEn:
          'Attack path analysis only shows resources involved in complete exploitable paths to high-value targets, omitting VMs outside attack paths.',
      },
      {
        id: 'D',
        textJa: 'Defender for Cloud の規制コンプライアンス（Regulatory compliance）ダッシュボードを絞込む',
        textEn: 'Filter standards in the Microsoft Defender for Cloud Regulatory compliance view',
        isCorrect: false,
        explanationJa:
          '規制コンプライアンスダッシュボードは標準フレームワークへの準拠状況を示す画面であり、インターネット到達性と重大脆弱性のグラフ横断抽出はできません。',
        explanationEn:
          'The Regulatory compliance dashboard tracks control compliance and cannot query arbitrary graph combinations of internet reachability and vulnerability severity.',
      },
    ],
    overallExplanationJa:
      'Defender CSPM の中核であるクラウドセキュリティグラフを能動的に検索できるツールが **Cloud Security Explorer** です。攻撃パス（Attack path）は既定の重要ターゲット到達経路のみを抽出するのに対し、Cloud Security Explorer はマルチクラウド（Azure＋AWS＋GCP）環境から「インターネット公開状態」「Critical 脆弱性保有」などの条件に合致するすべてのリソースを漏れなく抽出できます。',
    overallExplanationEn:
      '**Cloud Security Explorer** queries the multi-cloud security graph directly. Unlike Attack path analysis (which filters to exploitable paths toward high-value assets), Cloud Security Explorer surfaces every VM matching custom criteria such as internet exposure and Critical vulnerabilities.',
    keyPointsJa: [
      '攻撃パスに含まれないリソースも含めてグラフ条件検索するには Cloud Security Explorer を使用する',
      'Defender CSPM は Azure と AWS（および GCP）を横断して単一のクラウドセキュリティグラフに統合する',
    ],
    keyPointsEn: [
      'Use Cloud Security Explorer to query matching resources even if they are outside attack paths',
      'Defender CSPM unifies Azure and AWS assets into a single cloud security graph',
    ],
    referenceTopic: 'Defender CSPM - Cloud Security Explorer によるマルチクラウドグラフ検索',
  },
  {
    id: 'pdf-q174',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: '別リソースグループにあるプレイブックを実行するための Sentinel Automation Contributor 権限付与',
    titleEn: 'Granting Microsoft Sentinel Automation Contributor Role Across Resource Groups',
    scenarioJa:
      'Azure サブスクリプション Subscription1 内に、Microsoft Sentinel ワークスペース `Workspace1` が配置されたリソースグループ `RG1` と、Logic Apps プレイブック `Playbook1` が配置された別リソースグループ `RG2` があります。現在、Microsoft Sentinel は `RG2` へのアクセス権を持っていません。`Workspace1` のオートメーションルールから `Playbook1` を自動実行できるようにする必要があります。',
    scenarioEn:
      'In Subscription1, Microsoft Sentinel workspace Workspace1 resides in resource group RG1, while Logic App playbook Playbook1 resides in a separate resource group RG2. Currently, Microsoft Sentinel does not have access to RG2. You must allow an automation rule in Workspace1 to run Playbook1.',
    questionJa: 'どの Azure RBAC ロール割り当てを構成すべきですか？',
    questionEn: 'Which Azure RBAC role assignment should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'RG1 スコープで Sentinel サービスアカウント（Azure Security Insights）に「Microsoft Sentinel Automation Contributor」ロールを付与する',
        textEn: 'Assign the Microsoft Sentinel Automation Contributor role to the Sentinel service account scoped to RG1',
        isCorrect: false,
        explanationJa:
          'Playbook1 は RG2 に配置されているため、RG1 スコープにロールを割り当てても Playbook1 を実行する権限が付与されません。',
        explanationEn:
          'Playbook1 resides in RG2, so granting permissions on RG1 does not authorize Sentinel to trigger Playbook1.',
      },
      {
        id: 'B',
        textJa: 'RG2 スコープでワークスペース管理者ユーザーアカウントに「Microsoft Sentinel Automation Contributor」ロールを割り当てる',
        textEn: 'Assign the Microsoft Sentinel Automation Contributor role to workspace admins scoped to RG2',
        isCorrect: false,
        explanationJa:
          'オートメーションルールからプレイブックを自動起動するのは人間のユーザーではなく、バックグラウンドの Microsoft Sentinel サービスアカウント（Azure Security Insights サービスプリンシパル）です。',
        explanationEn:
          'Automation rules invoke playbooks using the Microsoft Sentinel service account (Azure Security Insights service principal), not individual admin user accounts.',
      },
      {
        id: 'C',
        textJa: 'RG2 スコープで Microsoft Sentinel サービスアカウント（Azure Security Insights）に「Microsoft Sentinel Automation Contributor」ロールを割り当てる',
        textEn: 'Assign the Microsoft Sentinel Automation Contributor role to the Microsoft Sentinel service account scoped to RG2',
        isCorrect: true,
        explanationJa:
          'Microsoft Sentinel のオートメーションルールがプレイブック（Logic App）を起動するには、プレイブックが格納されているリソースグループ（RG2）に対して、Microsoft Sentinel のサービスアカウント（Azure Security Insights）に「Microsoft Sentinel Automation Contributor」ロールが付与されている必要があります。',
        explanationEn:
          'For Sentinel automation rules to trigger playbooks in RG2, the Microsoft Sentinel service account (Azure Security Insights) must hold the "Microsoft Sentinel Automation Contributor" role scoped to RG2.',
      },
      {
        id: 'D',
        textJa: 'RG2 スコープで Sentinel サービスアカウント（Azure Security Insights）に「Playbook Operator」ロールを割り当てる',
        textEn: 'Assign the Microsoft Sentinel Playbook Operator role to the Sentinel service account scoped to RG2',
        isCorrect: false,
        explanationJa:
          'オートメーションルールによるプレイブック実行用の専用ロールは Playbook Operator（旧権限・インシデント単発手動トリガー関連等）ではなく「Microsoft Sentinel Automation Contributor」です。',
        explanationEn:
          'Automation rules specifically require the "Microsoft Sentinel Automation Contributor" role on the playbook resource group.',
      },
    ],
    overallExplanationJa:
      'Microsoft Sentinel のオートメーションルールが Logic App プレイブックを自動実行する際、実行主体となるのは **Microsoft Sentinel サービスアカウント（Azure Security Insights）** です。プレイブックが Sentinel ワークスペースとは別のリソースグループ（`RG2`）にある場合、`RG2`（またはプレイブック自体）に対して **`Microsoft Sentinel Automation Contributor`** ロールを Sentinel サービスアカウントへ割り当てます（ポータルの Sentinel 設定 > プレイブックアクセス許可から設定可能）。',
    overallExplanationEn:
      'When Sentinel automation rules execute a Logic App playbook in a different resource group (`RG2`), the **Microsoft Sentinel service account (Azure Security Insights)** requires the **Microsoft Sentinel Automation Contributor** role on `RG2`.',
    keyPointsJa: [
      'オートメーションルールから別 RG のプレイブックを呼ぶにはプレイブック側 RG（RG2）への権限付与が必要',
      '割り当て先プリンシパルは管理者ユーザーではなく Microsoft Sentinel サービスアカウント',
      '割り当てるロールは「Microsoft Sentinel Automation Contributor」',
    ],
    keyPointsEn: [
      'Scope the role assignment to the playbook resource group (RG2)',
      'Assign it to the Microsoft Sentinel service account, not a human admin',
      'Use the Microsoft Sentinel Automation Contributor role',
    ],
    referenceTopic: 'Sentinel オートメーションルールとプレイブック実行権限',
  },
  {
    id: 'pdf-q175',
    domain: 'AI セキュリティ & Copilot',
    difficulty: '応用 (Hard)',
    titleJa: 'Security Copilot カスタム API プラグインにおける OpenAPI 仕様とプラグインマニフェスト',
    titleEn: 'Custom API Plugins in Security Copilot Using OpenAPI Spec and Plugin Manifest',
    scenarioJa:
      '組織内に API キー認証を使用する独自の資産管理 REST API があります。Microsoft Security Copilot がアナリストの自然言語プロンプトに応じてこの資産管理 REST API を直接呼び出し、情報を取得できるようにカスタム統合を作成する必要があります。',
    scenarioEn:
      'Your organization has an internal asset-management REST API authenticated with an API key. You need to build a custom integration so that Microsoft Security Copilot can invoke this REST API directly in response to analyst prompts.',
    questionJa: '何を作成・準備する必要がありますか？',
    questionEn: 'What should you prepare?',
    options: [
      {
        id: 'A',
        textJa: 'REST API を記述した OpenAPI 仕様ファイルと、その OpenAPI 仕様およびプロンプトテンプレートを定義した GPT スキル形式のプラグインマニフェスト',
        textEn: 'An OpenAPI specification for the REST API and a plugin manifest defining a GPT skill that references prompt templates',
        isCorrect: false,
        explanationJa:
          'GPT スキルは REST API 呼び出しではなく、プロンプトテンプレートを使って LLM にテキスト処理を実行させるスキル形式です。',
        explanationEn:
          'GPT skills define LLM prompt templates rather than invoking external REST API endpoints.',
      },
      {
        id: 'B',
        textJa: 'REST API を記述した OpenAPI 仕様ファイルと、その OpenAPI 仕様および API キー認証方式を参照する API スキル定義のプラグインマニフェスト（YAML/JSON）',
        textEn: 'An OpenAPI specification for the REST API and a plugin manifest defining an API skill that references the spec and authentication method',
        isCorrect: true,
        explanationJa:
          'Security Copilot にカスタム REST API を統合するには、エンドポイントとスキーマを定義した **OpenAPI（Swagger）仕様ファイル** と、Skill Format として **`API`** を指定し OpenAPI 仕様の場所や認証方式（API キー認証）を記述した **プラグインマニフェスト（YAML/JSON）** を作成してアップロードします。',
        explanationEn:
          'Integrating a custom REST API into Security Copilot requires an **OpenAPI specification** describing the endpoints and a **plugin manifest (YAML/JSON)** defining an **`API`** skill format that references the spec and API key authentication.',
      },
      {
        id: 'C',
        textJa: 'KQL クエリ定義ファイルと、API キー認証構成およびワークスペース参照を記述した KQL スキル形式のプラグインマニフェスト（YAML/JSON）',
        textEn: 'A KQL query file paired with a plugin manifest defining a KQL skill referencing workspace targets and authentication method',
        isCorrect: false,
        explanationJa:
          'KQL スキルは Log Analytics / Sentinel / Defender Advanced Hunting に対してクエリを発行するためのものであり、外部 REST API 呼び出しには使用できません。',
        explanationEn:
          'KQL skills execute Kusto queries against Sentinel/Defender tables rather than calling custom REST APIs.',
      },
      {
        id: 'D',
        textJa: 'REST API を記述した OpenAPI 仕様ファイルと、その仕様を参照して連続実行するプロンプトブック（Promptbook）の組み合わせ定義',
        textEn: 'An OpenAPI specification for the REST API paired with a Security Copilot Promptbook and authentication settings',
        isCorrect: false,
        explanationJa:
          'プロンプトブックは一連の自然言語プロンプトを連続実行するワークフローであり、REST API を統合するプラグイン定義そのものの代わりにはなりません。',
        explanationEn:
          'A Promptbook chains together prompts and relies on existing plugins rather than defining a new REST API integration.',
      },
    ],
    overallExplanationJa:
      'Microsoft Security Copilot のカスタムプラグインでは主に `API`、`KQL`、`GPT`、`LogicApp` などのスキル形式がサポートされています。外部の社内 REST API を直接呼び出したい場合は、OpenAPI（Swagger）仕様書を作成したうえで、`Format: API` および API キー等の認証情報（`Auth`）を記載したプラグインマニフェストファイル（YAML/JSON）を用意してインポートします。',
    overallExplanationEn:
      'To connect Security Copilot directly to a custom REST API, author an **OpenAPI specification** and a **plugin manifest** using the **`API`** skill format that links the OpenAPI file and configures API key authentication.',
    keyPointsJa: [
      'カスタム REST API 統合には OpenAPI 仕様 ＋ Format: API のプラグインマニフェストを作成する',
      'KQL スキルは Kusto クエリ向け、GPT スキルはプロンプトベース処理向け',
    ],
    keyPointsEn: [
      'Prepare an OpenAPI specification plus an API skill plugin manifest referencing the spec and auth method',
      'KQL skills run Kusto queries; GPT skills run LLM prompt templates',
    ],
    referenceTopic: 'Microsoft Security Copilot カスタム API プラグイン開発',
  },
  {
    id: 'pdf-q176',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '応用 (Hard)',
    titleJa: 'Defender for Cloud のガバナンスルールとワークフロー自動化（Workflow Automation）の使い分け',
    titleEn: 'Using Defender for Cloud Governance Rules vs. Workflow Automation',
    scenarioJa:
      'Defender CSPM が有効化されたサブスクリプション Sub1 と、Logic App アプリケーション App1 があります。Microsoft Defender for Cloud で以下の 2 つの自動化要件を実装する必要があります。\n- **要件 1**: 特定のセキュリティ推奨事項が検出された際、修復担当者（Owner）としてユーザー User1 を自動割り当てし、修復期限（Due date）を設定する。\n- **要件 2**: 別の特定のセキュリティ推奨事項が生成された際、Logic App `App1` を自動的にトリガーする。\n\n利用可能な機能：\n- 機能 1：ワークフロー自動化（Workflow automation）\n- 機能 2：継続的エクスポート（Continuous export）\n- 機能 3：ガバナンスルール（Governance rules）',
    scenarioEn:
      'Subscription Sub1 has Defender CSPM enabled, and you have a Logic App named App1. You must implement two automation requirements in Microsoft Defender for Cloud:\n- **Requirement 1**: Automatically assign User1 as the remediation owner and set a due date when a specific recommendation is detected.\n- **Requirement 2**: Automatically trigger Logic App `App1` when another specific recommendation is generated.\n\nAvailable features:\n- Feature 1: Workflow automation\n- Feature 2: Continuous export\n- Feature 3: Governance rules',
    questionJa: '要件 1 と要件 2 に対してそれぞれ使用する機能の正しい組み合わせはどれですか？',
    questionEn: 'Which combination of features should you use for Requirement 1 and Requirement 2?',
    options: [
      {
        id: 'A',
        textJa: '要件 1: 機能 2（継続的エクスポート） / 要件 2: 機能 3（ガバナンスルール）',
        textEn: 'Req 1: Feature 2 (Continuous export) / Req 2: Feature 3 (Governance rules)',
        isCorrect: false,
        explanationJa: '継続的エクスポートは Event Hubs や Log Analytics へのデータストリーミング用であり、推奨事項への担当者割り当てや期限設定は行えません。',
        explanationEn: 'Continuous export streams alerts/recommendations to Event Hubs or Log Analytics rather than assigning owners.',
      },
      {
        id: 'B',
        textJa: '要件 1: 機能 3（ガバナンスルール） / 要件 2: 機能 1（ワークフロー自動化）',
        textEn: 'Req 1: Feature 3 (Governance rules) / Req 2: Feature 1 (Workflow automation)',
        isCorrect: true,
        explanationJa:
          '特定の推奨事項に対して担当者（Owner）や期限（Due date）およびメール通知・猶予期間を自動割り当てするのは **ガバナンスルール（Governance rules：機能 3）** です。一方、推奨事項・アラート・規制コンプライアンス状態の変化をトリガーにして Logic App（App1）を自動起動するのは **ワークフロー自動化（Workflow automation：機能 1）** です。',
        explanationEn:
          '**Governance rules (Feature 3)** assign remediation owners, due dates, and SLA notifications to security recommendations. **Workflow automation (Feature 1)** automatically triggers Logic Apps like App1 when recommendations or alerts match defined conditions.',
      },
      {
        id: 'C',
        textJa: '要件 1: 機能 1（ワークフロー自動化） / 要件 2: 機能 1（ワークフロー自動化）',
        textEn: 'Req 1: Feature 1 (Workflow automation) / Req 2: Feature 1 (Workflow automation)',
        isCorrect: false,
        explanationJa:
          'Defender for Cloud における推奨事項のネイティブな Owner と修復期限（Due date）設定はガバナンスルールで行います。',
        explanationEn:
          'Native owner assignment and remediation due dates on Defender recommendations are managed by Governance rules, not Workflow automation.',
      },
      {
        id: 'D',
        textJa: '要件 1: 機能 1（ワークフロー自動化） / 要件 2: 機能 2（継続的エクスポート）',
        textEn: 'Req 1: Feature 1 (Workflow automation) / Req 2: Feature 2 (Continuous export)',
        isCorrect: false,
        explanationJa: 'どちらも役割が一致しません。',
        explanationEn: 'Neither feature aligns with the required capability.',
      },
      {
        id: 'E',
        textJa: '要件 1: 機能 3（ガバナンスルール） / 要件 2: 機能 2（継続的エクスポート）',
        textEn: 'Req 1: Feature 3 (Governance rules) / Req 2: Feature 2 (Continuous export)',
        isCorrect: false,
        explanationJa: '要件 2 の Logic App 直接起動にはワークフロー自動化（機能 1）が必要です。',
        explanationEn: 'Triggering a Logic App directly requires Workflow automation (Feature 1) rather than Continuous export.',
      },
    ],
    overallExplanationJa:
      'Microsoft Defender for Cloud の自動化・ガバナンス 3 機能の役割分担は明確です。\n- **Governance rules（ガバナンスルール）**: 推奨事項に対する担当者（Owner）、修復期限（Due date）、期限超過通知の自動割り当て\n- **Workflow automation（ワークフロー自動化）**: 推奨事項・アラート等のイベントをトリガーとした **Logic Apps** の自動実行\n- **Continuous export（継続的エクスポート）**: Log Analytics ワークスペースまたは Event Hubs へのログデータ連続出力',
    overallExplanationEn:
      'Defender for Cloud divides automation across three tools:\n- **Governance rules**: Assign owners and due dates to recommendations.\n- **Workflow automation**: Trigger Logic Apps on alerts/recommendations.\n- **Continuous export**: Stream data to Log Analytics or Event Hubs.',
    keyPointsJa: [
      '推奨事項の担当者（Owner）と修復期限（Due date）の自動設定 ＝ ガバナンスルール',
      '推奨事項・アラート発生時の Logic App 自動実行 ＝ ワークフロー自動化',
    ],
    keyPointsEn: [
      'Governance rules assign owners and due dates for security recommendations',
      'Workflow automation triggers Logic Apps automatically',
    ],
    referenceTopic: 'Defender for Cloud ガバナンスルールとワークフロー自動化',
  },
  {
    id: 'pdf-q177',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: 'AWS アカウントの Defender for Cloud オンボーディングによる EC2 と S3 のポスチャ評価',
    titleEn: 'Onboarding an AWS Account to Defender for Cloud for EC2 and S3 Posture Assessment',
    scenarioJa:
      'EC2 インスタンスおよび S3 バケットを含む AWS アカウント `Account1` があります。現在、`Account1` には Microsoft Defender for Cloud 用の IAM ロールは作成されておらず、まだオンボーディングされていません。Defender for Cloud から `Account1` 内の EC2 および S3 リソースの構成を評価し、セキュリティ推奨事項を表示できるようにする必要があります。',
    scenarioEn:
      'You have an AWS account (Account1) containing EC2 instances and S3 buckets. Currently, no IAM roles have been created for Microsoft Defender for Cloud and Account1 is not onboarded. You must assess EC2 and S3 configurations in Account1 and surface security recommendations in Defender for Cloud.',
    questionJa: '最初に実行すべき手順はどれですか？',
    questionEn: 'What should you do?',
    options: [
      {
        id: 'A',
        textJa: 'Defender for Cloud で AWS 環境コネクタを作成し、生成された CloudFormation テンプレートを AWS アカウント上でデプロイする',
        textEn: 'Create an AWS environment connector in Defender for Cloud and deploy the generated CloudFormation stack in AWS',
        isCorrect: true,
        explanationJa:
          'AWS 環境を Defender for Cloud にオンボーディングするには、環境設定（Environment settings）から AWS コネクタを作成し、ウィザードで自動生成される AWS CloudFormation テンプレートをダウンロードして AWS 側でスタックを実行・デプロイします。これにより必要なクロスアカウント IAM ロール等が自動構築され、EC2 や S3 のポスチャ評価・推奨事項が表示されるようになります。',
        explanationEn:
          'To onboard AWS to Defender for Cloud, create an AWS connector under Environment settings and deploy the generated CloudFormation template in your AWS account. The stack provisions the required IAM roles so Defender for Cloud can assess EC2 and S3 configurations.',
      },
      {
        id: 'B',
        textJa: 'Azure で Defender for Servers を有効化し、すべての EC2 インスタンスへ手動で Azure Arc エージェントを導入してポスチャ評価する',
        textEn: 'Enable Defender for Servers in Azure and manually install Azure Arc agents on all EC2 instances',
        isCorrect: false,
        explanationJa:
          'EC2 インスタンスに Arc エージェントだけを入れても、AWS コントロールプレーンや S3 バケットのポスチャ構成評価・推奨事項は取得できません。',
        explanationEn:
          'Installing Azure Arc on EC2 alone does not onboard the AWS account control plane or assess S3 buckets.',
      },
      {
        id: 'C',
        textJa: 'AWS コネクタ作成時に標準の IAM 作成をスキップし、AWS Security Hub の検出結果のみを手動インポートして統合する',
        textEn: 'Skip CloudFormation IAM setup when creating the connector and manually import AWS Security Hub findings',
        isCorrect: false,
        explanationJa:
          'Defender for Cloud のネイティブマルチクラウドコネクタでは CloudFormation スタックによる IAM 構成で自動評価を行うのが標準手順です。',
        explanationEn:
          'Defender for Cloud native multi-cloud onboarding requires CloudFormation IAM provisioning rather than manual Security Hub imports.',
      },
      {
        id: 'D',
        textJa: 'Microsoft Sentinel で AWS S3 CloudTrail データコネクタを構成し、CloudFormation を使って監査ログを取り込む',
        textEn: 'Configure the Microsoft Sentinel AWS S3 CloudTrail data connector to ingest CloudTrail logs from Account1',
        isCorrect: false,
        explanationJa:
          'Sentinel の CloudTrail コネクタは SIEM への監査ログ収集用であり、Defender for Cloud のマルチクラウドポスチャ管理（推奨事項評価）とは異なります。',
        explanationEn:
          'The Sentinel S3 connector ingests CloudTrail logs into SIEM rather than enabling Defender for Cloud CSPM posture assessments.',
      },
    ],
    overallExplanationJa:
      'AWS アカウントを Microsoft Defender for Cloud に統合して EC2・S3 などの構成評価と推奨事項を受け取る標準フローは、**Environment settings（環境設定）から AWS コネクタを作成し、生成される CloudFormation テンプレートを AWS 側でデプロイすること**です。これにより読み取り・スキャン用 IAM ロールが安全に自動構成されます。',
    overallExplanationEn:
      'Onboarding an AWS account to Defender for Cloud begins by creating an AWS connector in Environment settings and deploying the provided **CloudFormation template** in AWS to provision the necessary cross-account IAM roles for EC2, S3, and CSPM scanning.',
    keyPointsJa: [
      'AWS オンボーディングは Defender for Cloud の環境設定で AWS コネクタを作成し、CloudFormation テンプレートを AWS でデプロイする',
      'CloudFormation スタックが未作成の必要な IAM ロールを自動プロビジョニングする',
    ],
    keyPointsEn: [
      'Create an AWS connector in Defender for Cloud and deploy the generated CloudFormation stack in AWS',
      'CloudFormation provisions the required IAM roles automatically',
    ],
    referenceTopic: 'AWS アカウントの Microsoft Defender for Cloud オンボーディング',
  },
  {
    id: 'pdf-q178',
    domain: 'Defender for Cloud & クラウド態勢',
    difficulty: '標準 (Medium)',
    titleJa: '特定サブスクリプションのみに対する NIST SP 800-53 Rev. 5 コンプライアンス標準の追加',
    titleEn: 'Assigning NIST SP 800-53 Rev. 5 Compliance Standard to a Specific Subscription',
    scenarioJa:
      '管理グループ `MG1` 配下に 2 つのサブスクリプション `Sub1` と `Sub2` があり、両方とも Defender CSPM が有効化されています。`Sub2` には適用せず、`Sub1` に対してのみ継続的に **NIST SP 800-53 Rev. 5** 標準に対するコンプライアンス評価を実施し、結果を確認できるようにする必要があります。',
    scenarioEn:
      'Management group MG1 contains two subscriptions, Sub1 and Sub2, both with Defender CSPM enabled. You need to continuously assess Sub1—and NOT Sub2—against the NIST SP 800-53 Rev. 5 compliance standard and review the compliance results.',
    questionJa: 'どの手順を実行すべきですか？',
    questionEn: 'Which action should you take?',
    options: [
      {
        id: 'A',
        textJa: 'Defender for Cloud の環境設定（Environment settings）で Sub1 に NIST SP 800-53 Rev. 5 標準を追加し、規制コンプライアンス（Regulatory compliance）ブレードで結果を確認する',
        textEn: 'In Defender for Cloud Environment settings, add the NIST SP 800-53 Rev. 5 standard to Sub1 and review results in Regulatory compliance',
        isCorrect: true,
        explanationJa:
          '特定のサブスクリプションのみを規制コンプライアンス標準（NIST SP 800-53 Rev. 5）で評価したい場合は、Defender for Cloud の環境設定（Environment settings）から該当サブスクリプション `Sub1` を選択し、「セキュリティポリシー（Security policy）」>「標準の追加（Add more standards）」から NIST SP 800-53 Rev. 5 を有効にします。これにより `Sub2` には適用されず、`Sub1` のみが規制コンプライアンス画面で継続評価されます。',
        explanationEn:
          'Adding the NIST SP 800-53 Rev. 5 standard specifically under Sub1 in Defender for Cloud Environment settings (Security policy) limits continuous assessment and Regulatory compliance reporting strictly to Sub1 without affecting Sub2.',
      },
      {
        id: 'B',
        textJa: 'Defender for Cloud の環境設定（Environment settings）の Sub1 で継続的エクスポートを構成し、Log Analytics ワークスペース上のテーブルで準拠状況を手動集計して確認する',
        textEn: 'In Defender for Cloud Environment settings, configure continuous export on Sub1 to Log Analytics and review NIST compliance manually',
        isCorrect: false,
        explanationJa:
          '標準を追加していなければ NIST SP 800-53 Rev. 5 のコンプライアンス評価自体が生成されません。',
        explanationEn:
          'Continuous export does not evaluate or generate NIST SP 800-53 Rev. 5 compliance assessments if the standard is not enabled.',
      },
      {
        id: 'C',
        textJa: 'Defender for Cloud の環境設定（Environment settings）で上位の管理グループ MG1 に NIST SP 800-53 Rev. 5 標準を追加し、規制コンプライアンス（Regulatory compliance）で結果を確認する',
        textEn: 'In Defender for Cloud Environment settings, add the NIST SP 800-53 Rev. 5 standard to MG1 and review Regulatory compliance',
        isCorrect: false,
        explanationJa:
          'MG1 スコープに追加すると、配下にある Sub2 に対しても NIST SP 800-53 Rev. 5 が継承・評価されてしまい要件に反します。',
        explanationEn:
          'Assigning the standard to management group MG1 also applies it to Sub2, violating the requirement to exclude Sub2.',
      },
      {
        id: 'D',
        textJa: 'Azure Policy ポータルで組み込みイニシアチブを複製してカスタム ポリシー定義を作成し、Sub1 スコープに直接割り当てたうえで Azure Policy コンプライアンス画面で結果を確認する',
        textEn: 'In the Azure Policy portal, duplicate the built-in regulatory initiative as a custom definition, assign it to Sub1, and review compliance',
        isCorrect: false,
        explanationJa:
          'Defender for Cloud の環境設定から組み込みの規制コンプライアンス標準を有効化する方が正規かつ最も簡単な手順であり、独自複製は不要で規制コンプライアンスダッシュボードとの統合も標準手順で行うべきです。',
        explanationEn:
          'Manually duplicating built-in initiatives is unnecessary and bypasses the standard Defender for Cloud Environment settings workflow for Regulatory compliance.',
      },
    ],
    overallExplanationJa:
      'Microsoft Defender for Cloud で Microsoft Cloud Security Benchmark（MCSB）以外の規制コンプライアンス標準（NIST SP 800-53 Rev. 5、ISO 27001、PCI DSS 等）を特定サブスクリプション（`Sub1`）のみに割り当てるには、**環境設定（Environment settings）> Sub1 > セキュリティポリシー（Security policy）** から対象標準を追加します。MG1 に割り当てると Sub2 にも適用される点に注意してください。',
    overallExplanationEn:
      'To assess only `Sub1` (excluding `Sub2`) against NIST SP 800-53 Rev. 5, add the standard directly at the `Sub1` scope inside Defender for Cloud **Environment settings > Security policy**, then monitor results in **Regulatory compliance**.',
    keyPointsJa: [
      'Sub1 のみに標準を適用したい場合は MG1 ではなく Sub1 の環境設定から「セキュリティポリシー」に標準を追加する',
      '追加した標準の評価結果は「規制コンプライアンス（Regulatory compliance）」ダッシュボードで確認する',
    ],
    keyPointsEn: [
      'Add compliance standards under Sub1 Environment settings (not MG1) to exclude Sub2',
      'Review ongoing assessments in the Regulatory compliance dashboard',
    ],
    referenceTopic: 'Defender for Cloud 規制コンプライアンス標準のスコープ割り当て',
  },
  {
    id: 'pdf-q179',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '応用 (Hard)',
    titleJa: 'Logs Ingestion API と DCR の transformKql によるカスタムテーブル取り込み変換',
    titleEn: 'Transforming Logs Ingestion API Payloads with DCR transformKql',
    scenarioJa:
      'Log Analytics ワークスペース `Workspace1` にカスタムテーブル `AppEvents_CL`（`TimeGenerated` が `datetime` 型、`EventCount` が `long` 型）が定義されています。外部アプリケーションが Logs Ingestion API 経由で送信する JSON データでは、時刻フィールドが `eventTime`（文字列型）、カウントフィールドが `count` として送られてきます。データ収集ルール `DCR1` の `streamDeclarations` は送信側 JSON 構造と一致するよう定義済みです。送信側アプリのコードや `AppEvents_CL` のテーブルスキーマを変更することなく、`AppEvents_CL` へ正常に取り込めるようにする必要があります。',
    scenarioEn:
      'A custom table `AppEvents_CL` in Workspace1 defines `TimeGenerated` (datetime) and `EventCount` (long). An application sends JSON payloads via the Logs Ingestion API containing string field `eventTime` and field `count`. The `streamDeclarations` in Data Collection Rule `DCR1` already match the incoming JSON format. Without modifying the sender application or changing the `AppEvents_CL` table schema, you must ensure successful ingestion into `AppEvents_CL`.',
    questionJa: 'どの設定を構成すべきですか？',
    questionEn: 'What should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'Microsoft Sentinel のスケジュール分析ルール内にある KQL クエリを修正し、eventTime と count フィールドを動的に変換する',
        textEn: 'Modify the KQL query inside Microsoft Sentinel analytics rules to cast eventTime and count to target column types',
        isCorrect: false,
        explanationJa:
          '取り込みパイプラインの時点で `TimeGenerated`（datetime）などの必須スキーマに一致していないとデータ自体がワークスペースに正しく取り込まれません。',
        explanationEn:
          'Analytics rules run after ingestion; records will fail ingestion or lose schema alignment unless transformed before storage.',
      },
      {
        id: 'B',
        textJa: 'Log Analytics ワークスペース上に保存済み関数（KQL パーサー）を作成し、AppEvents_CL の列名と型に合うよう変換定義する',
        textEn: 'Create a saved KQL parser function in Workspace1 to rename incoming fields and cast them to match AppEvents_CL types',
        isCorrect: false,
        explanationJa:
          '保存済み関数（ASIM パーサー等）はクエリ実行時のビュー変換であり、取り込み時のデータ型変換やカラムマッピングは行えません。',
        explanationEn:
          'Saved functions only parse data at query time and do not transform incoming data during ingestion.',
      },
      {
        id: 'C',
        textJa: 'DCR1 のデータフロー内で `transformKql` を構成し、`AppEvents_CL` の列名（TimeGenerated, EventCount）とデータ型（todatetime, tolong）に変換する',
        textEn: 'Configure `transformKql` in `DCR1` to map and cast incoming fields to `AppEvents_CL` column names and data types',
        isCorrect: true,
        explanationJa:
          'Azure Monitor のデータ収集ルール（DCR）の取り込み時変換（`transformKql`）では、`source | extend TimeGenerated = todatetime(eventTime), EventCount = tolong(count) | project ...` のように KQL を使って受信ストリームをターゲットテーブル（`AppEvents_CL`）の正確な列名とデータ型に変換できます。送信側アプリもテーブル定義も変更不要です。',
        explanationEn:
          'Configuring `transformKql` in the `DCR1` dataFlow allows you to rename fields and cast types (e.g., `todatetime(eventTime)` to `TimeGenerated`, `tolong(count)` to `EventCount`) at ingestion time without modifying the sender or target table schema.',
      },
      {
        id: 'D',
        textJa: 'データ収集ルール DCR1 の streamDeclarations 定義を AppEvents_CL の TimeGenerated と EventCount に直接書き換える',
        textEn: 'Modify streamDeclarations inside Data Collection Rule DCR1 to declare TimeGenerated and EventCount as columns directly',
        isCorrect: false,
        explanationJa:
          '`streamDeclarations` は送信元アプリから送られてくる入力 JSON スキーマを宣言する場所であるため、ここを書き換えると送信元アプリからのペイロードと不一致になり取り込みが失敗します。',
        explanationEn:
          '`streamDeclarations` must match the incoming JSON structure from the sender; altering it without changing the sender breaks ingestion.',
      },
    ],
    overallExplanationJa:
      'Logs Ingestion API とデータ収集ルール（DCR）を使ったカスタムログ取り込みには 2 つのスキーマ定義があります。\n- **`streamDeclarations`**: 送信側が送る JSON の生構造と一致させる。\n- **`transformKql`**（`dataFlows` 内）: `streamDeclarations` から受け取ったデータを変換・型キャスト（`todatetime` や `tolong` 等）してターゲットテーブル `AppEvents_CL` のスキーマ（`TimeGenerated` 等）へ適合させる。',
    overallExplanationEn:
      'With Azure Monitor Logs Ingestion API, `streamDeclarations` define the raw incoming JSON schema, while **`transformKql`** inside the DCR `dataFlows` handles ingestion-time KQL transformation (renaming columns and casting types) to match the destination table `AppEvents_CL`.',
    keyPointsJa: [
      'DCR の streamDeclarations は送信元 JSON 形式と一致させる必要がある',
      '取り込み時に列名やデータ型をテーブルスキーマに合わせるには DCR の transformKql を構成する',
    ],
    keyPointsEn: [
      'streamDeclarations must match the incoming JSON payload format',
      'Use DCR transformKql to map column names and cast data types to match the target table schema',
    ],
    referenceTopic: 'Azure Monitor DCR の transformKql による取り込み時データ変換',
  },
  {
    id: 'pdf-q180',
    domain: 'Sentinel & セキュリティ運用',
    difficulty: '標準 (Medium)',
    titleJa: '最小権限に基づく Microsoft Sentinel レスポンダーロールの割り当て',
    titleEn: 'Assigning Microsoft Sentinel Responder Role Under Least Privilege',
    scenarioJa:
      'Microsoft Sentinel ワークスペース `Workspace1` において、アナリスト `User1` にインシデントの調査、ワークスペースログの閲覧、およびインシデントのステータスや割り当て先（Owner）の更新を許可する必要があります。ただし、最小権限の原則に従い、`User1` が分析ルール（Analytics rules）を新規作成したり編集したりすることは許可してはいけません。',
    scenarioEn:
      'In Microsoft Sentinel workspace Workspace1, analyst User1 must be able to investigate incidents, view workspace logs, and update incident statuses and owners. Following least privilege, User1 must NOT be allowed to create or edit analytics rules.',
    questionJa: 'どのロール割り当てを構成すべきですか？',
    questionEn: 'Which role assignment should you configure?',
    options: [
      {
        id: 'A',
        textJa: 'Workspace1 と SecurityInsights ソリューションリソースに対して「Microsoft Sentinel レスポンダー（Microsoft Sentinel Responder）」ロールを割り当てる',
        textEn: 'Assign the Microsoft Sentinel Responder role on Workspace1 and the SecurityInsights solution resource',
        isCorrect: true,
        explanationJa:
          '「Microsoft Sentinel レスポンダー（Microsoft Sentinel Responder）」ロールは、ログ・インシデント・ブックマークの閲覧に加えて、インシデントの割り当て・ステータス変更・タグ付け・却下などのインシデント管理操作を許可しますが、分析ルールやデータコネクタ、プレイブックの作成・編集権限は含まないため、最小権限の要件に完全に一致します。',
        explanationEn:
          'The Microsoft Sentinel Responder role allows viewing logs/data and managing incidents (assigning owners, changing status, dismissing) while prohibiting creation or modification of analytics rules, matching least privilege.',
      },
      {
        id: 'B',
        textJa: 'Workspace1 と SecurityInsights ソリューションに対して「Microsoft Sentinel 閲覧者（Microsoft Sentinel Reader）」ロールを割り当てる',
        textEn: 'Assign the Microsoft Sentinel Reader role on Workspace1 and the SecurityInsights solution resource',
        isCorrect: false,
        explanationJa:
          'Microsoft Sentinel Reader は閲覧専用であるため、インシデントのステータスや担当者を更新することができません。',
        explanationEn:
          'Microsoft Sentinel Reader is read-only and cannot update incident status or assign owners.',
      },
      {
        id: 'C',
        textJa: 'Workspace1 と関連ソリューションに対して「Log Analytics 共同作成者（Log Analytics Contributor）」ロールを割り当てる',
        textEn: 'Assign the Log Analytics Contributor role on Workspace1 and the SecurityInsights solution resource',
        isCorrect: false,
        explanationJa:
          'Log Analytics Contributor はワークスペース自体の設定変更・自動スケーリングやデータ保持設定の変更を行える強力な基盤ロールであり、インシデント担当者変更や分析ルール制限という Sentinel の最小権限用途には不適切です。',
        explanationEn:
          'Log Analytics Contributor grants broad workspace configuration permissions rather than scoped Sentinel incident-response permissions.',
      },
      {
        id: 'D',
        textJa: 'Workspace1 と SecurityInsights ソリューションに対して「Microsoft Sentinel 共同作成者（Microsoft Sentinel Contributor）」ロールを割り当てる',
        textEn: 'Assign the Microsoft Sentinel Contributor role on Workspace1 and the SecurityInsights solution resource',
        isCorrect: false,
        explanationJa:
          'Microsoft Sentinel Contributor はインシデント管理だけでなく分析ルールの作成・編集権限も含まれるため、分析ルール編集を禁止する最小権限要件に違反します。',
        explanationEn:
          'Microsoft Sentinel Contributor includes permissions to create and edit analytics rules, violating the least-privilege constraint.',
      },
    ],
    overallExplanationJa:
      'Microsoft Sentinel の組み込みロールにおける役割分担（最小権限）は以下の通りです。\n- **Microsoft Sentinel Reader**: データ・インシデント・分析ルールの閲覧のみ\n- **Microsoft Sentinel Responder**: Reader の権限 ＋ インシデントの管理（ステータス変更・担当者割り当て・コメント追加）\n- **Microsoft Sentinel Contributor**: Responder の権限 ＋ 分析ルール・ブックマーク・データコネクタの作成と編集',
    overallExplanationEn:
      'Microsoft Sentinel built-in RBAC hierarchy:\n- **Reader**: Read-only access to incidents, logs, and rules.\n- **Responder**: Reader permissions plus incident management (status/owner updates).\n- **Contributor**: Responder permissions plus creating and editing analytics rules and connectors.',
    keyPointsJa: [
      'インシデント調査＋ステータス/担当者更新可、かつ分析ルール編集不可 ＝ Microsoft Sentinel Responder',
      '分析ルール作成・編集権限を含むロールは Microsoft Sentinel Contributor',
    ],
    keyPointsEn: [
      'Use Microsoft Sentinel Responder for incident investigation and status/owner updates without analytics rule modification',
      'Microsoft Sentinel Contributor allows creating and editing analytics rules',
    ],
    referenceTopic: 'Microsoft Sentinel RBAC ロール（Reader / Responder / Contributor）',
  },
];
