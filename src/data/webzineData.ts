import { Writer, Article, Issue } from '../types';

export const WRITERS: Writer[] = [
  {
    id: 'writer-kim',
    name: '김수인',
    englishName: 'Suin Kim',
    role: 'Writer / Photographer',
    bio: '빛과 여백 사이에서 마주하는 도시의 무늬를 기록합니다. 카메라와 만년필을 품고 계절의 가장자리를 천천히 걷습니다.',
    philosophy: '사진은 대상을 소유하는 것이 아니라, 빛이 머무는 찰나에 조용히 경청하는 일이다.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    location: 'Seoul & Gangneung',
    worksCount: 14
  },
  {
    id: 'writer-lee',
    name: '박수영',
    englishName: 'Sooyoung Park',
    role: 'Writer / Designer',
    bio: '사물이 지닌 비례와 공간의 침묵에 대해 씁니다. 손에 만져지는 텍스처와 비워냄으로써 비로소 차오르는 조형미를 탐구합니다.',
    philosophy: '좋은 디자인은 말을 많이 하지 않는다. 단지 사람이 머물 수 있는 적정한 여백을 남길 뿐이다.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    location: 'Seoul',
    worksCount: 12
  },
  {
    id: 'writer-park',
    name: '신민건',
    englishName: 'Mingeon Shin',
    role: 'Writer / Editor',
    bio: '오래된 활자와 서가에서 건져 올린 문장들을 갈무리합니다. 빠르게 흘러가는 시대 속에서 삶의 보폭을 늦추는 행간의 미학을 나눕니다.',
    philosophy: '문장은 시간을 박제하지 않는다. 다만 읽는 사람의 마음속에서 다른 속도로 다시 흐르기 시작할 뿐이다.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    location: 'Paju Book City',
    worksCount: 15
  },
  {
    id: 'writer-choi',
    name: '박현준',
    englishName: 'Hyunjun Park',
    role: 'Writer / Essayist',
    bio: '일상의 사소한 틈새에서 발생하는 감정의 미세한 파동을 산문으로 적습니다. 말로 다 전하지 못한 채 남겨진 잔잔한 온기를 찾아다닙니다.',
    philosophy: '가장 내밀한 고백이 때로는 가장 멀리 닿는 법이다. 말하지 않은 침묵 속에 진짜 이야기가 산다.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    location: 'Jeju & Seoul',
    worksCount: 11
  }
];

