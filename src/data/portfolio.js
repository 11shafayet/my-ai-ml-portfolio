export const personal = {
  name: 'MD Shafayetur Rahman',
  title: 'AI/ML Engineer',
  email: '11shafayet@gmail.com',
  whatsapp: '+8801638719578',
  github: 'https://github.com/11shafayet/',
  linkedin: 'https://www.linkedin.com/in/shafayetur-rahman/',
};

export const skills = [
  {
    title: 'Languages',
    color: 'blue',
    highlight: '350+ DSA problems',
    summary: 'Problem-solving foundation across systems, scripting, and modern application development.',
    items: ['C++', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'AI & ML',
    color: 'red',
    highlight: 'Real-world ML projects',
    summary: 'Practical machine learning, deep learning, NLP, computer vision, and generative AI work.',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'NLP', 'Computer Vision', 'Transformers', 'Generative AI'],
  },
  {
    title: 'Web',
    color: 'yellow',
    highlight: '2+ years MERN',
    summary: 'Frontend and backend experience building scalable, responsive MERN applications.',
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux'],
  },
  {
    title: 'Practices',
    color: 'violet',
    highlight: 'Model workflow',
    summary: 'End-to-end ML workflow habits from exploration and preprocessing to evaluation.',
    items: ['EDA', 'Feature Engineering', 'Model Evaluation', 'Data Preprocessing'],
  },
];

export const experiences = [
  {
    role: 'MERN Stack Developer',
    period: 'Easyfrontend | Belgium | Aug 2022 - Sep 2023',
    description:
      'Developed 700+ reusable and scalable sections using React, HTML, Tailwind CSS, and Bootstrap.',
    points: [
      'Reduced existing codebase size by 7% through component refactoring and best practices.',
      'Integrated 10+ third-party REST APIs for dynamic data flow.',
      'Built backend logic using NodeJS and ExpressJS, and managed databases using MongoDB.',
    ],
  },
  {
    role: 'React JS Developer',
    period: 'Staff Asia | Sylhet | Mar 2022 - July 2022',
    description:
      'Converted 80+ Figma and Adobe XD design files into pixel-perfect, responsive React JS code.',
    points: [
      'Built 30+ web pages across 3 collaborative projects.',
      'Contributed to frontend delivery from design handoff to production.',
      'Worked on responsive interfaces with production-focused implementation.',
    ],
  },

];

export const projects = [
  {
    title: 'PDF RAG Chatbot',
    summary:
      'Built an AI-powered chatbot that answers questions over uploaded PDFs using a hybrid retrieval pipeline (vector search + BM25 fusion + reranking), with page-level citations and confidence-scored, source-grounded answers.',
    stack: ['Python', 'FAISS', 'Sentence-Transformers', 'Groq', 'Streamlit'],
    metric: 'Hybrid search + reranking',
    color: 'purple',
    githubLink: 'https://github.com/11shafayet/pdf-rag-chatbot'
  },
  {
    title: 'Product Image Classifier',
    summary:
      'Built a deep learning image classifier trained on 44,288 fashion product images across 4 categories, progressing from a custom CNN to a fine-tuned ResNet18 transfer learning model.',
    stack: ['PyTorch', 'ResNet18', 'Transfer Learning'],
    metric: '99.3% validation accuracy',
    color: 'blue',
    githubLink: 'https://github.com/11shafayet/product-image-classifier'
  },
  {
    title: 'Twitter Airline Sentiment Analysis',
    summary:
      'Built a multi-class sentiment classifier on real-world airline tweets using multiple NLP baselines and recurrent models.',
    stack: ['PyTorch', 'NLP', 'LSTM', 'GRU'],
    metric: 'Baseline > recurrent models',
    color: 'red',
    githubLink: 'https://github.com/11shafayet/twitter-airline-sentiment-analysis'
  },
  {
    title: 'E-commerce Customer Churn Predictor',
    summary:
      'Developed a churn prediction system on 6,000 customers using Logistic Regression, Random Forest, and XGBoost, optimizing for recall to maximize churn detection for retention strategy.',
    stack: ['Python', 'Scikit-learn', 'XGBoost'],
    metric: '97% churn recall',
    color: 'yellow',
    githubLink: 'https://github.com/11shafayet/e-commerce_churn_predictor'
  },
  {
    title: 'House Price Prediction',
    summary:
      'Built a regression pipeline for the Kaggle "House Prices: Advanced Regression Techniques" competition, with feature engineering, log-transformed targets, and a blended XGBoost + Lasso ensemble.',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'Lasso'],
    metric: '0.1183 RMSE (Kaggle score 0.12566)',
    color: 'green',
    githubLink: 'https://github.com/11shafayet/house_price_prediction'
  },
];
