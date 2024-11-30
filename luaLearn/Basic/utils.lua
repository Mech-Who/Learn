local utils = {}

function utils.printf(str, ...)
	io.write(string.format(str, ...))
end

return utils
