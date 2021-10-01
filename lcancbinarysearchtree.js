var lowestCommonAncestor = function(root, p, q) {
  const _max = Math.max(p.val, q.val);
        const _min = Math.min(p.val, q.val);
        while (root != null) { //setting constraints 
            if (_min > root.val) {  //interchange the root.val node on root.right node
                root = root.right; 
            } else if (_max < root.val) {  //interchange
                root = root.left;
            } else {
                return root;
            }
        }
        return null;
    }


/*
Success
Details 
Runtime: 92 ms, faster than 84.27% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
Memory Usage: 49.2 MB, less than 14.84% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
*/
