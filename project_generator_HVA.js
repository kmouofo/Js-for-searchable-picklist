 $( function() {
    
  var project_AcademicandStudentPrograms = [
   'Advanced Studies in Political Economy', 'Community & Crisis', 'Freedom and Flourishing', 'Tensions in Political Economy', 'Work & Dependency', '-None-'
   ];


   var project_AcademicOutreach = [
   'Capacity Building', 'Communicating Research', 'Connecting Talent', '-None-'
   ];


   var project_COVIDResponse = [
   'Call for Ideas Series (Extended)', 'Policy Brief Series (Initial)', '-None-'
   ];


   var project_EmergentVentures = [
   'COVID-19 Prizes', 'EV India', 'Fast Grants for COVID-19', 'Standard EV Grants', '-None-'
   ];


   var project_EntrepandInnovation = [
   'Advancing Progress Studies (Hist.)', 'Countering the Techlash', 'Entrep Governance', 'Joint Academic Outreach Project', 'Prophets of Progress Series', '-None-'
   ];


   var project_EqualLibertyInitiative = [
   'Discrim and Dominion', 'Effects of Market Institutions', 'Fragile Communities and Orgs', 'Institutional Rules and Cultural Norms', 'Legacy Institutions', '-None-'
   ];


   var project_EquityInitiativeHist = [
   'Cultural Change (Hist.)', 'Gift Clauses (Hist.)', 'Institutional Reform (Hist.)', 'Interstate Compact (Hist.)', '-None-'
   ];


   var project_FinancialMarketsWorkingGroupHist = [
   'All-Business/Entrepreneurial Financing (Hist.)', 'Market-Based Alternatives (Hist.)', 'Permissionless Innovations in FinTech (Hist.)', 'Reduce Regulatory Barriers to Consumer Credit (Hist.)', 'Reforming Financial Regulatory Institutions and Processes (Hist.)', 'Regressive Effects of Regulation (Hist.)', '-None-'
   ];


   var project_FinancialRegulation = [
   'Abuse of Regulatory Power', 'Barriers to Access', 'Market-Enabling Regulation', 'Reform Fin Reg Institutions', '-None-'
   ];


   var project_FinRegHist = [
   'All-Business/Entrepreneurial Financing (Hist.)', 'Market-Based Alternatives (Hist.)', 'Other (Hist.)', 'Reduce Regulatory Barriers to Consumer Credit (Hist.)', 'Reforming Financial Regulatory Institutions and Processes (Hist.)', 'Regressive Effects of Regulation (Hist.)', '-None-'
   ];


   var project_InternationalFreedom = [
   'Authoritarian Regimes', 'Liberty Trade Agenda', '-None-'
   ];


   var project_MonetaryPolicy = [
   'Accountability/Transparency at the Fed', 'Central Banking Reforms (Hist.)', 'Empirical Studies (Hist.)', 'Promote a Nominal Income Targeting Rule', 'Reform Monetary Policy Instruments', 'Tools to Understand Monetary Sys (Hist.)', '-None-'
   ];


   var project_MonetaryPolicyHist = [
   'Empirical Studies (Hist.)', 'Novel Approaches to Monetary Policy (Hist.)', 'Other (Hist.)', 'Prediction Markets (Hist.)', 'Tools to Understand Monetary System (Hist.)', '-None-'
   ];


   var project_OpenHealth = [
   'Academic Case for Markets in Healthcare (Hist.)', 'Academy and Ideas (Hist.)', 'Frontier of American Health (Hist.)', 'Healthcare - Demand-side', 'Healthcare - Public Health', 'Healthcare - Supply-side', 'Policy Institutions and Reg Framework (Hist.)', 'Quantitative Health Lab', 'Technology Entrepreneurship (Hist.)', '-None-'
   ];


   var project_PolicyAnalytics = [
   'Advances to Infrastructure', 'Frameworks for Reform', 'Regressive Effects', 'Regulation, Innovation, and Growth (Hist.)', 'Regulatory Accumulation', '-None-'
   ];


   var project_PolicyResearchSpecialProjects = [
   'Reg Tech', 'State Fiscal Rankings', '-None-'
   ];


   var project_ProgramforEconomicResearchonRegulationHist = [
   'Advances to Infrastructure (Hist.)', 'Other (Hist.)', 'Quantitative and Analytic Excellence Initiative (Hist.)', 'Regulation, Innovation, and Growth (Hist.)', 'Targeted Research on Regulatory Reform (Hist.)', 'Vertically Coordinated Strategies (Hist.)', '-None-'
   ];


   var project_ProgramontheAmericanEconomyandGlobalizationHist = [
   'Defending an Open U.S. Economy (Hist.)', 'Explain Balance of Trade (Hist.)', 'Free Digital Trade (Hist.)', 'Good Trade Agreements (Hist.)', 'Immigration Reform (Hist.)', 'Jones Act 2020 Project (Hist.)', 'Other (Hist.)', '-None-'
   ];


   var project_RegulatoryStudiesProgramHist = [
   'FDA Reform (Hist.)', 'Federal Regulatory Reform (Hist.)', 'Other (Hist.)', 'Regressive Effects (Hist.)', 'Regulatory Benefits Reform (Hist.)', '-None-'
   ];


   var project_SafetyNetHist = [
   'Future of Work and Economic Mobility (Hist.)', 'Industrial Policy (Hist.)', 'Productivity and Growth (Hist.)', 'Public Finance Crisis (Hist.)', 'Reforming Fiscal Institutions (Hist.)', 'Tax Policy (Hist.)', '-None-'
   ];


   var project_SpendingandBudgetInitiativeHist = [
   'Budget Process Reform (Hist.)', 'Economic Mobility and Opportunity (Hist.)', 'Frontier of American Health Care (Hist.)', 'Other (Hist.)', 'Spending, Deficits and Debt (Hist.)', 'Tax Policy (Hist.)', 'The Frontier of American Healthcare (Hist.)', 'Welfare Reform and Means-Tested Programs (Hist.)', '-None-'
   ];


   var project_StateandLocalPolicyProjectHist = [
   'Other (Hist.)', 'Public Sector Pensions (Hist.)', 'Reducing the Burden of State Regulations (Hist.)', 'State and Local Spending Reform (Hist.)', 'State and Local Tax Policy (Hist.)', 'State Diagnostics (Hist.)', 'Sustainable State and Local Fiscal Institutions (Hist.)', 'Urban Economics (Hist.)', '-None-'
   ];


   var project_StudyofAmericanCapitalismHist = [
   'Barriers to Entry (Hist.)', 'Government-Granted Privilege in Health Care (Hist.)', 'Institutions and Culture to Overcome Privilege (Hist.)', 'Other (Hist.)', 'Overcoming Special Interests (Hist.)', 'Portfolio on Federal Government-Granted Privilege (Hist.)', 'Targeted Economic Development Incentives (Hist.)', '-None-'
   ];


   var project_TechnologyPolicyProgramHist = [
   'Data, Privacy and Security (Hist.)', 'Innovation and Regulatory Reform (Hist.)', 'Intellectual Property (Hist.)', 'Other (Hist.)', 'Permissionless Innovation and Emerging Tech (Hist.)', 'Telecommunications and Internet Infrastructure (Hist.)', '-None-'
   ];


   var project_TheFourthBranch = [
   'Entrep Governance (Hist.)', 'Free Market Approach to Public Property', 'Fresh Start Initiative', 'Improving Regulatory Institutions', 'Market Disposition of Govt Assets (Hist.)', 'Regulatory Institutions and Processes (Hist.)', 'Undermining Kludgeocracy (Hist.)', 'Unintended Consequences of Regulation', '-None-'
   ];


   var project_TheHealthProgramHist = [
   'Frontier of American Healthcare (Hist.)', '-None-'
   ];


   var project_TradeandImmigration = [
   'Free Digital Trade (Hist.)', 'Immigration Reform', 'Initiative on Worker Adjustment (Hist.)', 'Jones Act (Hist.)', 'Reform U.S. Trade Institutions', 'Trade Liberalization', '-None-'
   ];


   var project_Urbanity = [
   'Coalition Groups (Hist.)', 'Cultural Influence (Hist.)', 'Demand Distortions in Housing', 'Develop Better Datasets (Hist.)', 'Education and the Academy', 'Fiscal Constraints on Urban Dev', 'Land Use Regs', '-None-'
   ];

   var selection = $('#field112813780').find(":selected").text();
   
   switch( selection ){
     
     case ("Academic and Student Programs") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_AcademicandStudentPrograms,
       minLength : 0
      }); 
      break;

     case ("Academic Outreach") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_AcademicOutreach,
       minLength : 0
      }); 
      break;

     case ("COVID Response") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_COVIDResponse,
       minLength : 0
      }); 
      break;

     case ("Emergent Ventures") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_EmergentVentures,
       minLength : 0
      }); 
      break;

     case ("Entrep and Innovation") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_EntrepandInnovation,
       minLength : 0
      }); 
      break;

     case ("Equal Liberty Initiative") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_EqualLibertyInitiative,
       minLength : 0
      }); 
      break;

     case ("Equity Initiative (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_EquityInitiativeHist,
       minLength : 0
      }); 
      break;

     case ("Financial Markets Working Group (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_FinancialMarketsWorkingGroupHist,
       minLength : 0
      }); 
      break;

     case ("Financial Regulation") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_FinancialRegulation,
       minLength : 0
      }); 
      break;

     case ("FinReg (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_FinRegHist,
       minLength : 0
      }); 
      break;

     case ("International Freedom") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_InternationalFreedom,
       minLength : 0
      }); 
      break;

     case ("Monetary Policy") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_MonetaryPolicy,
       minLength : 0
      }); 
      break;

     case ("Monetary Policy (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_MonetaryPolicyHist,
       minLength : 0
      }); 
      break;

     case ("Open Health") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_OpenHealth,
       minLength : 0
      }); 
      break;

     case ("Policy Analytics") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_PolicyAnalytics,
       minLength : 0
      }); 
      break;

     case ("Policy Research Special Projects") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_PolicyResearchSpecialProjects,
       minLength : 0
      }); 
      break;

     case ("Program for Economic Research on Regulation (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_ProgramforEconomicResearchonRegulationHist,
       minLength : 0
      }); 
      break;

     case ("Program on the American Economy and Globalization (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_ProgramontheAmericanEconomyandGlobalizationHist,
       minLength : 0
      }); 
      break;

     case ("Regulatory Studies Program (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_RegulatoryStudiesProgramHist,
       minLength : 0
      }); 
      break;

     case ("Safety Net (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_SafetyNetHist,
       minLength : 0
      }); 
      break;

     case ("Spending and Budget Initiative (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_SpendingandBudgetInitiativeHist,
       minLength : 0
      }); 
      break;

     case ("State and Local Policy Project (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_StateandLocalPolicyProjectHist,
       minLength : 0
      }); 
      break;

     case ("Study of American Capitalism (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_StudyofAmericanCapitalismHist,
       minLength : 0
      }); 
      break;

     case ("Technology Policy Program (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_TechnologyPolicyProgramHist,
       minLength : 0
      }); 
      break;

     case ("The Fourth Branch") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_TheFourthBranch,
       minLength : 0
      }); 
      break;

     case ("The Health Program (Hist.)") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_TheHealthProgramHist,
       minLength : 0
      }); 
      break;

     case ("Trade and Immigration") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_TradeandImmigration,
       minLength : 0
      }); 
      break;

     case ("Urbanity") :
      $("[fs-field-validation-name='Primary Project Strategy'] > input").autocomplete({
       source: project_Urbanity,
       minLength : 0
      }); 
      break;

  }
   
  } );
