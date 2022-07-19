module.exports = {
    "/docs/": [
        "",
        {
            title: '后端',
            collapsable: true,
            children: [

                {
                    title: 'SSM',
                    collapsable: true,
                    children: [
                        'back-end/ssm',
                    ]
                },
                {
                    title: 'SpringBoot',
                    collapsable: true,
                    children: [
                        'back-end/springboot',
                    ]
                },
            ]
        },
        {
            title: '前端',
            collapsable: true,
            children: [

                {
                    title: 'Vue',
                    collapsable: true,
                    children: [
                        'front-end/vue2',
                        'front-end/vue3'
                    ]
                },
            ]
        },
        {
            title: 'Git',
            collapsable: true,
            children: [
                'git/git'
            ]
        },
    ]
}