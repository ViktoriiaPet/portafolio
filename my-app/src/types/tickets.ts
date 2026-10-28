export type StackTicketProps = {
    text: string
}
export type WorkLayout = "featured" | "wide" | "standard";
export type ProjectCardType = {
    "name" : string;
    "description" : string;
    "image" :string;
    "stack" : Array<string>;
    "link": string;
    "DeployLink"?: string;
    "comments"?: string;
    "DocumentationLink"?: string;
    "layout":WorkLayout

}