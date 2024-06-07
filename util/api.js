class LocalApi {
  constructor() {
    this.blogData = {};
  }

  initData = () => {
    this.blogData = JSON.parse(localStorage.getItem("blogData"));
    if (!this.blogData) {
      this.blogData = {
        jaewoon: {
          name: "정재운",
          desc: "귀요미 재우니의 큐티뽀짝 블로그~~^^",
          post: {
            1: {
              title: "재우니 일기 #1",
              timestamp: 1717793896017,
              content:
                "안녕하세요 일기입니다.\n 오늘은 날씨가 좋네요. \n시발 좆같은 학교. \n시험. 인생. 양파까지~~ 딴따따라단.\n 와퍼가 최고지",
              likes: ["pjm5129", "jungmini"],
            },
            2: {
              title: "재우니 일기 #2",
              timestamp: 1817793896017,
              content:
                "안녕하세요 일기입니다.\n 오늘은 날씨가 좋네요. \n시발 좆같은 학교. \n시험. 인생.시발. 야호 무야호 무우우우야아아아앙호호호호호무우우우야아아아앙호호호호호무우우우야아아아앙호호호호호무우우우야아아아앙호호호호호무우우우야아아아앙호호호호호무우우우야아아아앙호호호호호무우우우야아아아앙호호호호호무우우우야아아아앙호호호호호무우우우야아아아앙호호호호호 하ㅏㅎ하하하ㅏ.\n 참깨빵 위에 순쇠고기 패티두장 특별한 소스 양상추 치즈 피클 양파까지~~ 딴따따라단.\n 와퍼가 최고지",
              likes: [],
            },
            3: {
              title: "재우니 일기 #3",
              timestamp: 24222345296017,
              content:
                "안녕하세요 일기입니다.\n 오늘은 날씨가 좋네요. \n시발 좆같은 학교. \n시험. 인생.시발. 야호 무야호 무우우우야아아아앙호호호호호 하ㅏㅎ하하하ㅏ.\n 참깨빵 위에 순쇠고기 패티두장 특별한 소스 양상추 치즈 피클 양파까지~~ 딴따따라단.\n 와퍼가 최고지",
              likes: ["jaewoon"],
            },
          },
        },
      };
      localStorage.setItem("blogData", JSON.stringify(this.blogData));
    }
  };

  getBlogData = async (id) => {
    this.initData();
    return this.blogData[id];
  };

  getPostList = async (id) => {
    this.initData();
    return this.blogData[id].post;
  };
}

class ProductApi {
  getBlogData = async (id) => {
    return undefined;
  };
}

const Api = new LocalApi();

export default Api;