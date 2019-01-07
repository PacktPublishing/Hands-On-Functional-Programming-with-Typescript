namespace maybe_demo_1 {

    class MayBe<T> {

        public static of<TVal>(val?: TVal) {
            return new MayBe(val);
        }
    
        private _value!: T;
    
        public constructor(val?: T) {
            if (val) {
                this._value = val;
            }
        }
    
        public isNothing() {
            return (this._value === null || this._value === undefined);
        }
    
        public map<TMap>(fn: (val: T) => TMap) {
            if (this.isNothing()) {
                return new MayBe<TMap>();
            } else {
                return new MayBe<TMap>(fn(this._value));
            }
        }

        public ap<TMap>(c: MayBe<(val: T) => TMap>) {
            return c.map(fn => this.map(fn));
        }
    
    
    }
    
    interface New {
        subreddit: string;
        id: string;
        title: string;
        score: number;
        over_18: boolean;
        url: string;
        author: string;
        ups: number;
        num_comments: number;
        created_utc: number;
    }
    
    interface Response {
        kind: string;
        data: {
            modhash: string;
            whitelist_status: boolean|null;
            children: Array<{ kind: string, data: New }>;
            after: string|null;
            before: string|null;
        };
    }
    
    async function fetchNews() {
        return new Promise<MayBe<Response>>((resolve, reject) => {
            const url = "https://www.reddit.com/r/typescript/new.json";
            fetch(url)
                .then((response) => {
                    return response.json();
                }).then((json) => {
                    resolve(new MayBe(json));
                }).catch(() => {
                    resolve(new MayBe());
                });
        });
    }

    (async () => {

        const maybeOfResponse = await fetchNews();
    
        const maybeOfNews = maybeOfResponse
            .map(r => r.data)
            .map(d => d.children)
            .map(children => children.map(c => c.data));
    
        maybeOfNews.map((news) => {
            news.forEach((n) => console.log(`${n.title} - ${n.url}`));
            return news;
        });
    
    })();

}
