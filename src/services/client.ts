import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { API_TIMEOUT, BASE_URL } from "../constants";

declare module "axios" {
	export interface AxiosRequestConfig {
		errorConfig?: {
			disableInterceptor?: (error: any) => boolean;
		};
		onConfirm?: () => void;
		onCancel?: () => void;
		onClose?: () => void;
	}
}

class Client {
	clientInstance: AxiosInstance;
	constructor() {
		this.clientInstance = axios.create({
			baseURL: BASE_URL,
			timeout: Number(API_TIMEOUT),
			headers: {}
		});
	}


	get = (args: { url: string; config?: AxiosRequestConfig<any> }) => {
		return this.clientInstance.get(args.url, args.config);
	};

	post = (args: {
		url: string;
		data?: any;
		config?: AxiosRequestConfig<any>;
	}) => {
		return this.clientInstance.post(args.url, args.data, args.config);
	};

	put = (args: {
		url: string;
		data?: any;
		config?: AxiosRequestConfig<any>;
	}) => {
		return this.clientInstance.put(args.url, args.data, args.config);
	};

	delete = (args: { url: string; config?: AxiosRequestConfig<any> }) => {
		return this.clientInstance.delete(args.url, args.config);
	};

	patch = (args: {
		url: string;
		data?: any;
		config?: AxiosRequestConfig<any>;
	}) => {
		return this.clientInstance.patch(args.url, args.data, args.config);
	};

	setToken = (token: string | undefined) => {
		this.clientInstance.defaults.headers.common.Authorization = token;
	};

	setBaseURL = (baseURL: string) => {
		this.clientInstance.defaults.baseURL = baseURL;
	};
}

export default new Client();
