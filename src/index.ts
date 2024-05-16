import { Issue } from "./types";
const axios = require('axios');
const cheerio = require('cheerio')

export const getIssues = async (repoUrl: string, by?: string) => {
    try {
        const response = await axios.get(`${repoUrl}/issues`);
        const $ = cheerio.load(response.data)
        const issues: Issue[] = []
        $('.js-issue-row').each((i: Number, elem: string) => {
            const title = $(elem).find('.js-navigation-open').text().trim();
            const url = "https://github.com" + $(elem).find('.js-navigation-open').attr('href');
            const arr = $(elem).find('.opened-by').text().trim().split(' ')
            const openedBy = arr[arr.length - 1]

            const issueLabel: string[] = []
            $(elem).find('.IssueLabel').each((i: Number, elem: string) => {
                issueLabel.push($(elem).text().trim())
            })
            issues.push({
                title,
                url,
                openedBy,
                issueLabel,
                status: "open"
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
        const response = await axios.get(`${repoUrl}/pulls`);
        const $ = cheerio.load(response.data)
        const pulls: Issue[] = []
        $('.js-issue-row').each((i: Number, elem: string) => {
            const title = $(elem).find('.js-navigation-open').text().trim();
            const url = "https://github.com" + $(elem).find('.js-navigation-open').attr('href');
            const arr = $(elem).find('.opened-by').text().trim().split(' ')
            const openedBy = arr[arr.length - 1]

            const issueLabel: string[] = []
            $(elem).find('.IssueLabel').each((i: Number, elem: string) => {
                issueLabel.push($(elem).text().trim())
            })
            pulls.push({
                title,
                url,
                openedBy,
                issueLabel,
                status: "open"
            });
            if (by) {
                return pulls.filter(pull => pull.openedBy === by)
            }
        });
        return pulls;
    } catch (error) {
        console.error(error);
    }
}

