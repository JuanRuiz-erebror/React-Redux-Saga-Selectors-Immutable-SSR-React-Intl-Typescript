// default action
export default interface Action<Payload, Meta> {
    type: string
    payload?: Payload
    error?: boolean;
    meta?: Meta;
}