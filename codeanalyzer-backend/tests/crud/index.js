const request = require('supertest');
const Github = require('../../src/app/github');

it('Check if Repo in Backend and Database are in same status', async () => {
    let success = false;
    const dbOutput = await strapi.db.query("api::repository.repository").findMany({where : {id:176}});
    console.log("dbOutput", dbOutput[0]);

    await request(strapi.server.httpServer).get('/api/repositories/176').then((data) => {
        const parsedApiOutput = JSON.parse(data.text).data;
        if(dbOutput[0].name == parsedApiOutput.id && dbOutput[0].url == parsedApiOutput.attributes?.url){
            success = true;
            expect(success).toBeDefined();
        }
    });
});

it('Check if a Pull Request in Backend and Database are in same status', async () => {
    let success = false;
    const dbOutput = await strapi.db.query("api::pull-request.pull-request").findMany({where : {id:2326}});
    console.log("dbOutput", dbOutput[0]);

    await request(strapi.server.httpServer).get('/api/pull-requests/2326').then((data) => {
        const parsedApiOutput = JSON.parse(data.text).data;
        if(dbOutput[0].name == parsedApiOutput.id && dbOutput[0].username == parsedApiOutput.attributes?.username){
            success = true;
            expect(success).toBeDefined();
        }
    });
});

it('Check if a Commits in Backend and Database are in same status', async () => {
    let success = false;
    const dbOutput = await strapi.db.query("api::commit.commit").findMany({where : {id:5122}});
    console.log("dbOutput", dbOutput[0]);

    await request(strapi.server.httpServer).get('/api/commits/5122').then((data) => {
        const parsedApiOutput = JSON.parse(data.text).data;
        if(dbOutput[0].name == parsedApiOutput.id && dbOutput[0].message == parsedApiOutput.attributes?.message){
            success = true;
            expect(success).toBeDefined();
        }
    });
});

it('Fetch All Users', async() => {
    await request(strapi.server.httpServer).get('/api/repositories').then((data) => {
        const parsedApiOutput = JSON.parse(data.text).data;
        expect(parsedApiOutput).toBeDefined();
    });
});

it('Fetch All Branches', async() => {
    await request(strapi.server.httpServer).get('/api/branches').then((data) => {
        const parsedApiOutput = JSON.parse(data.text).data;
        expect(parsedApiOutput).toBeDefined();
    });
});


it('Fetch All Repository', async() => {
    await request(strapi.server.httpServer).get('/api/repositories').then((data) => {
        const parsedApiOutput = JSON.parse(data.text).data;
        expect(parsedApiOutput).toBeDefined();
    });
});

it('Fetch All Commits', async() => {
    await request(strapi.server.httpServer).get('/api/commits').then((data) => {
        const parsedApiOutput = JSON.parse(data.text).data;
        expect(parsedApiOutput).toBeDefined();
    });
});

it('Fetch All Contributors', async() => {
    await request(strapi.server.httpServer).get('/api/contributors').then((data) => {
        const parsedApiOutput = JSON.parse(data.text).data;
        expect(parsedApiOutput).toBeDefined();
    });
});


it('Get all the data of All Branches', async() => {
    await request(strapi.server.httpServer).get('/api/branches').then((data) => {
        const parsedApiOutput = JSON.parse(data.text).data;
        expect(parsedApiOutput).toBeDefined();
    });
});

it('Fetch all Commmited Files', async() => {
    await request(strapi.server.httpServer).get('/api/committedfiles').then((data) => {
        const parsedApiOutput = JSON.parse(data.text).data;
        expect(parsedApiOutput).toBeDefined();
    });
});

it('Fetch all Pull Requests Files', async() => {
    await request(strapi.server.httpServer).get('/api/pull-requests').then((data) => {
        const parsedApiOutput = JSON.parse(data.text).data;
        expect(parsedApiOutput).toBeDefined();
    });
});
