export async function hello(event) {
    console.log(`Event:${JSON.stringify((event))}`)
    return {
        message: 'Go Serverless v3! Your function executed successfully!',
        input: event,
    };
}