import AIModel from "./aimodel";
import Attribute from "./attribute";
import Dataset from "./dataset";
import User from "./user";

class Job {
    id: number;
    title: string;
    workingStatus: boolean = false;
    creator: User;
    currentUser: User;
    users: User[];
    attributes: Attribute[];
    aiModel: AIModel;
    referenceDataset: Dataset[];
    labelDataset: Dataset;
    labeledImages: number;
    verifiedImages: number;

    constructor(id: number, title: string, workingStatus: boolean, creator: User, currentUser: User, aiModel: AIModel, dataset: Dataset) {
        this.id = id;
        this.title = title;
        this.workingStatus = workingStatus;
        this.creator = creator;
        this.currentUser = currentUser;
        this.aiModel = aiModel;
        this.labelDataset = dataset;
    }

    addUser: (user: User) => void = (givenUser: User) => {
       this.users.push(givenUser);
    }

    addAttributes: (attribute: Attribute) => void = (attribute: Attribute) => {
        this.attributes.push(attribute);
    }

    addReferenceDataset: (dataset: Dataset) => void = (dataset: Dataset) => {
        this.referenceDataset.push(dataset);
    }


    increaseLabeledImages: () => void = () => {
        this.labeledImages++;
    }

    decreaseLabeledImages: () => void = () => {
        this.labeledImages--;
    }


    increaseVerifiedImages: () => void = () => {
        this.verifiedImages++;
    }

    decreaseVerifiedImages: () => void = () => {
        this.verifiedImages--;
    }


    getTitle: () => string = () => {
        return this.title;
    }

    getWorkingStatus: () => boolean = () => {
        return this.workingStatus;
    }

    getCreator: () => User = () => {
        return this.creator;
    }

    getCurrentUser: () => User = () => {
        return this.currentUser;
    }

    getUsers: () => User[] = () => {
        return this.users;
    }

    getNumberOfAttributes: () => number = () => {
        return this.attributes.length;
    }

    getAttributes: () => Attribute[] = () => {
        return this.attributes;
    }

    getAiModelName: () => string = () => {
        return this.aiModel.name;
    }
}