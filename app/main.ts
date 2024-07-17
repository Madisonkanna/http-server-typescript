import * as net from "net";

console.log("Logs from your program will appear here!");
import { Socket } from "net";
const server = net.createServer((socket: Socket) => {
	socket.on("close", () => {
		socket.end();
	})

	socket.on('data', (data) => {
		const req = data.toString();
		const path = req.split(' ')[1];
		console.log(path, 'path!!');
		let res;
		if (path === '/') {

			console.log(path, 'path!!');
			res = 'HTTP/1.1 200 OK\r\n\r\n';
		} else {
			res = 'HTTP/1.1 404 Not Found\r\n\r\n';
		}
		console.log(res, 'res');
		socket.write(res);
		socket.end();
	});



});

server.listen(4221, "localhost");

