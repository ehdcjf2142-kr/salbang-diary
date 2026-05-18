import { getCollection } from 'astro:content';

/** 기록 목록에 포함할 최초 날짜 (이 날짜 포함, 이후만 표시) */
export const RECORDS_SINCE = new Date('2026-05-10');

export async function getRecordPosts() {
	const posts = await getCollection('posts');
	return posts
		.filter((post) => post.data.date >= RECORDS_SINCE)
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatPostDate(d: Date) {
	return new Intl.DateTimeFormat('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'short',
	}).format(d);
}
