import * as net from "net";
console.log("Logs from your program will appear here!");
import { Socket } from "net";
const server = net.createServer((socket: Socket) => {
	socket.write('HTTP/1.1 200 OK\r\n\r\nzz');
	socket.on("close", () => {
		socket.end();
	})
});

server.listen(4221, "localhost");

