/**
 * Writes all messages from the Killer Queen cabinet,
 * appended with a timestamp, to log.txt.
 */

import * as fs from 'fs';
import { KQStream } from '../src/KQStream';

// Change this to the IP address of the Killer Queen cabinet
const KQ_HOST = 'localhost';

const stream = new KQStream({
    log: fs.createWriteStream('log.txt')
});
stream.connect(`ws://${KQ_HOST}:12749`);