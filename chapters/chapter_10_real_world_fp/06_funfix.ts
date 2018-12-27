import * as R from "ramda";
import { IO, Success, Failure, Either, Left, Right } from "funfix";
import fetch from "node-fetch";
import * as fs from "fs";

namespace funfix_demo_1 {

    const argsIO = IO.of(() => R.tail(R.tail(process.argv))[0]);
    const readFile = (filename: string) => IO.of(() => fs.readFileSync(filename, "utf8"));
    const stdoutWrite = (data: string) => IO.of(() => process.stdout.write(data));

    const loudCat = argsIO.chain(readFile)
        .map(R.toUpper)
        .chain(stdoutWrite);

    try {
        loudCat.run();
    } catch(e) {
        console.log(e);
    }

}

namespace funfix_demo_2 {

    interface Todo {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getTodos = IO.async<Either<Error, Todo[]>>((ec, cb) => {
        fetch(
            "https://jsonplaceholder.typicode.com/todos"
        ).then(response => {
            return response.json().then(
                (json: Todo[]) => cb(Success(Right(json)))
            )
        })
        .catch(err => cb(Failure(Left(err))));
    });

    const logTodos = getTodos.map((either) => {
        return either.map(todos => todos.map(t => console.log(t.title)));
    });

    logTodos.run();

}
