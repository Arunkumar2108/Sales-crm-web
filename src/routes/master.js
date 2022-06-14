import Company from '../components/pages/Forms/Company'
import User from '../components/pages/Forms/User'
import Tag from '../components/pages/Forms/Tag'
import Article from '../components/pages/Forms/Articles'
import ArticleContent from '../components/pages/Forms/Articles/articlePage'
import Pipeline from '../components/pages/Forms/Pipeline'


const routes = [
    {
        path: "/company",
        component: Company,
        protectedRoute: true,
    },
    {
        path: "/user",
        component: User,
        protectedRoute: true,
    },
    {
        path: "/tag",
        component: Tag,
        protectedRoute: false,
    },
    {
        path: "/pipeline",
        component: Pipeline,
        protectedRoute: false,
    },
    {
        path: "/article",
        component: Article,
        protectedRoute: false,
    },
    {
        path: "/articleContent",
        component: ArticleContent,
        protectedRoute: false,
    },
];


export default routes;