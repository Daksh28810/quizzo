const QUESTIONS_PER_ROUND = 15;
let timeLeft = 120;
const timerDisplay = document.getElementById('timer');
const countdown = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerDisplay.innerHTML = 'Time up!!';

        disableOptions();  // Disable buttons so user cannot continue

        // After 3 seconds, show the results using your existing function
        setTimeout(() => {
            showResults();
        }, 3000);
    } else {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;

        if (timeLeft <= 30) {
            timerDisplay.classList.add('low-time');
        }
    }
}, 1000);

function disableOptions() {
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.disabled = true);
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.disabled = true;
}

const questions = [
    {
        question: "Which of the following is not an economic activity?",
        options: ["Production", "Social service", "Professional", "Trading in goods"],
        answer: 1
    },
    {
        question: "What is business?",
        options: ["An economic activity", "A social activity", "A hobby", "None of the above"],
        answer: 0
    },
    {
        question: "Which of the following is a characteristic of business?",
        options: ["Production", "Exchange or sale", "Risk element", "All of the above"],
        answer: 3
    },
    {
        question: "Oil refinery and sugar mill are classified under which industries?",
        options: ["Primary", "Secondary", "Tertiary", "None of the above"],
        answer: 1
    },
    {
        question: "Which of the following is not a management function?",
        options: ["Planning", "Staffing", "Cooperating", "Controlling"],
        answer: 2
    },
    {
        question: "What is a dormant partner?",
        options: ["One who actively manages the business", "One who takes no active part but shares profits", "A minor partner", "None of the above"],
        answer: 1
    },
    {
        question: "What is sole proprietorship?",
        options: ["Business owned by two people", "Business owned by one person", "Business owned by shareholders", "None of the above"],
        answer: 1
    },
    {
        question: "Which of the following is not a business risk?",
        options: ["Breakdown of machinery", "Efficient management", "Riot", "Changing government policy"],
        answer: 1
    },
    {
        question: "Which of the following is a false statement?",
        options: ["Commerce includes trade and auxiliaries to trade", "Foreign trade is purchase and sale by traders of the same country", "Traders link producers and consumers", "The scope of commerce is broader than business"],
        answer: 1
    },
    {
        question: "Policy formulation comes under which managerial role?",
        options: ["Top-level managers", "Middle-level managers", "Operational management", "All of the above"],
        answer: 0
    },
    {
        question: "What is the primary objective of business?",
        options: ["Earning profit", "Providing employment", "Social service", "None of the above"],
        answer: 0
    },
    {
        question: "Which of the following is an example of a secondary industry?",
        options: ["Mining", "Sugar mill", "Transport", "Banking"],
        answer: 1
    },
    {
        question: "Who is responsible for day-to-day operations in a company?",
        options: ["Top-level management", "Middle-level management", "Supervisory management", "Shareholders"],
        answer: 2
    },
    {
        question: "Which document is not created during the billing step of the fulfillment process if profitability analysis is active?",
        options: ["Invoice", "FI document", "Material document", "CO document"],
        answer: 3
    },
    {
        question: "What is the term for business processes that are not executed by a single group?",
        options: ["Functional processes", "Cross-functional processes", "Operational processes", "None of the above"],
        answer: 1
    },
    {
        question: "Which of the following organizational levels is associated with a company's product line?",
        options: ["Sales organization", "Sales area", "Division", "Distribution channel"],
        answer: 2
    },
    {
        question: "What is the liability of a sole proprietor?",
        options: ["Limited to capital invested", "Unlimited personal liability", "Limited liability", "None of the above"],
        answer: 1
    },
    {
        question: "Which of the following is not a factor of production?",
        options: ["Land", "Labor", "Capital", "Marketing"],
        answer: 3
    },
    {
        question: "What is meant by 'market segmentation'?",
        options: ["Dividing a market into distinct groups", "Selling products in bulk", "Pricing products higher", "Advertising to all customers"],
        answer: 0
    },
    {
        question: "Which of the following systems helps companies administer research, design, and product management?",
        options: ["Application Platform", "Customer Relationship Management (CRM)", "Enterprise Solution", "Product Lifecycle Management (PLM)"],
        answer: 3
    },
    {
        question: "What is the highest organizational level in SAP ERP?",
        options: ["Vendor", "Client", "Material Master", "Plant"],
        answer: 1
    },
    {
        question: "How many company codes can a plant belong to in SAP?",
        options: ["One", "Two", "Three", "Any number"],
        answer: 0
    },
    {
        question: "Which of the following is used to represent the structure of an enterprise?",
        options: ["Organizational Data", "Project Management", "Client", "Plant"],
        answer: 0
    },
    {
        question: "Which organizational level is associated with the method used to distribute materials to customers?",
        options: ["Sales organization", "Sales area", "Distribution channel", "Sales group"],
        answer: 2
    },
    {
        question: "Which of the following is NOT a key step in the fulfillment process?",
        options: ["Sales order processing", "Inventory sourcing", "Shipping", "Invoice verification", "Pre-sales activity"],
        answer: 3
    },
    {
        question: "What document is NOT created during the billing step if profitability analysis is active?",
        options: ["Invoice", "FI document", "Material document", "CO document"],
        answer: 3
    },
    {
        question: "Which of the following statements regarding customer master data is NOT true?",
        options: ["Contains data needed to make postings in FI", "Valid for a specific sales area", "Includes data stored at client level", "Includes data needed to make postings in CO"],
        answer: 3
    },
    {
        question: "What is the term for an organizational element that performs multiple functions relevant to several processes?",
        options: ["Warehouse", "Procurement", "Plant", "Fulfillment"],
        answer: 2
    },
    {
        question: "Which of the following is NOT a characteristic of a successful entrepreneur?",
        options: ["Risk-taking ability", "Lack of planning", "Innovation", "Leadership skills"],
        answer: 1
    },
    {
        question: "Which of the following is a key advantage of a sole proprietorship?",
        options: ["Limited liability", "Easy to start and manage", "Unlimited capital", "Shared decision making"],
        answer: 1
    },
    {
        question: "What does SWOT analysis stand for?",
        options: ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Work, Organization, Targets", "Strategy, Work, Objectives, Tactics", "Strengths, Work, Operations, Targets"],
        answer: 0
    },
    {
        question: "Which financial statement shows a company’s assets, liabilities, and equity at a specific point in time?",
        options: ["Income statement", "Balance sheet", "Cash flow statement", "Statement of retained earnings"],
        answer: 1
    },
    {
        question: "What is 'market segmentation'?",
        options: ["Dividing a market into distinct groups of buyers", "Selling products in bulk", "Advertising to all customers", "Pricing products equally"],
        answer: 0
    },
    {
        question: "Which pricing strategy involves setting prices low to enter a competitive market?",
        options: ["Price skimming", "Penetration pricing", "Cost-plus pricing", "Premium pricing"],
        answer: 1
    },
    {
        question: "What is the term for the total value of goods and services produced within a country in a year?",
        options: ["Gross Domestic Product (GDP)", "Net National Product (NNP)", "Gross National Income (GNI)", "Consumer Price Index (CPI)"],
        answer: 0
    },
    {
        question: "Which leadership style involves making decisions without consulting others?",
        options: ["Democratic", "Autocratic", "Laissez-faire", "Transformational"],
        answer: 1
    },
    {
        question: "What is the main purpose of a business plan?",
        options: ["To outline marketing strategies only", "To secure finance and guide business operations", "To list employees", "To describe competitors"],
        answer: 1
    },
    {
        question: "What is a key characteristic of a public limited company (PLC)?",
        options: ["Shares cannot be sold to the public", "Limited liability and shares traded on stock exchange", "Unlimited liability", "Owned by one person"],
        answer: 1
    },
    {
        question: "What does ‘liquidity’ refer to in finance?",
        options: ["The profitability of a company", "The ability to meet short-term obligations", "The value of assets", "The amount of debt"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a source of external finance?",
        options: ["Bank loan", "Retained earnings", "Share capital", "Venture capital"],
        answer: 1
    },
    {
        question: "What is ‘economies of scale’?",
        options: ["Cost advantages due to large-scale production", "Increased costs with production", "Government subsidies", "Price increases due to demand"],
        answer: 0
    },
    {
        question: "What is the break-even point?",
        options: ["When total costs exceed total revenue", "When total revenue equals total costs", "When profit is maximized", "When fixed costs are zero"],
        answer: 1
    },
    {
        question: "What is the function of human resource management?",
        options: ["Managing production", "Managing employee recruitment, training, and welfare", "Managing sales", "Managing finance"],
        answer: 1
    },
    {
        question: "Which of the following is a non-financial motivation method?",
        options: ["Bonuses", "Promotion", "Commission", "Salary increase"],
        answer: 1
    },
    {
        question: "What is ‘market share’?",
        options: ["Total market size", "Percentage of total sales in a market held by a company", "Number of customers", "Product price"],
        answer: 1
    },
    {
        question: "What is the principle of ‘opportunity cost’?",
        options: ["Cost of all resources used", "Value of the next best alternative foregone", "Total expenses", "Fixed costs only"],
        answer: 1
    },
    {
        question: "Which of the following is a characteristic of a monopoly?",
        options: ["Many sellers", "Single seller with high market power", "Perfect competition", "No barriers to entry"],
        answer: 1
    },
    {
        question: "What is ‘corporate social responsibility’ (CSR)?",
        options: ["Maximizing profits only", "Business ethics and social/environmental responsibility", "Avoiding taxes", "Reducing employee wages"],
        answer: 1
    },
    {
        question: "What is the ‘product life cycle’?",
        options: ["Stages a product goes through from introduction to decline", "Time taken to manufacture a product", "Product warranty period", "Marketing strategy"],
        answer: 0
    },
    {
        question: "What is ‘just-in-time’ (JIT) inventory management?",
        options: ["Holding large inventories", "Minimizing inventory by receiving goods only as needed", "Overstocking to avoid shortages", "None of the above"],
        answer: 1
    },
    {
        question: "What is the primary goal of financial management?",
        options: ["Maximize sales", "Maximize shareholder wealth", "Minimize costs", "Increase production"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a component of the marketing mix?",
        options: ["Product", "Price", "Place", "Profit"],
        answer: 3
    },
    {
        question: "What is ‘market penetration’?",
        options: ["Entering a new market with existing products", "Increasing sales of existing products in existing markets", "Developing new products", "Diversifying products"],
        answer: 1
    },
    {
        question: "What is the role of a ‘stakeholder’ in business?",
        options: ["Only shareholders who own stock", "Anyone affected by the business activities", "Only employees", "Only customers"],
        answer: 1
    },
    {
        question: "What is ‘brand equity’?",
        options: ["The value of a brand based on consumer perception", "The cost of advertising", "The number of products sold", "The price of a product"],
        answer: 0
    },
    {
        question: "What is ‘diversification’ in business strategy?",
        options: ["Selling the same product in different markets", "Expanding into new products or markets", "Reducing product range", "Merging with competitors"],
        answer: 1
    },
    {
        question: "What is the ‘balance sheet’ used for?",
        options: ["Showing company profits and losses", "Showing company assets, liabilities, and equity at a point in time", "Forecasting cash flow", "Planning marketing strategies"],
        answer: 1
    },
    {
        question: "What is a ‘joint venture’?",
        options: ["A merger of two companies", "A partnership between two businesses for a specific project", "A sole proprietorship", "A franchise"],
        answer: 1
    },
    {
        question: "What is ‘market research’?",
        options: ["Advertising products", "Collecting and analyzing data about customers and markets", "Pricing products", "Selling products"],
        answer: 1
    },
    {
        question: "Which of the following is a fixed cost?",
        options: ["Raw materials", "Rent", "Direct labor", "Commission"],
        answer: 1
    },
    {
        question: "What is ‘working capital’?",
        options: ["Total assets", "Current assets minus current liabilities", "Long-term investments", "Fixed assets"],
        answer: 1
    },
    {
        question: "What is ‘liability’ in business?",
        options: ["Assets owned by the business", "Debts and obligations owed by the business", "Owner’s equity", "Revenue"],
        answer: 1
    },
    {
        question: "What is ‘franchising’?",
        options: ["Buying a business outright", "Licensing a business model and brand from another company", "Starting a new business from scratch", "Merging two companies"],
        answer: 1
    },
    {
        question: "What is ‘corporate governance’?",
        options: ["Management of daily operations", "System of rules and processes by which a company is controlled", "Marketing strategies", "Financial accounting"],
        answer: 1
    },
    {
        question: "What is ‘economic value added’ (EVA)?",
        options: ["Net profit plus taxes", "Profit earned above the required return on capital", "Total revenue minus total costs", "Market capitalization"],
        answer: 1
    },
    {
        question: "What does ‘Porter’s Five Forces’ model analyze?",
        options: ["Marketing strategies", "Competitive forces in an industry", "Financial ratios", "Organizational structure"],
        answer: 1
    },
    {
        question: "What is ‘capital budgeting’?",
        options: ["Managing daily expenses", "Planning long-term investments and projects", "Calculating taxes", "Setting sales targets"],
        answer: 1
    },
    {
        question: "What is ‘price elasticity of demand’?",
        options: ["Change in demand due to price change", "Change in supply due to price change", "Fixed price of a product", "Cost of production"],
        answer: 0
    },
    {
        question: "What is ‘market capitalization’?",
        options: ["Total sales in a market", "Total value of a company’s outstanding shares", "Total assets of a company", "Total liabilities of a company"],
        answer: 1
    },
    {
        question: "What is ‘corporate restructuring’?",
        options: ["Changing the organizational structure to improve efficiency", "Increasing product prices", "Hiring more employees", "Expanding marketing"],
        answer: 0
    },
    {
        question: "What is ‘venture capital’?",
        options: ["Government funding", "Investment in start-ups with high growth potential", "Bank loans", "Internal financing"],
        answer: 1
    },
    {
        question: "What is ‘horizontal integration’?",
        options: ["Merging with a supplier", "Acquiring a competitor in the same industry", "Diversifying into new markets", "Outsourcing production"],
        answer: 1
    },
    {
        question: "What is ‘corporate social responsibility’ (CSR) primarily concerned with?",
        options: ["Maximizing profits only", "Ethical behavior and sustainability", "Reducing costs", "Increasing market share"],
        answer: 1
    },
    {
        question: "What is ‘lean production’?",
        options: ["Producing large inventories", "Minimizing waste and improving efficiency", "Increasing workforce", "Maximizing advertising"],
        answer: 1
    },
    {
        question: "What is ‘market saturation’?",
        options: ["When a market is fully supplied and growth slows", "When prices are very low", "When demand exceeds supply", "When new products are launched"],
        answer: 0
    },
    {
        question: "What is ‘corporate finance’?",
        options: ["Managing a company’s financial resources", "Marketing products", "Managing employees", "Production planning"],
        answer: 0
    },
    {
        question: "What is ‘brand loyalty’?",
        options: ["Customers repeatedly buying the same brand", "Changing brands frequently", "Price-based buying", "Buying the cheapest product"],
        answer: 0
    },
    {
        question: "What is ‘benchmarking’?",
        options: ["Comparing business processes and performance against best practices", "Setting sales targets", "Hiring employees", "Advertising strategies"],
        answer: 0
    },
    {
        question: "What is ‘disruptive innovation’?",
        options: ["Incremental improvements to existing products", "Innovation that creates a new market and disrupts existing ones", "Copying competitors", "Reducing costs"],
        answer: 1
    },
    {
        question: "Which business structure offers the greatest protection from personal liability?",
        options: ["Sole proprietorship", "Partnership", "Corporation", "Franchise"],
        answer: 2
    },
    {
        question: "What is the primary purpose of a mission statement?",
        options: ["To outline daily operations", "To define the company's core purpose and values", "To list financial goals", "To describe competitors"],
        answer: 1
    },
    {
        question: "Which financial ratio measures a company's ability to pay short-term obligations?",
        options: ["Debt-to-equity ratio", "Current ratio", "Return on equity", "Gross margin"],
        answer: 1
    },
    {
        question: "A market in which there are many buyers and sellers, and all products are identical is called:",
        options: ["Monopoly", "Oligopoly", "Perfect competition", "Monopolistic competition"],
        answer: 2
    },
    {
        question: "Which of the following is NOT a function of management?",
        options: ["Planning", "Organizing", "Directing", "Auditing"],
        answer: 3
    },
    {
        question: "What is the main advantage of a partnership over a sole proprietorship?",
        options: ["Easier to set up", "Shared responsibility and resources", "No legal requirements", "Unlimited liability"],
        answer: 1
    },
    {
        question: "What is the term for a business's total sales before expenses are deducted?",
        options: ["Net profit", "Gross profit", "Revenue", "Operating income"],
        answer: 2
    },
    {
        question: "Which is NOT a component of Porter's Five Forces model?",
        options: ["Threat of new entrants", "Bargaining power of suppliers", "Product life cycle", "Threat of substitutes"],
        answer: 2
    },
    {
        question: "What is the process of hiring, training, and retaining employees called?",
        options: ["Marketing", "Human resource management", "Operations", "Finance"],
        answer: 1
    },
    {
        question: "Which of the following is an intangible asset?",
        options: ["Inventory", "Machinery", "Patent", "Building"],
        answer: 2
    },
    {
        question: "The process of determining how much to charge for a product is known as:",
        options: ["Promotion", "Pricing", "Distribution", "Branding"],
        answer: 1
    },
    {
        question: "Which type of market structure is characterized by a single seller?",
        options: ["Oligopoly", "Monopoly", "Perfect competition", "Monopolistic competition"],
        answer: 1
    },
    {
        question: "A business owned by shareholders is called a:",
        options: ["Sole proprietorship", "Partnership", "Corporation", "Cooperative"],
        answer: 2
    },
    {
        question: "Which document is used to communicate the financial position of a business at a specific point in time?",
        options: ["Income statement", "Balance sheet", "Cash flow statement", "Budget"],
        answer: 1
    },
    {
        question: "What is the main goal of marketing?",
        options: ["Increase production", "Maximize profit", "Satisfy customer needs", "Reduce costs"],
        answer: 2
    },
    {
        question: "Which of the following is a source of long-term finance?",
        options: ["Trade credit", "Bank overdraft", "Debentures", "Cash sales"],
        answer: 2
    },
    {
        question: "What does 'B2B' stand for?",
        options: ["Business to Business", "Business to Buyer", "Buyer to Buyer", "Brand to Brand"],
        answer: 0
    },
    {
        question: "Which of the following is NOT a type of business environment?",
        options: ["Economic", "Technological", "Biological", "Political"],
        answer: 2
    },
    {
        question: "Which is a disadvantage of a public limited company?",
        options: ["Limited liability", "Ability to raise capital", "Complex regulations", "Continuity"],
        answer: 2
    },
    {
        question: "What is the main purpose of a business feasibility study?",
        options: ["To develop a marketing plan", "To evaluate the viability of a business idea", "To hire employees", "To register the business"],
        answer: 1
    },
    {
        question: "What is the term for the process of dividing work among employees?",
        options: ["Delegation", "Coordination", "Specialization", "Motivation"],
        answer: 0
    },
    {
        question: "Which of the following is a direct tax?",
        options: ["Sales tax", "Income tax", "Value Added Tax", "Excise duty"],
        answer: 1
    },
    {
        question: "The difference between current assets and current liabilities is known as:",
        options: ["Net worth", "Working capital", "Gross profit", "Operating income"],
        answer: 1
    },
    {
        question: "Which is NOT a traditional function of management?",
        options: ["Planning", "Organizing", "Commanding", "Auditing"],
        answer: 3
    },
    {
        question: "Which business function is responsible for obtaining raw materials?",
        options: ["Marketing", "Production", "Procurement", "Finance"],
        answer: 2
    },
    {
        question: "What is the primary function of the stock exchange?",
        options: ["Manufacturing", "Raising capital", "Trading of securities", "Exporting goods"],
        answer: 2
    },
    {
        question: "Which of the following is a characteristic of services?",
        options: ["Tangible", "Storable", "Inseparable from provider", "Homogeneous"],
        answer: 2
    },
    {
        question: "Which financial statement shows the profitability of a company over a period?",
        options: ["Balance sheet", "Income statement", "Cash flow statement", "Trial balance"],
        answer: 1
    },
    {
        question: "Which is NOT a part of the marketing mix?",
        options: ["Product", "Price", "People", "Profit"],
        answer: 3
    },
    {
        question: "What is the full form of GDP?",
        options: ["Gross Domestic Product", "General Domestic Product", "Gross Domestic Price", "General Domestic Price"],
        answer: 0
    },
    {
        question: "Which is a function of the central bank?",
        options: ["Accepting deposits", "Lending to public", "Issuing currency", "Selling goods"],
        answer: 2
    },
    {
        question: "What is the main objective of advertising?",
        options: ["Increase production", "Create awareness", "Reduce costs", "Hire employees"],
        answer: 1
    },
    {
        question: "A business owned and run by one individual is called:",
        options: ["Partnership", "Corporation", "Sole proprietorship", "Cooperative"],
        answer: 2
    },
    // 34
    {
        question: "Which of the following is NOT a source of internal recruitment?",
        options: ["Promotion", "Transfer", "Employee referrals", "Job posting"],
        answer: 2
    },
    {
        question: "What is the process of setting objectives and determining how to achieve them?",
        options: ["Organizing", "Planning", "Leading", "Controlling"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a type of organizational structure?",
        options: ["Functional", "Divisional", "Matrix", "Circular"],
        answer: 3
    },
    {
        question: "Which is NOT a benefit of e-commerce?",
        options: ["24/7 availability", "Global reach", "Immediate delivery of physical products", "Lower costs"],
        answer: 2
    },
    {
        question: "What is the main function of the World Trade Organization (WTO)?",
        options: ["Regulate global oil prices", "Promote free trade", "Provide loans to countries", "Monitor stock exchanges"],
        answer: 1
    },
    {
        question: "What is the term for the amount by which revenue from sales exceeds costs in a business?",
        options: ["Loss", "Profit", "Equity", "Dividend"],
        answer: 1
    },
    {
        question: "Which of the following is a non-monetary incentive?",
        options: ["Bonus", "Promotion", "Commission", "Profit sharing"],
        answer: 1
    },
    {
        question: "Which is NOT a type of partnership?",
        options: ["General partnership", "Limited partnership", "Joint venture", "Corporation"],
        answer: 3
    },
    {
        question: "Which is a feature of a private limited company?",
        options: ["Shares are traded on stock exchange", "Limited liability", "Unlimited liability", "Owned by government"],
        answer: 1
    },
    {
        question: "What is the primary role of an entrepreneur?",
        options: ["Managing finances", "Taking risks and starting businesses", "Supervising workers", "Auditing accounts"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a type of business ownership?",
        options: ["Sole proprietorship", "Partnership", "Corporation", "Government"],
        answer: 3
    },
    {
        question: "What is the main aim of lean manufacturing?",
        options: ["Increase inventory", "Reduce waste", "Increase costs", "Expand product line"],
        answer: 1
    },
    {
        question: "Which is NOT a function of the marketing department?",
        options: ["Market research", "Advertising", "Production", "Sales promotion"],
        answer: 2
    },
    {
        question: "What is the process of comparing business performance to industry standards?",
        options: ["Benchmarking", "Budgeting", "Auditing", "Forecasting"],
        answer: 0
    },
    {
        question: "Which is NOT a form of direct marketing?",
        options: ["Telemarketing", "Personal selling", "Billboard advertising", "Email marketing"],
        answer: 2
    },
    {
        question: "What is the main objective of corporate social responsibility (CSR)?",
        options: ["Maximize profits only", "Benefit society and environment", "Reduce taxes", "Increase sales"],
        answer: 1
    },
    {
        question: "Which law protects consumers from unfair business practices?",
        options: ["Contract law", "Consumer protection law", "Company law", "Employment law"],
        answer: 1
    },
    {
        question: "Which is NOT a source of short-term finance?",
        options: ["Bank overdraft", "Trade credit", "Debentures", "Factoring"],
        answer: 2
    },
    {
        question: "What is the term for the process of bringing a product to market and overseeing its success?",
        options: ["Product development", "Product management", "Product launch", "Product positioning"],
        answer: 1
    },
    {
        question: "Which of the following is a barrier to entry in a market?",
        options: ["Low capital requirements", "High competition", "Strong brand loyalty", "Many suppliers"],
        answer: 2
    },
    {
        question: "What is the main purpose of a business merger?",
        options: ["Increase competition", "Reduce market share", "Achieve synergies and growth", "Decrease profits"],
        answer: 2
    },
    {
        question: "Which is NOT a type of business risk?",
        options: ["Strategic risk", "Operational risk", "Financial risk", "Guaranteed risk"],
        answer: 3
    },
    {
        question: "What is the process of dividing a market based on age, gender, income, etc.?",
        options: ["Targeting", "Segmentation", "Positioning", "Branding"],
        answer: 1
    },
    {
        question: "Which is NOT a stakeholder in a business?",
        options: ["Customers", "Employees", "Competitors", "Suppliers"],
        answer: 2
    },
    {
        question: "Which is a source of equity financing?",
        options: ["Bank loan", "Issuing shares", "Trade credit", "Leasing"],
        answer: 1
    },
    {
        question: "What is the main function of the human resources department?",
        options: ["Product design", "Employee management", "Advertising", "Logistics"],
        answer: 1
    },
    {
        question: "Which is NOT a type of unemployment?",
        options: ["Frictional", "Structural", "Cyclical", "Transactional"],
        answer: 3
    },
    {
        question: "Which is NOT a method of primary market research?",
        options: ["Surveys", "Focus groups", "Observation", "Industry reports"],
        answer: 3
    },
    {
        question: "What is the main purpose of a SWOT analysis?",
        options: ["Set prices", "Identify strengths, weaknesses, opportunities, and threats", "Hire employees", "Forecast sales"],
        answer: 1
    },
    {
        question: "Which is NOT a function of production management?",
        options: ["Planning", "Scheduling", "Advertising", "Quality control"],
        answer: 2
    },
    {
        question: "What is the process of setting the price of a product based on competitors' prices?",
        options: ["Cost-plus pricing", "Competitive pricing", "Penetration pricing", "Skimming pricing"],
        answer: 1
    },
    {
        question: "Which is NOT a benefit of international trade?",
        options: ["Access to new markets", "Increased competition", "Reduced product variety", "Economies of scale"],
        answer: 2
    },
    {
        question: "What is the main aim of diversification in business?",
        options: ["Reduce risk", "Increase dependence on one product", "Decrease market share", "Reduce profits"],
        answer: 0
    },
    {
        question: "Which is NOT a type of innovation?",
        options: ["Product innovation", "Process innovation", "Market innovation", "Routine innovation"],
        answer: 3
    },
    {
        question: "Which is a function of financial management?",
        options: ["Inventory control", "Raising capital", "Market research", "Recruitment"],
        answer: 1
    },
    {
        question: "Which is NOT a type of business integration?",
        options: ["Horizontal", "Vertical", "Diagonal", "Conglomerate"],
        answer: 2
    },
    {
        question: "Which is a feature of monopolistic competition?",
        options: ["Single seller", "Identical products", "Product differentiation", "No entry barriers"],
        answer: 2
    },
    {
        question: "What is the main purpose of a business incubator?",
        options: ["Increase profits", "Support start-ups with resources and mentoring", "Expand market share", "Reduce costs"],
        answer: 1
    },
    {
        question: "Which is NOT a function of logistics?",
        options: ["Warehousing", "Transportation", "Advertising", "Inventory management"],
        answer: 2
    },
    {
        question: "Which is a characteristic of a successful entrepreneur?",
        options: ["Risk aversion", "Innovativeness", "Inflexibility", "Dependence"],
        answer: 1
    },
    {
        question: "Which is NOT a type of business combination?",
        options: ["Merger", "Acquisition", "Joint venture", "Liquidation"],
        answer: 3
    },
    {
        question: "Which is a function of the purchasing department?",
        options: ["Product design", "Buying raw materials", "Sales forecasting", "Advertising"],
        answer: 1
    },
    {
        question: "Which is NOT a method of sales promotion?",
        options: ["Discounts", "Coupons", "Personal selling", "Loyalty programs"],
        answer: 2
    },
    {
        question: "Which is a disadvantage of debt financing?",
        options: ["Loss of ownership", "Interest payments", "Dilution of control", "No repayment required"],
        answer: 1
    },
    {
        question: "Which is NOT a part of the external business environment?",
        options: ["Legal", "Technological", "Cultural", "Inventory"],
        answer: 3
    },
    {
        question: "Which is a function of the finance department?",
        options: ["Recruitment", "Raising capital", "Product design", "Market research"],
        answer: 1
    },
    {
        question: "Which is NOT a type of market structure?",
        options: ["Monopoly", "Oligopoly", "Perfect competition", "Duopoly"],
        answer: 3
    },
    {
        question: "What is the main purpose of a business audit?",
        options: ["Increase sales", "Verify accuracy of financial records", "Hire employees", "Launch new products"],
        answer: 1
    },
    {
        question: "Which is NOT a type of business merger?",
        options: ["Horizontal", "Vertical", "Conglomerate", "Circular"],
        answer: 3
    },
    {
        question: "Which is a function of the operations department?",
        options: ["Product manufacturing", "Sales promotion", "Advertising", "Market research"],
        answer: 0
    },
    {
        question: "Which is NOT a benefit of franchising?",
        options: ["Brand recognition", "Support from franchisor", "High start-up costs", "Established business model"],
        answer: 2
    },
    {
        question: "Which is NOT a type of leadership style?",
        options: ["Autocratic", "Democratic", "Laissez-faire", "Transactional"],
        answer: 3
    },
    {
        question: "Which is a feature of a cooperative society?",
        options: ["Profit maximization", "One member, one vote", "Unlimited liability", "Owned by government"],
        answer: 1
    },
    {
        question: "Which is NOT a function of the sales department?",
        options: ["Selling products", "Customer relationship management", "Inventory management", "Market research"],
        answer: 2
    },
    {
        question: "Which is a characteristic of a public corporation?",
        options: ["Owned by private individuals", "Shares traded on stock exchange", "Unlimited liability", "No legal existence"],
        answer: 1
    },
    {
        question: "Which financial metric measures the profitability of a company relative to shareholder equity?",
        options: ["Return on Assets (ROA)", "Return on Equity (ROE)", "Net Profit Margin", "Current Ratio"],
        answer: 1
    },
    {
        question: "Which international agreement governs intellectual property rights globally?",
        options: ["NAFTA", "WTO", "TRIPS", "GATT"],
        answer: 2
    },
    {
        question: "What is the main objective of Six Sigma methodology?",
        options: ["Increase product variety", "Reduce process variation and defects", "Expand into new markets", "Increase employee turnover"],
        answer: 1
    },
    {
        question: "Which of the following is a key feature of a leveraged buyout (LBO)?",
        options: ["Use of significant debt to acquire a company", "Government subsidy", "Issuing new shares", "Merging with a competitor"],
        answer: 0
    },
    {
        question: "In corporate finance, what does the Modigliani-Miller theorem state (under certain conditions)?",
        options: ["Dividend policy is irrelevant", "Capital structure is irrelevant", "Debt is always better than equity", "Equity is always better than debt"],
        answer: 1
    },
    {
        question: "Which financial instrument is used to hedge against currency risk?",
        options: ["Stock options", "Forward contracts", "Commercial paper", "Convertible bonds"],
        answer: 1
    },
    {
        question: "What is the primary purpose of a poison pill strategy?",
        options: ["Increase share price", "Prevent hostile takeovers", "Reduce taxes", "Expand into new markets"],
        answer: 1
    },
    {
        question: "Which method is commonly used for valuing a company based on its future cash flows?",
        options: ["Book value method", "Discounted Cash Flow (DCF)", "Market capitalization", "Dividend yield"],
        answer: 1
    },
    {
        question: "Which accounting principle requires expenses to be matched with revenues?",
        options: ["Consistency principle", "Matching principle", "Prudence principle", "Cost principle"],
        answer: 1
    },
    {
        question: "Which of the following best describes 'Kaizen'?",
        options: ["Large-scale innovation", "Continuous improvement", "Cost-cutting", "Mergers and acquisitions"],
        answer: 1
    },
    {
        question: "Which financial ratio is most useful for assessing a company's long-term solvency?",
        options: ["Current ratio", "Debt-to-equity ratio", "Gross margin", "Inventory turnover"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a typical stage of the product life cycle?",
        options: ["Introduction", "Growth", "Stagnation", "Decline"],
        answer: 2
    },
    {
        question: "What is the main difference between a merger and an acquisition?",
        options: ["Mergers are always friendly, acquisitions are always hostile", "In a merger, two companies combine as equals; in an acquisition, one company absorbs another", "There is no legal difference", "Mergers only occur in the public sector"],
        answer: 1
    },
    {
        question: "What is the primary goal of Basel III regulations?",
        options: ["Increase bank profitability", "Strengthen regulation, supervision, and risk management within the banking sector", "Promote international trade", "Reduce taxes on banks"],
        answer: 1
    },
    {
        question: "Which pricing strategy involves charging different prices to different customers for the same product?",
        options: ["Penetration pricing", "Price skimming", "Dynamic pricing", "Cost-plus pricing"],
        answer: 2
    },
    {
        question: "What is the main purpose of an Initial Public Offering (IPO)?",
        options: ["To merge with another company", "To raise capital by offering shares to the public", "To buy back shares", "To pay dividends"],
        answer: 1
    },
    {
        question: "Which of the following is a characteristic of a 'blue ocean' strategy?",
        options: ["Compete in existing market space", "Create uncontested market space", "Focus on cost leadership only", "Emphasize incremental improvements"],
        answer: 1
    },
    {
        question: "Which financial statement reports a company's financial performance over a specific period?",
        options: ["Balance sheet", "Income statement", "Cash flow statement", "Statement of retained earnings"],
        answer: 1
    },
    {
        question: "Which of the following is an example of a derivative security?",
        options: ["Common stock", "Bond", "Option", "Certificate of deposit"],
        answer: 2
    },
    {
        question: "Which term refers to the risk that a borrower will default on a loan?",
        options: ["Market risk", "Credit risk", "Liquidity risk", "Operational risk"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a component of Michael Porter's Value Chain?",
        options: ["Inbound logistics", "Operations", "Marketing & sales", "Market capitalization"],
        answer: 3
    },
    {
        question: "Which type of merger occurs between companies in unrelated business activities?",
        options: ["Horizontal merger", "Vertical merger", "Conglomerate merger", "Market extension merger"],
        answer: 2
    },
    {
        question: "Which of the following is an example of a regressive tax?",
        options: ["Income tax", "Sales tax", "Property tax", "Corporate tax"],
        answer: 1
    },
    {
        question: "Which financial concept describes the reduction in value of an asset over time?",
        options: ["Appreciation", "Depreciation", "Amortization", "Capital gain"],
        answer: 1
    },
    {
        question: "Which document is used to legally transfer ownership of shares?",
        options: ["Share certificate", "Stock transfer form", "Dividend voucher", "Prospectus"],
        answer: 1
    },
    {
        question: "Which of the following is a key benefit of adopting Enterprise Resource Planning (ERP) systems?",
        options: ["Increased data silos", "Improved integration of business processes", "Reduced transparency", "Higher manual errors"],
        answer: 1
    },
    {
        question: "Which term refers to the process of determining the present value of a future amount?",
        options: ["Compounding", "Discounting", "Amortizing", "Capitalizing"],
        answer: 1
    },
    {
        question: "What is the primary purpose of a non-compete clause in employment contracts?",
        options: ["Increase salary", "Restrict employees from joining competitors after leaving", "Guarantee promotion", "Reduce working hours"],
        answer: 1
    },
    {
        question: "Which financial instrument is typically used for short-term borrowing by corporations?",
        options: ["Commercial paper", "Debenture", "Preferred stock", "Mortgage bond"],
        answer: 0
    },
    {
        question: "Which leadership theory emphasizes the fit between leadership style and the situation?",
        options: ["Trait theory", "Contingency theory", "Behavioral theory", "Transformational theory"],
        answer: 1
    }
];
const storageKey = "usedSportsIndices";

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

let usedIndices = [];

function loadUsedIndices() {
    const data = localStorage.getItem(storageKey);
    if (data) usedIndices = JSON.parse(data);
    else usedIndices = [];
}

function saveUsedIndices() {
    localStorage.setItem(storageKey, JSON.stringify(usedIndices));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    loadUsedIndices();
    let availableIndices = [];
    for (let i = 0; i < questions.length; i++) {
        if (!usedIndices.includes(i)) availableIndices.push(i);
    }
    if (availableIndices.length < QUESTIONS_PER_ROUND) {
        usedIndices = [];
        availableIndices = Array.from({ length: questions.length }, (_, i) => i);
    }
    shuffle(availableIndices);
    currentQuestions = availableIndices.slice(0, QUESTIONS_PER_ROUND).map(i => ({ ...questions[i], index: i }));
    currentQuestionIndex = 0;
    score = 0;
    coins = 0;
    usedIndices = usedIndices.concat(currentQuestions.map(q => q.index));
    saveUsedIndices();
    showQuestion();
}

function showQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1} of ${QUESTIONS_PER_ROUND}`;
    document.getElementById('question').textContent = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className = 'option-btn';
        btn.onclick = () => selectOption(idx);
        optionsDiv.appendChild(btn);
    });
    document.getElementById('next-btn').disabled = true;
}

const optionButtons = document.querySelectorAll('.option-btn');
optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        optionButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});
document.getElementById('next-btn').disabled = true;

function selectOption(selectedIdx) {
    const q = currentQuestions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.answer) btn.classList.add('correct');
        if (idx === selectedIdx && idx !== q.answer) btn.classList.add('incorrect');
    });
    if (selectedIdx === q.answer) {
        score++;
        coins += 10;
    }
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < QUESTIONS_PER_ROUND) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'flex';
    document.getElementById('score').textContent = `Your Score: ${score} / ${QUESTIONS_PER_ROUND}`;
    document.getElementById('coins').textContent = `Coins earned: ${coins}`;
}

function restartQuiz() {
    loadUsedIndices();
    if (usedIndices.length >= QUESTIONS_PER_ROUND) {
        usedIndices.splice(-QUESTIONS_PER_ROUND, QUESTIONS_PER_ROUND);
        saveUsedIndices();
    }
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    startQuiz();
}

window.onload = startQuiz;