module.exports = {
  title: "zdoc.title",
  description: "zdoc.description",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "指南", link: "/guide/" },
      {
        text: "前端路线",
        items: [
          { text: "介绍", link: "/front/intro/" },
          { text: "模块化", link: "/front/module/" },
          { text: "工程化", link: "/front/project/" },
          { text: "gulp", link: "/front/gulp/" },
          { text: "grunt", link: "/front/grunt/" },
          { text: "webpack", link: "/front/webpack/" },
        ],
      },
      {
        text: "工具软件",
        items: [
          { text: "bash", link: "/tool/bash/" },
          { text: "vmware", link: "/tool/vmware/" },
          { text: "linux", link: "/tool/linux/" },
          { text: "bt", link: "/tool/bt/" },
        ],
      },
      { text: "插件扩展", link: "/plugin/" },
      { text: "视频教程", link: "https://www.bilibili.com/" },
      { text: "GitHub", link: "https://github.com/coffee1900/zdoc/" },
    ],

    sidebarDepth: 1, // 默认值：1
    activeHeaderLinks: true, // 默认值：true
    displayAllHeaders: false, // 默认：false
    sidebar: {
      "/guide/": [
        // 侧边栏分组
        {
          title: "指南",
          collapsable: false,
          children: [
            ["", "介绍"],
            ["start", "快速上手"],
          ],
        },
        // 侧边栏分组
        {
          title: "深入",
          collapsable: false,
          children: [
            ["front", "Front Matter"],
            ["link", "永久链接"],
          ],
        },
      ],
      "/front/webpack/": [
        // 侧边栏分组
        {
          title: "指南",
          collapsable: false,
          children: [
            ["", "是什么"],
            ["zero", "零基础"],
            ["notice", "注意事项"],
          ],
        },
        // 侧边栏分组
        {
          title: "深入",
          collapsable: false,
          children: [
            ["", "介绍"],
            ["zero", "初始化"],
            ["notice", "注意事项"],
          ],
        },
      ],
      "/tool/bash/": [
        {
          title: "指南",
          collapsable: false,
          // children: [["", "指南"]],
        },
      ],
      "/tool/vmware/": [
        // 侧边栏分组
        {
          title: "指南",
          collapsable: false,
          children: [
            ["", "下载&安装&配置"],
            ["create", "创建虚拟机"],
            ["notice", "注意事项"],
          ],
        },
      ],
      "/plugin/": [],
      "/": [],
    },

    /**
     * 侧边栏配置：多页面共用
     */
    // sidebar: [
    //   // 侧边栏分组
    //   {
    //     title: "指南",
    //     collapsable: false,
    //     // sidebarDepth: 1,
    //     children: [
    //       ["/guide/", "介绍"],
    //       ["/guide/start", "快速上手"],
    //     ],
    //   },
    //   // 侧边栏分组
    //   {
    //     title: "深入",
    //     collapsable: false,
    //     // sidebarDepth: 2,
    //     children: [
    //       ["/guide/front", "Front Matter"],
    //       ["/guide/link", "永久链接"],
    //     ],
    //   },
    // ],

    /**
     * 侧边栏配置：多页面分别配置
     */
    // sidebar: {
    //   "/guide/": [
    //     // 侧边栏分组
    //     {
    //       title: "指南",
    //       collapsable: false,
    //       // sidebarDepth: 1,
    //       children: [
    //         ["", "介绍"],
    //         ["start", "快速上手"],
    //       ],
    //     },
    //     // 侧边栏分组
    //     {
    //       title: "深入",
    //       collapsable: false,
    //       // sidebarDepth: 2,
    //       children: [
    //         ["front", "Front Matter"],
    //         ["link", "永久链接"],
    //       ],
    //     },
    //   ],

    //   "/front/": [],
    //   "/tool/": [],
    //   "/plugin/": [],
    //   "/": [],
    // },
  },
};
