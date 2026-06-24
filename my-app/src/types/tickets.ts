export type StackTicketProps = {
    text: string
}

export type ProjectCardType = {
    "name" : string;
    "description" : string;
    "image" :string;
    "stack" : Array<string>;
    "link": string;
    "DeployLink"?: string;
    "comments"?: string;
    "DocumentationLink"?: string;
}