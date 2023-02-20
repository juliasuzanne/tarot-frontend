s = [[4, 9, 2], [3, 5, 7], [8, 1, 5]]
r = [[4, 8, 2], [4, 5, 7], [6, 1, 6]]
t = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

def formingSquare(s)
  r = 0
  c = 0

  rowsums = 0
  colsums = 0
  sum = 0

  while r < 3
    while c < 3
      sum = sum + s[r][c]
      c = c + 1
    end
    r = r + 1
    rowsums = rowsums + sum
    sum = 0
    c = 0
  end

  r = 0

  while c < 3
    while r < 3
      sum = sum + s[r][c]
      r = r + 1
    end
    c = c + 1
    colsums = colsums + sum
    sum = 0
    r = 0
  end

  cost = 45 - rowsums + 45 - colsums

  p cost
end

formingSquare(r)

formingSquare(s)

formingSquare(t)
