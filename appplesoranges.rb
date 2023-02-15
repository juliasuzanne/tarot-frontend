s = 7
t = 10
a = 4
b = 12
apples = [2, 3, -4]
oranges = [3, -2, -4]
appleCount = 0
orangeCount = 0


apples.each do |n|
  n = a + n
  if n >= s && n <= t 
    appleCount = appleCount + 1
  end
end



oranges.each do |n|
  n = b + n
  if n >= s && n <= t 
    orangeCount = orangeCount + 1
  end
end

p appleCount
p orangeCount