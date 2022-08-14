export async function hello(event,context) {
    console.log(`Event:${JSON.stringify((event))}, Context:${JSON.stringify(context)}`)
    return {
        message: 'Go Serverless v3! Your function executed successfully!',
        input: event,
    };
}