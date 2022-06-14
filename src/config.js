const config = {
    server: process.env.API_URL || "http://localhost:3001",
    graphQLAPI: process.env.GRAPHQL_API || "http://localhost:3000/graphql",
    environment: process.env.NODE_ENV || "development",
    siteURL: process.env.siteURL || 'http://localhost:8000'
};

export default config;