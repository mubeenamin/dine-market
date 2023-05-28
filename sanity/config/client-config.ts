

const config = {
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET ,   
    apiVersion: "2023-05-26",
    token:process.env.SANITY_ACCESS_TOKEN,
    useCdn: true,
}

export default config;