// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.7
 * source: ibc/applications/interchain_accounts/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_2 from "../controller/v1/controller";
import * as dependency_3 from "../host/v1/host";
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.interchain_accounts.v1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            controller_genesis_state?: ControllerGenesisState;
            host_genesis_state?: HostGenesisState;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("controller_genesis_state" in data && data.controller_genesis_state != undefined) {
                    this.controller_genesis_state = data.controller_genesis_state;
                }
                if ("host_genesis_state" in data && data.host_genesis_state != undefined) {
                    this.host_genesis_state = data.host_genesis_state;
                }
            }
        }
        get controller_genesis_state() {
            return pb_1.Message.getWrapperField(this, ControllerGenesisState, 1) as ControllerGenesisState;
        }
        set controller_genesis_state(value: ControllerGenesisState) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_controller_genesis_state() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get host_genesis_state() {
            return pb_1.Message.getWrapperField(this, HostGenesisState, 2) as HostGenesisState;
        }
        set host_genesis_state(value: HostGenesisState) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_host_genesis_state() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            controller_genesis_state?: ReturnType<typeof ControllerGenesisState.prototype.toObject>;
            host_genesis_state?: ReturnType<typeof HostGenesisState.prototype.toObject>;
        }): GenesisState {
            const message = new GenesisState({});
            if (data.controller_genesis_state != null) {
                message.controller_genesis_state = ControllerGenesisState.fromObject(data.controller_genesis_state);
            }
            if (data.host_genesis_state != null) {
                message.host_genesis_state = HostGenesisState.fromObject(data.host_genesis_state);
            }
            return message;
        }
        toObject() {
            const data: {
                controller_genesis_state?: ReturnType<typeof ControllerGenesisState.prototype.toObject>;
                host_genesis_state?: ReturnType<typeof HostGenesisState.prototype.toObject>;
            } = {};
            if (this.controller_genesis_state != null) {
                data.controller_genesis_state = this.controller_genesis_state.toObject();
            }
            if (this.host_genesis_state != null) {
                data.host_genesis_state = this.host_genesis_state.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_controller_genesis_state)
                writer.writeMessage(1, this.controller_genesis_state, () => this.controller_genesis_state.serialize(writer));
            if (this.has_host_genesis_state)
                writer.writeMessage(2, this.host_genesis_state, () => this.host_genesis_state.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.controller_genesis_state, () => message.controller_genesis_state = ControllerGenesisState.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.host_genesis_state, () => message.host_genesis_state = HostGenesisState.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
    export class ControllerGenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            active_channels?: ActiveChannel[];
            interchain_accounts?: RegisteredInterchainAccount[];
            ports?: string[];
            params?: dependency_2.ibc.applications.interchain_accounts.controller.v1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("active_channels" in data && data.active_channels != undefined) {
                    this.active_channels = data.active_channels;
                }
                if ("interchain_accounts" in data && data.interchain_accounts != undefined) {
                    this.interchain_accounts = data.interchain_accounts;
                }
                if ("ports" in data && data.ports != undefined) {
                    this.ports = data.ports;
                }
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get active_channels() {
            return pb_1.Message.getRepeatedWrapperField(this, ActiveChannel, 1) as ActiveChannel[];
        }
        set active_channels(value: ActiveChannel[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get interchain_accounts() {
            return pb_1.Message.getRepeatedWrapperField(this, RegisteredInterchainAccount, 2) as RegisteredInterchainAccount[];
        }
        set interchain_accounts(value: RegisteredInterchainAccount[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get ports() {
            return pb_1.Message.getFieldWithDefault(this, 3, []) as string[];
        }
        set ports(value: string[]) {
            pb_1.Message.setField(this, 3, value);
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_2.ibc.applications.interchain_accounts.controller.v1.Params, 4) as dependency_2.ibc.applications.interchain_accounts.controller.v1.Params;
        }
        set params(value: dependency_2.ibc.applications.interchain_accounts.controller.v1.Params) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 4) != null;
        }
        static fromObject(data: {
            active_channels?: ReturnType<typeof ActiveChannel.prototype.toObject>[];
            interchain_accounts?: ReturnType<typeof RegisteredInterchainAccount.prototype.toObject>[];
            ports?: string[];
            params?: ReturnType<typeof dependency_2.ibc.applications.interchain_accounts.controller.v1.Params.prototype.toObject>;
        }): ControllerGenesisState {
            const message = new ControllerGenesisState({});
            if (data.active_channels != null) {
                message.active_channels = data.active_channels.map(item => ActiveChannel.fromObject(item));
            }
            if (data.interchain_accounts != null) {
                message.interchain_accounts = data.interchain_accounts.map(item => RegisteredInterchainAccount.fromObject(item));
            }
            if (data.ports != null) {
                message.ports = data.ports;
            }
            if (data.params != null) {
                message.params = dependency_2.ibc.applications.interchain_accounts.controller.v1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                active_channels?: ReturnType<typeof ActiveChannel.prototype.toObject>[];
                interchain_accounts?: ReturnType<typeof RegisteredInterchainAccount.prototype.toObject>[];
                ports?: string[];
                params?: ReturnType<typeof dependency_2.ibc.applications.interchain_accounts.controller.v1.Params.prototype.toObject>;
            } = {};
            if (this.active_channels != null) {
                data.active_channels = this.active_channels.map((item: ActiveChannel) => item.toObject());
            }
            if (this.interchain_accounts != null) {
                data.interchain_accounts = this.interchain_accounts.map((item: RegisteredInterchainAccount) => item.toObject());
            }
            if (this.ports != null) {
                data.ports = this.ports;
            }
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.active_channels.length)
                writer.writeRepeatedMessage(1, this.active_channels, (item: ActiveChannel) => item.serialize(writer));
            if (this.interchain_accounts.length)
                writer.writeRepeatedMessage(2, this.interchain_accounts, (item: RegisteredInterchainAccount) => item.serialize(writer));
            if (this.ports.length)
                writer.writeRepeatedString(3, this.ports);
            if (this.has_params)
                writer.writeMessage(4, this.params, () => this.params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ControllerGenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ControllerGenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.active_channels, () => pb_1.Message.addToRepeatedWrapperField(message, 1, ActiveChannel.deserialize(reader), ActiveChannel));
                        break;
                    case 2:
                        reader.readMessage(message.interchain_accounts, () => pb_1.Message.addToRepeatedWrapperField(message, 2, RegisteredInterchainAccount.deserialize(reader), RegisteredInterchainAccount));
                        break;
                    case 3:
                        pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                        break;
                    case 4:
                        reader.readMessage(message.params, () => message.params = dependency_2.ibc.applications.interchain_accounts.controller.v1.Params.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ControllerGenesisState {
            return ControllerGenesisState.deserialize(bytes);
        }
    }
    export class HostGenesisState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            active_channels?: ActiveChannel[];
            interchain_accounts?: RegisteredInterchainAccount[];
            port?: string;
            params?: dependency_3.ibc.applications.interchain_accounts.host.v1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("active_channels" in data && data.active_channels != undefined) {
                    this.active_channels = data.active_channels;
                }
                if ("interchain_accounts" in data && data.interchain_accounts != undefined) {
                    this.interchain_accounts = data.interchain_accounts;
                }
                if ("port" in data && data.port != undefined) {
                    this.port = data.port;
                }
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get active_channels() {
            return pb_1.Message.getRepeatedWrapperField(this, ActiveChannel, 1) as ActiveChannel[];
        }
        set active_channels(value: ActiveChannel[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get interchain_accounts() {
            return pb_1.Message.getRepeatedWrapperField(this, RegisteredInterchainAccount, 2) as RegisteredInterchainAccount[];
        }
        set interchain_accounts(value: RegisteredInterchainAccount[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get port() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set port(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_3.ibc.applications.interchain_accounts.host.v1.Params, 4) as dependency_3.ibc.applications.interchain_accounts.host.v1.Params;
        }
        set params(value: dependency_3.ibc.applications.interchain_accounts.host.v1.Params) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 4) != null;
        }
        static fromObject(data: {
            active_channels?: ReturnType<typeof ActiveChannel.prototype.toObject>[];
            interchain_accounts?: ReturnType<typeof RegisteredInterchainAccount.prototype.toObject>[];
            port?: string;
            params?: ReturnType<typeof dependency_3.ibc.applications.interchain_accounts.host.v1.Params.prototype.toObject>;
        }): HostGenesisState {
            const message = new HostGenesisState({});
            if (data.active_channels != null) {
                message.active_channels = data.active_channels.map(item => ActiveChannel.fromObject(item));
            }
            if (data.interchain_accounts != null) {
                message.interchain_accounts = data.interchain_accounts.map(item => RegisteredInterchainAccount.fromObject(item));
            }
            if (data.port != null) {
                message.port = data.port;
            }
            if (data.params != null) {
                message.params = dependency_3.ibc.applications.interchain_accounts.host.v1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                active_channels?: ReturnType<typeof ActiveChannel.prototype.toObject>[];
                interchain_accounts?: ReturnType<typeof RegisteredInterchainAccount.prototype.toObject>[];
                port?: string;
                params?: ReturnType<typeof dependency_3.ibc.applications.interchain_accounts.host.v1.Params.prototype.toObject>;
            } = {};
            if (this.active_channels != null) {
                data.active_channels = this.active_channels.map((item: ActiveChannel) => item.toObject());
            }
            if (this.interchain_accounts != null) {
                data.interchain_accounts = this.interchain_accounts.map((item: RegisteredInterchainAccount) => item.toObject());
            }
            if (this.port != null) {
                data.port = this.port;
            }
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.active_channels.length)
                writer.writeRepeatedMessage(1, this.active_channels, (item: ActiveChannel) => item.serialize(writer));
            if (this.interchain_accounts.length)
                writer.writeRepeatedMessage(2, this.interchain_accounts, (item: RegisteredInterchainAccount) => item.serialize(writer));
            if (this.port.length)
                writer.writeString(3, this.port);
            if (this.has_params)
                writer.writeMessage(4, this.params, () => this.params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HostGenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HostGenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.active_channels, () => pb_1.Message.addToRepeatedWrapperField(message, 1, ActiveChannel.deserialize(reader), ActiveChannel));
                        break;
                    case 2:
                        reader.readMessage(message.interchain_accounts, () => pb_1.Message.addToRepeatedWrapperField(message, 2, RegisteredInterchainAccount.deserialize(reader), RegisteredInterchainAccount));
                        break;
                    case 3:
                        message.port = reader.readString();
                        break;
                    case 4:
                        reader.readMessage(message.params, () => message.params = dependency_3.ibc.applications.interchain_accounts.host.v1.Params.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): HostGenesisState {
            return HostGenesisState.deserialize(bytes);
        }
    }
    export class ActiveChannel extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            connection_id?: string;
            port_id?: string;
            channel_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("connection_id" in data && data.connection_id != undefined) {
                    this.connection_id = data.connection_id;
                }
                if ("port_id" in data && data.port_id != undefined) {
                    this.port_id = data.port_id;
                }
                if ("channel_id" in data && data.channel_id != undefined) {
                    this.channel_id = data.channel_id;
                }
            }
        }
        get connection_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set connection_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get port_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set port_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get channel_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set channel_id(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            connection_id?: string;
            port_id?: string;
            channel_id?: string;
        }): ActiveChannel {
            const message = new ActiveChannel({});
            if (data.connection_id != null) {
                message.connection_id = data.connection_id;
            }
            if (data.port_id != null) {
                message.port_id = data.port_id;
            }
            if (data.channel_id != null) {
                message.channel_id = data.channel_id;
            }
            return message;
        }
        toObject() {
            const data: {
                connection_id?: string;
                port_id?: string;
                channel_id?: string;
            } = {};
            if (this.connection_id != null) {
                data.connection_id = this.connection_id;
            }
            if (this.port_id != null) {
                data.port_id = this.port_id;
            }
            if (this.channel_id != null) {
                data.channel_id = this.channel_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.connection_id.length)
                writer.writeString(1, this.connection_id);
            if (this.port_id.length)
                writer.writeString(2, this.port_id);
            if (this.channel_id.length)
                writer.writeString(3, this.channel_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ActiveChannel {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ActiveChannel();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.connection_id = reader.readString();
                        break;
                    case 2:
                        message.port_id = reader.readString();
                        break;
                    case 3:
                        message.channel_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ActiveChannel {
            return ActiveChannel.deserialize(bytes);
        }
    }
    export class RegisteredInterchainAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            connection_id?: string;
            port_id?: string;
            account_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("connection_id" in data && data.connection_id != undefined) {
                    this.connection_id = data.connection_id;
                }
                if ("port_id" in data && data.port_id != undefined) {
                    this.port_id = data.port_id;
                }
                if ("account_address" in data && data.account_address != undefined) {
                    this.account_address = data.account_address;
                }
            }
        }
        get connection_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set connection_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get port_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set port_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get account_address() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set account_address(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            connection_id?: string;
            port_id?: string;
            account_address?: string;
        }): RegisteredInterchainAccount {
            const message = new RegisteredInterchainAccount({});
            if (data.connection_id != null) {
                message.connection_id = data.connection_id;
            }
            if (data.port_id != null) {
                message.port_id = data.port_id;
            }
            if (data.account_address != null) {
                message.account_address = data.account_address;
            }
            return message;
        }
        toObject() {
            const data: {
                connection_id?: string;
                port_id?: string;
                account_address?: string;
            } = {};
            if (this.connection_id != null) {
                data.connection_id = this.connection_id;
            }
            if (this.port_id != null) {
                data.port_id = this.port_id;
            }
            if (this.account_address != null) {
                data.account_address = this.account_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.connection_id.length)
                writer.writeString(1, this.connection_id);
            if (this.port_id.length)
                writer.writeString(2, this.port_id);
            if (this.account_address.length)
                writer.writeString(3, this.account_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RegisteredInterchainAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RegisteredInterchainAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.connection_id = reader.readString();
                        break;
                    case 2:
                        message.port_id = reader.readString();
                        break;
                    case 3:
                        message.account_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RegisteredInterchainAccount {
            return RegisteredInterchainAccount.deserialize(bytes);
        }
    }
}
