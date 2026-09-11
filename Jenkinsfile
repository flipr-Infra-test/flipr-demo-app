@Library('ms-jenkins-global-lib') _

multipleFolderBuild(
    config: [
        domainWith: "subdomain",
        apiPath: "api",
        volumes: [uploads:[]]
    ],
    apps: [
        [
            nodeJs: [
                path: "api",
                node_version: '24',
                volumes: ["uploads:/app/uploads"]
            ]
        ],
        [
            reactJs: [
                path: "web",
                node_version: '24'
            ]
        ]
    ]
)
