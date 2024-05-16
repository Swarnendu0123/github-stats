export type Issue = {
    title: string;
    url: string;
    openedBy: string;
    issueLabel: string[];
    status: "open" | "closed";
};

