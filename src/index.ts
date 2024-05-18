import { Issue, PullRequest } from "./types";
const axios = require('axios');
const cheerio = require('cheerio')

export const getIssues = async (repoUrl: string, by?: string) => {
    try {
        const response = await axios.get(`${repoUrl}/issues?q=is%3Aissue+is%3Aall`);
        const $ = cheerio.load(response.data)
        const issues: Issue[] = []
        $('.js-issue-row').each((i: Number, elem: string) => {
            const title = $(elem).find('.markdown-title').text().trim();
            const url = "https://github.com" + $(elem).find('.js-navigation-open').attr('href');
            // title include "Open issues created"
            const openedBy = $(elem).find('.Link--muted').text().split("\n")[0]

            const issueLabel: string[] = []
            $(elem).find('.IssueLabel').each((i: Number, elem: string) => {
                issueLabel.push($(elem).text().trim())
            })

            let status = $(elem).find('.opened-by').text().trim()
            if (status.includes('opened')) {
                status = 'opened'
            } else {
                status = 'closed'
            }

            issues.push({
                title,
                url,
                openedBy,
                issueLabel,
                status
            });
        });
        if (by) {
            return issues.filter(issue => issue.openedBy === by)
        }
        return issues;
    } catch (error) {
        console.error(error);
    }
}


export const getPulls = async (repoUrl: string, by?: string) => {
    try {
        const response = await axios.get(`${repoUrl}/pulls?q=`);
        const $ = cheerio.load(response.data)
        const pulls: PullRequest[] = []
        $('.js-issue-row').each((i: Number, elem: string) => {
            const title = $(elem).find('.js-navigation-open').text().trim();
            const url = "https://github.com" + $(elem).find('.js-navigation-open').attr('href');
            const openedBy = $(elem).find('.Link--muted').text()
            const issueLabel: string[] = []
            $(elem).find('.IssueLabel').each((i: Number, elem: string) => {
                issueLabel.push($(elem).text().trim())
            })

            let status = $(elem).find('.opened-by').text().trim()
            if (status.includes('merged')) {
                status = 'merged'
            } else if (status.includes('closed')) {
                status = 'closed'
            } else {
                status = 'open'
            }
            pulls.push({
                title,
                url,
                openedBy,
                issueLabel,
                status
            });
        });
        if (by) {
            return pulls.filter(pull => pull.openedBy === by)
        }
        return pulls;
    } catch (error) {
        console.error(error);
    }
}

