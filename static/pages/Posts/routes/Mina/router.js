import asyncComponent from "../../../../components/AsyncComponent";

module.exports = [
    {
        path: "/posts/mina",
        component: asyncComponent(() => import("./components/Index"))
    }
];