export const ISSUES: Issue[] = [
  {
    id: '2026-09',
    year: 2026,
    month: 'SEPTEMBER',
    monthNumber: 9,
    monthKorean: '9월호',
    themeTitle: '우리가 이번 달에 발견한 것들',
    themeSubtext: '가을의 초입, 서늘해진 공기 속에서 조용히 모습을 드러낸 사소하고도 소중한 결들.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    editorNote: '낮의 열기가 물러가고 창문을 열어두는 시간이 길어졌습니다. 바깥의 소음이 잦아들 무렵, 우리 네 명의 작가는 각자의 자리에서 놓치기 쉬웠던 일상의 침묵과 마주했습니다.',
    articleIds: ['art-2026-09-01', 'art-2026-09-02', 'art-2026-09-03', 'art-2026-09-04']
  },
  {
    id: '2026-08',
    year: 2026,
    month: 'AUGUST',
    monthNumber: 8,
    monthKorean: '8월호',
    themeTitle: '기억의 윤곽',
    themeSubtext: '한낮의 뙤약볕 뒤로 길게 늘어지던 그림자, 희미해져 가는 지난 계절의 선명한 조각들.',
    coverImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80',
    editorNote: '여름의 절정에서 우리는 기억을 반추했습니다. 뜨거웠던 것들은 이내 식어가지만, 남겨진 흔적은 저마다의 윤곽을 품고 오래도록 머뭅니다.',
    articleIds: ['art-2026-08-01', 'art-2026-08-02', 'art-2026-08-03', 'art-2026-08-04']
  },
  {
    id: '2026-07',
    year: 2026,
    month: 'JULY',
    monthNumber: 7,
    monthKorean: '7월호',
    themeTitle: '여름의 그늘',
    themeSubtext: '무더위 속에서도 서늘한 쉼을 내어주는 나무 밑, 녹음 짙은 골목의 안식처.',
    coverImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80',
    editorNote: '빛이 강할수록 그늘은 깊어집니다. 맹렬한 햇살을 피해 찾아든 나무 그늘 아래에서 나눈 작은 문장들입니다.',
    articleIds: ['art-2026-07-01', 'art-2026-07-02', 'art-2026-07-03', 'art-2026-07-04']
  },
  {
    id: '2026-06',
    year: 2026,
    month: 'JUNE',
    monthNumber: 6,
    monthKorean: '6월호',
    themeTitle: '비 갠 뒤의 채도',
    themeSubtext: '젖은 아스팔트와 잎사귀 위로 맺힌 투명한 물방울, 선명해진 세상의 색채.',
    coverImage: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1600&q=80',
    editorNote: '비는 지상의 먼지를 씻어내고 본래의 색을 복원합니다. 비 갠 후 정오의 청명함을 종이에 담았습니다.',
    articleIds: ['art-2026-06-01', 'art-2026-06-02', 'art-2026-06-03', 'art-2026-06-04']
  },
  {
    id: '2026-05',
    year: 2026,
    month: 'MAY',
    monthNumber: 5,
    monthKorean: '5월호',
    themeTitle: '바람이 머물다 간 자리',
    themeSubtext: '가장 찬란한 연초록 잎새를 흔들고 떠난 초여름의 전령.',
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80',
    editorNote: '계절이 바뀌는 찰나, 온몸으로 스쳐 지나가는 바람의 결을 적어 내려간 5월호입니다.',
    articleIds: []
  },
  {
    id: '2026-04',
    year: 2026,
    month: 'APRIL',
    monthNumber: 4,
    monthKorean: '4월호',
    themeTitle: '돋아나는 문장들',
    themeSubtext: '얼어붙었던 땅을 뚫고 올라오는 작은 싹처럼 움트는 새 생각들.',
    coverImage: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1600&q=80',
    editorNote: '완연한 봄, 잊고 있던 설렘과 함께 새로 시작된 사유의 기록입니다.',
    articleIds: []
  },
  {
    id: '2026-03',
    year: 2026,
    month: 'MARCH',
    monthNumber: 3,
    monthKorean: '3월호',
    themeTitle: '경계에 서 있는 사람',
    themeSubtext: '겨울의 끝과 봄의 시작 그 어름에서 망설이는 우리 모두의 시선.',
    coverImage: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=80',
    editorNote: '계절의 경계에서 서성이는 일은 언제나 두렵지만 아름답습니다.',
    articleIds: []
  },
  {
    id: '2026-02',
    year: 2026,
    month: 'FEBRUARY',
    monthNumber: 2,
    monthKorean: '2월호',
    themeTitle: '늦겨울의 서정',
    themeSubtext: '눈이 녹아내린 자리마다 고요히 번져가는 흙냄새와 침묵.',
    coverImage: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1600&q=80',
    editorNote: '가장 짧은 달, 가장 깊은 침묵을 응시한 네 편의 글입니다.',
    articleIds: []
  },
  {
    id: '2026-01',
    year: 2026,
    month: 'JANUARY',
    monthNumber: 1,
    monthKorean: '1월호',
    themeTitle: '새로운 시작의 백지',
    themeSubtext: '아무것도 쓰이지 않은 하얀 눈밭을 첫 발자국으로 채우는 마음.',
    coverImage: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1600&q=80',
    editorNote: '한 해의 첫 페이지를 열며, 순백의 마음으로 건네는 이야기.',
    articleIds: []
  },
  // 2025 Archive
  {
    id: '2025-12',
    year: 2025,
    month: 'DECEMBER',
    monthNumber: 12,
    monthKorean: '12월호',
    themeTitle: '한 해의 마침표',
    themeSubtext: '서로의 온도를 나누며 지나온 열두 달을 배웅하는 따뜻한 시선.',
    coverImage: 'https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?auto=format&fit=crop&w=1600&q=80',
    editorNote: '지난 한 해 동안 함께해 준 독자 여러분에게 띄우는 감사의 편지.',
    articleIds: []
  },
  {
    id: '2025-11',
    year: 2025,
    month: 'NOVEMBER',
    monthNumber: 11,
    monthKorean: '11월호',
    themeTitle: '느린 산책자의 시선',
    themeSubtext: '낙엽 밟는 소리만이 귓전을 맴도는 고요한 늦가을의 오후.',
    coverImage: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1600&q=80',
    editorNote: '발걸음을 늦추면 비로소 보이기 시작하는 계절의 뒷모습입니다.',
    articleIds: []
  }
];

