import { createHash, type BinaryLike } from 'crypto';

export const hash = (string: BinaryLike) => {
	return createHash('sha256').update(string).digest('hex');
};
