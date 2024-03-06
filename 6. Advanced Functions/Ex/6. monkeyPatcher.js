function solution(arg) {
      this.rating = null;
      this.obfuscatedDownvotes = null;
      this.obfuscatedUpvotes = null;
      this.totalVotes = null;
      this.totalScore = null;

      const upvote = () => {
            this.upvotes++;
      }

      const downvote = () => {
            this.downvotes++;
      }

      const obfuscateVotes = () => {
            if (this.upvotes + this.downvotes > 50) {
                  const numToAdd = 0.25 * Math.max(this.downvotes, this.upvotes);
                  this.obfuscatedDownvotes = Math.ceil(this.downvotes + numToAdd);
                  this.obfuscatedUpvotes = Math.ceil(this.upvotes + numToAdd);
                  return true;
            }
            return false;
      }

      const defineRating = () => {
            this.totalScore = this.upvotes - this.downvotes;
            this.totalVotes = this.upvotes + this.downvotes;
            const percentage = (this.upvotes / this.totalVotes) * 100;

            if (percentage > 66) {
                  this.rating = 'hot';
            } else if (this.totalScore == 0 && this.totalVotes > 100) {
                  this.rating = 'controversial';
            } else if (this.totalScore < 0) {
                  this.rating = 'unpopular';
            }

            if (this.totalVotes < 10 || !this.rating) {
                  this.rating = 'new';
            }
      }

      const report = () => {
            let positiveVotes = this.upvotes;
            let negativeVotes = this.downvotes;

            if (obfuscateVotes()) {
                  positiveVotes = this.obfuscatedUpvotes;
                  negativeVotes = this.obfuscatedDownvotes;
            }

            defineRating();
            return [positiveVotes, negativeVotes, this.totalScore, this.rating];
      }

      if (arg == 'upvote') {
            upvote();
      } else if (arg == 'downvote') {
            downvote();
      } else if (arg == 'score') {
            return report();
      }
}

const post = {
      id: '3',
      author: 'emil',
      content: 'wazaaaaa',
      upvotes: 100,
      downvotes: 100
};


solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');  // [127, 127, 0, 'controversial']

for (let i = 0; i < 50; i++) {
      solution.call(post, 'downvote'); // (executed 50 times)
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(post);


var forumPost = {
      id: '1',
      author: 'pesho',
      content: 'hi guys',
      upvotes: 0,
      downvotes: 0
};

solution.call(forumPost, 'upvote');
solution.call(forumPost, 'score');
console.log(forumPost);

