/*
 * @lc app=leetcode id=208 lang=typescript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
const aCode = "a".charCodeAt(0);
class Trie {
  alphabet: (Trie | null)[];
  isExact: boolean;

  constructor(isExact: boolean = false) {
    this.alphabet = Array.from<Trie | null>({ length: 26 }).fill(null);
    this.isExact = isExact;
  }

  getIndex = (char: string) => {
    return char.charCodeAt(0) - aCode;
  };

  insert(word: string): void {
    const alphabetIndex = this.getIndex(word[0]);
    const trie = this.alphabet[alphabetIndex];

    const isExact = word.length === 1;

    if (!trie) {
      const trie = new Trie(isExact);
      const slice = word.slice(1);
      if (slice) {
        trie.insert(slice);
      }
      this.alphabet[alphabetIndex] = trie;
    } else {
      const slice = word.slice(1);
      if (slice) {
        trie.insert(slice);
      } else {
        trie.isExact = isExact;
      }
    }
  }

  search(word: string): boolean {
    if (word.length === 0) {
      return this.isExact;
    }

    const alphabetIndex = this.getIndex(word[0]);
    const child = this.alphabet[alphabetIndex];
    if (child) {
      return child.search(word.slice(1));
    } else {
      return false;
    }
  }

  startsWith(prefix: string): boolean {
    const firstCharIndex = this.getIndex(prefix[0]);

    if (prefix.length === 1) {
      return !!this.alphabet[firstCharIndex];
    }

    const child = this.alphabet[firstCharIndex];
    if (child) {
      return child.startsWith(prefix.slice(1));
    }
    return false;
  }
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
