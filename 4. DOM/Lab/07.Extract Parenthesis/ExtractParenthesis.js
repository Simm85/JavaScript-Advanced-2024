function extract(content) {
      content = document.getElementById('content').textContent;
      const patterns = [/[\(]{1}[\w\s\d]{1,}[\)]{1}/gm, /\(|\)/g];
      return content.match(patterns[0]).map(el => el.replace(patterns[1], '')).join('; ');
}