
export default class Adapter {
    loader;
    reader;
    config;
    constructor(loader, config) {
        this.loader = loader;
        this.config = config;
    }

    public async upload(): Promise<any> {
        const value = await this.loader.file;
        console.log(value);
        return this.read( value);
    }

    read(file): any {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve({ default: reader.result });
            };

            reader.onerror =  (error) => {
                reject(error);
            };

            reader.onabort =  ()  => {
                reject();
            };
            reader.readAsDataURL(file);
        });
    }

    abort(): void {
        if (this.reader) {
            this.reader.abort();
        }
    }
}

