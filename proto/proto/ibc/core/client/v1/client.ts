// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.7
 * source: ibc/core/client/v1/client.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_2 from "../../../../google/protobuf/any";
import * as dependency_3 from "../../../../cosmos/upgrade/v1beta1/upgrade";
import * as pb_1 from "google-protobuf";
export namespace ibc.core.client.v1 {
    export class IdentifiedClientState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            client_id?: string;
            client_state?: dependency_2.google.protobuf.Any;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_id" in data && data.client_id != undefined) {
                    this.client_id = data.client_id;
                }
                if ("client_state" in data && data.client_state != undefined) {
                    this.client_state = data.client_state;
                }
            }
        }
        get client_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set client_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get client_state() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2) as dependency_2.google.protobuf.Any;
        }
        set client_state(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_client_state() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            client_id?: string;
            client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): IdentifiedClientState {
            const message = new IdentifiedClientState({});
            if (data.client_id != null) {
                message.client_id = data.client_id;
            }
            if (data.client_state != null) {
                message.client_state = dependency_2.google.protobuf.Any.fromObject(data.client_state);
            }
            return message;
        }
        toObject() {
            const data: {
                client_id?: string;
                client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            } = {};
            if (this.client_id != null) {
                data.client_id = this.client_id;
            }
            if (this.client_state != null) {
                data.client_state = this.client_state.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.client_id.length)
                writer.writeString(1, this.client_id);
            if (this.has_client_state)
                writer.writeMessage(2, this.client_state, () => this.client_state.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IdentifiedClientState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IdentifiedClientState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.client_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.client_state, () => message.client_state = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): IdentifiedClientState {
            return IdentifiedClientState.deserialize(bytes);
        }
    }
    export class ConsensusStateWithHeight extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            height?: Height;
            consensus_state?: dependency_2.google.protobuf.Any;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("height" in data && data.height != undefined) {
                    this.height = data.height;
                }
                if ("consensus_state" in data && data.consensus_state != undefined) {
                    this.consensus_state = data.consensus_state;
                }
            }
        }
        get height() {
            return pb_1.Message.getWrapperField(this, Height, 1) as Height;
        }
        set height(value: Height) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_height() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get consensus_state() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2) as dependency_2.google.protobuf.Any;
        }
        set consensus_state(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_consensus_state() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            height?: ReturnType<typeof Height.prototype.toObject>;
            consensus_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): ConsensusStateWithHeight {
            const message = new ConsensusStateWithHeight({});
            if (data.height != null) {
                message.height = Height.fromObject(data.height);
            }
            if (data.consensus_state != null) {
                message.consensus_state = dependency_2.google.protobuf.Any.fromObject(data.consensus_state);
            }
            return message;
        }
        toObject() {
            const data: {
                height?: ReturnType<typeof Height.prototype.toObject>;
                consensus_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            } = {};
            if (this.height != null) {
                data.height = this.height.toObject();
            }
            if (this.consensus_state != null) {
                data.consensus_state = this.consensus_state.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_height)
                writer.writeMessage(1, this.height, () => this.height.serialize(writer));
            if (this.has_consensus_state)
                writer.writeMessage(2, this.consensus_state, () => this.consensus_state.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConsensusStateWithHeight {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ConsensusStateWithHeight();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.height, () => message.height = Height.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.consensus_state, () => message.consensus_state = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ConsensusStateWithHeight {
            return ConsensusStateWithHeight.deserialize(bytes);
        }
    }
    export class ClientConsensusStates extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            client_id?: string;
            consensus_states?: ConsensusStateWithHeight[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_id" in data && data.client_id != undefined) {
                    this.client_id = data.client_id;
                }
                if ("consensus_states" in data && data.consensus_states != undefined) {
                    this.consensus_states = data.consensus_states;
                }
            }
        }
        get client_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set client_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get consensus_states() {
            return pb_1.Message.getRepeatedWrapperField(this, ConsensusStateWithHeight, 2) as ConsensusStateWithHeight[];
        }
        set consensus_states(value: ConsensusStateWithHeight[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            client_id?: string;
            consensus_states?: ReturnType<typeof ConsensusStateWithHeight.prototype.toObject>[];
        }): ClientConsensusStates {
            const message = new ClientConsensusStates({});
            if (data.client_id != null) {
                message.client_id = data.client_id;
            }
            if (data.consensus_states != null) {
                message.consensus_states = data.consensus_states.map(item => ConsensusStateWithHeight.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                client_id?: string;
                consensus_states?: ReturnType<typeof ConsensusStateWithHeight.prototype.toObject>[];
            } = {};
            if (this.client_id != null) {
                data.client_id = this.client_id;
            }
            if (this.consensus_states != null) {
                data.consensus_states = this.consensus_states.map((item: ConsensusStateWithHeight) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.client_id.length)
                writer.writeString(1, this.client_id);
            if (this.consensus_states.length)
                writer.writeRepeatedMessage(2, this.consensus_states, (item: ConsensusStateWithHeight) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClientConsensusStates {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientConsensusStates();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.client_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.consensus_states, () => pb_1.Message.addToRepeatedWrapperField(message, 2, ConsensusStateWithHeight.deserialize(reader), ConsensusStateWithHeight));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ClientConsensusStates {
            return ClientConsensusStates.deserialize(bytes);
        }
    }
    export class ClientUpdateProposal extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            subject_client_id?: string;
            substitute_client_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("subject_client_id" in data && data.subject_client_id != undefined) {
                    this.subject_client_id = data.subject_client_id;
                }
                if ("substitute_client_id" in data && data.substitute_client_id != undefined) {
                    this.substitute_client_id = data.substitute_client_id;
                }
            }
        }
        get title() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get subject_client_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set subject_client_id(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get substitute_client_id() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set substitute_client_id(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            subject_client_id?: string;
            substitute_client_id?: string;
        }): ClientUpdateProposal {
            const message = new ClientUpdateProposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.subject_client_id != null) {
                message.subject_client_id = data.subject_client_id;
            }
            if (data.substitute_client_id != null) {
                message.substitute_client_id = data.substitute_client_id;
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                subject_client_id?: string;
                substitute_client_id?: string;
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.subject_client_id != null) {
                data.subject_client_id = this.subject_client_id;
            }
            if (this.substitute_client_id != null) {
                data.substitute_client_id = this.substitute_client_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.title.length)
                writer.writeString(1, this.title);
            if (this.description.length)
                writer.writeString(2, this.description);
            if (this.subject_client_id.length)
                writer.writeString(3, this.subject_client_id);
            if (this.substitute_client_id.length)
                writer.writeString(4, this.substitute_client_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClientUpdateProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientUpdateProposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.title = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    case 3:
                        message.subject_client_id = reader.readString();
                        break;
                    case 4:
                        message.substitute_client_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ClientUpdateProposal {
            return ClientUpdateProposal.deserialize(bytes);
        }
    }
    export class UpgradeProposal extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            plan?: dependency_3.cosmos.upgrade.v1beta1.Plan;
            upgraded_client_state?: dependency_2.google.protobuf.Any;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("plan" in data && data.plan != undefined) {
                    this.plan = data.plan;
                }
                if ("upgraded_client_state" in data && data.upgraded_client_state != undefined) {
                    this.upgraded_client_state = data.upgraded_client_state;
                }
            }
        }
        get title() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get plan() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.upgrade.v1beta1.Plan, 3) as dependency_3.cosmos.upgrade.v1beta1.Plan;
        }
        set plan(value: dependency_3.cosmos.upgrade.v1beta1.Plan) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_plan() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get upgraded_client_state() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 4) as dependency_2.google.protobuf.Any;
        }
        set upgraded_client_state(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_upgraded_client_state() {
            return pb_1.Message.getField(this, 4) != null;
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            plan?: ReturnType<typeof dependency_3.cosmos.upgrade.v1beta1.Plan.prototype.toObject>;
            upgraded_client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): UpgradeProposal {
            const message = new UpgradeProposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.plan != null) {
                message.plan = dependency_3.cosmos.upgrade.v1beta1.Plan.fromObject(data.plan);
            }
            if (data.upgraded_client_state != null) {
                message.upgraded_client_state = dependency_2.google.protobuf.Any.fromObject(data.upgraded_client_state);
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                plan?: ReturnType<typeof dependency_3.cosmos.upgrade.v1beta1.Plan.prototype.toObject>;
                upgraded_client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.plan != null) {
                data.plan = this.plan.toObject();
            }
            if (this.upgraded_client_state != null) {
                data.upgraded_client_state = this.upgraded_client_state.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.title.length)
                writer.writeString(1, this.title);
            if (this.description.length)
                writer.writeString(2, this.description);
            if (this.has_plan)
                writer.writeMessage(3, this.plan, () => this.plan.serialize(writer));
            if (this.has_upgraded_client_state)
                writer.writeMessage(4, this.upgraded_client_state, () => this.upgraded_client_state.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UpgradeProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new UpgradeProposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.title = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.plan, () => message.plan = dependency_3.cosmos.upgrade.v1beta1.Plan.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.upgraded_client_state, () => message.upgraded_client_state = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): UpgradeProposal {
            return UpgradeProposal.deserialize(bytes);
        }
    }
    export class Height extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            revision_number?: number;
            revision_height?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("revision_number" in data && data.revision_number != undefined) {
                    this.revision_number = data.revision_number;
                }
                if ("revision_height" in data && data.revision_height != undefined) {
                    this.revision_height = data.revision_height;
                }
            }
        }
        get revision_number() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set revision_number(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get revision_height() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set revision_height(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            revision_number?: number;
            revision_height?: number;
        }): Height {
            const message = new Height({});
            if (data.revision_number != null) {
                message.revision_number = data.revision_number;
            }
            if (data.revision_height != null) {
                message.revision_height = data.revision_height;
            }
            return message;
        }
        toObject() {
            const data: {
                revision_number?: number;
                revision_height?: number;
            } = {};
            if (this.revision_number != null) {
                data.revision_number = this.revision_number;
            }
            if (this.revision_height != null) {
                data.revision_height = this.revision_height;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.revision_number != 0)
                writer.writeUint64(1, this.revision_number);
            if (this.revision_height != 0)
                writer.writeUint64(2, this.revision_height);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Height {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Height();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.revision_number = reader.readUint64();
                        break;
                    case 2:
                        message.revision_height = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Height {
            return Height.deserialize(bytes);
        }
    }
    export class Params extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            allowed_clients?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("allowed_clients" in data && data.allowed_clients != undefined) {
                    this.allowed_clients = data.allowed_clients;
                }
            }
        }
        get allowed_clients() {
            return pb_1.Message.getFieldWithDefault(this, 1, []) as string[];
        }
        set allowed_clients(value: string[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            allowed_clients?: string[];
        }): Params {
            const message = new Params({});
            if (data.allowed_clients != null) {
                message.allowed_clients = data.allowed_clients;
            }
            return message;
        }
        toObject() {
            const data: {
                allowed_clients?: string[];
            } = {};
            if (this.allowed_clients != null) {
                data.allowed_clients = this.allowed_clients;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.allowed_clients.length)
                writer.writeRepeatedString(1, this.allowed_clients);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Params {
            return Params.deserialize(bytes);
        }
    }
}
