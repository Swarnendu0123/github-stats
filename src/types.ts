export type Issue = {
    title: string;
    url: string;
    openedBy: string;
    issueLabel: string[];
    status: "open" | "closed";
};


export type PullRequest = {
    title: string;
    url: string;
    openedBy: string;
    issueLabel: string[];
    status: "open" | "closed" | "merged";
};
