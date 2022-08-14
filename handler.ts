export async function hello(event,context) {
    console.log(`Event:${JSON.stringify((event))}, Context:${JSON.stringify(context)}`)
    return {
        id:1,
        title: "title1"
    };
}