/**
 * 오픈채팅 노출: mode를 'link'로 바꾸고 url을 카카오 오픈채팅 초대 링크로 넣으면 버튼이 표시됩니다.
 * 스팸·노출을 줄이려면 'hint'만 사용하세요.
 */
export const siteConfig = {
	siteTitle: '살방살방',
	tagline:
		'안동 강변에서 매주 토요일. 남녀노소, 각자의 페이스로 걷고 뛰고, 마지막엔 함께 사진 한 장.',
	openChat: {
		mode: 'hint' as 'link' | 'hint',
		url: '',
		buttonLabel: '카카오톡 오픈채팅',
		hint: '카카오톡 오픈채팅에서 모임 이름으로 검색하거나, 공유받은 초대 링크로 들어와 주세요.',
	},
} as const;
