
utils = require("utils")

args = {"a", "b", "c"}
table.insert(args, "d")
table.insert(args, 5, "f")
print("Table length: "..#args)
for k, v in pairs(args) do
	print(k.." "..v)
end

for k, v in ipairs(args) do
	print(k.." "..v)
end

function call_name(name)
	print("Hello, "..name.."!")
end

--[[
	main function in this file!
]]
function main()
	local num = 10
	local name = "Shuhan Hu"
	call_name(name)
	utils.printf("Just try! num=%d, name=%s\n", num, name)
	print(os.date("%Y-%m-%d"))
end

-- exactly running scripts.
main()