export const ARTICLES: Article[] = [
  // 2026-09 Articles
  {
    id: 'art-2026-09-01',
    issueId: '2026-09',
    issueNumber: '01',
    title: '그림자가 머무는 오후의 서재',
    subtitle: '빛의 각도가 낮아질 때 드러나는 사적인 공간의 결',
    authorId: 'writer-kim',
    authorName: '김수인',
    authorRole: 'Writer / Photographer',
    coverImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.09',
    readingTime: '6분 소요',
    tags: ['사진', '서재', '가을빛', '공간'],
    excerpt: '계절이 바뀌는 징후는 달력보다 창틀을 통과하는 햇빛의 기울기에서 먼저 감지된다. 9월의 볕은 8월의 그것보다 훨씬 낮은 자세로 방 안 깊숙이 기어든다.',
    pullQuote: '그림자는 빛이 사라진 자리가 아니라, 빛이 사물과 나눈 가장 정직한 악수의 흔적이다.',
    paragraphs: [
      '계절이 바뀌는 징후는 달력보다 창틀을 통과하는 햇빛의 기울기에서 먼저 감지된다. 9월의 볕은 8월의 그것보다 훨씬 낮은 자세로 방 안 깊숙이 기어든다. 오후 네 시가 되면, 오래된 오크 책상 위로 책장 모서리의 사선 그림자가 얇고 선명한 검은 칼날처럼 가로지른다.',
      '나는 카메라를 들어 뷰파인더에 눈을 맞춘다. 조리개를 살짝 열고 노출을 반 스톱 낮추면, 서재 구석에 놓인 낡은 도자기 잔과 몇 권의 서책이 은은한 윤곽만을 드러낸다. 눈으로 볼 때는 평범하던 것들이 빛과 그림자의 대비 속에서 본래의 부피감을 되찾는 순간이다.',
      '우리는 늘 환하고 밝은 것만을 쫓도록 훈련받아왔다. 그러나 한 사람의 내면을 이루는 견고한 방은 대체로 어둠이 완충해 주는 그늘진 모퉁이에 자리한다. 아무에게도 보여줄 필요 없는 비밀스러운 독서, 끝내 부치지 못한 편지, 오래된 필름 통에서 나는 식초 냄새 같은 것들 말이다.',
      '서재는 세상의 시선으로부터 물러선 자들의 피난처다. 9월의 서재에서 나는 다시 배운다. 빛을 온전히 이해하기 위해서는 그 빛이 드리운 긴 그림자를 먼저 가만히 응시해야 한다는 사실을.'
    ]
  },
  {
    id: 'art-2026-09-02',
    issueId: '2026-09',
    issueNumber: '02',
    title: '완전하지 않아 온전한 사물들',
    subtitle: '백자의 미세한 균열과 옻칠 그릇이 품은 시간의 품격',
    authorId: 'writer-lee',
    authorName: '박수영',
    authorRole: 'Writer / Designer',
    coverImage: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.09',
    readingTime: '5분 소요',
    tags: ['디자인', '공예', '사물', '여백'],
    excerpt: '공장에서 매끄럽게 사출된 플라스틱에는 상처가 생기면 그저 고장이지만, 흙과 나무로 빚은 물건은 상처마저 표정이 된다.',
    pullQuote: '우리가 진정 안식을 얻는 사물은 완벽을 과시하는 것이 아니라, 불완전함을 품어 안은 채 조용히 곁을 지키는 것들이다.',
    paragraphs: [
      '스튜디오 책상 한편에는 성수동 공방에서 구한 작고 굽이 삐뚤어진 백자 달항아리 잔이 놓여 있다. 흠 없는 대량 생산품의 시선으로 보면 불량품에 가까울지 모르지만, 내게는 매일 아침 손에 쥐는 가장 다정한 도구다.',
      '손가락이 닿는 곡면의 미세한 굴곡은 만든 이의 손아귀 힘과 그날 가마의 온도, 바람의 습도를 고스란히 증언한다. 공장에서 매끄럽게 사출된 플라스틱에는 상처가 생기면 그저 고장이지만, 흙과 나무로 빚은 물건은 상처마저 표정이 된다.',
      '디자이너로서 나는 종종 완벽이라는 강박에 사로잡히곤 했다. 1픽셀의 어긋남도 용납하지 않으려 화면을 확대하고, 군더더기 없는 직선만을 추구하던 시절이 있었다. 그러나 사람이 숨을 쉬고 체온을 나눌 수 있는 진짜 디자인은 언제나 약간의 허술함, 즉 ‘사람이 개입할 수 있는 틈’에서 피어난다.',
      '온전함(Wholeness)은 완벽함(Perfection)과 다르다. 결핍과 흠집을 시간이라는 퇴적으로 감싸 안을 줄 아는 사물만이 세월을 건너 우리 곁에 남는다.'
    ]
  },
  {
    id: 'art-2026-09-03',
    issueId: '2026-09',
    issueNumber: '03',
    title: '책장을 넘길 때 나는 작은 바람',
    subtitle: '종이의 결을 어루만지며 속도를 늦추는 독서의 감각',
    authorId: 'writer-park',
    authorName: '신민건',
    authorRole: 'Writer / Editor',
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.09',
    readingTime: '7분 소요',
    tags: ['문학', '책', '에디터의 시선', '속도'],
    excerpt: '스크롤을 내리는 엄지손가락의 움직임에는 촉각이 없다. 오직 차가운 유리의 매끄러움만이 손끝을 스칠 뿐이다. 그러나 종이책은 무게와 냄새, 그리고 바람을 지닌다.',
    pullQuote: '문장을 읽는다는 것은 타인의 고독한 호흡을 내 폐 속으로 조용히 들이마시는 일이다.',
    paragraphs: [
      '스크롤을 내리는 엄지손가락의 움직임에는 촉각이 없다. 오직 차가운 유리의 매끄러움만이 손끝을 스칠 뿐이다. 반면 종이책을 읽는 행위는 온몸의 감각을 일깨우는 의식에 가깝다.',
      '무거운 하드커버를 젖히고 면지를 지나 본문으로 들어설 때, 바스락거리며 일어나는 아주 작은 공기의 흔들림이 있다. 그 냄새는 숲의 나무와 잉크의 기름, 그리고 활판 인쇄기가 눌러 찍은 흑연의 잔향이다.',
      '에디터로 일하며 수많은 원고를 교정하고 덜어낸다. 좋은 글이란 결국 하고 싶은 말을 빽빽하게 채워 넣은 글이 아니라, 읽는 이가 문장과 문장 사이 쉼표에서 자신의 기억을 채워 넣을 수 있는 글이다. 문단과 문단 사이의 흰 여백은 침묵이 아니라 독자를 향한 환대의 공간이다.',
      '가을의 초입, 핸드폰의 알림을 끄고 한 권의 책을 무릎 위에 올려놓는다. 종이를 넘길 때 뺨을 스치는 그 서늘하고 은밀한 바람 한 줄기면, 오늘 하루의 소요는 충분히 가라앉는다.'
    ]
  },
  {
    id: 'art-2026-09-04',
    issueId: '2026-09',
    issueNumber: '04',
    title: '말하지 않은 것들이 남기는 온기',
    subtitle: '침묵과 여운 사이, 서로의 결을 헤아리는 대화에 관하여',
    authorId: 'writer-choi',
    authorName: '박현준',
    authorRole: 'Writer / Essayist',
    coverImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.09',
    readingTime: '5분 소요',
    tags: ['에세이', '관계', '침묵', '대화'],
    excerpt: '어떤 날은 누군가가 건넨 수많은 위로의 말보다, 묵묵히 찻잔을 채워주던 그 사람의 조용한 손짓이 더 오래 마음에 남는다.',
    pullQuote: '사랑은 설명하려 애쓰지 않을 때, 비로소 침묵의 온도로 상대방의 곁에 닿는다.',
    paragraphs: [
      '어떤 날은 누군가가 건넨 수많은 위로의 말보다, 묵묵히 찻잔을 채워주던 그 사람의 조용한 손짓이 더 오래 마음에 남는다. 우리는 종종 진심을 증명하기 위해 너무 많은 말을 낭비하곤 한다.',
      '오랜 친구와 마주 앉아 가을 저녁을 보낸 적이 있다. 각자 다른 고민과 무게를 짊어진 채 만났지만, 우리는 서로의 근황을 캐묻지 않았다. 그저 식어가는 차를 홀짝이고, 창밖으로 지나가는 사람들의 코트 깃을 바라보았을 뿐이다.',
      '그 침묵은 어색하거나 차갑지 않았다. 오히려 말이 끼어들 자리가 없을 만큼 단단하고 충만한 공기였다. 말하지 않아도 서로의 무게를 가늠하고 있다는 무언의 신뢰가 방 안을 가득 채우고 있었다.',
      '말은 편리하지만 종종 마음의 본질을 왜곡한다. 반면 말하지 않고 남겨둔 여백은 상대방의 마음에 가닿아 오래도록 식지 않는 온기가 된다. 이번 달, 나는 조금 덜 말하고 조금 더 깊이 들어보기로 한다.'
    ]
  },

  // 2026-08 Articles
  {
    id: 'art-2026-08-01',
    issueId: '2026-08',
    issueNumber: '01',
    title: '한낮의 열기와 오래된 골목',
    subtitle: '아지랑이 너머로 흐려지던 유년의 여름날',
    authorId: 'writer-kim',
    authorName: '김수인',
    authorRole: 'Writer / Photographer',
    coverImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.08',
    readingTime: '6분 소요',
    tags: ['골목', '여름', '필름', '기억'],
    excerpt: '8월의 오후 두 시, 골목길은 누구도 걸어 다니지 않아 마치 시간이 정지된 거대한 수조 같았다.',
    pullQuote: '기억은 선명한 형태가 아니라, 한여름 아지랑이처럼 찰랑이는 감각으로 남는다.',
    paragraphs: [
      '8월의 오후 두 시, 골목길은 누구도 걸어 다니지 않아 마치 시간이 정지된 거대한 수조 같았다. 뜨겁게 달궈진 시멘트 담벼락 사이로 능소화 붉은 꽃송이가 힘없이 고개를 떨구고 있었다.',
      '필름 카메라를 들고 걸을 때면 유독 오래된 벽들의 표면에 시선이 머문다. 비와 바람, 아이들의 낙서와 담쟁이덩굴이 새겨놓은 무늬들은 그 어떤 현대 건축가도 흉내 낼 수 없는 시간의 텍스처다.'
    ]
  },
  {
    id: 'art-2026-08-02',
    issueId: '2026-08',
    issueNumber: '02',
    title: '린넨의 주름과 여름의 가벼움',
    subtitle: '바람이 통하는 옷감처럼 일상의 무게를 덜어내는 법',
    authorId: 'writer-lee',
    authorName: '박수영',
    authorRole: 'Writer / Designer',
    coverImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.08',
    readingTime: '5분 소요',
    tags: ['소재', '린넨', '여름', '디자인'],
    excerpt: '자연스러운 린넨의 구김은 억지스러운 다림질보다 훨씬 아름답다. 삶도 구겨진 그대로 자연스러울 수 있다면.',
    pullQuote: '구김을 없애려 애쓰지 않는 태도에서 사물의 진정한 품위가 시작된다.',
    paragraphs: [
      '자연스러운 린넨의 구김은 억지스러운 다림질보다 훨씬 아름답다. 삶도 구겨진 그대로 자연스러울 수 있다면.',
      '옷감을 고를 때 나는 손끝에 전해지는 통기성을 가장 먼저 살핀다. 숨을 쉴 수 있는 공간이 옷에도, 하루의 시간표에도 반드시 필요하다.'
    ]
  },
  {
    id: 'art-2026-08-03',
    issueId: '2026-08',
    issueNumber: '03',
    title: '해변에 남겨둔 밑줄 친 문장',
    subtitle: '파도 소리와 함께 넘어가던 얇은 문고판 소설',
    authorId: 'writer-park',
    authorName: '신민건',
    authorRole: 'Writer / Editor',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.08',
    readingTime: '6분 소요',
    tags: ['독서', '바다', '문고판', '여름'],
    excerpt: '백사장에 앉아 책을 읽을 때 모래 알갱이가 책장 사이에 끼어드는 감촉을 좋아한다.',
    pullQuote: '파도가 밀려왔다 쓸려갈 때마다, 오래된 문장은 모래 위에 새로운 뜻을 새긴다.',
    paragraphs: [
      '백사장에 앉아 책을 읽을 때 모래 알갱이가 책장 사이에 끼어드는 감촉을 좋아한다. 그것은 이 책이 박물관의 유물이 아니라 살아있는 나의 시간 속에 존재했다는 증거이기 때문이다.'
    ]
  },
  {
    id: 'art-2026-08-04',
    issueId: '2026-08',
    issueNumber: '04',
    title: '찬물 한 잔이 건네는 다정함',
    subtitle: '가장 목마른 계절에 마주한 작은 환대',
    authorId: 'writer-choi',
    authorName: '박현준',
    authorRole: 'Writer / Essayist',
    coverImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.08',
    readingTime: '5분 소요',
    tags: ['일상', '환대', '여름', '감사'],
    excerpt: '땀 흘려 도착한 시골 정류장 구멍가게 할머니가 말없이 건네주신 살얼음 뜬 보리차 한 잔.',
    pullQuote: '거창한 배려보다 목마른 순간 건네진 투명한 유리잔 하나가 삶을 구원한다.',
    paragraphs: [
      '땀 흘려 도착한 시골 정류장 구멍가게 할머니가 말없이 건네주신 살얼음 뜬 보리차 한 잔. 그 시원함은 단지 갈증을 해소하는 것을 넘어, 지친 마음의 구석까지 적셔주었다.'
    ]
  },

  // 2026-07 Articles
  {
    id: 'art-2026-07-01',
    issueId: '2026-07',
    issueNumber: '01',
    title: '숲의 깊은 그늘을 프레임에 담다',
    subtitle: '짙푸른 녹음이 만들어내는 자연의 필터',
    authorId: 'writer-kim',
    authorName: '김수인',
    authorRole: 'Writer / Photographer',
    coverImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.07',
    readingTime: '6분 소요',
    tags: ['숲', '자연', '녹음', '사진'],
    excerpt: '원시림 깊숙한 곳에서는 태양도 제 색을 잃고 초록으로 물든다.',
    pullQuote: '나무들은 서로의 자리를 침범하지 않으면서도 온 숲을 한 덩어리의 그늘로 완성한다.',
    paragraphs: [
      '원시림 깊숙한 곳에서는 태양도 제 색을 잃고 초록으로 물든다. 셔터를 누르는 손끝이 차분해진다.'
    ]
  },
  {
    id: 'art-2026-07-02',
    issueId: '2026-07',
    issueNumber: '02',
    title: '대청마루의 서늘한 바람길',
    subtitle: '전통 가옥의 비움이 만들어낸 공기의 순환',
    authorId: 'writer-lee',
    authorName: '박수영',
    authorRole: 'Writer / Designer',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.07',
    readingTime: '5분 소요',
    tags: ['건축', '한옥', '바람길', '공간'],
    excerpt: '에어컨의 인공적인 냉기와 달리, 앞마당과 뒷마당의 기압 차이로 대청을 관통하는 바람은 살결을 어루만진다.',
    pullQuote: '공간을 비워둘 때 비로소 바람이 제 길을 찾아 흐른다.',
    paragraphs: [
      '에어컨의 인공적인 냉기와 달리, 앞마당과 뒷마당의 기압 차이로 대청을 관통하는 바람은 살결을 어루만진다.'
    ]
  },
  {
    id: 'art-2026-07-03',
    issueId: '2026-07',
    issueNumber: '03',
    title: '시인들이 사랑한 여름날의 정적',
    subtitle: '매미 소리 뒤편에 웅크린 깊은 침묵에 대하여',
    authorId: 'writer-park',
    authorName: '신민건',
    authorRole: 'Writer / Editor',
    coverImage: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.07',
    readingTime: '7분 소요',
    tags: ['시', '정적', '문학', '침묵'],
    excerpt: '소음이 극에 달할 때, 기이하게도 그 중심에는 바늘 하나 떨어져도 들릴 듯한 정적이 도사린다.',
    pullQuote: '절정의 소란 속에서만 길어 올릴 수 있는 가장 순도 높은 고요가 있다.',
    paragraphs: [
      '소음이 극에 달할 때, 기이하게도 그 중심에는 바늘 하나 떨어져도 들릴 듯한 정적이 도사린다.'
    ]
  },
  {
    id: 'art-2026-07-04',
    issueId: '2026-07',
    issueNumber: '04',
    title: '서로의 그늘이 되어주는 일',
    subtitle: '뜨거운 계절을 건너는 다정한 동행',
    authorId: 'writer-choi',
    authorName: '박현준',
    authorRole: 'Writer / Essayist',
    coverImage: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    publishedDate: '2026.07',
    readingTime: '5분 소요',
    tags: ['관계', '동행', '마음', '그늘'],
    excerpt: '누군가의 우산이 되어주지 못할지라도, 뙤약볕 아래 반 보의 그늘이 되어줄 수 있다면.',
    pullQuote: '우리는 서로의 그늘 안에서 비로소 숨을 고르고 다음 계절로 나아간다.',
    paragraphs: [
      '누군가의 우산이 되어주지 못할지라도, 뙤약볕 아래 반 보의 그늘이 되어줄 수 있다면.'
    ]
  }
];
